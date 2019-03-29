import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { IAdmin } from '../interfaces/IAdmin';
import { IActivity } from '../interfaces/IActivity';

@Injectable({
    providedIn: 'root'
})
export class SuperadminService {
    private url;

    constructor(private http: HttpClient) {
        this.url = environment.url;
    }

    public getAdmins = () => {
        return this.http.get<{
            admins: Array<IAdmin>
        }>(
            `${this.url}/users/admins`
        );
    }

    public getActivities = () => {
        return this.http.get<{
            activities: Array<IActivity>
        }>(
            `${this.url}/users/admins/activities`
        );
    }

}
