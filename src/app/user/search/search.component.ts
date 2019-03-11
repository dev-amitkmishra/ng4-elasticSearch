import { Component, OnInit } from '@angular/core';
import { UserSource } from '../user.interface';
import { ElasticsearchService } from '../../elastic-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private static readonly INDEX = 'jsa_user_idx';
  private static readonly TYPE = 'user';

  userSources: UserSource[];
  private queryText = '';

  private lastKeypress = 0;
  constructor(private es: ElasticsearchService) { }

  ngOnInit() {
  }

  search($event) {
    if ($event.timeStamp - this.lastKeypress > 100) {
      this.queryText = $event.target.value;
      this.es.fullTextSearch(
        SearchComponent.INDEX,
        SearchComponent.TYPE,
        'address', this.queryText).then(
        response => {
          this.userSources = response.hits.hits;
          console.log(response);
        }, error => {
          console.error(error);
        }).then(() => {
          console.log('Search Completed!');
        });
    }

    this.lastKeypress = $event.timeStamp;
  }

}
