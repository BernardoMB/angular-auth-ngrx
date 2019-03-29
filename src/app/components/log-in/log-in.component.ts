import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../models/user';
import { RootStoreState } from 'src/app/store';
import { LoginAction } from 'src/app/store/auth/actions';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  user: User = new User();

  constructor(
    private store: Store<RootStoreState.State>
  ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    const payload = {
      email: this.user.email,
      password: this.user.password
    };
    this.store.dispatch(new LoginAction(payload));
  }

}