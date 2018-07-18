import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { About } from './about';
import { ABOUT } from './mock-about';

//import 'rxjs/add/operator/toPromise';

@Injectable()
export class AboutService {
  private esaudeAdminAboutUrl = 'http://localhost:2580/about';

  constructor(private http: Http) { }

  getAbout(): Promise<About> {
    return this.http.get(this.esaudeAdminAboutUrl)
      .toPromise()
      .then(response => response.json() as About)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
