package com.example.demo.controller.form;

import javax.validation.constraints.NotNull;
import com.example.demo.repository.StudentRespository;

public class StudentDeleteForm {
	
	@NotNull
	private Long cdStudent;
	
	public Long getCdStudent() {
		return cdStudent;
	}
	public void setCdStudent(Long cdStudent) {
		this.cdStudent = cdStudent;
	}

	public void deleteStudent(StudentRespository studentRepository) {
		studentRepository.deleteById(this.getCdStudent());
	}

}
