import { Component, OnInit } from '@angular/core';
import { afiliado } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-afiliado-reporte',
  templateUrl: './afiliado-reporte.component.html',
  styleUrls: ['./afiliado-reporte.component.css']
})
export class AfiliadoReporteComponent implements OnInit {

  TUser: any = [];
  user: afiliado = {
    cod_afiliado: null,
    nombre: null,
    apellido1: null,
    apellido2: null,
    documento: null,
    fechanacimiento: null,
    telefono: null,
    direccion: null,
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/afiliado')
      .subscribe({
        next: (res) => {
          this.TUser = res;
        },
        error: (err) => console.error(err)
      });
  }

  exportToExcel(): void {
    let element = document.getElementById('tabla');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');
    XLSX.writeFile(book, "Afiliados.xlsx");
  }

  public openPDF(): void {
    let DATA: any = document.getElementById('tabla');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('Afiliados.pdf');
    });
  }
}
