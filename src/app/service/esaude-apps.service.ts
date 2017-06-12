import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { EsaudeApp } from '../models/esaude-app';

@Injectable()
export class EsaudeAppService {
  private esaudeAppUrl = 'http://localhost:2580/app';

  constructor(private http: Http) { }

  getApps(): Promise<EsaudeApp[]> {
        return this.http.get(this.esaudeAppUrl)
          .toPromise()
          .then(response => response.json() as EsaudeApp[])
          .catch(this.handleError);
  }

  getApp(id: string): Promise<EsaudeApp> {
    return this.getApps()
      .then(apps => apps.find(app => app.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
