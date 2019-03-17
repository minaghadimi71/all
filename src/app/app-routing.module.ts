import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnimationsComponent} from './animations/animations.component';
import {EditComponent} from './edit/edit.component';
import {AddComponent} from './animations/add/add.component';
import {MyShopeComponent} from './my-shope/my-shope.component';

  const routes: Routes = [
      { path: '', redirectTo: '/animations', pathMatch: 'full' },
  { path: 'animations', component: AnimationsComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'add', component: AddComponent },
    { path: 'user', component: MyShopeComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
