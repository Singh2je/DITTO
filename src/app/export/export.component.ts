import { Component, OnInit } from '@angular/core';
import { SummarizationService } from '../summarization.service';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css'],
})
export class ExportComponent implements OnInit {
  displayData: string = '';

  constructor(public summarize: SummarizationService) {}

  ngOnInit(): void {
    this.displayData = localStorage.getItem('text')!;
    if (this.displayData == '') {
      this.displayData = 'No content.';
    }
  }

  html() {
    var textToWrite = document.getElementById('grabdata')!.innerHTML;
    var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
    var fileNameToSaveAs = 'DittoExport.html';
    var downloadLink = document.createElement('a');
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = 'download';
    window.URL = window.URL || window.webkitURL;
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }

  print() {
    var element = document.getElementById('grabdata')!.innerHTML;
    console.log(element);
    const a = window.open();
    if (a) {
      a.document.write('<html>');
      a.document.write('<body > <h1>Ditto Meeting Notes<br>');
      a.document.write(element);
      a.document.write('</body></html>');
      a.document.close();
      a.print();
    }
  }

  Onsummarize() {
    this.summarize.summarize(this.displayData);
  }
}
