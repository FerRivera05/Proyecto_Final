import { Component, OnInit } from '@angular/core';
import { autor } from '../../interfaces/user';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-autor-edit',
  templateUrl: './autor-edit.component.html',
  styleUrls: ['./autor-edit.component.css']
})
export class AutorEditComponent implements OnInit {

  valorInput: number | undefined;
  TUser: any = [];
  user: autor = {
    cod_autor: null,
    autor: null
  }

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/autor')
        .subscribe(
          res => {
            this.user = res;
          },
          err => console.log(err)
        );
    }
  }

  updateUser() {
    this.Data.update(this.user.cod_autor!, this.user, '/autor')
      .subscribe(
        res => {
          this.router.navigate(['/autor']);
        },
        err => console.error(err)
      );
  }
  
}
