
export class ProjectCategorizer {
  id: string;
  name: string;
  imageSource: string;
}

export class ProjectTheme extends ProjectCategorizer {
}

export class ProjectFormat extends ProjectCategorizer {
}

export class ProjectChecklistItem {
  checked: boolean;
  name: string;
}

export class ProjectAspectsItem {
  relevance: number;
  name: string;
}

export const ProjectStatus = {
  PENDING: 'Awaiting Funding',
  ACTIVE: 'Currently Active',
  SUSPENDED: 'Suspended',
  COMPLETED: 'Completed'
}

export class Project extends ProjectCategorizer {
  country: string;
  themes: ProjectTheme[];
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
}