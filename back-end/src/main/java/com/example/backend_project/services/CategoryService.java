package com.example.backend_project.services;

import java.util.List;

import com.example.backend_project.Models.Category;
import com.example.backend_project.Payload.CategoryRequest;

public interface CategoryService {
    Category addCategory(CategoryRequest categoryDto);
    List<Category> getAllCategories();

    /*CategoryRequest getCategory(Long categoryId);

    

    CategoryRequest updateCategory(CategoryRequest categoryDto, Long categoryId);

    void deleteCategory(Long categoryId);*/
}
