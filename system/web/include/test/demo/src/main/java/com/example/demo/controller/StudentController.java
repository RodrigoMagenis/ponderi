package com.example.demo.controller;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.example.demo.controller.dto.StudentDto;
import com.example.demo.controller.form.StudentNewForm;
import com.example.demo.controller.form.StudentEditForm;
import com.example.demo.controller.form.StudentDeleteForm;
import com.example.demo.repository.StudentRespository;

@RestController
@RequestMapping("/students")
public class StudentController {
	
	@Autowired
	private StudentRespository studentRepository;
	
	@GetMapping
	public List<StudentDto> getStudentList() {
		return StudentDto.convert(studentRepository.findAll());
	}
	
	@GetMapping("/{id}")
	public StudentDto getStudent(@PathVariable long id) {
		return new StudentDto(studentRepository.getOne(id));
	}
	
	@PostMapping("/1")
	//TODO retornar usuário unico ao invés da lista completa
	public ResponseEntity<List<StudentDto>> newStudent(@RequestBody @Valid StudentNewForm form, UriComponentsBuilder uriBuilder) {
		studentRepository.save(form.convert());
		URI uri = uriBuilder.path("/students").buildAndExpand().toUri();
		return ResponseEntity.created(uri).body(this.getStudentList());
		
	}
	
	@PostMapping("/2")
	//TODO Utilizar o @PutMapping - erro de segurança CMOS
	@Transactional
	//TODO retornar usuário unico ao invés da lista completa
	public ResponseEntity<List<StudentDto>> updateStudent(@RequestBody @Valid StudentEditForm form) {
		form.updateStudent(studentRepository);
		return ResponseEntity.ok(this.getStudentList());
	}
	
	@PostMapping("/3")
	//TODO Utilizar o @DeleteMapping - erro de segurança CMOS
	//TODO retornar código de sucesso ao invés da lista completa
	public ResponseEntity<List<StudentDto>> deleteStudent(@RequestBody @Valid StudentDeleteForm form) {
		form.deleteStudent(studentRepository);
		return ResponseEntity.ok(this.getStudentList());
	}
}
