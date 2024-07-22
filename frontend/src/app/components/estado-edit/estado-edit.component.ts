import { Component, OnInit } from '@angular/core';
import { estado } from '../../interfaces/user';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estado-edit',
  templateUrl: './estado-edit.component.html',
  styleUrls: ['./estado-edit.component.css']
})
export class EstadoEditComponent implements OnInit {

  valorInput: number | undefined;
  TUser: any = [];
  user: estado = {
    cod_estado: null,
    estado: null
  }

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/estado')
        .subscribe(
          res => {
            this.user = res;
          },
          err => console.log(err)
        );
    }
  }

  updateUser() {
    this.Data.update(this.user.cod_estado!, this.user, '/estado')
      .subscribe(
        res => {
          this.router.navigate(['/estado']);
        },
        err => console.error(err)
      );
  }

}
