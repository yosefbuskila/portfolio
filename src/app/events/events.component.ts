import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  // @Input() limited;
  selected=-1;
  images:string[]=['events.PNG','eventSmartPhone.PNG','eventSmartPhone2.PNG','manage.PNG']
  constructor() {   }
  
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.selected=-1;
  }
}
  ngOnInit() {
  }

}
