import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Workers } from '../model/workers';

@Injectable({
  providedIn: 'root'
})

export class WorkersService {
  
  workersPrefix(): string {
    return `workers`;
  }

  constructor(private http: HttpClient) {}

  public getWorkers(): Observable<Workers[]> {

    return this.http.get<Workers[]>(`${environment.gw}${this.workersPrefix()}`).pipe(
      catchError((error: Workers[]) => of(error))
    )
  }
}

