import { Component, OnInit } from '@angular/core';
import { libro } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';

  TUser: any = [];
  user: libro = {
    cod_libro: null,
    ISBN: null,
    titulo: null,
    cod_editorial: null,
    cod_pais: null,
    cod_tipolibro: null,
    fechalanzamiento: null,
    edicion: null,
    editorial: null,
    pais: null,
    tipolibro: null
  }

  Librolist: any;
  Editoriallist: any;
  Paislist: any;
  Tipolibrolist: any;
  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getDropListLibro();
    this.getDropListEditorial();
    this.getDropListPais();
    this.getDropListTipolibro();
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/libro')
      .subscribe({
        next: (res) => {
          this.TUser = res;
        },
        error: (err) => console.error(err)
      });
  }

  AgregarValor() {
    const libroData = {
      ISBN: this.user.ISBN,
      cod_editorial: this.user.cod_editorial,
      cod_pais: this.user.cod_pais,
      cod_tipolibro: this.user.cod_tipolibro,
      edicion: this.user.edicion,
      fechalanzamiento: this.user.fechalanzamiento,
      titulo: this.user.titulo,
    };

    this.Data.save(libroData, '/libro')
      .subscribe({
        next: (res) => {
          this.getUser();
        },
        error: (err) => console.error(err)
      });
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/libro')
      .subscribe({
        next: (res) => {
          this.getUser();
        },
        error: (err) => console.error(err)
      });
  }

  getDropListLibro() {
    this.Data.getDropListLibro().subscribe((data: any) => {
      this.Librolist = data;
    })
  }

  getDropListEditorial() {
    this.Data.getDropListEditorial().subscribe((data: any) => {
      this.Editoriallist = data;
    })
  }

  getDropListPais() {
    this.Data.getDropListPais().subscribe((data: any) => {
      this.Paislist = data;
    })
  }

  getDropListTipolibro() {
    this.Data.getDropListTipolibro().subscribe((data: any) => {
      this.Tipolibrolist = data;
    })
  }

}
