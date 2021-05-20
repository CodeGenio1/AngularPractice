import { DataService } from 'src/libs/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css'],
    //providers: [DataService]
})
export class AddUserComponent implements OnInit {

    constructor(public userService: DataService) {

    }

    ngOnInit() {
    }

    getName(index) {
        return this.userService.users[index].firstName + ' ' + this.userService.users[index].lastName;
    }

    updateUser(index) {
        this.userService.users[index].firstName = 'Some different long name';
    }
}
