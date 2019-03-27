;
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { SidebarComponent } from './nav/sidebar/sidebar.component';
import { TopnavComponent } from './nav/topnav/topnav.component';
import { LandingPageComponent } from './landing-page.component';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [LandingPageComponent, TopnavComponent, SidebarComponent, LoginComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
  ]
})
export class LandingPageModule { }
