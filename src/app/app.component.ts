import { Component } from '@angular/core';
import { ApurationService } from '../app/services/apuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loading: boolean = false;
  // counter: any;
  // candidates: any[];
  // overview: any;
  // totalCountedVotesPercent : any;
  // totalCanceledVotes: any;

  reload: any;

  constructor(private ApurationService : ApurationService) { }

  title = 'apura-brasil';

  OverviewData = {
    name: 'xuxa',
    age: '12',
    street: 'TimeSquare',
    city: 'Disney'
  }

  ngOnInit() {
    this.getCandidatesFirstRound();
    this.getCandidatesSecondRound();
  }

   refreshResults(){
     this.reload = setInterval(() => {
       console.log('refreshResults');
      //  this.getCandidates();
     }, 15000);
   }

  // return all data from first round ellection
  getCandidatesFirstRound(){

  }

  // return all data from second round ellection
  getCandidatesSecondRound() {

  }





}
