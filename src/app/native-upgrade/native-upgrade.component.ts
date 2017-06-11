import { Component, OnInit } from '@angular/core';

import { TestRunningComponent } from './test-running/test-running.component';

@Component({
  selector: 'esaude-admin-native-upgrade',
  templateUrl: './native-upgrade.component.html',
  styleUrls: ['./native-upgrade.component.css']
})
export class NativeUpgradeComponent implements OnInit {

  title = 'Native Upgrade';

  constructor() { }

  ngOnInit() {
  }

}
