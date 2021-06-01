import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/libs/data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

type User = {
    first_name: string,
    last_name?: string,
    gender: string
}
@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
    userForm: FormGroup;
    userData: User;
    constructor(public userService: DataService, private http: HttpClient) {

    }

    ngOnInit() {
        const firstNameControl = new FormControl(null, [Validators.required, Validators.maxLength(15)]);

        this.userForm = new FormGroup({
            first_name: firstNameControl,
            last_name: new FormControl()
        });

        // Call to get user data from server
        this.userData = {
            first_name: 'Kamran',
            gender: 'Male'
        };

        this.userForm.patchValue(this.userData);
    }

    get g(){
        return this.userForm.controls;
    }

    saveUserOld() {
        const firstNameControl = this.userForm.controls.first_name;
        if (firstNameControl.invalid) {
            let errorMsg = '';
            if (firstNameControl.errors.hasOwnProperty('maxlength')) {
                errorMsg = `You entered ${firstNameControl.errors.maxlength.actualLength} characters but maximum allowed characters are ${firstNameControl.errors.maxlength.requiredLength}`;
            } else {
                errorMsg = 'First name is required';
            }

            alert(errorMsg);
        } else {
            console.log('First Name:', firstNameControl.value)
        }
    }

    saveUser() {
        if (this.userForm.invalid) {
            alert('Some data is invalid.');
            return;
        }

        const data = this.userForm.getRawValue();
        console.log('Data', data);
    }
}
