import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  @Input() limited;
  selected='';
  images:string[]=['events.PNG','eventSmartPhone.PNG','eventSmartPhone2.PNG','manage.PNG']
  constructor() {
    // this.expanded=this.expanded||true;
    // console.log('limited',this.limited)
   }
  
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.selected='';
  }
}
  // onX(event){
  //   this.selected='';
  //   event.stopImmediatePropagation();
  // }
  // onSelect(img){
  //   this.selected=img;
  // }
  ngOnInit() {
  }

}
