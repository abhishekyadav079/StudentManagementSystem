import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-update-student-details',
  templateUrl: './update-student-details.component.html',
  styleUrls: ['./update-student-details.component.css']
})
export class UpdateStudentDetailsComponent implements OnInit {
  alert:boolean=false;
  
  editdetails=new FormGroup({
    name: new FormControl(),
    standard:new FormControl(),
    age :new FormControl(),
    address:new FormControl()

  });


  constructor(private stu:CommonService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.stu.getCurrentdata(this.router.snapshot.params.id).subscribe((result)=>{
      this.editdetails=new FormGroup({
        name: new FormControl(result['name']),
        standard:new FormControl(result['standard']),
        age :new FormControl(result['age']),
        address:new FormControl(result['address'])
    
      });
    
      
    })
    
  }
  updateDetails(){

    this.stu.update(this.router.snapshot.params.id,this.editdetails.value).subscribe((result)=>{

       this.alert=true;
    })
  }
  closeAlert(){
    this.alert=false;
  }

}
