// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { Country } from '../interfaces/country';

// @Injectable({
//   providedIn: 'root'
// })
// export class CountryService {
//   private apiUrl = 'https://restcountries.com/v3.1/';

//   constructor(private http: HttpClient) {}

//   getCountriesByCapital(capital: string): Observable<Country[]> {
//     return this.http.get<Country[]>(`${this.apiUrl}capital/${capital}`)
//       .pipe(
//         catchError(this.handleError)
//       );
//   }

//   getCountryByName(name: string): Observable<Country[]> {
//     return this.http.get<Country[]>(`${this.apiUrl}name/${name}`)
//       .pipe(
//         catchError(this.handleError)
//       );
//   }

//   getCountriesByRegion(region: string): Observable<Country[]> {
//     return this.http.get<Country[]>(`${this.apiUrl}region/${region}`)
//       .pipe(
//         catchError(this.handleError)
//       );
//   }

//   private handleError(error: any) {
//     console.error('An error occurred:', error);
//     return throwError(error);
//   }
// }