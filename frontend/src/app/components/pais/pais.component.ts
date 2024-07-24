import { Component, OnInit } from '@angular/core';
import { pais } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
  
  TUser: any = [];
  user: pais = {
    cod_pais: null,
    pais: null,
  }

  Paislist: any;
  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getDropListPais();
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/pais')
      .subscribe({
        next: (res) => {
          this.TUser = res;
        },
        error: (err) => console.error(err)
      });
  }

  AgregarValor() {
    delete this.user.cod_pais;
    this.Data.save(this.user, '/pais')
      .subscribe({
        next: (res) => {
          this.getUser();
        },
        error: (err) => console.error(err)
      });
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/pais')
      .subscribe({
        next: (res) => {
          this.getUser();
        },
        error: (err) => console.error(err)
      });
  }

  getDropListPais() {
    this.Data.getDropListPais().subscribe((data:any)=>{
      this.Paislist=data;
    })
  }

}
