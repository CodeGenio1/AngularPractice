import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DataService } from 'src/libs/data.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    baseUrl = 'https://reqres.in';
    loadingStatus = '';
    usersList = [];
    constructor(public usersService: DataService, private http: HttpClient) {

    }

    ngOnInit(): void {
    }

    getusersFromServer() {
        this.loadingStatus = 'loading';
        const resource = 'api/users?delay=3';
        const usersRequest = this.http.get(`${this.baseUrl}/${resource}`);

        usersRequest.subscribe((resp: any) => {
            this.loadingStatus = 'done';
            this.usersList = resp.data;
        }, () => {
            this.loadingStatus = 'error';
        })
    }
}
