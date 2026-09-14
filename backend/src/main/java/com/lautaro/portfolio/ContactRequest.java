package com.lautaro.portfolio;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record ContactRequest(
        @NotBlank
        @Size(min = 2, max = 100)
        @Pattern(regexp = "^[^\\r\\n]+$", message = "must be a single line")
        String name,

        @NotBlank
        @Email
        @Size(max = 254)
        @Pattern(regexp = "^[^\\r\\n]+$", message = "must be a single line")
        String email,

        @NotBlank
        @Size(min = 20, max = 3000)
        String message
) {
}
