package com.adibits.studentsystem.service;

import com.adibits.studentsystem.model.Student;
import org.springframework.stereotype.Service;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();

}
