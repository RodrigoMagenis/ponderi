package com.example.demo.controller.form;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.example.demo.model.Question;
import com.example.demo.repository.QuestionRepository;

public class QuestionEditForm {
	
	@NotNull
	private Long cdQuestion;

	@NotNull @NotEmpty
	private String idQuestion;
	
	@NotNull @NotEmpty
	private String nmStatement;
	
	@NotNull @NotEmpty
	private String nmAnswer1;
	
	@NotNull @NotEmpty
	private String nmAnswer2;
	
	@NotNull @NotEmpty
	private String nmAnswer3;
	
	@NotNull @NotEmpty
	private String nmAnswer4;
	
	@NotNull @NotEmpty
	private String nmAnswer5;
	
	@NotNull
	private int fgCorrectAnswer;

	public Question convert() {
		return new Question(
				this.getIdQuestion(),
				this.getNmStatement(),
				this.getNmAnswer1(),
				this.getNmAnswer2(),
				this.getNmAnswer3(),
				this.getNmAnswer4(),
				this.getNmAnswer5(),
				this.getFgCorrectAnswer()
		);
	}
	
	

	public Long getCdQuestion() {
		return cdQuestion;
	}

	public void setCdQuestion(Long cdQuestion) {
		this.cdQuestion = cdQuestion;
	}

	public String getIdQuestion() {
		return idQuestion;
	}

	public void setIdQuestion(String idQuestion) {
		this.idQuestion = idQuestion;
	}

	public String getNmStatement() {
		return nmStatement;
	}

	public void setNmStatement(String nmStatement) {
		this.nmStatement = nmStatement;
	}

	public String getNmAnswer1() {
		return nmAnswer1;
	}

	public void setNmAnswer1(String nmAnswer1) {
		this.nmAnswer1 = nmAnswer1;
	}

	public String getNmAnswer2() {
		return nmAnswer2;
	}

	public void setNmAnswer2(String nmAnswer2) {
		this.nmAnswer2 = nmAnswer2;
	}

	public String getNmAnswer3() {
		return nmAnswer3;
	}

	public void setNmAnswer3(String nmAnswer3) {
		this.nmAnswer3 = nmAnswer3;
	}

	public String getNmAnswer4() {
		return nmAnswer4;
	}

	public void setNmAnswer4(String nmAnswer4) {
		this.nmAnswer4 = nmAnswer4;
	}

	public String getNmAnswer5() {
		return nmAnswer5;
	}

	public void setNmAnswer5(String nmAnswer5) {
		this.nmAnswer5 = nmAnswer5;
	}

	public int getFgCorrectAnswer() {
		return fgCorrectAnswer;
	}

	public void setFgCorrectAnswer(int fgCorrectAnswer) {
		this.fgCorrectAnswer = fgCorrectAnswer;
	}

	public Question updateQuestion(QuestionRepository questionRepository) {
		Question question = questionRepository.getOne(this.getCdQuestion());
		question.setIdQuestion(this.getIdQuestion());
		question.setNmStatement(this.getNmStatement());
		question.setNmAnswer1(this.getNmAnswer1());
		question.setNmAnswer2(this.getNmAnswer2());
		question.setNmAnswer3(this.getNmAnswer3());
		question.setNmAnswer4(this.getNmAnswer4());
		question.setNmAnswer5(this.getNmAnswer5());
		question.setFgCorrectAnswer(this.getFgCorrectAnswer());
		return question;
	}

}
