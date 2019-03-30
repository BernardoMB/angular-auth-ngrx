import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootStoreState } from 'src/app/store';
import { GetStatus } from 'src/app/store/auth/actions';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  constructor(private store: Store<RootStoreState.State>) { }

  ngOnInit() {
    this.store.dispatch(new GetStatus());
  }

}
