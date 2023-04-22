import { Component, OnInit } from '@angular/core';
import { todo } from '../modal/todo';
import { ApinewService } from '../service/apinew.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public alldata: any = []; // for store all todo (mainly get methode)
  constructor(private api: ApinewService) {
    this.newtodo = new todo('angular sep', 'september', this.api.getdate()); // for post methode we create instance of new todo
  }

  ngOnInit(): void {
    this.ALLTODO();
  }
  // get methode
  ALLTODO() {
    return this.api.alltodo().subscribe((item: any) => {
      this.alldata = item;
      console.log(this.alldata);
    });
  }


  // for post methode
  public newtodo: any = {} as todo;
  CREATETODO() {
    return this.api.create(this.newtodo).subscribe((item: any) => {
      console.log(item);
      alert(item.msg);
      this.ALLTODO();
    })
  }



// for select todo
public selectedtodo:any=[];
select(a:any){
  this.selectedtodo=a;
  this.newtodo=new todo(this.selectedtodo.title,this.selectedtodo.description,this.api.getdate());
  console.log(this.selectedtodo);
}
  // for Put methode

  UPDATE(){
    return this.api.updatetodo(this.newtodo,this.selectedtodo._id).subscribe((item:any)=>{
      console.log(item);
      this.ALLTODO();
      alert(item.msg);
    });
  }

  //DELET todo
  DELETE(){
    return this.api.delettodo(this.selectedtodo._id).subscribe((item:any)=>{
   console.log(item);
   this.ALLTODO();
   alert(item.msg);
    })
  }
}


