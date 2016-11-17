import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Observable }               from 'rxjs/Observable';
import { ProjectTheme, ProjectFormat, Project, ProjectCategorizer } from './data';
import { DataService }             from './data.service';

@Component({
  moduleId: module.id,
  selector: 'project-details',
  templateUrl: 'project.component.html'
})
export class ProjectComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
        .subscribe((params: Params) => this.setParams(params))
  }

  setParams(params: Params): void {
    this.dataService.getProject(params['projectId'])
        .then((project: Project) => this.project = project)
  }

  project: Project
}