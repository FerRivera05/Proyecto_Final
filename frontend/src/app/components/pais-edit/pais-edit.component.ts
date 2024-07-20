import { Component, OnInit } from '@angular/core';
import { pais } from '../../interfaces/user';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pais-edit',
  templateUrl: './pais-edit.component.html',
  styleUrls: ['./pais-edit.component.css']
})
export class PaisEditComponent implements OnInit {

  valorInput: number | undefined;
  TUser: any = [];
  user: pais = {
    cod_pais: null,
    pais: null
  }

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/pais')
        .subscribe(
          res => {
            this.user = res;
          },
          err => console.log(err)
        );
    }
  }

  updateUser() {
    this.Data.update(this.user.cod_pais!, this.user, '/pais')
      .subscribe(
        res => {
          this.router.navigate(['/pais']);
        },
        err => console.error(err)
      );
  }

}
