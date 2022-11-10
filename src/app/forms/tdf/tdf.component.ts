import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   myCredentials: any [] = [{email:'vikram', pass:123},{email:'rajesh', pass:123}];

  LoginMethod(myform:any)
  {
      if(this.myCredentials.find(ele => ele.email == myform.email) && this.myCredentials.filter(ele => ele.pass == myform.pass ).length > 0  )
      {
        alert("login success!")
      }else{alert("Invalid credentials!")};
  }

}
