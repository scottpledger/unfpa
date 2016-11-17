import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent }   from './browse.component';
import { ProjectComponent }      from './project.component';

const routes: Routes = [
  { path: '', redirectTo: '/browse', pathMatch: 'full' },
  { path: 'browse',  component: BrowseComponent },
  { path: 'browse/:themeId',  component: BrowseComponent },
  { path: 'browse/:themeId/:formatId',  component: BrowseComponent },
  { path: 'project/:projectId', component: ProjectComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutes {}
