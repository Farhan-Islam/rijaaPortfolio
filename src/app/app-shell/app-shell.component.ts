// import '../scrollArrow.js';
import { Component, OnInit } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import {NgsRevealModule} from 'ng-scrollreveal';
// import * as $ from 'jquery';



declare var $:any;
declare var jQuery:any;

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.css']
})
export class AppShellComponent implements OnInit {

  constructor() { }

  ngOnInit():void {





    (function ($) {
      $(document).ready(function(){
        
      // hide .navbar first
      $('.parallax').parallax();
      $(".navbar").hide();
      
      // fade in .navbar
      $(function () {
        $(window).scroll(function () {
                // set distance user needs to scroll before we fadeIn navbar
          if ($(this).scrollTop() > 900) {
            $('.navbar').fadeIn();
          } else {
            $('.navbar').fadeOut();
          }
        });
    
      
      });
    
    });
      }(jQuery));

      



  }
}
