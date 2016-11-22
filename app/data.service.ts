import { Injectable } from '@angular/core';

import {ProjectTheme, ProjectFormat, Project} from './data';

export const THEMES: ProjectTheme[] = [
  {
    id: 'srh',
    imageSource: "resources/images/Sexual_Reproductive_Health.jpg",
    name: 'Sexual & Reproductive Health'
  },
  {
    id: 'yp',
    imageSource: "resources/images/Young_People.jpg",
    name: 'Young People'
  },
  {
    id: 'hrge',
    imageSource: "resources/images/Human_Rights_Gender_Equality.jpg",
    name: 'Human Rights & Gender Equality'
  },
  {
    id: 'pm',
    imageSource: "resources/images/Population_Matters.jpg",
    name: 'Population Matters'
  }
];

export const FORMATS: ProjectFormat[] = [
  {
    id: 'mo',
    imageSource: "resources/images/Media_Oriented.jpg",
    name: 'Media Oriented'
  },
  {
    id: 'tp',
    imageSource: "resources/images/Training_Programs.jpg",
    name: 'Training Programs'
  },
  {
    id: 'w',
    imageSource: "resources/images/Workshops.jpg",
    name: 'Workshops'
  },
  {
    id: 'sra',
    imageSource: "resources/images/Resource_Allocation.jpg",
    name: 'Supplies / Resource Allocation'
  },
  {
    id: 'cmf',
    imageSource: "resources/images/Credit_Micro_Finance.jpg",
    name: 'Credit / MicroFinance'
  },
  {
    id: 'ha',
    imageSource: "resources/images/Humanitarian_Assistance.jpg",
    name: 'Humanitarian Assistance'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'frs',
    imageSource: "resources/images/fathers_radio_show.jpg",
    name: 'Fathers Radio Show',
    country: 'Georgia',
    themes: [THEMES[0], THEMES[1]],
    formats: [FORMATS[0]],
    startDate: new Date(2015, 1, 5),
    endDate: new Date(2016, 11, 08),
    description: "Do the thing",
    contacts: "a@b.com",
    budget: 10000,
    languages: "Gungan",
    partners: "WHO",
    timeFrame: "soon",
    status: "Awaiting Funding",
    checklist: [
      {
        checked: true,
        name: 'Access to TV'
      },
      {
        checked: false,
        name: 'TV Broadcasting Network Partner'
      },
      {
        checked: false,
        name: 'Film Production Team'
      },
      {
        checked: false,
        name: 'Minimum 6 months (Implementation Period) '
      },
      {
        checked: false,
        name: 'Gender Expert on your Team'
      },
      {
        checked: false,
        name: 'Project Manager'
      },
      {
        checked: false,
        name: 'Government Support'
      },
      {
        checked: false,
        name: 'Health Care'
      }
    ],
    aspects: [
      {
        relevance: 1,
        name: 'Emulate reality TV',
        multiplier: 0
      },
      {
        relevance: 1,
        name: 'See celebrities as role models',
        multiplier: 0
      },
      {
        relevance: 1,
        name: 'Have a culture of watching TV',
        multiplier: 0
      },
      {
        relevance: 3,
        name: 'Lack male participation in parenting',
        multiplier: 0
      },
      {
        relevance: 2,
        name: 'Adhere to traditional gender roles',
        multiplier: 0
      }
    ]
  },
];

@Injectable()
export class DataService {
  constructor(){}

  private projects: Project[] = PROJECTS.slice()

  getThemes(): Promise<ProjectTheme[]> {
    return Promise.resolve(THEMES);
  }

  getFormats(themeId: string): Promise<ProjectFormat[]> {
    return Promise.resolve(FORMATS);
  }

  getProjects(themeId: string, formatId: string): Promise<Project[]> {
    return Promise.resolve(this.projects.filter((project: Project) => project.themes.map(theme=>theme.id).includes(themeId) && project.formats.map(format=>format.id).includes(formatId)));
  }

  getProject(projectId: string): Promise<Project> {
    return Promise.resolve(this.projects.find((project: Project) => project.id == projectId));
  }

  addProject(project: Project): void {
    this.projects.push(project)
  }
}