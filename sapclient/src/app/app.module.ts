import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppTopbarComponent } from './components/topbar/app.topbar.component';
import { AppFooterComponent } from './components/footer/app.footer.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { PageNotificationModule, BreadcrumbModule, MenuModule, ErrorStackModule } from '@nuvem/primeng-components';
import { SecurityModule, VersionTagModule } from '@nuvem/angular-base';
import { DiarioErrosComponent } from './components/diario-erros/diario-erros.component';
import { PaginaInicialComponent } from './view/pagina-inicial/pagina-inicial.component';
import { BlockUIModule } from 'ng-block-ui';
import {PaginatorModule} from 'primeng/paginator';
import {TableModule} from 'primeng/table';
import { from } from 'rxjs';
import { ConfirmationService } from 'primeng';

@NgModule({
    declarations: [
        AppComponent,
        AppTopbarComponent,
        AppFooterComponent,
        DiarioErrosComponent,
        PaginaInicialComponent,
    ],
    imports: [
        BlockUIModule.forRoot({
            message: 'Carregando...'
        }),
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        PageNotificationModule,
        BreadcrumbModule,
        ErrorStackModule,
        VersionTagModule,
        SecurityModule.forRoot(environment.auth),
        MenuModule,
        PaginatorModule,
        TableModule,

    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }, ConfirmationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
