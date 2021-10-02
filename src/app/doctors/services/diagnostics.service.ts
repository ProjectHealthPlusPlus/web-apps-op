import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Doctor} from "../model/doctor";
import {catchError, retry} from "rxjs/operators";
import {Diagnostic} from "../model/diagnostic";

@Injectable({
  providedIn: 'root'
})
export class DiagnosticsService {
  // Diagnostics Endpoint
  basePath = 'http://localhost:3000/api/diagnostics';

  httpOptions = {
    headers: new HttpHeaders( {
      'Content-Type': 'application/json',
    })
  }
  constructor(private http: HttpClient) { }

  // API Error Handling
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default error handling
      console.log(`An error occurred: ${error.error.message} `);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    // Return Observable with Error Message to Client
    return throwError('Something happened with request, please try again later');
  }

  // Create Diagnostic
  create(item: any): Observable<Doctor> {
    return this.http.post<Doctor>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Get Diagnostic by id
  getById(id: any): Observable<Diagnostic> {
    return this.http.get<Diagnostic>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Get All Diagnostics
  getAll(): Observable<Diagnostic> {
    return this.http.get<Diagnostic>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Update Diagnostic
  update(id: any, item: any): Observable<Diagnostic> {
    return this.http.put<Diagnostic>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Delete Diagnostic
  delete(id: any) {
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

}
