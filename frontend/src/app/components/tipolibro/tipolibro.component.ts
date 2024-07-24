import { Component, OnInit } from '@angular/core';
import { tipolibro } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tipolibro',
  templateUrl: './tipolibro.component.html',
  styleUrls: ['./tipolibro.component.css']
})
export class TipolibroComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';

  
  TUser: any = [];
  user: tipolibro = {
    cod_tipolibro: null,
    tipo: null,
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/tipolibro')
      .subscribe({
        next: (res) => {
          this.TUser = res;
        },
        error: (err) => console.error(err)
      });
  }

  AgregarValor() {
    delete this.user.cod_tipolibro;
    this.Data.save(this.user, '/tipolibro')
      .subscribe({
        next: (res) => {
          this.getUser();
        },
        error: (err) => console.error(err)
      });
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/tipolibro')
      .subscribe({
        next: (res) => {
          this.getUser();
        },
        error: (err) => console.error(err)
      });
  }

}
