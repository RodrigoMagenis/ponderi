package com.example.demo.model.test;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TESTQUESTION")
public class TestQuestion {

	@Id
	@Column(name = "CDQUESTION", nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cdQuestion;
	
	@Column(name = "IDQUESTION", nullable = false)
	private String idQuestion;
	
	@Column(name = "NMSUBJECT", nullable = true)
	private String nmSubject;
	
	@Column(name = "DSVALUE", nullable = false)
	private String dsValue;
	
	public TestQuestion() {
	}
	
	public TestQuestion(String idQuestion, String dsValue, String nmSubject) {
		this.setId(idQuestion);
		this.setValue(dsValue);
		this.setSubjectName(nmSubject);
	}

	public Long getCode() {
		return this.cdQuestion;
	}

	public void setCode(Long code) {
		this.cdQuestion = code;
	}

	public String getId() {
		return this.idQuestion;
	}

	public void setId(String id) {
		this.idQuestion = id;
	}

	public String getSubjectName() {
		return this.nmSubject;
	}

	public void setSubjectName(String name) {
		this.nmSubject = name;
	}
	
	public String getValue() {
		return this.dsValue;
	}
	
	public void setValue(String value) {
		this.dsValue = value;
	}
}
