import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {SettingsComponent} from './components/projects/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'projects' },
      { path: 'projects', component: ProjectsComponent },
      { path: 'projects/:id/settings', component: SettingsComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class DashboardRoutingModule {

}
