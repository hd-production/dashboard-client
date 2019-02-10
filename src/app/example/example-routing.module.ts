import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExampleComponent} from './example.component';
import {AddressFormComponent} from './components/address-form/address-form.component';
import {NavComponent} from './components/nav/nav.component';
import {TableComponent} from './components/table/table.component';
import {TreeComponent} from './components/tree/tree.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ExampleComponent },
  { path: 'address-form', component: AddressFormComponent },
  { path: 'nav', component: NavComponent },
  { path: 'table', component: TableComponent },
  { path: 'tree', component: TreeComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class ExampleRoutingModule {

}
