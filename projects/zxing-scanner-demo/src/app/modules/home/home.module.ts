import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppUiModule } from '../../app-ui.module';
import { HomeComponent } from './components/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AppUiModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
