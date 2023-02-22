import { Component, OnInit } from '@angular/core';

declare const L:any;

@Component({
  selector: 'app-eletronico',
  templateUrl: './eletronico.component.html',
  styleUrls: ['./eletronico.component.css']
})
export class EletronicoComponent implements OnInit {

  title = 'lorenaeco';
  lat: number = 0;
  long: number = 0;
  isVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  btnAtivaGps() {
    this.isVisible = true;
    this.getCurrentLocation();
    
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
      const coords = position.coords;
      this.lat = position.coords.latitude;
       this.long = position.coords.longitude;
       let map = L.map('map').setView([this.lat, this.long], 13);

       L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

      let YourLocation = L.marker([this.lat, this.long]).addTo(map);
      let Destiny = L.marker([-22.731259, -45.123082]).addTo(map);
      let Destiny2 = L.marker([-22.739010, -45.112480]).addTo(map);

      YourLocation.bindPopup("<b>Você está aqui!</b>").openPopup();
      Destiny.bindPopup("<b>Casas Bahia</b>").openPopup();
      Destiny2.bindPopup("<b>Fatea</b>").openPopup();

      });
    }
    else {
    alert("Geolocation is not supported by this browser.");
    }
    }

}
