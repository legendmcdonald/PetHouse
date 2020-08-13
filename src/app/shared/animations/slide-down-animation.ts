import {animate, group, state, style, transition, trigger} from '@angular/animations';


export const slideDownAnimation =
    trigger('slideDownAnimation', [
        state('in', style({
            opacity: '1',  transform: 'translateY(0%)'
        })),
        state('out', style({
            opacity: '0', transform: 'translateY(-100%)'
        })),
        transition('in => out', [group([
                animate('200ms ease-in-out', style({
                    opacity: '0'
                })),
                animate('200ms ease-in-out', style({
                    transform: 'translateY(-100%)'
                })),
            ]
        )]),
        transition('out => in', [group([
                animate('200ms ease-in-out', style({
                    transform: 'translateY(0%)'
                })),
                animate('200ms ease-in-out', style({
                    opacity: '1'
                }))
            ]
        )])
    ]);
