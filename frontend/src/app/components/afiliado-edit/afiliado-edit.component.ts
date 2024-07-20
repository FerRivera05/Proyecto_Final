import { Component, OnInit } from '@angular/core';
import { afiliado } from '../../interfaces/user';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-afiliado-edit',
  templateUrl: './afiliado-edit.component.html',
  styleUrls: ['./afiliado-edit.component.css']
})
export class AfiliadoEditComponent implements OnInit {

  valorInput: number | undefined;
  TUser: any = [];
  user: afiliado = {
    cod_afiliado: null,
    nombre: null,
    apellido1: null,
    apellido2: null,
    documento: null,
    fechanacimiento: null,
    telefono: null,
    direccion: null,
  }

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/afiliado')
        .subscribe(
          res => {
            this.user = res;
          },
          err => console.log(err)
        );
    }
  }

  updateUser() {
    this.Data.update(this.user.cod_afiliado!, this.user, '/afiliado')
      .subscribe(
        res => {
          this.router.navigate(['/afiliado']);
        },
        err => console.error(err)
      );
  }

}
