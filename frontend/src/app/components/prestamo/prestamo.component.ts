import { Component, OnInit } from '@angular/core';
import { prestamo } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.component.html',
  styleUrls: ['./prestamo.component.css']
})
export class PrestamoComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';

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
    titulo: null,
    nombre: null,
    tipoprestamo: null
  }

  Librosporexistencialist: any;
  Afiliadolist: any;
  Tipoprestamolist: any; 
  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getDropListLibrosporexistencia();
    this.getDropListAfiliado();
    this.getDropListTipoprestamo();
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
    const prestamoData = {
      cod_existencia: this.user.cod_existencia,
      cod_afiliado: this.user.cod_afiliado,
      fechaprestamo: this.user.fechaprestamo,
      horaprestamo: this.user.horaprestamo,
      fechaentrega: this.user.fechaentrega,
      horaentrega: this.user.horaentrega,
      cod_tipoprestamo: this.user.cod_tipoprestamo,
    };

    this.Data.save(prestamoData, '/prestamo')
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

}
