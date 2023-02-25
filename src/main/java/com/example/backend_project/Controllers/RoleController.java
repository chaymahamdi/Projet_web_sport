package com.example.backend_project.Controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend_project.Models.Role;
import com.example.backend_project.Payload.RoleRequest;
import com.example.backend_project.Repositories.RoleRepository;
import com.example.backend_project.services.RoleService;

@RestController
public class RoleController {

    private final RoleService roleService;

    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    };

    @PostMapping("api/auth/roles")
    public ResponseEntity<?> addRole(@RequestBody RoleRequest request) {
        Role role = roleService.CreateRole(request);
        return ResponseEntity.status(201).body(role);
    }
}
