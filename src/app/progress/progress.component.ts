import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

 Bar : any;

  constructor(private dataservice: ServiceService) { }

  ngOnInit(): void {


    this.dataservice.getProgress()
    .subscribe(data => {this.Bar = data;
    //this.Bar.releasePerc=0.6;
     if(this.Bar.Capacty=='Red')
     this.Bar.Capacty='#d42626';
     if(this.Bar.sprintColor=='Green')
     this.Bar.sprintColor='#54a84c';
    });
  }

}
