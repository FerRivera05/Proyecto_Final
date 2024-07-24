import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Tablas MySQL
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

// Menu Responsive
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FilterafiliadoPipe } from './pipes/filterafiliado.pipe';
import { FilterareaPipe } from './pipes/filterarea.pipe';
import { FilterautorPipe } from './pipes/filterautor.pipe';
import { FiltereditorialPipe } from './pipes/filtereditorial.pipe';
import { FilterestadoPipe } from './pipes/filterestado.pipe';

import { FilterlibroPipe } from './pipes/filterlibro.pipe';
import { FilterlibrosporareaPipe } from './pipes/filterlibrosporarea.pipe';
import { FilterlibrosporautorPipe } from './pipes/filterlibrosporautor.pipe';
import { FilterlibrosporexistenciaPipe } from './pipes/filterlibrosporexistencia.pipe';
import { FilterpaisPipe } from './pipes/filterpais.pipe';
import { FilterprestamoPipe } from './pipes/filterprestamo.pipe';
import { FiltertipolibroPipe } from './pipes/filtertipolibro.pipe';
import { FiltertipoprestamoPipe } from './pipes/filtertipoprestamo.pipe';
import { FilterestadoporexistenciaPipe } from './pipes/filterestadoporexistencia.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EditorialComponent,
    EditorialEditComponent,
    PaisComponent,
    PaisEditComponent,
    TipolibroComponent,
    TipolibroEditComponent,
    LibroComponent,
    LibroEditComponent,
    AreaComponent,
    AreaEditComponent,
    AutorComponent,
    AutorEditComponent,
    LibrosporareaComponent,
    LibrosporareaEditComponent,
    LibrosporautorComponent,
    LibrosporautorEditComponent,
    AfiliadoComponent,
    AfiliadoEditComponent,
    TipoprestamoComponent,
    TipoprestamoEditComponent,
    EstadoComponent,
    EstadoEditComponent,
    LibrosporexistenciaComponent,
    LibrosporexistenciaEditComponent,
    PrestamoComponent,
    PrestamoEditComponent,
    EstadoporexistenciaComponent,
    EstadoporexistenciaEditComponent,
    NavegacionComponent,
    FilterafiliadoPipe,
    FilterareaPipe,
    FilterautorPipe,
    FiltereditorialPipe,
    FilterestadoPipe,
    
    FilterlibroPipe,
    FilterlibrosporareaPipe,
    FilterlibrosporautorPipe,
    FilterlibrosporexistenciaPipe,
    FilterpaisPipe,
    FilterprestamoPipe,
    FiltertipolibroPipe,
    FiltertipoprestamoPipe,
    FilterestadoporexistenciaPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
