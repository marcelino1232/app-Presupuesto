import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnInit,OnDestroy {

  subcripcion: Subscription;
  presupuesto:number;
  restante:number;

  listGastos:any[] = [];

  constructor(private _presupuestoService:PresupuestoService){
    this.presupuesto = 0;
    this.restante = 0;

    this.subcripcion = this._presupuestoService.getGatos().subscribe(data => {
      this.restante = this.restante - data.cantidad;
      this.listGastos.push(data);
    })
  }

  ngOnInit(): void {
    this.presupuesto = this._presupuestoService.presupuesto;
    this.restante = this._presupuestoService.restante;
  }

  ngOnDestroy(): void {
    this.subcripcion.unsubscribe();
  }

  deleteGasto(index:number,cantidad:number){
    this.listGastos.splice(index,1);
    this.restante = this.restante + cantidad;
    this._presupuestoService.restante = this.restante;
  }

}
