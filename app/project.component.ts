import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Observable }               from 'rxjs/Observable';
import { ProjectTheme, ProjectFormat, Project, ProjectCategorizer, ProjectChecklistItem, ProjectAspectsItem } from './data';
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
        .then((project: Project) =>this.setProject(project))
  }

  setProject(project: Project): void {
    this.project = project;
    this.checklistItems = project.checklist.slice();
    this.checklistItems.forEach((item: ProjectChecklistItem) => item.checked = false);
    this.aspectItems = project.aspects.slice();
    this.aspectItems.forEach((item: ProjectAspectsItem) => item.multiplier = 0);
    this.dataService.getSimilarProjects(project).then(projects=>this.similarProjects = projects);
  }

  updateScore(): void {
    let cScore = 0
    this.checklistItems.forEach((item) =>cScore+=item.checked?1:0)
    cScore = (cScore / this.checklistItems.length) * 50
    console.log('cScore', cScore)
    let aScore = 0
    let aMax = 0
    this.aspectItems.forEach((item)=>aMax += item.relevance * 3)
    this.aspectItems.forEach((item)=>aScore += item.multiplier * item.relevance)
    aScore = (aScore / aMax)*50
    console.log('aScore', aScore)
    this.score = Math.max(0, cScore + aScore)
    console.log(this.score)
  }

  project: Project
  similarProjects: Project[]
  checklistItems: ProjectChecklistItem[]
  aspectItems: ProjectAspectsItem[]

  score: number = 0
}