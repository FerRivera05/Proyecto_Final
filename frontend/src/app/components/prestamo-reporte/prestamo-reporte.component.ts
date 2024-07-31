import { Component, OnInit } from '@angular/core';
import { prestamo } from 'src/app/interfaces/user';
import { DataService } from '../../services/data.service';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-prestamo-reporte',
  templateUrl: './prestamo-reporte.component.html',
  styleUrls: ['./prestamo-reporte.component.css']
})
export class PrestamoReporteComponent implements OnInit {

  TUser: any = [];
  user: prestamo = {
    cod_prestamo: null,
    cod_existencia: null,
    cod_afiliado: null,
    fechaprestamo: null,
    horaprestamo: null,
    fechaentrega: null,
    horaentrega: null,
    cod_tipoprestamo: null,
    titulo: null,
    nombre: null,
    tipoprestamo: null
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/prestamo')
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
    XLSX.writeFile(book, "Prestamos.xlsx");
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
      PDF.save('Prestamos.pdf');
    });
  }

}
