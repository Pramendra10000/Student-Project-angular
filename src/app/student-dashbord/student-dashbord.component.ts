import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { StudentModel } from './student.model';

@Component({
  selector: 'app-student-dashbord',
  templateUrl: './student-dashbord.component.html',
  styleUrls: ['./student-dashbord.component.scss']
})
export class StudentDashbordComponent {

  studentValue!: FormGroup;

  Studentobj: StudentModel = new StudentModel;

  StudentList: any = [];

  btnSaveShow: boolean = true;
  btnUpdateShow: boolean = false;

  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.studentValue = this.formBuilder.group({
      name: [''],
      class: [''],
      email: [''],
      mobile: ['']
    })
    this.getStudent();

  }

  AddStudent() {
    this.Studentobj.name = this.studentValue.value.name;
    this.Studentobj.class = this.studentValue.value.class;
    this.Studentobj.email = this.studentValue.value.email;
    this.Studentobj.mobile = this.studentValue.value.mobile;

    this.api.postStudent(this.Studentobj).subscribe({

      next: (v) => {
        console.log(v)

      },
      error: (e) => {
        console.log(e)
        alert("Error")
      },

      complete: () => {

        console.log('Student record added!')
        alert("Student record added!")
        this.getStudent();
        this.studentValue.reset();
      }

    })

  }

  getStudent() {
    this.api.getStudent().subscribe(res => {
      this.StudentList = res;

    })
  }

  deleteStudent(data: any) {

    this.api.deleteStudent(data.id).subscribe({
      next: (v) => {
        console.log(v)

      },
      error: (e) => {
        console.log(e)
        alert("Error")
      },

      complete: () => {

        console.log('Student record deleted!')
        alert("Student record deleted!")
        this.getStudent();
        this.studentValue.reset();
      }
    })
  }


  editStudent(data: any) {

    this.studentValue.controls["name"].setValue(data.name);
    this.studentValue.controls["class"].setValue(data.class);
    this.studentValue.controls["email"].setValue(data.email);
    this.studentValue.controls["mobile"].setValue(data.mobile);
    this.Studentobj.id = data.id;
    this.showUpdate();


  }


  UpdateStudent() {

    this.Studentobj.name = this.studentValue.value.name;
    this.Studentobj.class = this.studentValue.value.class;
    this.Studentobj.email = this.studentValue.value.email;
    this.Studentobj.mobile = this.studentValue.value.mobile;

    this.api.putStudent(this.Studentobj, this.Studentobj.id).subscribe({
      next: (v) => {
        console.log(v)

      },
      error: (e) => {
        console.log(e)
        alert("Error")
      },

      complete: () => {

        console.log('Student record updated!')
        alert("Student record updated!")
        this.getStudent();
        this.studentValue.reset();
        this.showSave();
        this.Studentobj.id = 0;
      }
    })
  }


  showSave() {
    this.btnSaveShow = true;
    this.btnUpdateShow = false;
  }

  showUpdate() {
    this.btnSaveShow = false;
    this.btnUpdateShow = true;
  }


}



