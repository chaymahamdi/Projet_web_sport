package com.example.backend_project.Controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend_project.Payload.JwtResponse;
import com.example.backend_project.Payload.LoginRequest;
import com.example.backend_project.Payload.RegisterRequest;
import com.example.backend_project.services.AuthService;

@RestController
@CrossOrigin
@RequestMapping("/api/auth")
public class AuthController {

    private AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    // Build Login REST API
    @PostMapping("/signin")
    public ResponseEntity<JwtResponse> login(@RequestBody LoginRequest loginDto) {
        JwtResponse response = authService.login(loginDto);
        return ResponseEntity.ok(response);
    }

    // Build Register REST API
    // @CrossOrigin(origins = "http://localhost:8080")
    @PostMapping("/signup")
    public ResponseEntity<String> register(@RequestBody RegisterRequest registerDto) {
        String response = authService.register(registerDto);
        return ResponseEntity.ok(response);
    }
}