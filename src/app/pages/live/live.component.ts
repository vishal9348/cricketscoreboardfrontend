import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCallService } from '../../services/api-call.service';
import { MatchCardComponent } from '../../component/match-card/match-card.component';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [CommonModule, MatchCardComponent],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css',
})
export class LiveComponent implements OnInit {

  liveMatches:any
  constructor(private _api: ApiCallService) {}
  ngOnInit(): void {
    this.loadLiveMatches();
  }

  private loadLiveMatches() {
    this._api.getLiveMatches().subscribe({
      next: (data) => {
        console.log(data);
        this.liveMatches=data
      },
      error: (err) => console.error('Error: ', err),
    });
  }
}
