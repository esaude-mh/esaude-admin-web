import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Backups, BackupResponse } from './backups';

@Injectable()
export class BackupService {
  private esaudeAdminBackupUrl = 'http://localhost:2580/backup';

  constructor(private http: Http) { }

  getBackups(): Promise<Backups> {
    return this.http.get(this.esaudeAdminBackupUrl)
      .toPromise()
      .then(response => response.json() as Backups)
      .catch(this.handleError);
  }

  getBackup(filename: string): void {
    window.location.href = this.esaudeAdminBackupUrl + '/' + filename;
  }

  createBackup(): Promise<BackupResponse> {
    return this.http.post(this.esaudeAdminBackupUrl, { /* no body */ })
      .toPromise()
      .then(response => response.json() as BackupResponse)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
