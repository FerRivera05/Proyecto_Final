import { Component, OnInit } from '@angular/core';
import { area } from '../../interfaces/user';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-area-edit',
  templateUrl: './area-edit.component.html',
  styleUrls: ['./area-edit.component.css']
})
export class AreaEditComponent implements OnInit {

  valorInput: number | undefined;
  TUser: any = [];
  user: area = {
    cod_area: null,
    area: null
  }

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/area')
        .subscribe(
          res => {
            this.user = res;
          },
          err => console.log(err)
        );
    }
  }

  updateUser() {
    this.Data.update(this.user.cod_area!, this.user, '/area')
      .subscribe(
        res => {
          this.router.navigate(['/area']);
        },
        err => console.error(err)
      );
  }
  
}
