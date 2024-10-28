import { Component } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.css'
})
export class SportsComponent {

  sports_teams = [
    {
      name: 'Edmonton Oilers',
      description: "The Edmonton Oilers are one of the most iconic teams in the NHL. Known for their dynasty in the 1980s with Wayne Gretzky, they have won five Stanley Cups. The team plays at Rogers Place in Edmonton.",
      logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Logo_Edmonton_Oilers.svg/240px-Logo_Edmonton_Oilers.svg.png'
    },
    {
      name: 'Calgary Flames',
      description: "The Calgary Flames are a professional hockey team based in Calgary. They won the Stanley Cup in 1989 and are fierce rivals with the Edmonton Oilers in the famed 'Battle of Alberta.' The Flames play at the Scotiabank Saddledome.",
      logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Calgary_Flames_logo.svg/281px-Calgary_Flames_logo.svg.png'
    },
    {
      name: 'Edmonton Elks',
      description: "The Edmonton Elks are a Canadian Football League team based in Edmonton. Known for their storied history, they have won numerous Grey Cup championships and play at Commonwealth Stadium.",
      logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Edmonton_Elks_logo.svg/158px-Edmonton_Elks_logo.svg.png'
    },
    {
      name: 'Calgary Stampeders',
      description: "The Calgary Stampeders, based in Calgary, are one of the most successful teams in the CFL. They have won multiple Grey Cup titles and play their home games at McMahon Stadium.",
      logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Calgary_Stampeders_logo.svg/320px-Calgary_Stampeders_logo.svg.png'
    },
    {
      name: 'Cavalry FC',
      description: "Cavalry FC is a professional soccer team based in Calgary, competing in the Canadian Premier League. The team plays at ATCO Field at Spruce Meadows and has been a competitive force since the league's inception in 2018.",
      logo_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Cavalry_FC_logo.svg/190px-Cavalry_FC_logo.svg.png'
    }
  ];

}
