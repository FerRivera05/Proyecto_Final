import { Component, OnInit } from '@angular/core';
import { librosporexistencia } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-librosporexistencia',
  templateUrl: './librosporexistencia.component.html',
  styleUrls: ['./librosporexistencia.component.css']
})
export class LibrosporexistenciaComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';

  TUser: any = [];
  user: librosporexistencia = {
    cod_existencia: null,
    cod_libro: null,
    titulo: null
  }

  Librolist: any;
  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getDropListLibro();
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/librosporexistencia')
      .subscribe({
        next: (res) => {
          this.TUser = res;
        },
        error: (err) => console.error(err)
      });
  }

  AgregarValor() {
    const librosporexistenciaData = {
      cod_existencia: this.user.cod_existencia,
      cod_libro: this.user.cod_libro,
    };

    this.Data.save(librosporexistenciaData, '/librosporexistencia')
      .subscribe({
        next: (res) => {
          this.getUser();
        },
        error: (err) => console.error(err)
      });
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/librosporexistencia')
      .subscribe({
        next: (res) => {
          this.getUser();
        },
        error: (err) => console.error(err)
      });
  }

  getDropListLibro() {
    this.Data.getDropListLibro().subscribe((data:any)=>{
      this.Librolist=data;
    })
  }
  
}
