package com.example.backend_project.services;

import com.example.backend_project.Payload.LoginRequest;
import com.example.backend_project.Payload.RegisterRequest;

public interface AuthService {
    String login(LoginRequest loginDto);

    String register(RegisterRequest registerDto);
}