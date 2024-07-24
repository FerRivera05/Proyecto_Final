import { Component } from '@angular/core';
import { libro } from '../../interfaces/user';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-libro-edit',
  templateUrl: './libro-edit.component.html',
  styleUrls: ['./libro-edit.component.css']
})
export class LibroEditComponent {

  valorInput: number | undefined;
  TUser: any = [];
  user: libro = {
    cod_libro: null,
    ISBN: null,
    titulo: null,
    cod_editorial: null,
    cod_pais: null,
    cod_tipolibro: null,
    fechalanzamiento: null,
    edicion: null,
  }

  Librolist: any;
  Editoriallist: any;
  Paislist: any;
  Tipolibrolist: any;
  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDropListLibro();
    this.getDropListEditorial();
    this.getDropListPais();
    this.getDropListTipolibro();
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/libro')
        .subscribe(
          res => {
            this.user = res;
          },
          err => console.log(err)
        );
    }
  }

  updateUser() {
    this.Data.update(this.user.cod_libro!, this.user, '/libro')
      .subscribe(
        res => {
          this.router.navigate(['/libro']);
        },
        err => console.error(err)
      );
  }

  getDropListLibro() {
    this.Data.getDropListLibro().subscribe((data:any)=>{
      this.Librolist=data;
    })
  }

  getDropListEditorial() {
    this.Data.getDropListEditorial().subscribe((data:any)=>{
      this.Editoriallist=data;
    })
  }

  getDropListPais() {
    this.Data.getDropListPais().subscribe((data:any)=>{
      this.Paislist=data;
    })
  }

  getDropListTipolibro() {
    this.Data.getDropListTipolibro().subscribe((data:any)=>{
      this.Tipolibrolist=data;
    })
  }

}
