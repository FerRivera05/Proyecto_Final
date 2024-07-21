import { Component, OnInit } from '@angular/core';
import { tipoprestamo } from '../../interfaces/user';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipoprestamo-edit',
  templateUrl: './tipoprestamo-edit.component.html',
  styleUrls: ['./tipoprestamo-edit.component.css']
})
export class TipoprestamoEditComponent implements OnInit {

  valorInput: number | undefined;
  TUser: any = [];
  user: tipoprestamo = {
    cod_tipoprestamo: null,
    tipoprestamo: null
  }

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/tipoprestamo')
        .subscribe(
          res => {
            this.user = res;
          },
          err => console.log(err)
        );
    }
  }

  updateUser() {
    this.Data.update(this.user.cod_tipoprestamo!, this.user, '/tipoprestamo')
      .subscribe(
        res => {
          this.router.navigate(['/tipoprestamo']);
        },
        err => console.error(err)
      );
  }

}
