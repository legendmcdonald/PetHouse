import {animate, group, state, style, transition, trigger} from '@angular/animations';


export const flip3DAnimation =
    trigger('flip3DAnimation', [
        state('in', style({
            opacity: '1', transform: 'rotateY(0deg)', visibility: 'visible'
        })),
        state('out', style({
            opacity: '0', transform: 'rotateY(180deg)', visibility: 'hidden'
        })),
        transition('in => out', [group([
                animate('.9s ease-in-out', style({
                    opacity: '0'
                })),
                animate('.9s ease-in-out', style({
                    visibility: 'hidden'
                })),
                animate('.9s ease-in-out', style({
                    transform: 'rotateY(180deg)'
                })),
            ]
        )]),
        transition('out => in', [group([
                animate('.9s ease-in-out', style({
                    transform: 'rotateY(0)'
                })),
                animate('.9s ease-in-out', style({
                    visibility: 'visible'
                })),
                animate('.9s ease-in-out', style({
                    opacity: '1'
                }))
            ]
        )])
    ]);
