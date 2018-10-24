import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent, MapComponent, ChatComponent } from '../_components';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'chat', component: ChatComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
