import { Component, OnInit } from '@angular/core';
import { RootStoreState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { LogOut } from 'src/app/store/auth/actions';
import { Observable } from 'rxjs';
import { selectAuthState } from 'src/app/store/auth/selectors';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  getState: Observable<any>;
  isAuthenticated: false;
  user = null;
  errorMessage = null;

  constructor(
    private store: Store<RootStoreState.State>
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.errorMessage = state.errorMessage;
    });
  }

  logOut(): void {
    this.store.dispatch(new LogOut({}));
  }

}
