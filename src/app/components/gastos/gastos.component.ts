import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent {

  constructor(private _route:Router,private _presupuestoService:PresupuestoService){

  }

  ngOnInit(): void {
    if(this._presupuestoService.presupuesto <= 0){
      this._route.navigate(['/ingresarPresupuesto']);
    }
  }

}
