import { Component, OnInit } from '@angular/core';
import { VoiceService } from '../voice.service';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  providers: [VoiceService],
})
export class StartComponent implements OnInit {
  speech: boolean = false;

  text: string = '';

  icontext: string = 'play_circle_outline';

  ngOnInit(): void {}

  constructor(public service: VoiceService) {
    this.service.init();
  }

  startRecord() {
    if (this.speech == true) {
      this.speech = false;
      this.icontext = 'play_circle_outline';
    } else {
      this.speech = true;
      this.icontext = 'pause_presentation';
    }

    if (this.speech == true) {
      this.service.start();
    } else {
      this.service.stop();
    }
  }

  proceed() {
    localStorage.setItem('text', this.service.text);
  }


}
