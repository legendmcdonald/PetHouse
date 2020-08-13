import {animate, group, state, style, transition, trigger} from '@angular/animations';


export const fadeAnimation =
    trigger('fadeAnimation', [
        state('in', style({
            opacity: '1',
        })),
        state('out', style({
            opacity: '0',
        })),
        transition('in => out', [group([
                animate('200ms ease-in-out', style({
                    opacity: '0'
                })),
            ]
        )]),
        transition('out => in', [group([
                animate('200ms ease-in-out', style({
                    opacity: '1'
                }))
            ]
        )])
    ]);
