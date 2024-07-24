import { Component, OnInit } from '@angular/core';
import { tipoprestamo } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tipoprestamo',
  templateUrl: './tipoprestamo.component.html',
  styleUrls: ['./tipoprestamo.component.css']
})
export class TipoprestamoComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';

  TUser: any = [];
  user: tipoprestamo = {
    cod_tipoprestamo: null,
    tipoprestamo: null,
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/tipoprestamo')
      .subscribe({
        next: (res) => {
          this.TUser = res;
        },
        error: (err) => console.error(err)
      });
  }

  AgregarValor() {
    this.Data.save(this.user, '/tipoprestamo')
      .subscribe({
        next: (res) => {
          this.getUser();
        },
        error: (err) => console.error(err)
      });
  }

  EliminarData(id: string) {
    this.Data.delete(id, '/tipoprestamo')
      .subscribe({
        next: (res) => {
          this.getUser();
        },
        error: (err) => console.error(err)
      });
  }

}
