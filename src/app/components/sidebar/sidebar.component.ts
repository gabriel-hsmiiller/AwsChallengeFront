import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() toggleMenu: EventEmitter<void> = new EventEmitter();
  @Input() stateMenu: boolean = false;

  public activeRoute: string = '';

  public routes = [
    { path: 'home', icon: 'home', legend: 'Homepage' },
    { path: 'devices', icon: 'devices', legend: 'Device Management' },
    { path: 'categories', icon: 'category', legend: 'Category Management' },
  ]

  constructor(private router: Router) {}

  public ngOnInit(): void { 
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
    ).subscribe((e: NavigationEnd) => {
      this.activeRoute = e.url.split('/')[1];
    });
  }

  public toggle(){
    this.toggleMenu.emit();
  }

}
