import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Flights } from '../model/flights';

@Injectable({
  providedIn: 'root'
})

export class FlightsService {

  flightsPrefix(): string {
    return `flights`;
  }

  constructor(private http: HttpClient) {}

  public getFlights(WorkerID: Number): Observable<Flights[]> {

    return this.http.get<Flights[]>(`${environment.gw}${this.flightsPrefix()}/${WorkerID}`).pipe(
      catchError((error: Flights[]) => of(error))
    )
  }
}

