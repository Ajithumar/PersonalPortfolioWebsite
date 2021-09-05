import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private sidenav: MatSidenav | undefined;

  constructor() { }
//setting sidenav
  public setSidenav(sidenav:MatSidenav){
    this.sidenav=sidenav;
  }

  //opening sidenav
  public open(){
    this.sidenav?.open();
  }

  //closing sidenav
  public close(){
    this.sidenav?.close();
  }

  //toggle sidenav
  public toggle(){
    this.sidenav?.toggle();
  }

  
}
