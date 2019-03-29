import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { IPeriod } from '../interfaces/IPeriod';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private url;

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  public getTotalWallets = (period: IPeriod) => {
    return this.http.post<{ value: number, change: number }>(
      `${this.url}/wallets/total`,
      period
    );
  }

  public getTotalWalletsBalance = (period: IPeriod) => {
    return this.http.post<{ value: number, change: number }>(
      `${this.url}/wallets/total/balance`,
      period
    );
  }
}
