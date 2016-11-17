import { Component, Input, OnInit } from '@angular/core';

import { ProjectTheme, ProjectFormat, Project, ProjectChecklistItem, ProjectAspectsItem } from './data';
import { DataService }             from './data.service';

@Component({
  moduleId: module.id,
  selector: 'unfpa-project-new',
  templateUrl: 'project-new.component.html'
})
export class ProjectNewComponent {
  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.cancel()
  }

  cancel(): void {
    this.project = new Project();
  }

  save(): void {
    this.dataService.addProject(this.project)
    this.cancel();
  }

  addChecklistItem(): void {
    this.project.checklist.push(new ProjectChecklistItem())
  }

  addAspectItem(): void {
    this.project.aspects.push(new ProjectAspectsItem())
  }

  @Input() project: Project
}
