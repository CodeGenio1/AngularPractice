import { DataService } from 'src/libs/data.service';
import { AddUserComponent } from './add-user/add-user.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';

@NgModule({
    declarations: [
        UsersComponent,
        AddUserComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: UsersComponent
            },
            {
                path: 'add',
                component: AddUserComponent
            }
        ])
    ],
    providers: [
    ]
})
export class UsersModule { }
