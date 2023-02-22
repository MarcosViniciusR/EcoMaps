import { Component, OnInit } from '@angular/core';

declare const L:any;

@Component({
  selector: 'app-lampada',
  templateUrl: './lampada.component.html',
  styleUrls: ['./lampada.component.css']
})
export class LampadaComponent implements OnInit {

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
       let map3 = L.map('map3').setView([this.lat, this.long], 13);

       L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map3);

      let YourLocation = L.marker([this.lat, this.long]).addTo(map3);
      let Destiny = L.marker([-22.732757, -45.119945]).addTo(map3);
      

      YourLocation.bindPopup("<b>Você está aqui!</b>").openPopup();
      Destiny.bindPopup("<b>Praça Marechal Mallet</b>").openPopup();

      });
    }
    else {
    alert("Geolocation is not supported by this browser.");
    }
    }

}
