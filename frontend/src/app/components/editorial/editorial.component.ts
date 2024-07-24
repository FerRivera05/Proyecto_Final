import { Component, OnInit } from '@angular/core';
import { editorial } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.css']
})
export class EditorialComponent implements OnInit {

  TUser: any = [];
  user: editorial = {
    cod_editorial: null,
    editorial: null,
  }

  Editoriallist: any;  
  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getDropListEditorial();
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/editorial')
      .subscribe({
        next: (res) => {
          this.TUser = res;
        },
        error: (err) => console.error(err)
      });
  }

  AgregarValor() {
    delete this.user.cod_editorial;
    this.Data.save(this.user, '/editorial')
      .subscribe({
        next: (res) => {
          this.getUser();
        },
        error: (err) => console.error(err)
      });
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/editorial')
      .subscribe({
        next: (res) => {
          this.getUser();
        },
        error: (err) => console.error(err)
      });
  }

  getDropListEditorial() {
    this.Data.getDropListEditorial().subscribe((data:any)=>{
      this.Editoriallist=data;
    })
  }


}
