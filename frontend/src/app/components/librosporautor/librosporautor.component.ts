import { Component, OnInit } from '@angular/core';
import { librosporautor } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';
import { ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-librosporautor',
  templateUrl: './librosporautor.component.html',
  styleUrls: ['./librosporautor.component.css']
})
export class LibrosporautorComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';
  TUser: any = [];
  user: librosporautor = {
    cod_libroautor: null,
    cod_libro: null,
    cod_autor: null,
    titulo: null,
    autor: null
  }

  Librolist: any;
  Autorlist: any;
  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getDropListLibro();
    this.getDropListAutor();
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/librosporautor')
      .subscribe({
        next: (res) => {
          this.TUser = res;
        },
        error: (err) => console.error(err)
      });
  }

  AgregarValor() {
    const librosporautorData = {
      cod_libro: this.user.cod_libro,
      cod_autor: this.user.cod_autor,
    };

    this.Data.save(librosporautorData, '/librosporautor')
      .subscribe({
        next: (res) => {
          this.getUser();
        },
        error: (err) => console.error(err)
      });
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/librosporautor')
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

  getDropListAutor() {
    this.Data.getDropListAutor().subscribe((data: any) => {
      this.Autorlist = data;
    })
  }

}
