import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-slider-3',
  animations: [
    trigger('arrows-hover', [
      state('show',
      style({
        opacity: 1
      })),
      state('hide-left-arrow',
      style({
        transform: 'translateX(-20px)',
        opacity: 0
      })),
      state('hide-right-arrow',
      style({
        transform: 'translateX(20px)',
        opacity: 0
      })),
      transition('show => hide-left-arrow', [animate('0.5s')]),
      transition('show => hide-right-arrow', [animate('0.5s')]),
      transition('hide-left-arrow => show', [animate('0.5s')]),
      transition('hide-right-arrow => show', [animate('0.5s')])
  ]),
  trigger('trigger-move-frames', [
    state('state-0',
    style({
      transform: 'translateX(0px)'
    })),
    state('state-1',
    style({
      transform: 'translateX(-337.5px)'
    })),
    state('state-2',
    style({
      transform: 'translateX(-675px)'
    }))
  ]),
  ],
  templateUrl: './slider-3.component.html',
  styleUrl: '../slider/slider.component.less'
})
export class Slider3Component {
  arrowsHover = false;
  showHideArrows() {
    this.arrowsHover = !this.arrowsHover;
  }
  people = [
    {
      id: 'gerbert',
      name: 'Герберт Ромберг',
      position: 'Основатель компании ITS Group, консалтинг'
    },
    {
      id: 'victoria',
      name: 'Виктория Дементьевская',
      position: 'Руководитель Международного направления'
    },
    {
      id: 'oxana',
      name: 'Оксана Костяева',
      position: 'Директор IT-компании, аккредитованной минцифрой'
    },
    {
      id: 'granush',
      name: 'Грануш Хачатрян',
      position: 'Генеральный директор, агрегатор автомобильного сервиса'
    },
    {
      id: 'denis',
      name: 'Денис Задорожный',
      position: 'Генеральный директор, сеть придорожных сервисов в России'
    }
  ]

  move = true;
  move1 = false;
  move2 = false;

  moveR() {
    if (this.move) {
      this.move = false;
      this.move1 = true;
    } else if (this.move1) {
      this.move1 = false;
      this.move2 = true;
    }
  }
  moveL() {
    if (this.move2) {
      this.move2 = false;
      this.move1 = true;
    } else if (this.move1) {
      this.move1 = false;
      this.move = true;
    }
  }
}
