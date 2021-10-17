import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PATH = window.location.search.substr(1);
  API_KEY = 'KEY';
  constructor(private httpClient: HttpClient) { }
  public getWeather (){
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.PATH},fr&appid=${this.API_KEY}&units=metric&lang=fr`);
  }
}