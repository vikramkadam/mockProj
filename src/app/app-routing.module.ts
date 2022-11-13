import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompDirComponent } from './directives/comp-dir/comp-dir.component';
import { ArrayFormComponent } from './forms/array-form/array-form.component';
import { NestedRFComponent } from './forms/nested-rf/nested-rf.component';
import { TdfComponent } from './forms/tdf/tdf.component';
import { AuthChildGuard } from './guard/auth-child.guard';
import { AuthGuard } from './guard/auth.guard';
import { CanloadforMGuard } from './guard/canloadfor-m.guard';
import { CheckfirstGuard } from './guard/checkfirst.guard';
import { CanActivateChildComponent } from './guardComponents/can-activate-child/can-activate-child.component';
import { Chil1Component } from './guardComponents/chil1/chil1.component';
import { Chil2Component } from './guardComponents/chil2/chil2.component';
import { ContactusComponent } from './guardComponents/contactus/contactus.component';
import { RegformcandestoryComponent } from './guardComponents/regformcandestory/regformcandestory.component';
import { ParentComponent } from './lifeCHooks/parent/parent.component';
import { AngParentComponent } from './parent-child/ang-parent/ang-parent.component';
import { BuiltInComponent } from './pipes/built-in/built-in.component';

const routes: Routes = [
  {
    path:'hooks', component:ParentComponent
  },
  {
    path:'tdf', component:TdfComponent
  },
  {
    path:'nestdRF', component:NestedRFComponent
  },
  {
    path:'arrForm', component:ArrayFormComponent
  },
  {
    path:'angparent', component:AngParentComponent  
  },  
  {
    path:'directives', component:CompDirComponent
  },  
  {
    path:'builtin', component:BuiltInComponent
  },  
  {
    path:'contactus', component:ContactusComponent ,canActivate:[AuthGuard]
  },  
  {
    path:'CanActivateChild', component:CanActivateChildComponent ,canActivateChild:[AuthChildGuard],
    children:[
      {path:'child1', component:Chil1Component},
      {path:'child2', component:Chil2Component}
    ]
  },
  {
    path:'destory', component:RegformcandestoryComponent , canDeactivate:[CheckfirstGuard]
  },
  {
    path:'demoM' ,canLoad:[CanloadforMGuard], loadChildren:()=> import('./demomodule/demomodule.module').then(m => m.DemomoduleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
