import { Injectable } from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';
import { Student } from '../form-student/models/student.model';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private localStorageService: LocalStorageService) { }

  saveStudent(student: Student) {
    try {
      console.log("saveStudent: objectSaved");
      this.localStorageService.set(student.id, student)
    } catch (err) {
      console.log("saveStudent: objectUnsaved_error= " + err);
    }
  }

  private getStudent(studentId: string): Student {
    console.log("getStudent: id=" + studentId);
    return this.localStorageService.get(studentId);
  }

  getAllStudents(): Student[] {
    return this.localStorageService.keys().map(id => this.getStudent(id));
  }
}
