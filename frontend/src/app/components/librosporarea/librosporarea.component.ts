import { Component } from '@angular/core';
import { librosporarea } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-librosporarea',
  templateUrl: './librosporarea.component.html',
  styleUrls: ['./librosporarea.component.css']
})
export class LibrosporareaComponent {

  TUser: any = [];
  user: librosporarea = {
    cod_libroarea: null,
    cod_libro: null,
    cod_area: null,
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/librosporarea')
      .subscribe({
        next: (res) => {
          this.TUser = res;
        },
        error: (err) => console.error(err)
      });
  }

  AgregarValor() {
    delete this.user.cod_libroarea;
    this.Data.save(this.user, '/librosporarea')
      .subscribe({
        next: (res) => {
          this.getUser();
        },
        error: (err) => console.error(err)
      });
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/librosporarea')
      .subscribe({
        next: (res) => {
          this.getUser();
        },
        error: (err) => console.error(err)
      });
  }

}
