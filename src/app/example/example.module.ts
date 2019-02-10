import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent} from './example.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatInputModule, MatSelectModule, MatRadioModule, MatToolbarModule, MatSidenavModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTreeModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';
import { TreeComponent } from './components/tree/tree.component';

@NgModule({
  imports: [
    CommonModule,
    ExampleRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule
  ],
  declarations: [
    ExampleComponent,
    AddressFormComponent,
    NavComponent,
    TableComponent,
    TreeComponent
  ]
})
export class ExampleModule { }
