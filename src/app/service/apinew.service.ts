import { Injectable } from '@angular/core';
// at first imort httpclient
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { todo } from '../modal/todo';
@Injectable({
  providedIn: 'root'
})
export class ApinewService {

  constructor(private httpclient: HttpClient) { }

  // get all todo
  alltodo(): Observable<todo> {
    return this.httpclient.get<todo>('https://todolist-api.glitch.me/api/todos');
  }
  // post methode
  create(newtodo: any): Observable<todo> {
    return this.httpclient.post<todo>('https://todolist-api.glitch.me/api/todo', newtodo);
  }
  // for date for post method
  getdate() {

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    let date = new Date();
    let d = date.getDate();
    let m = monthNames[date.getMonth()];
    let y = date.getFullYear();
    let h = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let ft = '';
    if (h > 12) {
      ft = 'PM'
    }
    else {
      ft = 'AM'
    }
    let custom = d + '-' + m + '-' + y + ' ' + h + ':' + min + ':' + sec + ' ft';

    return custom;
  }
  // for put methode
  updatetodo(newtodo: todo, id: any): Observable<todo> {
    return this.httpclient.put<todo>('https://todolist-api.glitch.me/api/todo/' + id, newtodo);
  }
  
  //for delete todo
  delettodo(id:any):Observable<todo>{
    return this.httpclient.delete<todo>(' https://todolist-api.glitch.me/api/todo/'+id);
  }
  }


