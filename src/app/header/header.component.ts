import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../service/sidenav.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input('inputSidenav')
  inputSidenav!: MatSidenav;
 
  constructor(private sidenavService:SidenavService) { }

  ngOnInit(): void {
  }

  onSidenav(){
    console.log("toggle method");
this.sidenavService.toggle();
  }

}
