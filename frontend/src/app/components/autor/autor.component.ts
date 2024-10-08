import { Component, OnInit } from '@angular/core';
import { autor } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';


  TUser: any = [];
  user: autor = {
    cod_autor: null,
    autor: null,
  }

  Autorlist: any;  
  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getDropListAutor();
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/autor')
      .subscribe({
        next: (res) => {
          this.TUser = res;
        },
        error: (err) => console.error(err)
      });
  }

  AgregarValor() {
    delete this.user.cod_autor;
    this.Data.save(this.user, '/autor')
      .subscribe({
        next: (res) => {
          this.getUser();
        },
        error: (err) => console.error(err)
      });
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/autor')
      .subscribe({
        next: (res) => {
          this.getUser();
        },
        error: (err) => console.error(err)
      });
  }

  getDropListAutor() {
    this.Data.getDropListAutor().subscribe((data:any)=>{
      this.Autorlist=data;
    })
  }

}
