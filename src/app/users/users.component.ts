import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any = null;
  comments: any = null;
  albums: any = null;
  constructor(private _dataservice: DataService) { }

  ngOnInit() {
    this._dataservice.getUsersData().subscribe(response => { this.users = response; });

    this._dataservice.getAlbumsData().subscribe(response => { this.albums = response; });

    this._dataservice.getCommentsData().subscribe(response => { this.comments = response; });
  }

}
