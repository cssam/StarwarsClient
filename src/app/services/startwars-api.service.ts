import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StartwarsApiService extends ApiService {

  starwarsBaseUrl = 'https://swapi.dev/api/';

  constructor(private http: HttpClient, cookieService: CookieService) {
    super(cookieService);
  }

  getPeople(page: number): Observable<HttpResponse<any>>{
    const endpoint = this.starwarsBaseUrl + 'people/?page=' + page;
    return this.http.get<HttpResponse<any>>(endpoint, { observe: 'response' })
      .pipe(
        catchError(this.handleError)
      );
  }

  getFromDirectEndpoint(specieUrl: string): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(specieUrl, { observe: 'response' })
      .pipe(
        catchError(this.handleError)
      );
  }
}
