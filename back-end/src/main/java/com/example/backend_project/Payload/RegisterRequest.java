package com.example.backend_project.Payload;

import lombok.Data;

@Data
public class RegisterRequest {

    private String username;
    private String email;
    private String position;
    private String address;
    private String password;
}
