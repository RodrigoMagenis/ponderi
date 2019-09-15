package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "STUDENT")
public class Student {

	@Id
	@Column(name = "CDSTUDENT", nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cdStudent;
	
	@Column(name = "IDSTUDENT", nullable = false)
	private String idStudent;
	
	@Column(name = "NMSTUDENT", nullable = false)
	private String nmStudent;
	
	public Student() {
	}
	
	public Student(String idStudent, String nmStudent) {
		this.setId(idStudent);
		this.setName(nmStudent);
	}

	public Long getCode() {
		return this.cdStudent;
	}

	public void setCode(Long code) {
		this.cdStudent = code;
	}

	public String getId() {
		return this.idStudent;
	}

	public void setId(String id) {
		this.idStudent = id;
	}

	public String getName() {
		return this.nmStudent;
	}

	public void setName(String name) {
		this.nmStudent = name;
	}
}
