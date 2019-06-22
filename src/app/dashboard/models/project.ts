export class Project {
  id?: number;
  name: string;
  selfhostSettings: { buildConfiguration: number };
  status: string;
  defaultAdminSettings: { firstName: string; lastName: string; email: string};
  modules: string[];
}
