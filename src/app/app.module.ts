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
import { AdministrareComponent } from './administrare/administrare/administrare.component';
import { RaportComponent } from './raport/raport.component';
import { UtilizatoriComponent } from './administrare/utilizatori/utilizatori.component';
import { FimaComponent } from './administrare/fima/fima.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FirmaFilterComponent } from './administrare/fima/firma-filter/firma-filter.component';
import { SecuredComponent } from './secured/secured.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    SideBarComponent,
    ContentComponent    ,
    AdministrareComponent,
    RaportComponent,
    UtilizatoriComponent,
    FimaComponent,
    FirmaFilterComponent,
    SecuredComponent
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
