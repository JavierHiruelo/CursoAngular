import { Component } from '@angular/core';

@Component({
  selector: 'navigation-topbar',
  standalone: true,
  templateUrl: './navigation-topbar.component.html',
  styleUrl: './navigation-topbar.component.css'
})
export class NavigationTopbarComponent {

  constructor() { }

  ngOnInit(): void { }

  site_name: string = 'Second Brain App'

}
