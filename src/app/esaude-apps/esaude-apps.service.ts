import { Injectable } from '@angular/core';

import { EsaudeApp } from './esaude-app';
import { ESAUDE_APPS } from './mock-apps';

@Injectable()
export class EsaudeAppService {
  getApps(): Promise<EsaudeApp[]> {
    return Promise.resolve(ESAUDE_APPS);
  }

  getApp(id: number): Promise<EsaudeApp> {
    console.log('#1');
    return this.getApps()
      .then(apps => apps.find(app => app.id === id));
  }
}
