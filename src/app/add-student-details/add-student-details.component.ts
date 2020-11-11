import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-student-details',
  templateUrl: './add-student-details.component.html',
  styleUrls: ['./add-student-details.component.css']
})
export class AddStudentDetailsComponent implements OnInit {
  alert:boolean=false;
  addStudent=new FormGroup({

    name:new FormControl(''),
    standard:new FormControl(''),
    age:new FormControl(''),
    address:new FormControl('')
  })
  constructor(private stu:CommonService) { }

  ngOnInit(): void {
  }
  createStudent()
  {
   // console.log(this.addStudent.value)
   this.stu.addStudentDetails(this.addStudent.value).subscribe((result)=>{
    this.alert=true;
    this.addStudent.reset({})
    console.log("Get data From Service",result)
   })
  }
  closeAlert()
  {
    this.alert=false;
  }

}
