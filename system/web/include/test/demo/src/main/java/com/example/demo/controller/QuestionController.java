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

import com.example.demo.controller.dto.QuestionDto;
import com.example.demo.controller.form.QuestionDeleteForm;
import com.example.demo.controller.form.QuestionEditForm;
import com.example.demo.controller.form.QuestionNewForm;
import com.example.demo.repository.QuestionRepository;

@RestController
@RequestMapping("/questions")
public class QuestionController {
	
	@Autowired
	private QuestionRepository questionRepository;

	@GetMapping
	public List<QuestionDto> getQuestionList() {
		return QuestionDto.convert(questionRepository.findAll());
	}
	
	@GetMapping("/{id}")
	public QuestionDto getQuestion(@PathVariable long id) {
		return new QuestionDto(questionRepository.getOne(id));
	}
	
	//TODO retornar usuário unico ao invés da lista completa
	@PostMapping("/1")
	public ResponseEntity<List<QuestionDto>> newQuestion(@RequestBody @Valid QuestionNewForm form, UriComponentsBuilder uriBuilder) {
		questionRepository.save(form.convert());
		URI uri = uriBuilder.path("/questions").buildAndExpand().toUri();
		return ResponseEntity.created(uri).body(this.getQuestionList());
		
	}
	
	@PostMapping("/2")
	//TODO Utilizar o @PutMapping - erro de segurança CMOS
	@Transactional
	//TODO retornar usuário unico ao invés da lista completa
	public ResponseEntity<List<QuestionDto>> updateQuestion(@RequestBody @Valid QuestionEditForm form) {
		form.updateQuestion(questionRepository);
		return ResponseEntity.ok(this.getQuestionList());
	}
	
	@PostMapping("/3")
	//TODO Utilizar o @DeleteMapping - erro de segurança CMOS
	//TODO retornar código de sucesso ao invés da lista completa
	public ResponseEntity<List<QuestionDto>> deleteQuestion(@RequestBody @Valid QuestionDeleteForm form) {
		form.deleteQuestion(questionRepository);
		return ResponseEntity.ok(this.getQuestionList());
	}
}
