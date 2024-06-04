import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIconModule} from '@angular/material/icon';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContentComponent } from './content/content.component';
import { PersonalFirmaComponent } from './administrare/personal-firma/personal-firma.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    SideBarComponent,
    ContentComponent,
    PersonalFirmaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatIconModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
