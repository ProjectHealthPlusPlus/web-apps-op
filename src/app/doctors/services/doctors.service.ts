import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Doctor} from "../model/doctor";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  // Doctors Endpoint
  basePath = 'http://localhost:3000/api/doctors';

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

  // Create Doctor
  create(item: any): Observable<Doctor> {
    return this.http.post<Doctor>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Get Doctor by id
  getById(id: any): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Get All Doctors
  getAll(): Observable<Doctor> {
    return this.http.get<Doctor>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Update Doctor
  update(id: any, item: any): Observable<Doctor> {
    return this.http.put<Doctor>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Delete Doctor
  delete(id: any) {
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  // delete(id: any): Observable<Doctor> {
  //   return this.http.delete<Doctor>(`${this.basePath}/${id}`, this.httpOptions)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError));
  // }

}
