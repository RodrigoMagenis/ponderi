package com.example.demo.controller.form;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.example.demo.model.Student;

public class StudentForm {
	@NotNull @NotEmpty
	private String idStudent;
	
	@NotNull @NotEmpty
	private String nmStudent;

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

	public Student convert() {
		return new Student(this.getIdStudent(), this.getNmStudent());
	}

}
