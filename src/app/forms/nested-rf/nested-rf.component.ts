import { NgFor } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { NestedRF } from 'src/app/modals/nested-rf';
import { HttpService } from 'src/app/myServices/http.service';

@Component({
  selector: 'app-nested-rf',
  templateUrl: './nested-rf.component.html',
  styleUrls: ['./nested-rf.component.scss']
})
export class NestedRFComponent implements OnInit {
   regForm !: FormGroup;
   regFormObject !: NestedRF ;
   regFormArr :any;
   btnStatus:string='submit';
   currentUpdateId :number = 0;
   

  constructor( private httpService: HttpService ) { }

  ngOnInit(): void {  
    this.initializeForm();   
    this.getUserData();
  }


  getUserData()
  {
     this.httpService.getData("nestedReactiveForm").subscribe((res: any)=> {
      this.regFormArr = res ;
     },(error)=> {alert('Error while fetching data:'+JSON.stringify(error))})
  }


  initializeForm()
  {
     this.regForm = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
       lastName: new FormControl(''),
        address: new FormGroup({
           city: new FormControl('',Validators.required),
        pinCode: new FormControl('', [Validators.required , Validators.pattern("^[0-9]*$")])
       })
     })
  }

  get firstName() { return this.regForm.get('firstName') as FormControl; }  
  get lastName() { return this.regForm.get('lastName') as FormControl; }  
  get address() { return this.regForm.get('address') as FormGroup; }  
  get city() { return this.address.get('city') as FormControl; }
  get pinCode() {  return this.address.get('pinCode') as FormControl; }


  submitForm()
  {
      if(this.regForm.valid)
      {
        this.regFormObject = this.regForm.value;
        
        this.httpService.postData("nestedReactiveForm",this.regFormObject).subscribe((res) => {
          if(res instanceof Object)
          {            
            alert("data saved successfully!");
            this.getUserData();
            this.regForm.reset();
          }
        },
        (error)=> {
          alert("Error while submiting nestedRF:"+ JSON.stringify(error));
        })      
      }
  }

  deleteRecord(obj:any)
  {
      this.httpService.deleteData("nestedReactiveForm",obj.id).subscribe((res) => {
        if(res)
        {
          alert("record Get deleted successfully")
          this.getUserData();
        }
      },(error)=> {alert("Error while deleting data."+error)})
  }

  pathFormValues(obj:any)
  {
    if(obj != null)
    {
      this.btnStatus ="update";
      this.regForm.patchValue(obj);
      this.currentUpdateId = obj.id;
    }
  }

  UpdateForm()
  {
    if(this.regForm.valid)
    {
      this.regFormObject = this.regForm.value;

      const params = new HttpParams()
                    .set('id', this.currentUpdateId)

      
      
      this.httpService.putData("nestedReactiveForm",this.currentUpdateId, this.regFormObject).subscribe((res) => {
        if(res instanceof Object)
        {            
          alert("data Updated successfully!");
          this.getUserData();
          this.regForm.reset();
          this.btnStatus ="submit";
        }
      },
      (error)=> {
        alert("Error while submiting nestedRF:"+ JSON.stringify(error));
      })      
    }
  }

}
