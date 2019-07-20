import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BoutikPamSharedLibsModule, BoutikPamSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [BoutikPamSharedLibsModule, BoutikPamSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [BoutikPamSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BoutikPamSharedModule {
  static forRoot() {
    return {
      ngModule: BoutikPamSharedModule
    };
  }
}
