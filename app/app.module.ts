import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { BrowseComponent }   from './browse.component';
import { ProjectComponent }   from './project.component';
import { ProjectNewComponent }   from './project-new.component';
import { AppRoutes } from './app.routes';
import { DataService } from './data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutes
  ],
  declarations: [
    AppComponent,
    BrowseComponent,
    ProjectComponent,
    ProjectNewComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    DataService
  ]
})
export class AppModule { }
