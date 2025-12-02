import { NgModule } from '@angular/core';
import { ContadorComponent } from './components/contador/contador';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ]
})

export class ContadorModule { }