package com.example.backend_project.services.Impl;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.backend_project.Models.Role;
import com.example.backend_project.Payload.RoleRequest;
import com.example.backend_project.Repositories.RoleRepository;
import com.example.backend_project.services.RoleService;

@Service
public class RoleServiceImpl implements RoleService {

    private RoleRepository roleRepository;

    public RoleServiceImpl(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }
  
    @Override
    public Role CreateRole(RoleRequest request) {
        Role role = new Role();
        role.setName(request.getRole());
        roleRepository.save(role);
        return role;
    }

}
