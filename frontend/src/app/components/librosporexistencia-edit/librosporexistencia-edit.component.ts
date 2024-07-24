import { Component, OnInit } from '@angular/core';
import { librosporexistencia } from '../../interfaces/user';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-librosporexistencia-edit',
  templateUrl: './librosporexistencia-edit.component.html',
  styleUrls: ['./librosporexistencia-edit.component.css']
})
export class LibrosporexistenciaEditComponent implements OnInit {

  valorInput: number | undefined;
  TUser: any = [];
  user: librosporexistencia = {
    cod_existencia: null,
    cod_libro: null,
  }

  Librolist: any;
  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDropListLibro();
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/librosporexistencia')
        .subscribe(
          res => {
            this.user = res;
          },
          err => console.log(err)
        );
    }
  }

  updateUser() {
    this.Data.update(this.user.cod_existencia!, this.user, '/librosporexistencia')
      .subscribe(
        res => {
          this.router.navigate(['/librosporexistencia']);
        },
        err => console.error(err)
      );
  }

  getDropListLibro() {
    this.Data.getDropListLibro().subscribe((data:any)=>{
      this.Librolist=data;
    })
  }

}
