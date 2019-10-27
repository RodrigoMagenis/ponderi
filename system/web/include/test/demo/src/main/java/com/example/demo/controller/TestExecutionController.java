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

import com.example.demo.controller.dto.TestExecutionDto;
import com.example.demo.repository.TestExecutionRepository;

@RestController
@RequestMapping("/testsexecution")
public class TestExecutionController {
	
	@Autowired
	private TestExecutionRepository testExecutionRepository;
	
	@GetMapping
	public List<TestExecutionDto> getTestExecutionList() {
		return TestExecutionDto.convert(testExecutionRepository.findAll());
	}
	
	@GetMapping("/{id}")
	public TestExecutionDto getTestExecution(@PathVariable long id) {
		return new TestExecutionDto(testExecutionRepository.getOne(id));
	}
	
//	@PostMapping("/1")
//	//TODO retornar usuário unico ao invés da lista completa
//	public ResponseEntity<List<TestExecutionDto>> newTestExecution(@RequestBody @Valid TestExecutionNewForm form, UriComponentsBuilder uriBuilder) {
//		testExecutionRepository.save(form.convert());
//		URI uri = uriBuilder.path("/testsexecution").buildAndExpand().toUri();
//		return ResponseEntity.created(uri).body(this.getTestExecutionList());
//		
//	}
//	
//	@PostMapping("/4")
//	@Transactional
//	//TODO retornar usuário unico ao invés da lista completa
//	public ResponseEntity<List<TestExecutionDto>> executeTest(@RequestBody @Valid TestExecutionForm form) {
//		form.saveExecution(testExecutionRepository);
//		return ResponseEntity.ok(this.getTestExecutionList());
//	}
}
