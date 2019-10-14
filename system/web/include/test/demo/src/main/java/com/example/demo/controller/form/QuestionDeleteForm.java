package com.example.demo.controller.form;

import javax.validation.constraints.NotNull;
import com.example.demo.repository.QuestionRepository;

public class QuestionDeleteForm {
	
	@NotNull
	private Long cdQuestion;
	
	public Long getCdQuestion() {
		return cdQuestion;
	}
	public void setCdQuestion(Long cdQuestion) {
		this.cdQuestion = cdQuestion;
	}

	public void deleteQuestion(QuestionRepository questionRepository) {
		questionRepository.deleteById(this.getCdQuestion());
	}

}
