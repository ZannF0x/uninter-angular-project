import { Component, OnInit } from '@angular/core';
import { Student } from '../form-student/models/student.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList!: Student[];
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentList = this.studentService.getAllStudents();
  }

}
