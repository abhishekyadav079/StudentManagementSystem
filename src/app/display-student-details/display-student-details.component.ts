import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
import{Observable} from 'rxjs';

@Component({
  selector: 'app-display-student-details',
  templateUrl: './display-student-details.component.html',
  styleUrls: ['./display-student-details.component.css']
})
export class DisplayStudentDetailsComponent implements OnInit {
  public collection:any
  http: any;
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
   this.getData();
  }
  getData(){
    this.commonService.getstudentdata().subscribe((result)=>{
      this.collection=result
      console.log(this.collection)

    });
  }
  del(id)
  {
    if(confirm("Are you sure?")) {
      this.commonService.deleteDetails(id).then(()=>{
    this.getData();
  })

  }
  }
  }
