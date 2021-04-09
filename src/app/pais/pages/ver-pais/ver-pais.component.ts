import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pasi.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!:Country ;

  constructor(private activate: ActivatedRoute,
    private paisService:PaisService
    ) { }

  ngOnInit(): void {

    this.activate.params.pipe(
      switchMap( ( {id}) => this.paisService.getPaisPorAlpha(id)),
      tap(console.log)
    )
    .subscribe(pais => this.pais=pais);


  }

}
