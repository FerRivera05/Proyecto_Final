import { Component } from '@angular/core';
import { librosporarea } from '../../interfaces/user';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-librosporarea-edit',
  templateUrl: './librosporarea-edit.component.html',
  styleUrls: ['./librosporarea-edit.component.css']
})
export class LibrosporareaEditComponent {

  valorInput: number | undefined;
  TUser: any = [];
  user: librosporarea = {
    cod_libroarea: null,
    cod_libro: null,
    cod_area: null,
  }

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/librosporarea')
        .subscribe(
          res => {
            this.user = res;
          },
          err => console.log(err)
        );
    }
  }

  updateUser() {
    this.Data.update(this.user.cod_libroarea!, this.user, '/librosporarea')
      .subscribe(
        res => {
          this.router.navigate(['/librosporarea']);
        },
        err => console.error(err)
      );
  }

}
