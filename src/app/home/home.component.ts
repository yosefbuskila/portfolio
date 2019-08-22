import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list1=['angular8', 'nodeJS', 'express', 'mySql', 'mongoDB', 'html', 'css', 'java script'];
  list2=['php', 'Microsoft access', 'excel', 'java', 'git', 'android', 'Microsoft Azure']
  constructor() { }

  ngOnInit() {
  }

}
