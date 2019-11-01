import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() type: string = "input";
  @Input() placeholder: string = "Favorite food";
  @Input() value: string = "";
}