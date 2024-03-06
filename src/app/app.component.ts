import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less', '../fonts/fonts.css']
})
export class AppComponent implements OnInit {
  title = 'landing-its';

  timerId = setInterval(() => this.changeProps(), 1000);

  ngOnInit() {
    this.timerId;
  }

  element: any;
  rect: any;
  changeProps() {
    this.element = document.getElementById('truck');
    this.rect = this.element?.getBoundingClientRect();
   
    if (this.rect.top <= 750) {
      document.getElementById('truck')?.style
        .setProperty("background-position", `calc(100% + 70px)`);
      document.getElementById('light')?.style
        .setProperty("background-position", `105px 175px`);
      clearInterval(this.timerId);
    }
  }
}
