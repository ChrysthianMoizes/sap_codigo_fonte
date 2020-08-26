import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CurrencyMaskModule } from "ng2-currency-mask";
import {ConfirmationService, MessageService} from 'primeng/api';

import { PRIMENG_IMPORTS } from './primeng-imports';

@NgModule({
    imports: [
        PRIMENG_IMPORTS,
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        CurrencyMaskModule
    ],
    providers: [
        ConfirmationService,
        MessageService
    ],
    exports: [
        PRIMENG_IMPORTS,
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        CurrencyMaskModule
    ]
})
export class SharedModule { }
