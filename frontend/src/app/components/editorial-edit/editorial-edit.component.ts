import { Component, OnInit } from '@angular/core';
import { editorial } from '../../interfaces/user';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editorial-edit',
  templateUrl: './editorial-edit.component.html',
  styleUrls: ['./editorial-edit.component.css']
})
export class EditorialEditComponent {

  valorInput: number | undefined;
  TUser: any = [];
  user: editorial = {
    cod_editorial: null,
    editorial: null
  }

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/editorial')
        .subscribe(
          res => {
            this.user = res;
          },
          err => console.log(err)
        );
    }
  }

  updateUser() {
    this.Data.update(this.user.cod_editorial!, this.user, '/editorial')
      .subscribe(
        res => {
          this.router.navigate(['/editorial']);
        },
        err => console.error(err)
      );
  }

}
