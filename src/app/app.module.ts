import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '../app/app-routing';
import { AppComponent } from './app.component';
import { TabelaListaCadastradosComponent } from './shared/components/tabela-lista-cadastrados/tabela-lista-cadastrados.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/fontawesome-free';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
// import { CoreModule } from '../core/core.module';
import { LightboxModule } from 'primeng/lightbox';
// import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component';
// import { BreadcrumbService } from './shared/components/breadcrumbs/breadcrumbs.service';
// import { HttpInterceptorModule } from './shared/interceptors/http-interceptor/http-interceptor.module';

@NgModule({
  declarations: [AppComponent,
    TabelaListaCadastradosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
