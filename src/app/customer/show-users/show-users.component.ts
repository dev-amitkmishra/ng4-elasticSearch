import { Component, OnInit } from '@angular/core';
import { UserSource } from '../user.interface';
import { ElasticsearchService } from '../../elastic-search.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  private static readonly INDEX = 'jsa_user_idx';
  private static readonly TYPE = 'user';

  userSources: UserSource[];

  constructor(private es: ElasticsearchService) { }

  ngOnInit() {
    this.es.getAllDocuments(ShowUsersComponent.INDEX, ShowUsersComponent.TYPE)
      .then(response => {
        this.userSources = response.hits.hits;
        console.log(response);
      }, error => {
        console.error(error);
      }).then(() => {
        console.log('Show User Completed!');
      });
  }

}
