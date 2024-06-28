import { Injectable } from '@angular/core';
import { Imovel } from './imovel'

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  private imoveisDB: Imovel[] = [
    {
      "id": 1,
      "url_foto": "1.jpg",
      "nome": "Sobrado Lindo",
      "cidade": "Salto",
      "estado": "Minas Gerais",
      "tipoImovel": "casa",
      "favorito": false,
      "adicionais": [
        {
          "chave": "Quartos disponiveis",
          "valor": "4",
        },
        {
          "chave": "Piscina",
          "valor": "Sim",
        }
      ]
    },
    {
      "id": 2,
      "url_foto": "2.jpg",
      "nome": "Kitnet Economica",
      "cidade": "Saltinho",
      "estado": "São Paulo",
      "tipoImovel": "apartamento",
      "favorito": false,
      "adicionais": [
        {
          "chave": "Banheiro",
          "valor": "1",
        }
      ]
    },
    {
      "id": 3,
      "url_foto": "3.jpg",
      "nome": "Casarão na floresta",
      "cidade": "Americana",
      "estado": "São Paulo",
      "tipoImovel": "casa",
      "favorito": false,
      "adicionais": [
        {
          "chave": "Quartos disponiveis",
          "valor": "10",
        },
        {
          "chave": "Quintal",
          "valor": "Muito Grande",
        }
      ]
    },
    {
      "id": 4,
      "url_foto": "4.jpg",
      "nome": "Casa 04",
      "cidade": "Nova Odessa",
      "estado": "São Paulo",
      "tipoImovel": "casa",
      "favorito": false,
      "adicionais": [
        {
          "chave": "Quartos disponiveis",
          "valor": "4",
        },
        {
          "chave": "Piscina",
          "valor": "Sim",
        }
      ]
    },
    {
      "id": 5,
      "url_foto": "5.jpg",
      "nome": "Casa 05",
      "cidade": "Piracicaba",
      "estado": "São Paulo",
      "tipoImovel": "casa",
      "favorito": false,
      "adicionais": [
        {
          "chave": "Quartos disponiveis",
          "valor": "4",
        },
        {
          "chave": "Piscina",
          "valor": "Sim",
        }
      ]
    },
    {
      "id": 6,
      "url_foto": "6.jpg",
      "nome": "Casa 06",
      "cidade": "Cabreúva",
      "estado": "São Paulo",
      "tipoImovel": "casa",
      "favorito": false,
      "adicionais": [
        {
          "chave": "Quartos disponiveis",
          "valor": "4",
        },
        {
          "chave": "Piscina",
          "valor": "Sim",
        }
      ]
    },
    {
      "id": 7,
      "url_foto": "7.jpg",
      "nome": "Casa 07",
      "cidade": "Sumaré",
      "estado": "São Paulo",
      "tipoImovel": "casa",
      "favorito": false,
      "adicionais": []
    },
    {
      "id": 8,
      "url_foto": "8.jpg",
      "nome": "Casa 08",
      "cidade": "Piracicaba",
      "estado": "São Paulo",
      "tipoImovel": "casa",
      "favorito": false,
      "adicionais": []
    },
    {
      "id": 9,
      "url_foto": "9.jpg",
      "nome": "Casa 09",
      "cidade": "Piracicaba",
      "estado": "São Paulo",
      "tipoImovel": "apartamento",
      "favorito": false,
      "adicionais": []
    }
  ]
  buscarTodosImoveis(): Imovel[] {
    return this.imoveisDB
  }

  buscarImovelPeloId(id: number): Imovel | undefined {
    let imovel

    for (let i = 0; i < this.imoveisDB.length; i++) {
      imovel = this.imoveisDB[i];

      if (imovel.id == id) {
        break
      }
    }
    return imovel
  }

}


