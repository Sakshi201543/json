import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private jsonData: Array<object> = [];
  private i: number = 1;
  private rowClicked: boolean = false;
  private clickedUser: object;

  constructor(private http: HttpClient){}
  
  ngOnInit(){
    this.http.get('https://jsonplaceholder.typicode.com/users?_limit=1')
    .subscribe(
      (data: Array<object>) => {
        this.jsonData = data;
      });

    // Hit api after every 10 seconds
    setInterval(() => this.http.get('https://jsonplaceholder.typicode.com/users?_limit='+this.i++)
    .subscribe(
      (data: Array<object>) => {
        this.jsonData = data;
      }), 10000);
  }

  onClick(data){
    this.rowClicked = true;
    this.clickedUser = data;
  }
}