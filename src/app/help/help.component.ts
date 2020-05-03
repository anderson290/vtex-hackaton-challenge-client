import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  types: any = [
    {icon: 'remove_red_eye', path:'/conference', name:'Visual'},
    {icon: 'accessibility_new', path:'/conference', name:'Idade Avançada'},
    {icon: 'face', path:'/conference', name:'Dislexia'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
