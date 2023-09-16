/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.enlightened.technologies.academy.controller;

import com.enlightened.technologies.academy.AcademyApplication;
import com.enlightened.technologies.academy.model.Course;
import com.enlightened.technologies.academy.model.CourseList;
import com.enlightened.technologies.academy.repository.CourseRepository;
import com.enlightened.technologies.academy.utils.HttpResponse;
import com.enlightened.technologies.academy.utils.Logger;
import jakarta.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Optional;
import java.util.UUID;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author hasan
 */
@RestController
@RequestMapping("/courses/")
@CrossOrigin("*")
public class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    @PostMapping(path = {""}, name = "course-post", produces = "application/json")
    public ResponseEntity<HttpResponse> postCourse(HttpServletRequest request,
            @RequestBody Course bodyCourse) {
        String logPrefix = request.getRequestURI();
        HttpResponse response = new HttpResponse(request.getRequestURI());
        Logger.application.info(Logger.pattern, AcademyApplication.VERSION, logPrefix, "", "");
        List<Course> courses = courseRepository.findAll();

        if (!courses.isEmpty()) {
            for (Course course : courses) {
                if (course.getName().equals(bodyCourse.getName())) {
                    Logger.application.info(Logger.pattern, AcademyApplication.VERSION, logPrefix,
                            "Course Already Exists");
                    response.setStatus(HttpStatus.CONFLICT);
                    response.setError("Course Already Exists");
                    return ResponseEntity.status(response.getStatus()).body(response);
                }
            }
        }
        Course savedCourse = courseRepository.save(bodyCourse);

        response.setStatus(HttpStatus.CREATED);
        response.setData(savedCourse);
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @GetMapping(path = {""}, name = "course-get-all", produces = "application/json")
    public ResponseEntity<HttpResponse> getCourses(HttpServletRequest request) {

        String logPrefix = request.getRequestURI();
        HttpResponse response = new HttpResponse(request.getRequestURI());
        Logger.application.info(Logger.pattern, AcademyApplication.VERSION, logPrefix, "", "");

        List<Course> courses = courseRepository.findAll();

        List<CourseList> courseListItems = new ArrayList<>();

        for (int i = 0; i < Math.min(3, courses.size()); i++) {
            Course course = courses.get(i);
            CourseList courseListItem = new CourseList();
            courseListItem.setId(course.getId());
            courseListItem.setName(course.getName());
            courseListItem.setDescription(course.getDescription());
            courseListItem.setFee(course.getFee());
            courseListItems.add(courseListItem);
        }

        response.setStatus(HttpStatus.OK);
        response.setData(courseListItems);
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @GetMapping(path = {"/{courseId}"}, name = "get-student-by-id", produces = "application/json")
    public ResponseEntity<HttpResponse> getCourse(HttpServletRequest request, @PathVariable UUID courseId) {
        String logPrefix = request.getRequestURI();
        HttpResponse response = new HttpResponse(request.getRequestURI());
        Logger.application.info(Logger.pattern, AcademyApplication.VERSION, logPrefix, "", "");
        Optional<Course> course = courseRepository.findById(String.valueOf(courseId));
        response.setStatus(HttpStatus.OK);
        response.setData(course);
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    /**
     *
     * @author Usama
     */
    private String saveImage(MultipartFile file) {
        String uploadDirectoryPath = "upload";
        File uploadDirectory = new File(uploadDirectoryPath);

        if (!uploadDirectory.exists()) {
            uploadDirectory.mkdirs();
        }

        try {
            String originalFilename = file.getOriginalFilename();
            String extension = getFileExtension(originalFilename);
            String uniqueFileName = UUID.randomUUID().toString() + "." + extension;

            String filePath = uploadDirectoryPath + File.separator + uniqueFileName;
            File imageFile = new File(filePath);
            file.transferTo(imageFile);

            String imageUrl = "/upload/" + uniqueFileName;

            return imageUrl;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    private String getFileExtension(String fileName) {
        int dotIndex = fileName.lastIndexOf(".");
        if (dotIndex > 0) {
            return fileName.substring(dotIndex + 1);
        }
        return "";
    }
}
