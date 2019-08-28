import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list1=['Angular8', 'NodeJS', 'Express', 'MySql', 'MongoDB', 'Html', 'CSS', 'Java script'];
  list2=['Php', 'Microsoft access', 'Excel', 'Java', 'Git', 'Android', 'Microsoft Azure']
  constructor() { }

  ngOnInit() {
  }

}
