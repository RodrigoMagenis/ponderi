package com.example.demo.config.validation;

public class FormErrorDto {
	private String element;
	private String errorMessage;
	
	public FormErrorDto(String element, String error) {
		super();
		this.element = element;
		this.errorMessage = error;
	}

	public String getElement() {
		return element;
	}

	public String getErrorMessage() {
		return errorMessage;
	}
	
}
