import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('a1') a1: ElementRef<HTMLInputElement>;
  title = 'my';
  ngOnInit() {
    this.a1.nativeElement.focus();
  }
  submit() {}
}
