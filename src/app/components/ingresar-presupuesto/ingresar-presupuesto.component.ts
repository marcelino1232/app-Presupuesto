import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.css']
})
export class IngresarPresupuestoComponent {

  estado:boolean;
  cantidad:number;

  constructor(private _presupuestoService:PresupuestoService, private rounter:Router){
    this.estado = false;
    this.cantidad = 0;
  }


  agregarPresupuesto(){

    if(this.cantidad <= 0)
    {
      this.estado = true;
      return;
    }
    this.estado = false;
    this._presupuestoService.presupuesto = this.cantidad;
    this._presupuestoService.restante = this.cantidad;
    this.rounter.navigate(['/gastos']);   
  }


}
