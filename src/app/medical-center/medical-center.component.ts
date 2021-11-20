import { Component, OnInit } from '@angular/core';


import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
//import esLocale from '@fullcalendar/core/locales/es';
import CalendarOptions from '@fullcalendar/core/Calendar'
import DateSelectArg from '@fullcalendar/core/Calendar'
import EventClickArg from '@fullcalendar/core/Calendar'
import EventApi from '@fullcalendar/core/Calendar'
import {CalendarEventService} from "./services/calendar-event-service";




@Component({
  selector: 'app-medical-center',
  templateUrl: './medical-center.component.html',
  styleUrls: ['./medical-center.component.css']
})
export class MedicalCenterComponent implements OnInit {

  public events: any[];
  public options: any;
  constructor(private servicemedical:CalendarEventService) { }

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
/*
        this.events = [
        {
          //TODO pasar con DBJSON
          title: "evento 1",
          start: new Date(),
          descrption: "Evento1"
        },
        {
          title: "evento 2",
          start: new Date(new Date().getTime()+86400000),
          descrption: "Evento2"
        },
        {
          title: "evento 3",
          start: new Date(new Date().getTime()+86400000*2),
          descrption: "Evento3"
        }
        ]
*/
    this.events = this.servicemedical.getData().map(x=>{
      return {title:x.name,start:x.start,end:x.end,id:x.id}
          });
  }




}
