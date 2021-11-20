import { Component, OnInit } from '@angular/core';


import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
//import esLocale from '@fullcalendar/core/locales/es';



@Component({
  selector: 'app-medical-center',
  templateUrl: './medical-center.component.html',
  styleUrls: ['./medical-center.component.css']
})
export class MedicalCenterComponent implements OnInit {

  public events: any[];
  public options: any;
  constructor() { }

  ngOnInit(): void {


    this.options={
      plugins: [dayGridPlugin,timeGridPlugin,interactionPlugin  ],
      defaultDate: new Date(),
      //locale: esLocale,
      header:{
        left: 'prev,next',
        center: "title",
        right: 'dayGridMount, timeGridWeek, timeGridDay'
      },
      editable: false
    }

    this.events = [
    {
      //TODO pasar con DBJSON
      tittle: "evento 1",
      start: new Date(),
      descrption: "Evento1"
    },
    {
      tittle: "evento 2",
      start: new Date(new Date().getTime()+86400000),
      descrption: "Evento2"
    },
    {
      tittle: "evento 3",
      start: new Date(new Date().getTime()+86400000*2),
      descrption: "Evento3"
    }
    ]

  }







}
