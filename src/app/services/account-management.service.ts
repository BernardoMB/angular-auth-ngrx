import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { IAccount } from '../interfaces/IAccount';

@Injectable({
    providedIn: 'root'
})
export class AccountManagementService {
    private url;

    constructor(private http: HttpClient) {
        this.url = environment.url;
    }

    public getTotalAccounts = () => {
        return this.http.get<number>(
            `${this.url}/accounts/total`
        );
    }

    public getTotalPendingRequests = () => {
        return this.http.get<number>(
            `${this.url}/requests/total/pending`
        );
    }

    public getTotalRequestsInProgress = () => {
        return this.http.get<number>(
            `${this.url}/requests/total/inProgress`
        );
    }

    public getAccounts = () => {
        return this.http.get<Array<IAccount>>(
            `${this.url}/requests/total/inProgress`
        );
    }
}
