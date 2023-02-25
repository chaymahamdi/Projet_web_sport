package com.example.backend_project.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend_project.Models.User;
import com.example.backend_project.Payload.RegisterRequest;
import com.example.backend_project.Repositories.UserRepository;

@RestController
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(this.userRepository.findAll());
    }

    @PostMapping("/users")
    public ResponseEntity<User> createUser(@RequestBody RegisterRequest userRequest) {
        User user = new User();
        user.setUsername(userRequest.getUsername());
        user.setEmail(userRequest.getEmail());
        return ResponseEntity.status(201).body(this.userRepository.save(user));
    }

   /*  @GetMapping("/user/{id}")
    public ResponseEntity getUserbyId(@PathVariable String id) {
        Optional<User> user = this.userRepository.findById(id);
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        } else {
            return ResponseEntity.ok("user with id:" + id + "not found");
        }

    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity deleteUserbyId(@PathVariable String id) {
        Optional<User> user = this.userRepository.findById(id);
        if (user.isPresent()) {
            this.userRepository.deleteById(id);
            return ResponseEntity.ok("success");
        } else {
            return ResponseEntity.ok("user with id:" + id + "not found to delete");
        }

    }

    @PutMapping("/user/{id}")
    public ResponseEntity UpdateUserbyId(@PathVariable String id, @RequestBody RegisterRequest userRequest) {
        Optional<User> user = this.userRepository.findById(id);
        if (user.isPresent()) {
            User user1 = user.get();
            user1.setUsername(userRequest.getUsername());
            user1.setEmail(userRequest.getEmail());
            return ResponseEntity.status(201).body(this.userRepository.save(user1));
        } else {
            return ResponseEntity.ok("user with id:" + id + "not found to delete");
        }

    }*/

}
