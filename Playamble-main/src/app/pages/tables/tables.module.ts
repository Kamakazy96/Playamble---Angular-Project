import { NgModule } from "@angular/core";
import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbTreeGridModule,
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import {
  NbActionsModule,
  NbButtonModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbToggleModule,
} from "@nebular/theme";

import { ThemeModule } from "../../@theme/theme.module";
import { TablesRoutingModule, routedComponents } from "./tables-routing.module";
import { UsersTableComponent } from './users-table/users-table.component';

@NgModule({
  imports: [
    NbToggleModule,
    ThemeModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    UsersTableComponent,
  ],
})
export class TablesModule {}
