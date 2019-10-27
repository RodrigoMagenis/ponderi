package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "TESTEXECUTION")
public class TestExecution {

	@Id
	@Column(name = "CDTESTEXEC", nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cdTestExec;
	
	@ManyToOne
	@JoinColumn(name = "CDSTUDENT", nullable = false)
	private Student student;
	
	@OneToOne
	@JoinColumn(name = "CDTEST", nullable = false)
	private Test test;

	@Deprecated
	public TestExecution() {
	}
	
	public TestExecution(Test cdTest, Student cdStudent) {
		this.setTest(cdTest);
		this.setStudent(cdStudent);
	}

	public Long getCode() {
		return cdTestExec;
	}

	public void setCode(Long cdTestExec) {
		this.cdTestExec = cdTestExec;
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public Test getTest() {
		return test;
	}

	public void setTest(Test test) {
		this.test = test;
	}
}
