import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/myServices/http.service';

@Component({
  selector: 'app-regformcandestory',
  templateUrl: './regformcandestory.component.html',
  styleUrls: ['./regformcandestory.component.scss']
})
export class RegformcandestoryComponent implements OnInit {

  constructor(private http : HttpService) { }


  regForm !: FormGroup

  ngOnInit(): void {
   this.initializeForm();

   this.regForm.valueChanges.subscribe(formValue => {
    if(formValue.firstName== "" && formValue.password =="")
    {
        this.http.setUserChangeValue(false);
    }
    else
    {
        this.http.setUserChangeValue(true);
    }    
   })

   this.http.setUserChangeValue(false);

  }

  initializeForm()
  {
    this.regForm = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl('')
    })
  }

  submit()
  {

  }

}
