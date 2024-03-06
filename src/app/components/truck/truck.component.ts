import { Component } from '@angular/core';

@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.less', './running-string.less']
})
export class TruckComponent {
  text = `Мы - команда предпринимателей - создали компании каждый по своему направлению. 
  Мы получили в найме огромный опыт и решили идти дальше, идти выше. 
  Задача нашей команды - сделать жизнь водителя в дороге более комфортной и безопасной.`;
}
