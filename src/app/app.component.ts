import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { DataAccessService } from './data-access.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  private sub: Subscription;
  private jsonData = [];
  private i: number = 1;
  private j: number = 0;
  private rowClicked: boolean = false;
  private clickedUser: object;

  constructor(private http: HttpClient,
              private dataAccessService: DataAccessService){}
  
  ngOnInit(){
    this.sub = this.dataAccessService.getJsonData().subscribe((data: []) => {
                this.j++;
                console.log(data);
                this.jsonData = data;
                }
              );
  }

  onClick(data){
    this.rowClicked = true;
    this.clickedUser = data;
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}