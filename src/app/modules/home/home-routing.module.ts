import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePComponent } from './pages/home-p/home-p.component';

const routes: Routes = [{ path: '', component: HomePComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
