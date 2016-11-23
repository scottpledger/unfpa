
export class Country {
  constructor(iso2: string, name: string) {
    this.iso2 = iso2;
    this.name = name;
  }
  iso2: string;
  name: string;
}

export class Language {
  name: string;
  iso6392B: string;
  iso6392T: string;
  iso6391: string;
}

export class ProjectCategorizer {
  id: string;
  name: string;
  imageSource: string;
}

export class ProjectTheme extends ProjectCategorizer {
  topics: string[]
}

export class ProjectFormat extends ProjectCategorizer {
}

export class ProjectChecklistItem {
  checked: boolean = false;
  name: string = '';
}

export class ProjectAspectsItem {
  relevance: number = 1;
  name: string = '';
  multiplier: number = 0;
}

export const ProjectStatus = {
  PENDING: 'Awaiting Funding',
  ACTIVE: 'Currently Active',
  SUSPENDED: 'Suspended',
  COMPLETED: 'Completed'
}

export class Project extends ProjectCategorizer {
  country: string;
  topics: string[];
  formats: ProjectFormat[];
  startDate: Date;
  endDate: Date;
  description: string;
  contacts: string;
  budget: number;
  languages: string;
  partners: string;
  timeFrame: string;
  status: string;
  checklist: ProjectChecklistItem[] = new Array();
  aspects: ProjectAspectsItem[] = new Array();

  compareTo(other: Project): number {
    var match = 0;
    match += this.topics.filter(topic=>other.topics.includes(topic)).length;
    match += this.formats.filter(format=>other.formats.includes(format)).length;
    return match;
  }
}