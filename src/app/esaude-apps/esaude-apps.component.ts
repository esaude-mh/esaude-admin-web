import { Component, OnInit } from '@angular/core';

import { EsaudeApp } from './esaude-app';
import { EsaudeAppService } from './esaude-apps.service';

@Component({
  selector: 'esaude-admin-apps',
  templateUrl: './esaude-apps.component.html',
  providers: [ EsaudeAppService ]
})
export class EsaudeAppsComponent implements OnInit {

  title = 'Apps';
  apps: EsaudeApp[];

  constructor(private appService: EsaudeAppService) { }

  ngOnInit(): void {
    this.getApps();
  }

  getApps(): void {
    this.appService.getApps().then(apps => {
      this.apps = apps;
    });
  }
}
