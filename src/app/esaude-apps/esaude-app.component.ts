import { Component, OnInit, Input } from '@angular/core';

import { EsaudeApp } from '../models/esaude-app';
import { EsaudeAppService } from '../service/esaude-apps.service';

@Component({
  selector: 'esaude-admin-app',
  templateUrl: './esaude-app.component.html',
})
export class EsaudeAppComponent implements OnInit {

  @Input() app: EsaudeApp;

  ngOnInit(): void {
  }
}
