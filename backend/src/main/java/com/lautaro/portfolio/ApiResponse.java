package com.lautaro.portfolio;

import java.util.Map;

public record ApiResponse(String status, String message, Map<String, String> errors) {
    public static ApiResponse ok(String status, String message) {
        return new ApiResponse(status, message, Map.of());
    }

    public static ApiResponse invalid(Map<String, String> errors) {
        return new ApiResponse("invalid", "Request validation failed", errors);
    }
}
