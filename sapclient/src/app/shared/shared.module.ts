import { NgModule } from '@angular/core';
import { PRIMENG_IMPORTS } from './primeng-imports';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        PRIMENG_IMPORTS,
        RouterModule,
        CommonModule,
        ReactiveFormsModule
    ],
    providers: [],
    exports: [
        PRIMENG_IMPORTS,
        RouterModule,
        CommonModule,
        ReactiveFormsModule

    ]
})
export class SharedModule { }
