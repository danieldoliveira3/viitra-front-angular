import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carros-listagem',
  templateUrl: './carros-listagem.component.html',
  styleUrls: ['./carros-listagem.component.css']
})
export class CarrosListagemComponent implements OnInit {
  carros = []
  carro_url = "http://localhost:3000/carros"

  carros_json = fetch(this.carro_url).then(resposta => resposta.json())
    .then(respostaJson => this.carros = respostaJson)
  constructor() { }

  ngOnInit(): void {
  }

}
