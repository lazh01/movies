import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { CreationPageComponent } from './creation-page/creation-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewPageComponent },
  { path: 'detail/:id', component: DetailPageComponent },
  { path: 'create', component: CreationPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
