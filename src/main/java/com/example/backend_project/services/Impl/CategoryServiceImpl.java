package com.example.backend_project.services.Impl;

import com.example.backend_project.Models.Category;
import com.example.backend_project.Payload.CategoryRequest;
import com.example.backend_project.Repositories.CategoryRepository;
import com.example.backend_project.services.CategoryService;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class CategoryServiceImpl implements CategoryService {

    private CategoryRepository categoryRepository;

    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Category addCategory(CategoryRequest request) {
        Category category = new Category();
        category.setName(request.getName());
        categoryRepository.save(category);
        return category;
    }

    @Override
    public List<Category> getAllCategories() {
        List<Category> categories = categoryRepository.findAll();
        return categories;
    }

}
