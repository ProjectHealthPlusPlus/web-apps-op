import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import db from '../../../../server/db.json'
import {DbModel} from "../models/db-model";
import {CalendarEventModel} from "../models/calendar-event-model";



@Injectable({
  providedIn: 'root'
})
export class CalendarEventService {
  private dbjson:DbModel;
  constructor() {
    this.dbjson=db;
  }


  getData(): CalendarEventModel[] {
    return this.dbjson.events;
  }


}
