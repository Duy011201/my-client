import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http.get('/assets/data/blog.json').subscribe(_ => {
      console.log(_);
    });
  }
}

