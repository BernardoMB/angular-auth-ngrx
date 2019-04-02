import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Store } from '@ngrx/store';
import { RootStoreState } from '../store';
import { Observable } from 'rxjs';
import { selectAuthState } from '../store/auth/selectors';
import { State } from '../store/auth/state';

@Injectable()
export class AuthGuardService implements CanActivate {
  getState: Observable<State>;
  isAuthenticated: boolean;

  constructor(
    public auth: AuthService,
    public router: Router,
    private store: Store<RootStoreState.State>
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  canActivate(): boolean {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
    });
    if (!this.auth.getToken() || !this.isAuthenticated) {
      this.router.navigateByUrl('/log-in');
      return false;
    }
    return true;
  }
}
