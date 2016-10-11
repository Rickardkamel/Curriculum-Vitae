import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from '../shell.component';

export const appRoutes: Routes = [
  { path: '', component: ShellComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
