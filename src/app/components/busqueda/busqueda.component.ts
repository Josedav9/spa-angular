import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService,Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {
  heroes:any = [];

  busqueda:string;
  constructor(private activatedReoute:ActivatedRoute,
              private _heroeService:HeroesService) {

  }



  ngOnInit() {
    this.activatedReoute.params.subscribe( params => this.busqueda = params['valor']);
    this.activatedReoute.params.subscribe( params =>{
    this.heroes = this._heroeService.buscarHeroes(params['valor']);
    });
  }

}
