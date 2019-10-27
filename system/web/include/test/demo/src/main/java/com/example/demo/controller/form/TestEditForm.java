package com.example.demo.controller.form;

import java.util.List;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.example.demo.model.Question;
import com.example.demo.model.Test;
import com.example.demo.repository.TestRepository;

public class TestEditForm {
	
	@NotNull
	private Long cdTest;
	
	@NotNull @NotEmpty
	private String idTest;
	
	@NotNull @NotEmpty
	private List<Question> questions;
	
	public Long getCdTest() {
		return cdTest;
	}

	public void setCdTest(Long cdTest) {
		this.cdTest = cdTest;
	}

	public String getIdTest() {
		return idTest;
	}

	public void setIdTest(String idTest) {
		this.idTest = idTest;
	}

	public List<Question> getQuestions() {
		return questions;
	}

	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}

	public Test updateTest(TestRepository testRepository) {
		Test test = testRepository.getOne(this.getCdTest());
		test.setIdTest(this.getIdTest());
		return test;
	}
}
