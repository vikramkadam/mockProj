import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, observable, Observable } from 'rxjs';
import { NestedRF } from 'src/app/modals/nested-rf';
import { HttpService } from 'src/app/myServices/http.service';

@Component({
  selector: 'app-comp-dir',
  templateUrl: './comp-dir.component.html',
  styleUrls: ['./comp-dir.component.scss']
})
export class CompDirComponent implements OnInit {

  obsData$ : BehaviorSubject<NestedRF[]> = new BehaviorSubject<NestedRF[]>([]);
  ngModelValue:any;
  activatedClass:string = "cls-green";

  favColor:any='blue';

 

  constructor(private http: HttpService, private toaster:ToastrService) { }

  ngOnInit(): void {
    this.getUserData();
  }


  binding: boolean = true;
  changeStatus()
  {
    this.binding = !this.binding;
  }

  getUserData()
  {
    this.http.getData('nestedReactiveForm').subscribe((res:any)=> {
      if(Array.isArray(res) && res.length > 0 )
      {
       // console.log(res);
        this.obsData$.next(res);         
        this.toaster.success("Data fetched successfully!",res.length+" Records found.");
      }
      else{
        this.toaster.error("Records not available!");
      }
    })
  }

  switchValue:any;
  changeSwitchValue(evTarget:any)
  {
    this.switchValue =evTarget.value;   
  }

}
