import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';
import { MaterializeModule } from 'angular2-materialize';
import * as $ from 'jquery';
    
    
declare var $:any;


@Component({
  selector: 'navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css'],
  animations: [  
    trigger('fadeInAnimation', [
    
           // route 'enter' transition
           transition(':enter', [
    
               // css styles at start of transition
               style({ opacity: 0 }),
    
               // animation and styles at end of transition
               animate('5s', style({ opacity: 1 }))
           ]),
       ])
      
      ]
})
export class navBarComponent implements OnInit {
  

  constructor() { 

    
  }

  ngOnInit() {


    $(document).ready(function(){ $('ul.tabs').tabs(); });
    

          
  }

}
