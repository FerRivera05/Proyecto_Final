import { Component, OnInit } from '@angular/core';
import { afiliado } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-afiliado',
  templateUrl: './afiliado.component.html',
  styleUrls: ['./afiliado.component.css']
})
export class AfiliadoComponent implements OnInit {
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

  Afiliadolist: any;
  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getDropListAfiliado();
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

  AgregarValor() {
    delete this.user.cod_afiliado;
    this.Data.save(this.user, '/afiliado')
      .subscribe({
        next: (res) => {
          this.getUser();
        },
        error: (err) => console.error(err)
      });
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/afiliado')
      .subscribe({
        next: (res) => {
          this.getUser();
        },
        error: (err) => console.error(err)
      });
  }

  getDropListAfiliado() {
    this.Data.getDropListAfiliado().subscribe((data:any)=>{
      this.Afiliadolist=data;
    })
  }

}
