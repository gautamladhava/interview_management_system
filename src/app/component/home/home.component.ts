import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
 
  curr_tab:string = "Admin Portal"
  getvalue(name: string){
    this.curr_tab = name
    document.body.classList.remove("active")
  }



  close(){
    document.body.classList.remove('active');
  }
  open(){
    document.body.classList.add('active');
  }
  
}
