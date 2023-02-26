package com.example.backend_project.Controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend_project.Models.Category;
import com.example.backend_project.Payload.CategoryRequest;
import com.example.backend_project.services.CategoryService;
import java.util.List;

@RestController

@RequestMapping("")
public class CategoryController {

    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;

    };

    @GetMapping("categories")
    public ResponseEntity<List<Category>> getAllCategories() {
        List<Category> categories = categoryService.getAllCategories();
        return ResponseEntity.ok(categories);
    }

    @PostMapping("categories")
    public ResponseEntity<?> addCategory(@RequestBody CategoryRequest request) {
        Category category = categoryService.addCategory(request);
        return ResponseEntity.status(201).body(category);
    }
}
