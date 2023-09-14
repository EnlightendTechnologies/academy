/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.enlightened.technologies.academy.controller;

import com.enlightened.technologies.academy.AcademyApplication;

import com.enlightened.technologies.academy.model.Faculty;
import com.enlightened.technologies.academy.model.FacultyList;
import com.enlightened.technologies.academy.repository.FacultyRepository;
import com.enlightened.technologies.academy.utils.HttpResponse;
import com.enlightened.technologies.academy.utils.Logger;
import jakarta.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashSet;

import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

        List<Faculty> facultyList = facultyRepository.findAll();

        List<FacultyList> facultyListItems = new ArrayList<>();

        for (int i = 0; i < Math.min(3, facultyList.size()); i++) {
            Faculty course = facultyList.get(i);
            FacultyList courseListItem = new FacultyList();
            courseListItem.setId(course.getId());
            courseListItem.setName(course.getName());
            courseListItem.setDescription(course.getDescription());
            courseListItem.setDescription(course.getDesignation());

            facultyListItems.add(courseListItem);
        }

        response.setStatus(HttpStatus.OK);
        response.setData(facultyListItems);
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @PostMapping(path = {""}, name = "faculty-post", produces = "application/json")
    public ResponseEntity<HttpResponse> createFaculty(HttpServletRequest request,
            @RequestBody Faculty newFaculty) {

        String logPrefix = request.getRequestURI();
        HttpResponse response = new HttpResponse(request.getRequestURI());
        Logger.application.info(Logger.pattern, AcademyApplication.VERSION, logPrefix, "", "");

        if (isInvalidFaculty(newFaculty)) {
            return buildErrorResponse(response, logPrefix, "Invalid/Bad Request", HttpStatus.BAD_REQUEST);
        }
        List<Faculty> faculty = facultyRepository.findAll();
        if (isDuplicateFaculty(newFaculty, faculty)) {
            return buildErrorResponse(response, logPrefix, "Phone Number Already Exists", HttpStatus.CONFLICT);
        }
        try {
            Faculty savedStudent = facultyRepository.save(newFaculty);
            response.setStatus(HttpStatus.CREATED);
            response.setData(savedStudent);
            return ResponseEntity.status(response.getStatus()).body(response);
        } catch (Exception e) {
            return buildErrorResponse(response, logPrefix, "Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    private boolean isInvalidFaculty(Faculty faculty) {
        return faculty.getName() == null
                || faculty.getEmail() == null
                || faculty.getDescription() == null
                || faculty.getPhoneNumber() == null
                || faculty.getPhoneNumber() == null;
    }

    private ResponseEntity<HttpResponse> buildErrorResponse(HttpResponse response, String logPrefix, String errorMessage, HttpStatus httpStatus) {
        Logger.application.info(Logger.pattern, AcademyApplication.VERSION, logPrefix, errorMessage);
        response.setStatus(httpStatus);
        response.setError(errorMessage);
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    private boolean isDuplicateFaculty(Faculty newFaculty, List<Faculty> facultyList) {
        Set<String> emailSet = new HashSet<>();
        Set<String> phoneNumberSet = new HashSet<>();
        Set<String> cnicSet = new HashSet<>();

        for (Faculty faculty : facultyList) {
            if (!emailSet.add(faculty.getEmail())
                    || !phoneNumberSet.add(faculty.getPhoneNumber())
                    || !cnicSet.add(faculty.getPhoneNumber())) {
                return true;
            }
        }

        return !emailSet.add(newFaculty.getEmail())
                || !phoneNumberSet.add(newFaculty.getPhoneNumber());

    }
}
