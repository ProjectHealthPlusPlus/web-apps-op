import {Component, OnInit, ViewChild} from '@angular/core';
import {DoctorsService} from "../../services/doctors.service";
import {Doctor} from "../../model/doctor";
import {MatTableDataSource} from "@angular/material/table";
import {NgForm} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import * as _ from 'lodash';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctorData: Doctor;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'age', 'address', 'actions']

  @ViewChild('doctorForm', {static: false})
  doctorForm!: NgForm;

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  isEditMode = false;

  constructor(private doctorsService: DoctorsService) {
    this.doctorData = {} as Doctor;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllDoctors();
  }

  getAllDoctors() {
    this.doctorsService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    })
  }

  editItem(element: Doctor) {
    this.doctorData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.doctorForm.resetForm();
  }

  deleteItem(id: number) {
    this.doctorsService.delete(id).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.filter((o: Doctor) => {
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }

  addDoctor() {
    this.doctorsService.create(this.doctorData).subscribe((response:any) => {
      this.dataSource.data.push( {...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => {return o; });
    })
  }

  updateDoctor() {
    this.doctorsService.update(this.doctorData.id, this.doctorData).subscribe((response:any) => {
      this.dataSource.data = this.dataSource.data.map((o: Doctor) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      });
      this.cancelEdit();
    });
  }

  onSubmit() {
    if (this.doctorForm.form.valid) {
      if (this.isEditMode) {
        this.updateDoctor();
      } else {
        this.addDoctor();
      }
    } else {
      console.log('Invalid data');
    }
  }

}
