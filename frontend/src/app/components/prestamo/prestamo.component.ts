import { Component, OnInit } from '@angular/core';
import { prestamo } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.component.html',
  styleUrls: ['./prestamo.component.css']
})
export class PrestamoComponent implements OnInit {
  
  TUser: any = [];
  user: prestamo = {
    cod_prestamo: null,
    cod_existencia: null,
    cod_afiliado: null,
    fechaprestamo: null,
    horaprestamo: null,
    fechaentrega: null,
    horaentrega: null,
    cod_tipoprestamo: null,
    cod_estado: null
  }

  Librosporexistencialist: any;
  Afiliadolist: any;
  Tipoprestamolist: any; 
  Estadolist: any;
  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getDropListLibrosporexistencia();
    this.getDropListAfiliado();
    this.getDropListTipoprestamo();
    this.getDropListEstado();
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/prestamo')
      .subscribe({
        next: (res) => {
          this.TUser = res;
        },
        error: (err) => console.error(err)
      });
  }

  AgregarValor() {
    delete this.user.cod_prestamo;
    this.Data.save(this.user, '/prestamo')
      .subscribe({
        next: (res) => {
          this.getUser();
        },
        error: (err) => console.error(err)
      });
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/prestamo')
      .subscribe({
        next: (res) => {
          this.getUser();
        },
        error: (err) => console.error(err)
      });
  }

  getDropListLibrosporexistencia() {
    this.Data.getDropListLibrosporexistencia().subscribe((data:any)=>{
      this.Librosporexistencialist=data;
    })
  }

  getDropListAfiliado() {
    this.Data.getDropListAfiliado().subscribe((data:any)=>{
      this.Afiliadolist=data;
    })
  }

  getDropListTipoprestamo() {
    this.Data.getDropListTipoprestamo().subscribe((data:any)=>{
      this.Tipoprestamolist=data;
    })
  }

  getDropListEstado() {
    this.Data.getDropListEstado().subscribe((data:any)=>{
      this.Estadolist=data;
    })
  }


}
