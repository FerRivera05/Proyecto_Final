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
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/librosporexistencia?sort=cod_existencia')
      .subscribe({
        next: (res) => {
          this.TUser = res;
        },
        error: (err) => console.error(err)
      });
  }

  AgregarValor() {
    delete this.user.cod_existencia;
    this.Data.save(this.user, '/librosporexistencia')
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
}
