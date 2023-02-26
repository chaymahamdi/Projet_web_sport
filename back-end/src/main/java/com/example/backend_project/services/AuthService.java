package com.example.backend_project.services;

import com.example.backend_project.Payload.LoginRequest;
import com.example.backend_project.Payload.RegisterRequest;
import com.example.backend_project.Payload.JwtResponse;


public interface AuthService {
    JwtResponse login(LoginRequest loginDto);

    String register(RegisterRequest registerDto);
}