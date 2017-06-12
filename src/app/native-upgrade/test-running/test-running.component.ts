import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { EsaudeApp } from '../../models/esaude-app';
import { EsaudeAppService } from '../../service/esaude-apps.service';

@Component({
  selector: 'esaude-admin-test-running',
  templateUrl: './test-running.component.html',
  providers: [ EsaudeAppService ]
})
export class TestRunningComponent implements OnInit {

  platformInstalled: boolean;
  platformInstalledTestRun = false;
  testRunningComplete = false;
  @Output() testComplete = new EventEmitter<boolean>();

  constructor(private appService: EsaudeAppService) { }

  ngOnInit() {
  }

  checkPlatformInstalled() {
    this.appService.getApps().then(apps => {
      let matches = apps.filter((el) => {
        return el.id === 'platform';
      });

      if(matches.length > 0) {
        this.platformInstalled = true;
      } else {
        this.platformInstalled = false;
        this.testRunningComplete = true;
        this.testComplete.emit(true);
      }

      this.platformInstalledTestRun = true;
    });
  }
}
