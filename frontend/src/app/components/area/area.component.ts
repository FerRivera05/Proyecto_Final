import { Component, OnInit } from '@angular/core';
import { area } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';
import { ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';

  TUser: any = [];
  user: area = {
    cod_area: null,
    area: null,
  }

  Arealist: any;
  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getDropListArea();
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/area')
      .subscribe({
        next: (res) => {
          this.TUser = res;
        },
        error: (err) => console.error(err)
      });
  }

  AgregarValor() {
    delete this.user.cod_area;
    this.Data.save(this.user, '/area')
      .subscribe({
        next: (res) => {
          this.getUser();
        },
        error: (err) => console.error(err)
      });
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/area')
      .subscribe({
        next: (res) => {
          this.getUser();
        },
        error: (err) => console.error(err)
      });
  }

  getDropListArea() {
    this.Data.getDropListArea().subscribe((data:any)=>{
      this.Arealist=data;
    })
  }

}
