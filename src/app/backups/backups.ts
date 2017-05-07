export enum BackupType {
  Database,
  Modules,
  Application,
  Bundle
}

export class BackupResponse {
  message: string;
}

export class Backup {
  filename: string;
  size: number;
  created: string;
  type: BackupType;
}

export class Backups {
  database: Backup[];
}
