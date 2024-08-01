import { Component, OnInit } from '@angular/core';
import { prestamo } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-librosporafiliado',
  templateUrl: './librosporafiliado.component.html',
  styleUrls: ['./librosporafiliado.component.css']
})
export class LibrosporafiliadoComponent implements OnInit{

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

  constructor(private Data: DataService) { }

  ngOnInit(): void {
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
  

}
