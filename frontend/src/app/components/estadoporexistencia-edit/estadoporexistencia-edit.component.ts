import { Component } from '@angular/core';
import { estadoporexistencia } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estadoporexistencia-edit',
  templateUrl: './estadoporexistencia-edit.component.html',
  styleUrls: ['./estadoporexistencia-edit.component.css']
})
export class EstadoporexistenciaEditComponent {

  valorInput: number | undefined;
  TUser: any = [];
  user: estadoporexistencia = {
    cod_estadoexistencia: null,
    cod_estado: null,
    cod_existencia: null,
  }

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/estadoporexistencia')
        .subscribe(
          res => {
            this.user = res;
          },
          err => console.log(err)
        );
    }
  }

  updateUser() {
    this.Data.update(this.user.cod_estadoexistencia!, this.user, '/estadoporexistencia')
      .subscribe(
        res => {
          this.router.navigate(['/estadoporexistencia']);
        },
        err => console.error(err)
      );
  }

}
