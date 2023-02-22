import { Component, OnInit } from '@angular/core';

declare const L:any;

@Component({
  selector: 'app-pneu',
  templateUrl: './pneu.component.html',
  styleUrls: ['./pneu.component.css']
})
export class PneuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'lorenaeco';
  lat: number = 0;
  long: number = 0;


  isVisible = false;

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
       let map2 = L.map('map2').setView([this.lat, this.long], 13);

       L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map2);

      let YourLocation = L.marker([this.lat, this.long]).addTo(map2);
      let Destiny = L.marker([-22.747505, -45.102138]).addTo(map2);
      let Destiny2 = L.marker([-22.746562, -45.132221]).addTo(map2);

      YourLocation.bindPopup("<b>Você está aqui!</b>").openPopup();
      Destiny.bindPopup("<b>Valecap Recauchutagem</b>").openPopup();
      Destiny2.bindPopup("<b>COOCAL</b>").openPopup();

      });
    }
    else {
    alert("Geolocation is not supported by this browser.");
    }
    }

}
