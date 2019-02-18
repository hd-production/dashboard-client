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
    return this.http.get(PROJECT_URL);
  }

  public get(id: number): Observable<Project> {
    return this.http.get(`${PROJECT_URL}/${id}`);
  }

  public create(project: Project): Observable<Project> {
    return this.http.post(PROJECT_URL, project);
  }

  public update(id: number, project: Project): Observable<Project> {
    return this.http.put(`${PROJECT_URL}/${id}`, project);
  }

  public remove(id: number): Observable<void> {
    return this.http.delete(`${PROJECT_URL}/${id}`);
  }
}
