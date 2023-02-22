import { Component } from '@angular/core';

declare const L:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lorenaeco';

  casasBahia: string[] = 
  ["Aparelhos de barbear",
  "Aparelhos telefônicos",
  "Caixas de som",
  "Calculadoras",
  "Câmeras digitais",
  ];

  fatea: string[] = 
  [ "Antenas de TV",
  "Antenas parabólicas",
  "Aparelhos de barbear elétricos",
  "Aparelhos de telefone",
  "Aspiradores de pó"
  ];

  pracaMarechal: string[] = 
  [ "Lâmpadas",
    "Baterias",
    "Pilhas"
  ]

  valecapRecauchutagem: string[] = ["Pneus"]

  COOCAL: string[] = ["Pneus"]


  }