import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'eSaude Admin';
  pages = [
      { title: 'Apps', route: '/apps' },
      { title: 'Backups', route: '/backups' },
      { title: 'Native Upgrade', route: '#' },
      { title: 'About', route: '/about' },
  ];
}
