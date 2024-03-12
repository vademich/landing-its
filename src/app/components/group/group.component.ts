import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-group',
  animations: [
    trigger('tile-title', [
      state('hover',
      style({
        color: 'white'
      })
      )
    ]),
    trigger('tile-text', [
      state('hover',
      style({
        opacity: 1,
        transform: 'translateX(0px)'
      })
      )
    ]),
    trigger('tile-picture', [
      state('hover',
      style({
        transform: 'rotate(-8deg) scale(1.05) translateY(-10px) translateX(-5px)'
      })
      )
    ]),
    trigger('tile-shadow', [
      state('hover',
      style({
        transform: 'scale(1.05) translateX(-5px)'
      })
      )
    ]),
    trigger('tile-circle', [
      state('hover',
      style({
        opacity: 1,
        transform: 'scale(2.8) translateX(35px)'
      })
      )
    ])
  ],
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.less', './tiles.less']
})
export class GroupComponent {
  text = `IT, HR, бухгалтерия, налоги, юристы, тендеры, строители, недвижимость. Все к вашим услугам.
  Наши профессионалы готовы к решениям ваших самых непростых задач. По всей территории нашей страны 🇷🇺, а иногда и за её пределами 😉
  `;
  tiles = [
    {
      id: 'tile-1',
      title: 'ITS',
      text: 'консалтинг и управление группой компаний',
      picture: '../../../assets/images/tiles/ITS.png',
      circleColor: '../../../assets/images/tiles/circle-blue.svg',
      bgColor: '../../../assets/images/tiles/bg-blue.svg',
      hover: false
    },
    {
      id: 'tile-2',
      title: 'Development',
      text: 'недвижимость и аренда',
      picture: '../../../assets/images/tiles/MTS.png',
      circleColor: '../../../assets/images/tiles/circle-light-blue.svg',
      bgColor: '../../../assets/images/tiles/bg-light-blue.svg',
      hover: false
    },
    {
      id: 'tile-3',
      title: 'Агрегатор',
      text: 'автомобильного сервиса',
      picture: '../../../assets/images/tiles/M3.png',
      circleColor: '../../../assets/images/tiles/circle-light-green.svg',
      bgColor: '../../../assets/images/tiles/bg-light-green.svg',
      hover: false
    },
    {
      id: 'tile-4',
      title: 'Строительство',
      text: 'капитальные и некапитальные сооружения',
      picture: '../../../assets/images/tiles/MIR_STROY.png',
      circleColor: '../../../assets/images/tiles/circle-orange.svg',
      bgColor: '../../../assets/images/tiles/bg-orange.svg',
      hover: false
    },
    {
      id: 'tile-5',
      title: 'Капитал',
      text: 'бухгалтерия, налоги, аудит, безопасность',
      picture: '../../../assets/images/tiles/KAPITAL.png',
      circleColor: '../../../assets/images/tiles/circle-yellow.svg',
      bgColor: '../../../assets/images/tiles/bg-yellow.svg',
      hover: false
    },
    {
      id: 'tile-6',
      title: 'Тендеры',
      text: 'тендеры и договора',
      picture: '../../../assets/images/tiles/TENDER.png',
      circleColor: '../../../assets/images/tiles/circle-cyan.svg',
      bgColor: '../../../assets/images/tiles/bg-cyan.svg',
      hover: false
    },
    {
      id: 'tile-7',
      title: 'IT',
      text: 'аккредитованная минцифрой',
      picture: '../../../assets/images/tiles/IT.png',
      circleColor: '../../../assets/images/tiles/circle-violet.svg',
      bgColor: '../../../assets/images/tiles/bg-violet.svg',
      hover: false
    },
    {
      id: 'tile-8',
      title: 'Сеть ПК',
      text: 'придорожный сервис',
      picture: '../../../assets/images/tiles/PK.png',
      circleColor: '../../../assets/images/tiles/circle-navy.svg',
      bgColor: '../../../assets/images/tiles/bg-navy.svg',
      hover: false
    }
  ]

  onTile(tile: any) {
    tile.hover = !tile.hover;
  }
}
