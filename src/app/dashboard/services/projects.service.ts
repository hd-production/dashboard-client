import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from '../models/project';
import {environment} from '../../../environments/environment';

const PROJECT_URL = `${environment.api.getUrl()}/projects`;

@Injectable()
export class ProjectsService {
  constructor(
    private http: HttpClient
  ) {}

  public find(): Observable<Project[]> {
    return this.http.get(PROJECT_URL) as Observable<Project[]>;
  }

  public get(id: number): Observable<Project> {
    return this.http.get(`${PROJECT_URL}/${id}`) as Observable<Project>;
  }

  public create(project: Project): Observable<Project> {
    return this.http.post(PROJECT_URL, project) as Observable<Project>;
  }

  public runProject(id: number) {
    return this.http.put(`${PROJECT_URL}/${id}/run`, {}) as Observable<Project>;
  }

  public update(id: number, project: Project): Observable<Project> {
    return this.http.put(`${PROJECT_URL}/${id}`, project) as Observable<Project>;
  }

  public remove(id: number): Observable<unknown> {
    return this.http.delete(`${PROJECT_URL}/${id}`) as Observable<unknown>;
  }

  public downloadProject() {
    return this.http.get('file:///Users/aboho/Desktop/test.zip');
  }
}
