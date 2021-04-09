import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pasi.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [ 
    ` li {
      cursor:pointer;
    } `
  ]
})
export class PorPaisComponent  {
  
  termino:string='' 
  hayError: boolean=false;
  paises:Country[]=[];
  paisesSugeridos:Country[]=[];

  mostrarSugerencia: boolean =false;

  constructor(private paisservice:PaisService) { }

  buscar(termino:string){
    this.mostrarSugerencia=false;
    this.hayError=false;
    this.termino=termino;
    

    this.paisservice.buscarpais(termino)
    .subscribe((paises)=>{
      console.log(paises);
      this.paises=paises;

      
      
    },(err)=>{
      this.hayError=true
      this.paises=[];

    });
  }

  sugerencia(termino:string){
    this.hayError=false;
    this.termino=termino;
    this.mostrarSugerencia=true;

    this.paisservice.buscarpais(termino)
    .subscribe(paises=> this.paisesSugeridos=paises.splice(0,5),
    
    (err)=>this.paisesSugeridos=[]
    );


  }
  buscaSugerido(termino:string){
    this.buscar(termino);
   
  }

}
