import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, startWith, debounceTime, distinctUntilChanged, tap, switchMap, catchError, of, finalize, shareReplay } from 'rxjs';
import { Search } from '../services/search';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  public componentTitle = signal("sai home")

  searchControl = new FormControl('');
  loading = false;
  error: any = null;

  // results$ emits arrays; async pipe handles subscription
  results$: Observable<any[]>;

  // keep last query to support retry
  private lastQuery = '';

  constructor(private searchService: Search) {
    this.results$ = this.searchControl.valueChanges.pipe(
      startWith(this.searchControl.value ?? ''),           // emit initial value
      debounceTime(300),                                  // wait for pause
      distinctUntilChanged(),                             // skip unchanged input
      tap(q => {                                          // before starting request
        this.error = null;
        this.loading = true;
        this.lastQuery = q ?? '';
      }),
      // ignore empty strings if you want; here we let service handle empty query
      // filter(q => q !== null), 
      switchMap(q =>
        this.searchService.search(q ?? '').pipe(
          catchError(err => {
            // capture error and return empty results so stream continues
            this.error = err;
            return of([]); 
          }),
          finalize(() => {
            // runs after inner observable completes OR is cancelled
            this.loading = false;
          })
        )
      ),
      shareReplay(1) // share latest result for multiple subscribers (optional)
    );
  }

  // Retry using the last query value
  retry() {
    // push the lastQuery back into the control to re-trigger the pipeline
    this.searchControl.setValue(this.lastQuery);
  }
}
