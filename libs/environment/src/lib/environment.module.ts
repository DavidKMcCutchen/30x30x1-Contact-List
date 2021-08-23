import { ModuleWithProviders, NgModule } from '@angular/core';
import { CONTACT_ENVIRONMENT } from './contact.token';
import { ContactEnvironment } from './contact.model';

@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: ContactEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: CONTACT_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}