import { Component, OnInit } from '@angular/core';
import { afiliado } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-consulta-afiliado',
  templateUrl: './consulta-afiliado.component.html',
  styleUrls: ['./consulta-afiliado.component.css']
})
export class ConsultaAfiliadoComponent implements OnInit{

  @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';

  
  TUser: any = [];
  user: afiliado = {
    cod_afiliado: null,
    nombre: null,
    apellido1: null,
    apellido2: null,
    documento: null,
    fechanacimiento: null,
    telefono: null,
    direccion: null,
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/afiliado')
      .subscribe({
        next: (res) => {
          this.TUser = res;
        },
        error: (err) => console.error(err)
      });
  }

}
