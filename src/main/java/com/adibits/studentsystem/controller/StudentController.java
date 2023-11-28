package com.adibits.studentsystem.controller;


import com.adibits.studentsystem.model.Student;
import com.adibits.studentsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student) {
        System.out.println(student.getName());
        studentService.saveStudent(student);
        return "new student created";
    }

    @GetMapping("/get" )
    public List <Student> getAll() {
        return studentService.getAllStudents();
    }
}
