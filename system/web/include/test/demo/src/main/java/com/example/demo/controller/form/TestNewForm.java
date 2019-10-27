package com.example.demo.controller.form;

import java.util.List;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.example.demo.model.Question;
import com.example.demo.model.Test;

public class TestNewForm {
	@NotNull @NotEmpty
	private String idTest;
	
	@NotNull @NotEmpty
	private List<Question> questions;

	public Test convert() {
		return new Test(
			this.getIdTest(),
			this.getQuestions()
		);		
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
	
}
