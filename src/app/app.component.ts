import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { CountClearAction, CountDecreaseAction, CountIncreaseAction } from './reducers/count/count.actions';
import { CountState } from './reducers/count/count.reducer';
import { selectCount, selectUpdatedAt } from './reducers/count/count.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  public count$: Observable<number> = this.store$.pipe(select(selectCount));
  public updatedAt$: Observable<number> = this.store$.pipe(select(selectUpdatedAt));

  public disableDecrease$: Observable<boolean> = this.count$.pipe(map(count => count <= 0));

  constructor(private store$: Store<CountState>) {}

  public increase() {
    // dispath - way to pass an action
    this.store$.dispatch(new CountIncreaseAction());
  }

  public decrease() {
    this.store$.dispatch(new CountDecreaseAction());
  }

  public clear() {
    this.store$.dispatch(new CountClearAction());
  }
}
