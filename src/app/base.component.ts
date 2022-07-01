import {Injectable, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

/**
 * Base class for Components, with subject
 * Implements unsubscribing logic in ngOnDestroy hook
 * If you use RXjs, you must use takeUntil(this.ngUnsubscribe) in pipe.
 * When component is destroying, all subscribers object is destroying too.
 */
@Injectable()

export class BaseComponent implements OnDestroy {
    protected componentAlive$: Subject<void> = new Subject<void>();

    ngOnDestroy(): void {
        this.componentAlive$.next();
        this.componentAlive$.complete();
    }
}
