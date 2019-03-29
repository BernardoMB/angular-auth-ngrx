import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { IComplianceOverview } from 'src/app/store/compliance/interfaces';
import { IPeriod } from '../interfaces/IPeriod';
import { ITransactionQueryResults } from '../interfaces/ITransaction';

@Injectable({
    providedIn: 'root'
})
export class ComplianceService {
    private url;

    constructor(private http: HttpClient) {
        this.url = environment.url;
    }

    public getComplianceOverview = (period: IPeriod) => {
        return this.http.post<IComplianceOverview>(
            `${this.url}/compliance/overview`,
            period
        );
    }

    public getComplianceQueryResults = (filters: any) => {
        return this.http.post<{
            averageTransactions: number,
            averageUsage: number,
            mostUsedType: string,
            transactionQueryResults: ITransactionQueryResults
        }>(
            `${this.url}/compliance/query`,
            filters
        );
    }

}
