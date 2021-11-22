import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  role: any[] = ['Patient','Doctor','Medical Center']

  constructor() { }

  ngOnInit(): void {
  }

}
