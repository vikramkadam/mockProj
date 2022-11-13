import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './lifeCHooks/parent/parent.component';
import { ChildComponent } from './lifeCHooks/child/child.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TdfComponent } from './forms/tdf/tdf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NestedRFComponent } from './forms/nested-rf/nested-rf.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { firstInterceptor } from './Interceptor/firstInterceptor';
import { passLogDetails } from './Interceptor/passLogDetails';
import { ArrayFormComponent } from './forms/array-form/array-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngParentComponent } from './parent-child/ang-parent/ang-parent.component';
import { AngChildComponent } from './parent-child/ang-child/ang-child.component';
import { CompDirComponent } from './directives/comp-dir/comp-dir.component';
import { HighlighterDirDirective } from './directives/highlighter-dir.directive';
import { BuiltInComponent } from './pipes/built-in/built-in.component';
import { CustomComponent } from './pipes/custom/custom.component';
import { WelcomePipe } from './pipes/welcome.pipe';
import { EvenoddPipe } from './pipes/evenodd.pipe';
import { MultiplyPipe } from './pipes/multiply.pipe';
import { SepratePipe } from './pipes/seprate.pipe';
import { KgtogramPipe } from './pipes/kgtogram.pipe';
import { ContactusComponent } from './guardComponents/contactus/contactus.component';
import { Chil1Component } from './guardComponents/chil1/chil1.component';
import { Chil2Component } from './guardComponents/chil2/chil2.component';
import { CanActivateChildComponent } from './guardComponents/can-activate-child/can-activate-child.component';
import { RegformcandestoryComponent } from './guardComponents/regformcandestory/regformcandestory.component';

// ToastrModule.forRoot({
//   timeOut: 2000,
//   positionClass: 'toast-top-right', //positionClass: 'toast-top-full-width',
//   toastClass:'ngx-toastr',
//   preventDuplicates: true,
//   progressAnimation:'increasing',
//   closeButton:true,
//   tapToDismiss:false,    
  
// })
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TdfComponent,
    NestedRFComponent,
    ArrayFormComponent,
    AngParentComponent,
    AngChildComponent,
    CompDirComponent,
    HighlighterDirDirective,
    BuiltInComponent,
    CustomComponent,
    WelcomePipe,
    EvenoddPipe,
    MultiplyPipe,
    SepratePipe,
    KgtogramPipe,
    ContactusComponent,
    Chil1Component,
    Chil2Component,
    CanActivateChildComponent,
    RegformcandestoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      //positionClass: 'toast-top-right', 
      positionClass: 'toast-top-full-width',
      toastClass:'ngx-toastr',
      //preventDuplicates: true,
      progressAnimation:'increasing',
      closeButton:true,
      tapToDismiss:false,    
      
    })
  ],
  providers: [
    { provide:HTTP_INTERCEPTORS, useClass:firstInterceptor, multi:true },
    { provide:HTTP_INTERCEPTORS, useClass: passLogDetails , multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
