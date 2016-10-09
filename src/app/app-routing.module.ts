import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';

export const routes: Routes = [
  { path: '*', component: ShellComponent },
  // { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
  // { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
