import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { EsaudeApp } from './esaude-app';
import { EsaudeAppService } from './esaude-apps.service';

@Component({
  selector: 'esaude-admin-app-detail',
  templateUrl: './esaude-app-detail.component.html',
  providers: [EsaudeAppService]
})
export class EsaudeAppDetailComponent implements OnInit {

  title = 'App Detail';
  app: EsaudeApp;

  constructor(
    private appService: EsaudeAppService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.appService.getApp(+params['id']))
      .subscribe(app => this.app = app);
  }

  goBack(): void {
    this.location.back();
  }
}
