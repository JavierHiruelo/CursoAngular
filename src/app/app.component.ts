import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationTopbarComponent } from './navigation-topbar/navigation-topbar.component';
import { PageTopComponent } from './page-top/page-top.component';
import { ContentBlockComponent } from './content-block/content-block.component';
import { BottomFooterComponent } from './bottom-footer/bottom-footer.component';
import { CookiesNotificationComponent } from './cookies-notification/cookies-notification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationTopbarComponent,
    PageTopComponent,
    ContentBlockComponent,
    BottomFooterComponent,
    CookiesNotificationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularWeb';
}
