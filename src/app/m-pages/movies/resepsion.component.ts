import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/register-login/shared.service';

@Component({
  selector: 'app-resepsion',
  templateUrl: './resepsion.component.html',
  styleUrls: ['./resepsion.component.css']
})
export class ResepsionComponent implements OnInit {
  constructor(private get:SharedService){
 
  }
  ngOnInit(): void {
    
  }

}
