import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']

})
export class MainComponent implements OnInit {
 zoomImg:string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  oncssChange(event){
   
    event.srcElement.classList.add("zoom-Img");
    event.srcElement.classList.add("backg");
    event.srcElement.classList.add("borderdashed");
  
    setTimeout(()=>{                       
      this.router.navigate(['/home'])
 }, 2600);
  }

}
