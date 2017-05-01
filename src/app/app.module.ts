// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NumeralPipe } from './numeral.pipe';

// material design modules
import {
  MdToolbarModule,
  MdButtonModule,
  MdListModule,
  MdIconModule,
  MdTabsModule,
  MdCardModule,
  MdProgressSpinnerModule
} from '@angular/material';

// esaude admin components
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BackupsComponent } from './backups/backups.component';
import { BackupComponent } from './backups/backup.component';
import { EsaudeAppComponent } from './esaude-apps/esaude-apps.component';
import { EsaudeAppDetailComponent } from './esaude-apps/esaude-app-detail.component';
import { NativeUpgradeComponent } from './native-upgrade/native-upgrade.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BackupsComponent,
    BackupComponent,
    EsaudeAppComponent,
    EsaudeAppDetailComponent,
    NativeUpgradeComponent,
    NumeralPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,

    // material design
    MdToolbarModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdTabsModule,
    MdCardModule,
    MdProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
