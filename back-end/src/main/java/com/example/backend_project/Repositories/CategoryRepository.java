package com.example.backend_project.Repositories;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend_project.Models.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    Optional<Category> findByName(String name);
}
