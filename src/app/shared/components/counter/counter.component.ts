import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
})
export class CounterComponent implements OnInit {

    @Input()
    set value(value: number) {
        this.animate(this._value, value);
        this._value = value;
    }

    get value(): number {
        return this._value;
    }

    _value = 0;
    start = 0;
    decimal = 0;
    duration = 800;
    currentValue = 0;

    ngOnInit(): void {

    }

    animate(start, end): void {
        const range = end - start;
        // no timer shorter than 50ms (not really visible any way)
        const minTimer = 50;
        // calc step time to show all interediate values
        let stepTime = Math.abs(Math.floor(this.duration / range));

        // never go below minTimer
        stepTime = Math.max(stepTime, minTimer);

        // get current time and calculate desired end time
        const startTime = new Date().getTime();
        const endTime = startTime + this.duration;
        let timer;

        const run = () => {
            const now = new Date().getTime();
            const remaining = Math.max((endTime - now) / this.duration, 0);
            const val = Math.round(end - (remaining * range));
            this.currentValue = val;
            if (Math.round(val) === Math.round(end)) {
                clearInterval(timer);
            }
        };
        timer = setInterval(run, stepTime);
        run();
    }
}


