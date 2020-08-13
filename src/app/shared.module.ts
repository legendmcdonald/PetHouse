import {NgModule} from '@angular/core';
import {intersectionObserverPreset, LazyLoadImageDirective, LazyLoadImageModule} from 'ng-lazyload-image';

@NgModule({
    declarations: [

    ],
    imports: [
        LazyLoadImageModule.forRoot({
            preset: intersectionObserverPreset
        })
    ],
    exports: [
        LazyLoadImageDirective,
    ]
})
export class SharedModule {
}
