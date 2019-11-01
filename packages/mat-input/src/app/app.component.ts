import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'mat-input',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Input() type: string;
  @Input() placeholder: string;
  @Input() value: string;

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.type = this.commonService.getType(this.type);
    this.placeholder = this.commonService.getValue(this.value);
    this.value = this.commonService.getPlaceholder(this.placeholder);
  }
}