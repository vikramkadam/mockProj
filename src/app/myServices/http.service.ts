import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

   baseUrl: string = environment.baseUrl;

  constructor(private _http: HttpClient) { }


  headers :HttpHeaders = new HttpHeaders()
                        .set('ContentType',"Application/Json")
                        .set('Authorization',"Sachin")
                        .set('designer',"vikram");

                        


  getData(endPoint:string)
  {
    return this._http.get(this.baseUrl + endPoint, {'headers': this.headers});
  }

  postData(endPoint:string , requestBody:any)
  {
    return this._http.post(this.baseUrl + endPoint , requestBody);
  }

  deleteData(endPoint:string, id:any)
  {
    return this._http.delete(this.baseUrl + endPoint+"/"+id );
  }

  putData(endPoint:string, id:number, requestBody:any )
  {
    return this._http.put(this.baseUrl + endPoint+"/"+id, requestBody);
  }


  //------------------------Check User Is Valid or Not----------------------------

  checkUserIsValid()
  {
    let getStatus: any = localStorage.getItem("UserStatus");
    return getStatus;
  }


  //---------------------Methods for canDeactivate Guard---------------------------
  changeVal:boolean = false;
  setUserChangeValue(value:boolean)
  {
      this.changeVal = value;
  }

  getUserChangeValue()
  {
    return this.changeVal;
  }

}
