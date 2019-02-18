import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {ProjectsService} from '../../../services/projects.service';
import {Project} from '../../../models/project';
import {Injectable} from '@angular/core';

export interface ProjectListItem {
  id: number;
  name: string;
  buildConfiguration: number;
}

@Injectable()
export class ProjectsListDataSource extends DataSource<ProjectListItem> {

  constructor(
    private paginator: MatPaginator,
    private sort: MatSort,
    private projectsService: ProjectsService
  ) {
    super();
  }

  public connect(): Observable<ProjectListItem[]> {
    return this.projectsService
      .find()
      .pipe(
        map((projects: Project[]) => {
          return projects.map(project => this.mapToListItem(project));
        })
      );
  }

  public disconnect() {}

  private mapToListItem(project: Project): ProjectListItem {
    const buildConf = project.selfhostSettings && project.selfhostSettings.buildConfiguration || 1;
    return {
      id: project.id,
      name: project.name,
      buildConfiguration: buildConf
    };
  }

}
