package com.example.demo.controller.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.example.demo.model.Student;
import com.example.demo.model.Test;
import com.example.demo.model.TestExecution;

public class TestExecutionDto {
	private Long cdTestExec;
	private Test test;
	private Student student;
	
	public TestExecutionDto(TestExecution testExecution) {
		super();
		this.setCdTestExec(testExecution.getCode());
		this.setTest(testExecution.getTest());
		this.setStudent(testExecution.getStudent());
	}

	public static List<TestExecutionDto> convert(List<TestExecution> testsExecution) {
		return testsExecution.stream().map(TestExecutionDto::new).collect(Collectors.toList());
	}

	public Long getCdTestExec() {
		return cdTestExec;
	}

	public void setCdTestExec(Long cdTestExec) {
		this.cdTestExec = cdTestExec;
	}

	public Test getTest() {
		return test;
	}

	public void setTest(Test test) {
		this.test = test;
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student list) {
		this.student = list;
	}
}
