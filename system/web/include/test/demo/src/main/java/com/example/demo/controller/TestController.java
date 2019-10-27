package com.example.demo.controller;

import java.io.IOException;
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

import com.example.demo.controller.dto.TestDto;
import com.example.demo.controller.form.TestDeleteForm;
import com.example.demo.controller.form.TestEditForm;
import com.example.demo.controller.form.TestNewForm;
import com.example.demo.repository.TestRepository;

@RestController
@RequestMapping("/tests")
public class TestController {
	
	@Autowired
	private TestRepository testRepository;

	@GetMapping
	public List<TestDto> getTestList() {
		return TestDto.convert(testRepository.findAll());
	}
	
	@GetMapping("/{id}")
	public TestDto getTest(@PathVariable long id) {
		return new TestDto(testRepository.getOne(id));
	}
	
	//TODO retornar usuário unico ao invés da lista completa
	@PostMapping("/1")
	public ResponseEntity<List<TestDto>> newTest(@RequestBody @Valid TestNewForm form, UriComponentsBuilder uriBuilder) {
		testRepository.save(form.convert());
		URI uri = uriBuilder.path("/tests").buildAndExpand().toUri();
		return ResponseEntity.created(uri).body(this.getTestList());
	}
	
	@PostMapping("/2")
	//TODO Utilizar o @PutMapping - erro de segurança CMOS
	@Transactional
	//TODO retornar usuário unico ao invés da lista completa
	public ResponseEntity<List<TestDto>> updateTest(@RequestBody @Valid TestEditForm form) {
		form.updateTest(testRepository);
		return ResponseEntity.ok(this.getTestList());
	}
	
	@PostMapping("/3")
	//TODO Utilizar o @DeleteMapping - erro de segurança CMOS
	//TODO retornar código de sucesso ao invés da lista completa
	public ResponseEntity<List<TestDto>> deleteTest(@RequestBody @Valid TestDeleteForm form) {
		form.deleteTest(testRepository);
		return ResponseEntity.ok(this.getTestList());
	}
}
