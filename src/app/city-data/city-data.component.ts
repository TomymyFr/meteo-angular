import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-city-data',
  templateUrl: './city-data.component.html',
  styleUrls: ['./city-data.component.css']
})
export class CityDataComponent implements OnInit {
  name_data: any;
  type_data: any;
  temp_data: any;
  press_data: any;
  wind_speed_data: any;
  wind_deg_data: any;
  sunrise_data: any;
  sunset_data: any;

  
  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.getWeather().subscribe((data)=>{
      
      
      function convertUnixtoHuman(string) {
        let unix_timestamp = string;
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(unix_timestamp * 1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        var hours_CET = hours + 1;
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
    
        // Will display time in 10h30 format
        var formattedTime = hours_CET + 'h' + minutes.substr(-2);
    
        return formattedTime;
        }

      console.log(data);
      this.name_data = data['name'];
      this.type_data = data['weather'][0]['description'];
      this.temp_data = data['main']['temp'];
      this.press_data = data['main']['pressure'];
      this.wind_speed_data = data['wind']['speed'];
      this.wind_deg_data = data['wind']['deg'];
      this.sunrise_data = convertUnixtoHuman(data['sys']['sunrise']);
      this.sunset_data = convertUnixtoHuman(data['sys']['sunset']);
    });
  }

}
