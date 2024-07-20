import { Component, OnInit } from '@angular/core';
import { tipolibro } from '../../interfaces/user';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipolibro-edit',
  templateUrl: './tipolibro-edit.component.html',
  styleUrls: ['./tipolibro-edit.component.css']
})
export class TipolibroEditComponent implements OnInit {

  valorInput: number | undefined;
  TUser: any = [];
  user: tipolibro = {
    cod_tipolibro: null,
    tipo: null
  }

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/tipolibro')
        .subscribe(
          res => {
            this.user = res;
          },
          err => console.log(err)
        );
    }
  }

  updateUser() {
    this.Data.update(this.user.cod_tipolibro!, this.user, '/tipolibro')
      .subscribe(
        res => {
          this.router.navigate(['/tipolibro']);
        },
        err => console.error(err)
      );
  }

}
