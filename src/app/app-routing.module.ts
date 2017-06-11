import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { BackupsComponent } from './backups/backups.component';
import { EsaudeAppsComponent } from './esaude-apps/esaude-apps.component';
import { NativeUpgradeComponent } from './native-upgrade/native-upgrade.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'backups', component: BackupsComponent },
  { path: 'native-upgrade', component: NativeUpgradeComponent },
  { path: 'apps', component: EsaudeAppsComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
