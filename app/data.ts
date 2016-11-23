
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
  constructor(
    id:string = '',
    name:string = '',
    imageSource: string = '',
    public country: string = '',
    public topics: string[] = [],
    public formats: ProjectFormat[] = [],
    public startDate: Date = null,
    public endDate: Date = null,
    public description: string = '',
    public contacts: string = "",
    public budget: number = 0,
    public languages: string = "",
    public partners: string = "",
    public timeFrame: string = "",
    public status: string = "",
    public checklist: ProjectChecklistItem[] = [],
    public aspects: ProjectAspectsItem[] = []) {
    super();
    this.id = id;
    this.name = name;
    this.imageSource = imageSource;
  }

  compareTo(other: Project): number {
    var match = 0;
    match += this.topics.filter(topic=>other.topics.includes(topic)).length;
    match += this.formats.filter(format=>other.formats.includes(format)).length;
    return match;
  }
}