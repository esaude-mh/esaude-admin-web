import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MdlModule } from '@angular-mdl/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { EsaudeAppComponent } from './esaude-apps/esaude-apps.component';
import { EsaudeAppDetailComponent } from './esaude-apps/esaude-app-detail.component';
import { NativeUpgradeComponent } from './native-upgrade/native-upgrade.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EsaudeAppComponent,
    EsaudeAppDetailComponent,
    NativeUpgradeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MdlModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
