import { Component, OnInit } from '@angular/core';
import { librosporautor } from '../../interfaces/user';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-librosporautor-edit',
  templateUrl: './librosporautor-edit.component.html',
  styleUrls: ['./librosporautor-edit.component.css']
})
export class LibrosporautorEditComponent implements OnInit {

  valorInput: number | undefined;
  TUser: any = [];
  user: librosporautor = {
    cod_libroautor: null,
    cod_libro: null,
    cod_autor: null,
  }

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/librosporautor')
        .subscribe(
          res => {
            this.user = res;
          },
          err => console.log(err)
        );
    }
  }

  updateUser() {
    this.Data.update(this.user.cod_libroautor!, this.user, '/librosporautor')
      .subscribe(
        res => {
          this.router.navigate(['/librosporautor']);
        },
        err => console.error(err)
      );
  }

}
