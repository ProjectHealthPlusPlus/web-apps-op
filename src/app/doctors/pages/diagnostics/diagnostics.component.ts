import {Component, OnInit, ViewChild} from '@angular/core';
import {DiagnosticsService} from "../../services/diagnostics.service";
import {Diagnostic} from "../../model/diagnostic";
import {MatTableDataSource} from "@angular/material/table";
import {NgForm} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import * as _ from 'lodash';
import {Doctor} from "../../model/doctor";


@Component({
  selector: 'app-diagnostics',
  templateUrl: './diagnostics.component.html',
  styleUrls: ['./diagnostics.component.css']
})
export class DiagnosticsComponent implements OnInit {
  diagnosticData: Diagnostic;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'patientId', 'description', 'published', 'doctorId', 'actions']

  @ViewChild('diagnosticForm', {static: false})
  diagnosticForm!: NgForm;

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  isEditMode = false;

  constructor(private diagnosticService: DiagnosticsService) {
    this.diagnosticData = {} as Diagnostic;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllDiagnostics();
  }

  getAllDiagnostics() {
    this.diagnosticService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    })
  }

  editItem(element: Diagnostic) {
    this.diagnosticData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.diagnosticForm.resetForm();
  }

  deleteItem(id: number) {
    this.diagnosticService.delete(id).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.filter((o: Diagnostic) => {
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }

  addDiagnostic() {
    this.diagnosticService.create(this.diagnosticData).subscribe((response:any) => {
      this.dataSource.data.push( {...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => {return o; });
    })
  }

  updateDiagnostic() {
    this.diagnosticService.update(this.diagnosticData.id, this.diagnosticData).subscribe((response:any) => {
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
    if (this.diagnosticForm.form.valid) {
      if (this.isEditMode) {
        this.updateDiagnostic();
      } else {
        this.addDiagnostic();
      }
    } else {
      console.log('Invalid data');
    }
  }

}
