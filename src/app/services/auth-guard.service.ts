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
    /*console.log('Checking has atheticated state and the local storage has the token');
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
    });
    if (!this.auth.getToken() || !this.isAuthenticated) {
      this.router.navigateByUrl('/log-in');
      return false;
    }
    return true;*/
    
    
    console.log('Checking for any token...');
    if (!this.auth.getToken()) {
      console.log('No token found :( Redirecting to login page.');
      this.router.navigateByUrl('/log-in');
      return false;
    }
    console.log('Token found! Access granted.');
    return true;
    
  }
}
