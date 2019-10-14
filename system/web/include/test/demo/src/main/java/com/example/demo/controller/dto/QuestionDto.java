package com.example.demo.controller.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.example.demo.model.Question;

public class QuestionDto {
	private Long cdQuestion;
	private String idQuestion;
	private String nmStatement;
	private String nmAnswer1;
	private String nmAnswer2;
	private String nmAnswer3;
	private String nmAnswer4;
	private String nmAnswer5;
	private int fgCorrectAnswer;
	
	public QuestionDto(Question question) {
		super();
		this.setCdQuestion(question.getCdQuestion());
		this.setIdQuestion(question.getIdQuestion());
		this.setNmStatement(question.getNmStatement());
		this.setNmAnswer1(question.getNmAnswer1());
		this.setNmAnswer2(question.getNmAnswer2());
		this.setNmAnswer3(question.getNmAnswer3());
		this.setNmAnswer4(question.getNmAnswer4());
		this.setNmAnswer5(question.getNmAnswer5());
		this.setFgCorrectAnswer(question.getFgCorrectAnswer());
	}

	public static List<QuestionDto> convert(List<Question> questions) {
		return questions.stream().map(QuestionDto::new).collect(Collectors.toList());
	}

	public Long getCdQuestion() {
		return cdQuestion;
	}

	public String getIdQuestion() {
		return idQuestion;
	}

	public String getNmStatement() {
		return nmStatement;
	}

	public String getNmAnswer1() {
		return nmAnswer1;
	}

	public String getNmAnswer2() {
		return nmAnswer2;
	}

	public String getNmAnswer3() {
		return nmAnswer3;
	}

	public String getNmAnswer4() {
		return nmAnswer4;
	}

	public String getNmAnswer5() {
		return nmAnswer5;
	}

	public int getFgCorrectAnswer() {
		return fgCorrectAnswer;
	}

	private void setCdQuestion(Long cdQuestion) {
		this.cdQuestion = cdQuestion;
	}

	private void setIdQuestion(String idQuestion) {
		this.idQuestion = idQuestion;
	}

	private void setNmStatement(String nmStatement) {
		this.nmStatement = nmStatement;
	}

	private void setNmAnswer1(String nmAnswer1) {
		this.nmAnswer1 = nmAnswer1;
	}

	private void setNmAnswer2(String nmAnswer2) {
		this.nmAnswer2 = nmAnswer2;
	}

	private void setNmAnswer3(String nmAnswer3) {
		this.nmAnswer3 = nmAnswer3;
	}

	private void setNmAnswer4(String nmAnswer4) {
		this.nmAnswer4 = nmAnswer4;
	}

	private void setNmAnswer5(String nmAnswer5) {
		this.nmAnswer5 = nmAnswer5;
	}

	private void setFgCorrectAnswer(int fgCorrectAnswer) {
		this.fgCorrectAnswer = fgCorrectAnswer;
	}

	
	
	
}
