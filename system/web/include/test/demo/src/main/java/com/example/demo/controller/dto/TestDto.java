package com.example.demo.controller.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.example.demo.model.Question;
import com.example.demo.model.Test;

public class TestDto {
	private Long cdTest;
	private String idTest;
	private List<Question> questions;
	
	public TestDto(Test test) {
		super();
		this.setCdTest(test.getCdTest());
		this.setIdTest(test.getIdTest());
		this.setQuestions(test.getQuestions());
	}

	public static List<TestDto> convert(List<Test> tests) {
		return tests.stream().map(TestDto::new).collect(Collectors.toList());
	}

	public Long getCdTest() {
		return cdTest;
	}

	public String getIdTest() {
		return idTest;
	}
	
	public List<Question> getQuestions() {
		return questions;
	}

	private void setCdTest(Long cdTest) {
		this.cdTest = cdTest;
	}

	private void setIdTest(String idTest) {
		this.idTest = idTest;
	}

	private void setQuestions(List<Question> questions) {
		this.questions = questions;
	}
}
