import { Component, OnInit } from '@angular/core';
import { tipoprestamo } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-tipoprestamo',
  templateUrl: './tipoprestamo.component.html',
  styleUrls: ['./tipoprestamo.component.css']
})
export class TipoprestamoComponent implements OnInit {
  
  TUser: any = [];
  user: tipoprestamo = {
    cod_tipoprestamo: null,
    tipoprestamo: null,
  }

  Tipoprestamolist: any; 
  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getDropListTipoprestamo();
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

  getDropListTipoprestamo() {
    this.Data.getDropListTipoprestamo().subscribe((data:any)=>{
      this.Tipoprestamolist=data;
    })
  }

}
