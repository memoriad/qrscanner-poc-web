import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppUiModule } from '../../app-ui.module';
import { ScanComponent } from './components/scan.component';
import { ScanRoutingModule } from './scan-routing.module';

@NgModule({
  declarations: [ScanComponent],
  imports: [
    CommonModule,
    AppUiModule,
    ScanRoutingModule,
  ]
})
export class ScanModule { }
