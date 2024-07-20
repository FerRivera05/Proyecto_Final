import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditorialComponent } from './components/editorial/editorial.component';
import { EditorialEditComponent } from './components/editorial-edit/editorial-edit.component';
import { PaisComponent } from './components/pais/pais.component';
import { PaisEditComponent } from './components/pais-edit/pais-edit.component';
import { TipolibroComponent } from './components/tipolibro/tipolibro.component';
import { TipolibroEditComponent } from './components/tipolibro-edit/tipolibro-edit.component';

const routes: Routes = [
  {
    path: 'editorial',
    component: EditorialComponent
  },
  {
    path: 'editorial/edit/:id',
    component: EditorialEditComponent
  },
  {
    path: 'pais',
    component: PaisComponent
  },
  {
    path: 'pais/edit/:id',
    component: PaisEditComponent
  },
  {
    path: 'tipolibro',
    component: TipolibroComponent
  },
  {
    path: 'tipolibro/edit/:id',
    component: TipolibroEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
