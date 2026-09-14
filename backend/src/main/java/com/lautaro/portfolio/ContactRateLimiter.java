package com.lautaro.portfolio;

import java.time.Clock;
import java.time.Duration;
import java.time.Instant;
import java.util.ArrayDeque;
import java.util.Deque;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class ContactRateLimiter {
    private static final Duration WINDOW = Duration.ofMinutes(1);

    private final Deque<Instant> attempts = new ArrayDeque<>();
    private final int maxPerMinute;
    private final Clock clock;

    public ContactRateLimiter(@Value("${portfolio.contact.max-per-minute:5}") int maxPerMinute) {
        this(maxPerMinute, Clock.systemUTC());
    }

    ContactRateLimiter(int maxPerMinute, Clock clock) {
        this.maxPerMinute = Math.max(1, Math.min(maxPerMinute, 100));
        this.clock = clock;
    }

    public synchronized boolean tryAcquire() {
        Instant now = clock.instant();
        Instant cutoff = now.minus(WINDOW);
        while (!attempts.isEmpty() && !attempts.peekFirst().isAfter(cutoff)) {
            attempts.removeFirst();
        }
        if (attempts.size() >= maxPerMinute) {
            return false;
        }
        attempts.addLast(now);
        return true;
    }
}
