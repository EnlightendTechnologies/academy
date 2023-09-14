/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.enlightened.technologies.academy.controller;

import com.enlightened.technologies.academy.AcademyApplication;

import com.enlightened.technologies.academy.model.Faculty;
import com.enlightened.technologies.academy.repository.FacultyRepository;
import com.enlightened.technologies.academy.utils.HttpResponse;
import com.enlightened.technologies.academy.utils.Logger;
import jakarta.servlet.http.HttpServletRequest;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Usama
 */
@RestController
@RequestMapping("/faculty/")
@CrossOrigin("*")
public class FacultyController {

    @Autowired
    private FacultyRepository facultyRepository;

    @GetMapping(path = {""}, name = "faculty-get-all", produces = "application/json")
    public ResponseEntity<HttpResponse> getFaculty(HttpServletRequest request) {

        String logPrefix = request.getRequestURI();
        HttpResponse response = new HttpResponse(request.getRequestURI());
        Logger.application.info(Logger.pattern, AcademyApplication.VERSION, logPrefix, "", "");

        List<Faculty> faculty = facultyRepository.findAll(); // Use facultyRepository to fetch faculties
        response.setStatus(HttpStatus.OK);
        response.setData(faculty);
        return ResponseEntity.status(response.getStatus()).body(response);
    }
}

