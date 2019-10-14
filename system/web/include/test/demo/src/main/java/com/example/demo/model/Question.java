package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "QUESTION")
public class Question {

	@Id
	@Column(name = "CDQUESTION", nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cdQuestion;
	
	@Column(name = "IDQUESTION", nullable = false)
	private String idQuestion;
	
	@Column(name = "NMSTATEMENT", nullable = false)
	private String nmStatement;
	
	@Column(name = "NMANSWER1", nullable = false)
	private String nmAnswer1;
	
	@Column(name = "NMANSWER2", nullable = false)
	private String nmAnswer2;
	
	@Column(name = "NMANSWER3", nullable = false)
	private String nmAnswer3;
	
	@Column(name = "NMANSWER4", nullable = false)
	private String nmAnswer4;
	
	@Column(name = "NMANSWER5", nullable = false)
	private String nmAnswer5;
	
	@Column(name = "FGCORRECTANSWER", nullable = false)
	private int fgCorrectAnswer;
	
	public Question() {
	}
	
	public Question(String idQuestion, String nmStatement, String nmAnswer1, String nmAnswer2, String nmAnswer3, String nmAnswer4, String nmAnswer5, int fgCorrectAnswer) {
		this.setIdQuestion(idQuestion);
		this.setNmStatement(nmStatement);
		this.setNmAnswer1(nmAnswer1);
		this.setNmAnswer2(nmAnswer2);
		this.setNmAnswer3(nmAnswer3);
		this.setNmAnswer4(nmAnswer4);
		this.setNmAnswer5(nmAnswer5);
		this.setFgCorrectAnswer(fgCorrectAnswer);
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
}
