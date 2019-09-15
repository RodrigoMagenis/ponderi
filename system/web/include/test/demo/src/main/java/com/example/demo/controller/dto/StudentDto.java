package com.example.demo.controller.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.example.demo.model.Student;

public class StudentDto {
	private Long cdStudent;
	private String idStudent;
	private String nmStudent;
	
	public StudentDto(Student student) {
		super();
		this.setCdStudent(student.getCode());
		this.setIdStudent(student.getId());
		this.setNmStudent(student.getName());
	}

	public static List<StudentDto> convert(List<Student> students) {
		return students.stream().map(StudentDto::new).collect(Collectors.toList());
	}

	public Long getCdStudent() {
		return cdStudent;
	}

	public void setCdStudent(Long cdStudent) {
		this.cdStudent = cdStudent;
	}

	public String getIdStudent() {
		return idStudent;
	}

	public void setIdStudent(String idStudent) {
		this.idStudent = idStudent;
	}

	public String getNmStudent() {
		return nmStudent;
	}

	public void setNmStudent(String nmStudent) {
		this.nmStudent = nmStudent;
	}
}
