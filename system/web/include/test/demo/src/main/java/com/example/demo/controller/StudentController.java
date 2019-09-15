package com.example.demo.controller;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.example.demo.controller.dto.StudentDto;
import com.example.demo.controller.form.StudentForm;
import com.example.demo.model.Student;
import com.example.demo.repository.StudentRespository;

@RestController
@RequestMapping("/students")
public class StudentController {
	
	@Autowired
	private StudentRespository studentRepository;
	
	@GetMapping
	public List<StudentDto> getStudentList(String idStudent) {
		List<Student> students;
		if (idStudent == null) {
			students = studentRepository.findAll();
		} else {
			students = studentRepository/*.findByStudentIdstudent();*/.findAll();
		}
		List<StudentDto> list = StudentDto.convert(students);
		return list;
	}
	
	@PostMapping
	public ResponseEntity<List<StudentDto>> newStudent(@RequestBody @Valid StudentForm form, UriComponentsBuilder uriBuilder) {
		Student student = form.convert();
		studentRepository.save(student);
		URI uri = uriBuilder.path("/students").buildAndExpand().toUri();
		return ResponseEntity.created(uri).body(this.getStudentList(""));
		
	}
}
