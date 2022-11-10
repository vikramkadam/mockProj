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
    AngChildComponent
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
      timeOut: 5000,
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
