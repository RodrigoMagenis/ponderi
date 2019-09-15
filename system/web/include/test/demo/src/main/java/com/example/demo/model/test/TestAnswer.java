package com.example.demo.model.test;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TESTANSWER")
public class TestAnswer {

	@Id
	@Column(name = "CDANSWER", nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cdAnswer;
	
	@Column(name = "CDQUESTION", nullable = false)
	private Long cdQuestion;
	
	@Column(name = "IDANSWER", nullable = false)
	private String idAnswer;
	
	@Column(name = "DSVALUE", nullable = false)
	private String dsValue;
	
	@Column(name = "FGRIGHT", nullable = false)
	private int fgRight;
	
	public TestAnswer() {
	}
	
	public TestAnswer(Long cdQuestion, String idAnswer, String value, int fgRight) {
		this.setQuestionCode(cdQuestion);
		this.setId(idAnswer);
		this.setValue(value);
		this.setFgRight(fgRight);
	}

	public Long getCode() {
		return this.cdAnswer;
	}

	public void setCode(Long code) {
		this.cdAnswer = code;
	}
	
	public String getId() {
		return this.idAnswer;
	}
	
	public void setId(String id) {
		this.idAnswer = id;
	}
	
	public int getFgRight() {
		return this.fgRight;
	}
	
	public void setFgRight(int flag) {
		this.fgRight = flag;
	}

	public String getValue() {
		return this.dsValue;
	}
	
	public void setValue(String value) {
		this.dsValue = value;
	}

	public Long getQuestionCode() {
		return this.cdQuestion;
	}
	
	public void setQuestionCode(Long code) {
		this.cdQuestion = code;
	}
}
