import { Component, OnInit } from '@angular/core';
import { estadoporexistencia } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-estadoporexistencia',
  templateUrl: './estadoporexistencia.component.html',
  styleUrls: ['./estadoporexistencia.component.css']
})
export class EstadoporexistenciaComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';

  TUser: any = [];
  user: estadoporexistencia = {
    cod_estadoexistencia: null,
    cod_estado: null,
    cod_existencia: null,
    estado: null,
    titulo: null
  }

  Estadolist: any;
  Librosporexistencialist: any;
  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getDropListEstado();
    this.getDropListLibrosporexistencia();
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/estadoporexistencia')
      .subscribe({
        next: (res) => {
          this.TUser = res;
        },
        error: (err) => console.error(err)
      });
  }

  AgregarValor() {
    const estadoporexistencia = {
      cod_estado: this.user.cod_estado,
      cod_existencia: this.user.cod_existencia,
    };

    this.Data.save(estadoporexistencia, '/estadoporexistencia')
      .subscribe({
        next: (res) => {
          this.getUser();
        },
        error: (err) => console.error(err)
      });
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/estadoporexistencia')
      .subscribe({
        next: (res) => {
          this.getUser();
        },
        error: (err) => console.error(err)
      });
  }

  getDropListEstado() {
    this.Data.getDropListEstado().subscribe((data:any)=>{
      this.Estadolist=data;
    })
  }

  getDropListLibrosporexistencia() {
    this.Data.getDropListLibrosporexistencia().subscribe((data:any)=>{
      this.Librosporexistencialist=data;
    })
  }

}
