import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../models/user';
import { RootStoreState } from 'src/app/store';
import { LogIn } from 'src/app/store/auth/actions';
import { Observable } from 'rxjs';
import { selectAuthState } from 'src/app/store/auth/selectors';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

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
    console.log('Dispatching LogIn action with the following payload', payload);
    this.store.dispatch(new LogIn(payload));
  }

}
