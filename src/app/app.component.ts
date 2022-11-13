import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mockProj';


  setLigin()
  {
    localStorage.setItem("UserStatus","true");
  }

  clearStorage()
  {
    localStorage.clear();
    window.location.reload();
  }


}
