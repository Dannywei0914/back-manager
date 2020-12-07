import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private router: Router) { }

  private formatErrors(error: any) {
    const errorStatusCode = error.status;
    if (errorStatusCode === 404 || errorStatusCode === 500) {
      this.router.navigate(['Error']);
    }
    return throwError(error);
  }

  get(path: string): Observable<any> {
    return this.http.get<any>(path).pipe();
  }

  post(path: string, body): Observable<any> {
    return this.http.post<any>(path, body).pipe(
      catchError(error => this.formatErrors(error)),
    );
  }
}
