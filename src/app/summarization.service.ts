import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SummarizationService {
  constructor(private http: HttpClient) {}

  summarize(text: string) {
    const options = {
      url: 'http://en.wikipedia.org/wiki/Automatic_summarization',
      text: text,
      sentnum: 8,
    };

    this.http.get('').subscribe((response) => {
      console.log(response);
    });
  }
}
