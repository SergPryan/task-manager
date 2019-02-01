package com.example.taskmanager.repository;

import com.example.taskmanager.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.Id;

public interface TaskRepository extends JpaRepository<Task, Id> {
}
