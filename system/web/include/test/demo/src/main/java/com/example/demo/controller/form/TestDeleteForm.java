package com.example.demo.controller.form;

import javax.validation.constraints.NotNull;
import com.example.demo.repository.TestRepository;

public class TestDeleteForm {
	
	@NotNull
	private Long cdTest;
	
	public Long getCdTest() {
		return cdTest;
	}
	public void setCdTest(Long cdTest) {
		this.cdTest = cdTest;
	}

	public void deleteTest(TestRepository testRepository) {
		testRepository.deleteById(this.getCdTest());
	}
}
