import { ParentDataService } from './parent-data.service';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DataService extends ParentDataService {

    users = [
        {
            firstName: 'Ali',
            lastName: 'Hassan'
        },
        {
            firstName: 'Jabir',
            lastName: 'Nawaz'
        },
        {
            firstName: 'Umair',
            lastName: 'Ali'
        },
        {
            firstName: 'Kamran',
            lastName: 'Usman'
        }
    ];

    constructor() {
        super(5);
    }
}
