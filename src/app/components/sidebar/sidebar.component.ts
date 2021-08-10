import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public routes = [
    { path: 'home', icon: 'home', legend: 'Homepage' },
    { path: 'devices', icon: 'devices', legend: 'Device Management' },
    { path: 'categories', icon: 'category', legend: 'Category Management' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
