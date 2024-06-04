import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { PersonalFirmaComponent } from './administrare/personal-firma/personal-firma.component';

const routes: Routes = [
 
    {path:"personal-firma",component:PersonalFirmaComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
