package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Student;

public interface StudentRespository extends JpaRepository<Student, Long> {
	
	//List<Student> findByStudentIdstudent();

}
