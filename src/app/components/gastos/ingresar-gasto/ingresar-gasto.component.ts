import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent {

  gasto = ''
  cantidad = 0;
  estado = false;
  textIncorrecto = '';

  constructor(private _presupuesto:PresupuestoService,private _router:Router){

  }

  addGasto(){

     if(this.cantidad > this._presupuesto.restante){
       this.estado = true;
       this.textIncorrecto = "Cantidad ingresadad es mayor al restante";
       return;
     }

     if(this.gasto === '' || this.cantidad <= 0){
      this.estado = true;
      this.textIncorrecto = 'Nombre gasto o cantidad incorrecta';
     }else{

      const Gasto = {
        nombre:this.gasto,
        cantidad:this.cantidad
      }

      this._presupuesto.agregarGasto(Gasto);

      this.estado = false;
      this.gasto = '';
      this.cantidad = 0;
     }
  }
}
