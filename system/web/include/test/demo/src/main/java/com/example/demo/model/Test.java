package com.example.demo.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "TEST")
public class Test {

	@Id
	@Column(name = "CDTEST", nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cdTest;
	
	@Column(name = "IDTEST", nullable = false)
	private String idTest;
	
	@ManyToMany
	@Column(name = "CDQUESTION", nullable = false)
	private List<Question> questions;
	
	@Deprecated
	public Test() {
	}
	
	public Test(String idTest, List<Question> questions) {
		this.setIdTest(idTest);
		this.setQuestions(questions);
	}

	public Long getCdTest() {
		return cdTest;
	}

	public void setCdTest(Long cdTest) {
		this.cdTest = cdTest;
	}

	public String getIdTest() {
		return idTest;
	}

	public List<Question> getQuestions() {
		return questions;
	}

	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}

	public void setIdTest(String idTest) {
		this.idTest = idTest;
	}
}
