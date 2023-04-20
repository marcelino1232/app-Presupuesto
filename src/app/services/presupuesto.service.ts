import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  private gastos$ = new Subject<any>();
  
  presupuesto:number;
  restante:number;

  constructor() { 
    this.presupuesto = 0;
    this.restante = 0;
  }

  agregarGasto(gasto:any) {
   this.restante = this.restante - gasto.cantidad;
   this.gastos$.next(gasto);
  }

  getGatos(): Observable<any> {
    return this.gastos$.asObservable();
  }

}
