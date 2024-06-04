import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { AdministrareComponent } from './administrare/administrare/administrare.component';
import { RaportComponent } from './raport/raport.component';
import { UtilizatoriComponent } from './administrare/utilizatori/utilizatori.component';
import { FimaComponent } from './administrare/fima/fima.component';
import { LoginComponent } from './login/login.component';
import { SecuredComponent } from './secured/secured.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'secured',component:SecuredComponent,children:[
    
      {path:"administrare",component:AdministrareComponent,
          children:[
              {path:"firma",component:FimaComponent},
              {path:"utilizatori",component:UtilizatoriComponent}
        ]}
    , {path:"raportare",component:RaportComponent,
          children:[
                {path:"test",component:RaportComponent}

    ]}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
