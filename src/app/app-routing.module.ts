import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { EsaudeAppComponent } from './esaude-apps/esaude-apps.component';
import { EsaudeAppDetailComponent } from './esaude-apps/esaude-app-detail.component';
import { NativeUpgradeComponent } from './native-upgrade/native-upgrade.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'apps', component: EsaudeAppComponent },
  { path: 'app/:id', component: EsaudeAppDetailComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
