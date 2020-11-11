import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  URL="http://localhost:3000/student"

  constructor(private _http:HttpClient) { }
  getstudentdata(){

    return this._http.get(this.URL)
  }
  addStudentDetails(data)
  {
    return this._http.post(this.URL,data);

  }
  getCurrentdata(id)
  {

    return this._http.get(`${this.URL}/${id}`)
  }
  update(id,data){
    return this._http.put(`${this.URL}/${id}`,data)

  }
  deleteDetails(id){
    // return this._http.delete(`${this.URL}/${id}`)
    return this._http.delete(`${this.URL}/${id}`).toPromise();

  }
  // deleteProduct = function(id) {
  //   if(confirm("Are you sure?")) {
  //     const url = `${"http://localhost:5555/products"}/${id}`;
  //     return this.http.delete(url, ).toPromise()
  //       .then(() => {
  //       this.fetchData();
  //       })
  //   }
  // }
}
