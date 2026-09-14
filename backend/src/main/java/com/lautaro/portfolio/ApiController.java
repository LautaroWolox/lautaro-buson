package com.lautaro.portfolio;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ApiController {
    private final ContactService contactService;

    public ApiController(ContactService contactService) {
        this.contactService = contactService;
    }

    @GetMapping("/health")
    public ApiResponse health() {
        return ApiResponse.ok("ok", "Portfolio API is running");
    }

    @PostMapping("/contact")
    public ResponseEntity<ApiResponse> contact(@Valid @RequestBody ContactRequest request) {
        try {
            if (!contactService.send(request)) {
                return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
                        .body(ApiResponse.ok("unavailable", "Mail delivery is not configured"));
            }
            return ResponseEntity.ok(ApiResponse.ok("sent", "Message accepted for delivery"));
        } catch (MailException exception) {
            return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
                    .body(ApiResponse.ok("unavailable", "Mail provider is temporarily unavailable"));
        }
    }
}
