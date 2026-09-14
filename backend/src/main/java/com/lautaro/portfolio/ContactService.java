package com.lautaro.portfolio;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ContactService {
    private final JavaMailSender mailSender;
    private final boolean mailEnabled;
    private final String from;
    private final String to;

    public ContactService(
            JavaMailSender mailSender,
            @Value("${portfolio.contact.mail-enabled:false}") boolean mailEnabled,
            @Value("${portfolio.contact.from:}") String from,
            @Value("${portfolio.contact.to:busonlautaro@gmail.com}") String to) {
        this.mailSender = mailSender;
        this.mailEnabled = mailEnabled;
        this.from = from == null ? "" : from.trim();
        this.to = to == null ? "" : to.trim();
    }

    public boolean send(ContactRequest request) {
        if (!mailEnabled || from.isBlank() || to.isBlank()) {
            return false;
        }

        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setFrom(from);
        mail.setTo(to);
        mail.setReplyTo(request.email().trim());
        mail.setSubject("Portfolio · " + request.name().trim());
        mail.setText("Nombre: " + request.name().trim()
                + "\nEmail: " + request.email().trim()
                + "\n\n" + request.message().trim());
        mailSender.send(mail);
        return true;
    }
}
