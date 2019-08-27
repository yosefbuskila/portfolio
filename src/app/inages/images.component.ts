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
  
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if(this.selected<this.images.length-1 && this.selected>-1 &&  event.keyCode==37) this.selected++;
    if(this.selected>0 && event.keyCode==39) this.selected--;
    console.log('key code',event.keyCode)
    if (event.keyCode === 27) {
      this.selected=-1;
  }
}
  ngOnInit() {
  }

}
