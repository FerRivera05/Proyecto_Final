import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    LibrosporautorEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
