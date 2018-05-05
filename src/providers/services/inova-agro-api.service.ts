import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class InovaAgroApi {

  private gastoTotal : any;

 private rebanho = [
  {
  descricao: 'Rebanho de Nelore',
  quantidade: 10,
  idade: 8,
  tipo: 'Boi',
  raca: 'Nelore',
  custoPorCabeca: 800,
  pesoMedio: 10,
  porcentagemPronto: 65,
  gastoTotal: 950,
  pesos: [
    {
      mediaPeso: 8,
      custoMedioVacinas: 1000,
      custoMedioAlimentacao: 2000,
      custoMedioFuncionarios: 1000,
      dataAlteracao:'25/05/2018'
    }
  ],
  background: 'https://i1.wp.com/cdn.comprerural.com/wp-content/uploads/2017/08/23100548/vacas-nelore-correndo.jpg?resize=640%2C346&ssl=1'
},
{ 
  descricao: 'Rebanho de Wagyu',
  quantidade: 5,
  idade: 10,
  tipo: 'Vaca',
  raca: 'Wagyu',
  custoPorCabeca: 750,
  pesoMedio:'',
  porcetagemPronto: '',
  gastoTotal:'',
  pesos: [
    {
      mediaPeso: 8,
      custoMedioVacinas: 2000,
      custoMedioAlimentacao: 3000,
      custoMedioFuncionarios: 4000,
      dataAlteracao:'25/05/2018'
    }
  ],
  background: 'http://imgsapp.diariodepernambuco.com.br/app/noticia_127983242361/2017/11/01/729267/20171101224717214676o.jpg'
}
];

 adicionarRebanho(rebanho){
   rebanho.push(rebanho);
 }

 trazerTodosRebanhos(){
   return Object.assign(this.rebanho);
 }

 adicionarPeso(rebanho,peso){
  rebanho.gastoTotal = this.calcularGastoTotal(rebanho,peso);
  rebanho.pesos.push(peso);

  console.log(rebanho.pesos);

 }

 total(){
   return this.gastoTotal;
 }

 calcularGastoTotal(rebanho, pesos){
    this.gastoTotal = rebanho.gastoTotal + (pesos.custoMedioAlimentacao + pesos.custoMedioFuncionarios + pesos.custoMedioVacinas + pesos.custoPorCabeca);
    return rebanho.gastoTotal = this.gastoTotal;
 }
  
}
