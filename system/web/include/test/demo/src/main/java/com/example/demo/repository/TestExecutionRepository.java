package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.TestExecution;

public interface TestExecutionRepository extends JpaRepository<TestExecution, Long> {

}
