import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditorialComponent } from './components/editorial/editorial.component';
import { EditorialEditComponent } from './components/editorial-edit/editorial-edit.component';
import { PaisComponent } from './components/pais/pais.component';
import { PaisEditComponent } from './components/pais-edit/pais-edit.component';
import { TipolibroComponent } from './components/tipolibro/tipolibro.component';
import { TipolibroEditComponent } from './components/tipolibro-edit/tipolibro-edit.component';
import { LibroComponent } from './components/libro/libro.component';
import { LibroEditComponent } from './components/libro-edit/libro-edit.component';
import { AreaComponent } from './components/area/area.component';
import { AreaEditComponent } from './components/area-edit/area-edit.component';
import { AutorComponent } from './components/autor/autor.component';
import { AutorEditComponent } from './components/autor-edit/autor-edit.component';
import { LibrosporareaComponent } from './components/librosporarea/librosporarea.component';
import { LibrosporareaEditComponent } from './components/librosporarea-edit/librosporarea-edit.component';
import { LibrosporautorComponent } from './components/librosporautor/librosporautor.component';
import { LibrosporautorEditComponent } from './components/librosporautor-edit/librosporautor-edit.component';
import { AfiliadoComponent } from './components/afiliado/afiliado.component';
import { AfiliadoEditComponent } from './components/afiliado-edit/afiliado-edit.component';
import { TipoprestamoComponent } from './components/tipoprestamo/tipoprestamo.component';
import { TipoprestamoEditComponent } from './components/tipoprestamo-edit/tipoprestamo-edit.component';
import { EstadoComponent } from './components/estado/estado.component';
import { EstadoEditComponent } from './components/estado-edit/estado-edit.component';
import { LibrosporexistenciaComponent } from './components/librosporexistencia/librosporexistencia.component';
import { LibrosporexistenciaEditComponent } from './components/librosporexistencia-edit/librosporexistencia-edit.component';
import { PrestamoComponent } from './components/prestamo/prestamo.component';
import { PrestamoEditComponent } from './components/prestamo-edit/prestamo-edit.component';
import { EstadoporexistenciaComponent } from './components/estadoporexistencia/estadoporexistencia.component';
import { EstadoporexistenciaEditComponent } from './components/estadoporexistencia-edit/estadoporexistencia-edit.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { LibroReporteComponent } from './components/libro-reporte/libro-reporte.component';
import { PrestamoReporteComponent } from './components/prestamo-reporte/prestamo-reporte.component';
import { AfiliadoReporteComponent } from './components/afiliado-reporte/afiliado-reporte.component';
import { EstadoporexistenciaReporteComponent } from './components/estadoporexistencia-reporte/estadoporexistencia-reporte.component';
import { LoginComponent } from './components/login/login.component';
import { LibrosporafiliadoComponent } from './components/librosporafiliado/librosporafiliado.component';
import { LibrosporfechaComponent } from './components/librosporfecha/librosporfecha.component';
import { ConsultaAfiliadoComponent } from './components/consulta-afiliado/consulta-afiliado.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'navegacion',
    component: NavegacionComponent,
  },
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
  },
  {
    path: 'libro',
    component: LibroComponent
  },
  {
    path: 'libro/edit/:id',
    component: LibroEditComponent
  },
  {
    path: 'libro/reporte',
    component: LibroReporteComponent
  },
  {
    path: 'area',
    component: AreaComponent
  },
  {
    path: 'area/edit/:id',
    component: AreaEditComponent
  },
  {
    path: 'autor',
    component: AutorComponent
  },
  {
    path: 'autor/edit/:id',
    component: AutorEditComponent
  },
  {
    path: 'librosporarea',
    component: LibrosporareaComponent
  },
  {
    path: 'librosporarea/edit/:id',
    component: LibrosporareaEditComponent
  },
  {
    path: 'librosporautor',
    component: LibrosporautorComponent
  },
  {
    path: 'librosporautor/edit/:id',
    component: LibrosporautorEditComponent
  },
  {
    path: 'afiliado',
    component: AfiliadoComponent
  },
  {
    path: 'afiliado/edit/:id',
    component: AfiliadoEditComponent
  },
  {
    path: 'afiliado/reporte',
    component: AfiliadoReporteComponent
  },
  {
    path: 'tipoprestamo',
    component: TipoprestamoComponent
  },
  {
    path: 'tipoprestamo/edit/:id',
    component: TipoprestamoEditComponent
  },
  {
    path: 'estado',
    component: EstadoComponent
  },
  {
    path: 'estado/edit/:id',
    component: EstadoEditComponent
  },
  {
    path: 'librosporexistencia',
    component: LibrosporexistenciaComponent
  },
  {
    path: 'librosporexistencia/edit/:id',
    component: LibrosporexistenciaEditComponent
  },
  {
    path: 'prestamo',
    component: PrestamoComponent
  },
  {
    path: 'prestamo/edit/:id',
    component: PrestamoEditComponent
  },
  {
    path: 'prestamo/reporte',
    component: PrestamoReporteComponent
  },
  {
    path: 'estadoporexistencia',
    component: EstadoporexistenciaComponent
  },
  {
    path: 'estadoporexistencia/edit/:id',
    component: EstadoporexistenciaEditComponent
  },
  {
    path: 'estadoporexistencia/reporte',
    component: EstadoporexistenciaReporteComponent
  },
  {
    path: 'navegacion',
    component: NavegacionComponent
  },
  {
    path: 'prestamo/librosporafiliado/consulta',
    component: LibrosporafiliadoComponent
  },
  {
    path: 'prestamo/librosporfecha/consulta',
    component: LibrosporfechaComponent
  },
  {
    path: 'afiliado/consulta',
    component: ConsultaAfiliadoComponent
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
