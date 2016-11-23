import { Component, OnInit } from '@angular/core';
import { Country, Language, ProjectTheme, ProjectFormat, Project, ProjectChecklistItem, ProjectAspectsItem } from './data';
import { DataService }             from './data.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  constructor(
    private dataService: DataService
  ) {}


  ngOnInit(): void {
    this.dataService.getThemes().then((themes) => this.themes = themes)
    this.dataService.getCountries().then((countries) => this.countries = countries)
    this.dataService.getLanguages().then((languages) => this.languages = languages)
  }

  themes: ProjectTheme[]
  countries: Country[]
  languages: Language[]
}
