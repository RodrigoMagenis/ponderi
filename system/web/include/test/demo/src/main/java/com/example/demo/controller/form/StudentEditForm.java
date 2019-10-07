package com.example.demo.controller.form;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.example.demo.model.Student;
import com.example.demo.repository.StudentRespository;

public class StudentEditForm {
	
	@NotNull
	private Long cdStudent;

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
	
	public Long getCdStudent() {
		return cdStudent;
	}
	public void setCdStudent(Long cdStudent) {
		this.cdStudent = cdStudent;
	}

	public Student updateStudent(StudentRespository studentRepository) {
		Student student = studentRepository.getOne(this.getCdStudent());
		student.setId(this.getIdStudent());
		student.setName(this.getNmStudent());
		
		return student;
	}

}
