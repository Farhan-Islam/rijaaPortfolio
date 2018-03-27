import { Component, OnInit } from '@angular/core';


import * as $ from 'jquery';


declare var $:any;

@Component({
  selector: 'app-producer-page',
  templateUrl: './producer-page.component.html',
  styleUrls: ['./producer-page.component.css']
})
export class ProducerPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){ $('ul.collapsible').collapsible(); });
  }

}
