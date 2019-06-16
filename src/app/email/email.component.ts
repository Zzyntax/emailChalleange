import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
})
export class EmailComponent implements OnInit {

  constructor() { }
  rows = []
  checked = false
  rowIndex = null
  data = [
    {
      "from" : {
      "name" : "Now TV",
      "icon_name":"NT",
      "permissionColor" : "info",
      "email" : "nowtv@test.com",
      "time" : "11:50"
    },
      "subject" : "Grab another Pass, you need to be watching this...",
      "body" : "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright."
    },
    {
      "from" : {
      "name" : "Investopedia Terms",
      "icon_name":"IT",
      "permissionColor" : "success",
      "email" : "investopedia@test.com",
      "time" : "12:50"
    },
      "subject" : "What is 'Fibonanci Retracement'?",
      "body" : "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher)."
    },
    {
      "from" : {
      "name" : "ASICS Greater Manchester Marathon ",
      "icon_name":"AG",
      "permissionColor" : "warning",
      "email" : "events@human-race.co.uk",
      "time" : "13:04"
    },
      "subject" : "Your chance to take on the marathon",
      "body" : "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?"
    },
    {
      "from" : {
      "name" : "ClassDojo",
      "icon_name":"CD",
      "permissionColor" : "danger",
      "email" : "name011@iscb.com",
      "time" : "14:05"
    },
      "subject" : "Mr. Caines shared 4 new photos!",
      "body" : "Farmers' suffering continues with bottoming prices despite B2bn in government support."
    },
    {
      "from" : {
      "name" : "Twitter",
      "icon_name":"TW",
      "permissionColor" : "info",
      "email" : "name012@iscb.com",
      "time" : "15:05"
    },
      "subject" : "Follow Socko, Manchester United and ThaiPBS ",
      "body" : "Twitter was created in March 2006 by Jack Dorsey, Noah Glass, Biz Stone, and Evan Williams and launched in July of that year."
    },
    {
      "from" : {
      "name" : "ClassDojo",
      "icon_name":"CJ",
      "permissionColor" : "danger",
      "email" : "name011@iscb.com",
      "time" : "16:05"
    },
    "subject" : "Mr. Caines shared new post",
      "body" : "On The Face Thailand, Kulchaya 'Candy' Tansiri proved that a transgender woman can compete at the highest level."
    },
];

  showTool()
  {
    return true;
  }

  ngOnInit() {
  //console.log("rowIndex-->",this.rowIndex)
  }

}
