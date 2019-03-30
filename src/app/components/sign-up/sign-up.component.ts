import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { User } from '../../models/user';
import { RootStoreState } from 'src/app/store';
import { SignUp } from 'src/app/store/auth/actions';
import { Observable } from 'rxjs';
import { selectAuthState } from 'src/app/store/auth/selectors';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user: User = new User();
  getState: Observable<any>;
  errorMessage: string | null;

  constructor(
    private store: Store<RootStoreState.State>
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
  }

  onSubmit(): void {
    const payload = {
      email: this.user.email,
      password: this.user.password
    };
    this.store.dispatch(new SignUp(payload));
  }

}
