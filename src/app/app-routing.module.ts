import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompDirComponent } from './directives/comp-dir/comp-dir.component';
import { ArrayFormComponent } from './forms/array-form/array-form.component';
import { NestedRFComponent } from './forms/nested-rf/nested-rf.component';
import { TdfComponent } from './forms/tdf/tdf.component';
import { ParentComponent } from './lifeCHooks/parent/parent.component';
import { AngParentComponent } from './parent-child/ang-parent/ang-parent.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
