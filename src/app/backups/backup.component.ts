import { Component, Input } from '@angular/core';

import { Backup } from './backups';
import { BackupService } from './backup.service';

@Component({
  selector: 'esaude-admin-backup',
  templateUrl: './backup.component.html',
  providers: [BackupService]
})
export class BackupComponent {

  @Input() backup: Backup;
  error: any;

  constructor(private backupService: BackupService) { }

  downloadBackup(): void {
    this.backupService.getBackup(this.backup.filename);
  }
}
