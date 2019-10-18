import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppInfoDialogComponent } from './modules/scan/components/app-info-dialog/app-info-dialog.component';
import { AppInfoComponent } from './modules/scan/components/app-info/app-info.component';
import { AppUiModule } from './app-ui.module';
import { AppComponent } from './app.component';
import { FormatsDialogComponent } from './modules/scan/components/formats-dialog/formats-dialog.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [

    // Angular
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

    // Local
    AppUiModule,
    AppRoutingModule

  ],
  declarations: [AppComponent, FormatsDialogComponent, AppInfoComponent, AppInfoDialogComponent],
  bootstrap: [AppComponent],
  entryComponents: [FormatsDialogComponent, AppInfoDialogComponent]
})
export class AppModule { }
