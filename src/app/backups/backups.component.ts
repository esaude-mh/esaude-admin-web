import { Component, OnInit } from '@angular/core';

import { Backups } from './backups';
import { BackupService } from './backup.service';
import { BackupComponent } from './backup.component';

@Component({
  selector: 'esaude-admin-backups',
  templateUrl: './backups.component.html',
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }`],
  providers: [BackupService]
})
export class BackupsComponent implements OnInit {

  title = 'Backups';
  backups: Backups;
  creating = false;
  error: any;

  constructor(private backupService: BackupService) { }

  ngOnInit(): void {
    this.getBackups();
  }

  getBackups(): void {
    this.backupService.getBackups().then(backups => {
      this.backups = backups;
    });
  }

  setCreateButtonLoading(): void {

  }

  createBackup(): void {

    this.creating = true;

    this.backupService.createBackup().then(response => {
      this.getBackups();
      this.creating = false;
    }).catch(err => {
      this.creating = false;
    });
  }
}
