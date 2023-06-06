import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(public http: HttpClient) { }

  public getImageOfTheDay(): Observable<any> {
    return this.http.get<any>('https://api.nasa.gov/planetary/apod?api_key=JgTqlGrhhc1SM675eHjSq4rmq4uGxwkpi2hgtDog');
  }
}
