import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from './models/student.model';
import { StudentService } from '../services/student.service';


@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css']
})
export class FormStudentComponent implements OnInit {

  student!: Student; 
  studentList!: Student[];
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.student = new Student();
  }

  onSubmitForm(form: NgForm) {
      console.log(form.value);
      this.student = form.value;
      this.student.id = new Date().getTime().toString();
      this.studentService.saveStudent(this.student);
      form.resetForm();
  }
  
}
