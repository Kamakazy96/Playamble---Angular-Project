import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  NbAuthModule,
  NbPasswordAuthStrategy,
  NbAuthJWTToken,
} from "@nebular/auth";
import { NbSecurityModule, NbRoleProvider } from "@nebular/security";
import { of as observableOf } from "rxjs";

import { throwIfAlreadyLoaded } from "./module-import-guard";
import {
  AnalyticsService,
  LayoutService,
  PlayerService,
  SeoService,
  StateService,
} from "./utils";
import { UserData } from "./data/users";
import { SmartTableData } from "./data/smart-table";
import { UserActivityData } from "./data/user-activity";
import { EarningData } from "./data/earning";
import { UserService } from "./mock/users.service";
import { SmartTableService } from "./mock/smart-table.service";
import { UserActivityService } from "./mock/user-activity.service";
import { EarningService } from "./mock/earning.service";
import { MockDataModule } from "./mock/mock-data.module";

const DATA_SERVICES = [
  { provide: UserData, useClass: UserService },
  { provide: SmartTableData, useClass: SmartTableService },
  { provide: UserActivityData, useClass: UserActivityService },
  { provide: EarningData, useClass: EarningService },
];

export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf("guest");
  }
}

export const NB_CORE_PROVIDERS = [
  ...MockDataModule.forRoot().providers,
  ...DATA_SERVICES,
  ...NbAuthModule.forRoot({
    strategies: [
      NbPasswordAuthStrategy.setup({
        name: "email",
        token: {
          class: NbAuthJWTToken,
          key: "token",
        },

        baseEndpoint: "http://localhost:4000/user",
        login: {
          redirect: {
            success: "/pages/dashboard",
            failure: null,
          },
          endpoint: "/login",
          method: "post",
        },

        register: {
          redirect: {
            success: "/login",
            failure: null,
          },
          endpoint: "/register",
          method: "post",
        },
      }),
    ],
    forms: {},
  }).providers,

  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: "*",
      },
      user: {
        parent: "guest",
        create: "*",
        edit: "*",
        remove: "*",
      },
    },
  }).providers,

  {
    provide: NbRoleProvider,
    useClass: NbSimpleRoleProvider,
  },
  AnalyticsService,
  LayoutService,
  PlayerService,
  SeoService,
  StateService,
];

@NgModule({
  imports: [CommonModule],
  exports: [NbAuthModule],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, "CoreModule");
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [...NB_CORE_PROVIDERS],
    };
  }
}
