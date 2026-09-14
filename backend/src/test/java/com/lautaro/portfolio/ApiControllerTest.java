package com.lautaro.portfolio;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(ApiController.class)
class ApiControllerTest {
    private static final String VALID_BODY = """
            {"name":"Recruiter","email":"recruiter@example.com","message":"A professional opportunity I would like to discuss with you."}
            """;

    @Autowired
    MockMvc mvc;

    @MockBean
    ContactService contactService;

    @MockBean
    ContactRateLimiter rateLimiter;

    @Test
    void healthIsPublicAndStable() throws Exception {
        mvc.perform(get("/api/health"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("ok"));
    }

    @Test
    void validContactReturnsSentOnlyWhenMailServiceAcceptsIt() throws Exception {
        when(rateLimiter.tryAcquire()).thenReturn(true);
        when(contactService.send(any(ContactRequest.class))).thenReturn(true);

        mvc.perform(post("/api/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(VALID_BODY))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("sent"));
    }

    @Test
    void invalidContactIsRejectedBeforeDelivery() throws Exception {
        mvc.perform(post("/api/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"name":"X","email":"not-an-email","message":"short"}
                                """))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.status").value("invalid"));
    }

    @Test
    void missingMailConfigurationReturnsServiceUnavailable() throws Exception {
        when(rateLimiter.tryAcquire()).thenReturn(true);
        when(contactService.send(any(ContactRequest.class))).thenReturn(false);

        mvc.perform(post("/api/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(VALID_BODY))
                .andExpect(status().isServiceUnavailable())
                .andExpect(jsonPath("$.status").value("unavailable"));
    }

    @Test
    void rateLimitedContactReturnsRetryAfter() throws Exception {
        when(rateLimiter.tryAcquire()).thenReturn(false);

        mvc.perform(post("/api/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(VALID_BODY))
                .andExpect(status().isTooManyRequests())
                .andExpect(header().string(HttpHeaders.RETRY_AFTER, "60"))
                .andExpect(jsonPath("$.status").value("rate_limited"));
    }
}
