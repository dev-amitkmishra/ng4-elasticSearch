import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ElasticsearchService } from '../../elastic-search.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  isConnected = false;

  form: FormGroup;
  status: string;
  model: any = {
    index: 'jsa_user_idx',
    id: '',
    fullname: '',
    age: 0,
    address: ''
  };

  constructor(private fbuilder: FormBuilder, private es: ElasticsearchService, private cd: ChangeDetectorRef) {
    this.isConnected = false;

    this.form = this.fbuilder.group({
      index: [''],
      id: [''],
      fullname: [''],
      age: 0,
      address: ['']
    });
  }

  ngOnInit() {
    this.es.isAvailable().then(() => {
      this.status = 'OK';
      this.isConnected = true;
    }, error => {
      this.status = 'ERROR';
      this.isConnected = false;
      console.error('Server is down', error);
    }).then(() => {
      this.cd.detectChanges();
    });
  }

  onSubmit(value) {

    this.es.addToIndex({
      index: value.index,
      type: 'user',
      id: value.id,
      body: {
        fullname: value.fullname,
        age: value.age,
        address: value.address,
        published: new Date().toLocaleString()
      }
    }).then((result) => {
      console.log(result);
      alert('Document added, see log for more info');
    }, error => {
      alert('Something went wrong, see log for more info');
      console.error(error);
    });
  }

}
