import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-vote-box',
  templateUrl: './vote-box.component.html',
  styleUrls: ['./vote-box.component.css']
})
export class VoteBoxComponent {

  @Input() imgURL1 : String = "https://wonder-day.com/wp-content/uploads/2020/10/wonder-day-among-us-21.png"
  @Input() listName1 : String = "Liste 1"

  @Input() imgURL2 : String = "https://wonder-day.com/wp-content/uploads/2020/10/wonder-day-among-us-21.png"
  @Input() listName2 : String = "Liste 2"

  vote(listname : String){

  }

}
