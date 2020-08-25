import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcas-listagem',
  templateUrl: './marcas-listagem.component.html',
  styleUrls: ['./marcas-listagem.component.css']
})
export class MarcasListagemComponent implements OnInit {

  url = "http://localhost:3000/marcas"

  marcas = []
  marcas_json = fetch(this.url).then(resposta => resposta.json())
    .then(respostaJson => this.marcas = respostaJson)





  constructor() { }

  ngOnInit(): void {
  }

}
