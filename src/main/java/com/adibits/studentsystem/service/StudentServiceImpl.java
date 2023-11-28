package com.adibits.studentsystem.service;

import com.adibits.studentsystem.model.Student;
import com.adibits.studentsystem.dao.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService{
    @Autowired
    private StudentRepository s;

    @Override
    public List<Student> getAllStudents() {
        return s.findAll();
    }

    @Override
    public Student saveStudent(Student student) {
        return s.save(student);
    }
}
