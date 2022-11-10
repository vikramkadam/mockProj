import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, timeInterval } from 'rxjs';
import { arrayRF } from 'src/app/modals/arrayRF';
import { HttpService } from 'src/app/myServices/http.service';
import { fandlMismatch } from 'src/app/validators/arrayformvalidator';
// import { NotificationService } from 'src/app/myServices/notification.service';


@Component({
  selector: 'app-array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.scss']
})
export class ArrayFormComponent implements OnInit {

  btnStatus="submit";
  currentUpdateId :number = 0;
   regForm !: FormGroup;
   //here we use behaviour subject insted of normal variable.
   students$ :BehaviorSubject<arrayRF[]> = new BehaviorSubject<arrayRF[]>([]);
   students:any;

  constructor(private fb:FormBuilder, private http:HttpService, private toastr:ToastrService) { }

  ngOnInit(): void {
     this.initializeForm();
     this.getStudentDetails();
  }

  

  //--------------------Initialize Form----------------------------
  initializeForm()
  {
    this.regForm = this.fb.group({
      firstName: ['' , [Validators.required]],
      lastName: ['' , [Validators.required] ],
      address: this.fb.group({
        city: ['', Validators.required],
        pinCode: ['']
      }),
      parentDetails: this.fb.array([ 
        this.fb.group({
          parentName: ['',Validators.required],
          contactNo: ['',Validators.required]
        })
      ])      
    },{validators:fandlMismatch})
  }
    

  //--------------------------Get Methods---------------------------------

  get firstName() { return this.regForm.get('firstName') as FormControl; }
  get lastName() { return this.regForm.get('lastName') as FormControl; }
  get address() { return this.regForm.get('address') as FormGroup; }
  get city() { return this.address.get('city') as FormControl; }
  get pinCode() { return this.address.get('pinCode') as FormControl; }
  get parentDetails() { return this.regForm.get('parentDetails') as FormArray; }
  get parentName() { return this.parentDetails.get('parentName') as FormControl; }  
  get contactNo() { return this.parentDetails.get('contactNo') as FormControl; }



//--------------------------------Adding New Control---------------------------------
addNewControl()
{
  this.parentDetails.push(this.fb.group({
    parentName: ['',Validators.required],
    contactNo: ['',Validators.required]
  }))
}

//-------------------------------Remove Control--------------------------------------

removeNewControl(index:number)
{ 
     this.parentDetails.controls.splice(index , 1);  
}

//------------------------------submit Form Details----------------------------------
submitFormDetails()
{ 
  this.regForm.markAllAsTouched;

  if(this.regForm.valid)
  {
     let reqBody : arrayRF = this.regForm.value;
     this.http.postData("arrayRF",reqBody).subscribe( res => {
      if(res instanceof Object)
      {        
         this.toastr.success("Student details stored successfully","Success!");
         this.getStudentDetails();
         this.regForm.reset();
      }
     },(error)=>{ this.toastr.error(JSON.stringify(error),"Error!"); })
  }
}


//----------------------------------Get Student Details-------------------------------
getStudentDetails()
{
     this.http.getData('arrayRF').subscribe((res:any) =>{
      this.students$.next(res);
    })
}


deleteRecord(obj:any)
{
  let result =  window.confirm("Are you sure to delete record");
  if(result)
  {
     this.http.deleteData("arrayRF",obj.id).subscribe((res:any)=> {
        if(res instanceof Object)
        {
            this.toastr.error("Record deleted Successfully","Deleted");
            this.getStudentDetails();
        }
     },(error)=> {this.toastr.warning("Invalid Data,Record not found for delete","Record Not found !")})
     ///here we are using observable with behaviour subject thats why we cannot delete reocrd.
  }
}

pathFormValues(obj:any)
{
    this.btnStatus="update";
    this.regForm.patchValue(obj);
    this.currentUpdateId = obj.id;
}

UpdateFormDetails()
{
    if(this.regForm.valid)
    {
      let reqbody:arrayRF = this.regForm.value;
      this.http.putData("arrayRF",this.currentUpdateId,reqbody).subscribe((res)=> {
        if(res instanceof Object)
        {
            this.toastr.info("Record updated Successfully","Updated");
            this.getStudentDetails();
            this.regForm.reset();
            this.btnStatus="submit"
        }
      })
    }
}

showtost()
{
  this.toastr.success("sdfsdf","sdfsdf");
}

}
