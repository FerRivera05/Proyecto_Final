import { Component, OnInit } from '@angular/core';
import { prestamo } from '../../interfaces/user';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prestamo-edit',
  templateUrl: './prestamo-edit.component.html',
  styleUrls: ['./prestamo-edit.component.css']
})
export class PrestamoEditComponent implements OnInit {

  valorInput: number | undefined;
  TUser: any = [];
  user: prestamo = {
    cod_prestamo: null,
    cod_existencia: null,
    cod_afiliado: null,
    fechaprestamo: null,
    horaprestamo: null,
    fechaentrega: null,
    horaentrega: null,
    cod_tipoprestamo: null,
    cod_estado: null,
  }

  Librosporexistencialist: any;
  Afiliadolist: any;
  Tipoprestamolist: any; 
  Estadolist: any;
  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDropListLibrosporexistencia();
    this.getDropListAfiliado();
    this.getDropListTipoprestamo();
    this.getDropListEstado();
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/prestamo')
        .subscribe(
          res => {
            this.user = res;
          },
          err => console.log(err)
        );
    }
  }

  updateUser() {
    this.Data.update(this.user.cod_prestamo!, this.user, '/prestamo')
      .subscribe(
        res => {
          this.router.navigate(['/prestamo']);
        },
        err => console.error(err)
      );
  }

  getDropListLibrosporexistencia() {
    this.Data.getDropListLibrosporexistencia().subscribe((data:any)=>{
      this.Librosporexistencialist=data;
    })
  }

  getDropListAfiliado() {
    this.Data.getDropListAfiliado().subscribe((data:any)=>{
      this.Afiliadolist=data;
    })
  }

  getDropListTipoprestamo() {
    this.Data.getDropListTipoprestamo().subscribe((data:any)=>{
      this.Tipoprestamolist=data;
    })
  }

  getDropListEstado() {
    this.Data.getDropListEstado().subscribe((data:any)=>{
      this.Estadolist=data;
    })
  }

}
