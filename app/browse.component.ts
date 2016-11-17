import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Observable }               from 'rxjs/Observable';
import { ProjectTheme, ProjectFormat, Project, ProjectCategorizer } from './data';
import { DataService }             from './data.service';

@Component({
  moduleId: module.id,
  selector: 'browse-projects',
  templateUrl: 'browse.component.html'
})
export class BrowseComponent implements OnInit {

  constructor(
    private themeService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
        .subscribe((params: Params) => this.setParams(params))
  }

  setParams(params: Params): void {
    let themeId: string = params['themeId'] || ''
    let formatId: string = params['formatId'] || ''
    let dataPromise: Promise<ProjectCategorizer[]>

    if (!themeId) {
      this.browseBase = ['/browse']
      dataPromise = this.themeService.getThemes()
    } else if (!formatId) {
      this.browseBase = ['/browse', themeId]
      dataPromise = this.themeService.getFormats(themeId)
    } else {
      this.browseBase = ['/project']
      dataPromise = this.themeService.getProjects(themeId, formatId)
    }

    dataPromise.then((cats: ProjectCategorizer[]) => this.cats = cats)

  }

  browseBase: string[] = []

  cats: ProjectCategorizer[]

}