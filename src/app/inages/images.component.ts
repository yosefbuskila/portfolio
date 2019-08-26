import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  @Input() images:string[];
  selected=-1;
  // images:string[]=['events.PNG','eventSmartPhone.PNG','eventSmartPhone2.PNG','manage.PNG']
  constructor() {   }
  
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.selected=-1;
  }
}
  ngOnInit() {
  }

}
