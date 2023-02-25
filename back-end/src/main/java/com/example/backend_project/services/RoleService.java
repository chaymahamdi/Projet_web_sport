package com.example.backend_project.services;

import com.example.backend_project.Models.Role;
import com.example.backend_project.Payload.RoleRequest;

public interface RoleService {
    Role CreateRole(RoleRequest role);
}
