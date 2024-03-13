import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less', '../fonts/fonts.css']
})
export class AppComponent implements OnInit {
  title = 'landing-its';

  timerId = setInterval(() => this.tryMoveTruck(), 1000);

  ngOnInit() {
    this.checkVisibility();
    this.timerId;
  }

  truckElement: any;
  truckRect: any;
  tryMoveTruck() {
    this.truckElement = document.getElementById('truck');
    this.truckRect = this.truckElement?.getBoundingClientRect();
   
    if (this.truckRect.top <= 750) {
      document.getElementById('truck')?.style
        .setProperty("background-position", `calc(100% + 70px)`);
      document.getElementById('light')?.style
        .setProperty("background-position", `105px 175px`);
      clearInterval(this.timerId);
    }
  }

  element: any;
  rect: any;
  checkVisibility() {
    setTimeout(() => {
      this.changeColor('about', 'about-comp');
      this.changeColor('our-team', 'our-team-comp');
      this.changeColor('group', 'group-comp');
      this.changeColor('contacts', 'contacts-comp');
    }, 500);
  }
  changeColor(el: string, comp: string) {
    this.element = document.getElementById(el);
    this.rect = this.element?.getBoundingClientRect();

    if ((this.rect.top-120) * (this.rect.bottom-120) <= 0) {
      document.getElementById(comp)?.style.setProperty("font-weight", `600`);
      document.getElementById(comp)?.style.setProperty("text-decoration-line", `underline`);
      document.getElementById(comp)?.style.setProperty("text-decoration-thickness", `2px`);
    } else {
      document.getElementById(comp)?.style.setProperty("font-weight", `400`);
      document.getElementById(comp)?.style.setProperty("text-decoration", `none`);
    }
  }
}
