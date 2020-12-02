import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

import { DialogModule } from 'primeng/dialog';
import { ProgressBarModule } from 'primeng/progressbar';
import { SidebarModule } from 'primeng/sidebar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuModule } from 'primeng/menu';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
    declarations: [
        // HeaderComponent,
        LoginComponent,
    ],
    exports: [
        DialogModule,
        ProgressBarModule,
        // HeaderComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        DialogModule,
        CardModule,
        ProgressBarModule,
        SplitButtonModule,
        SidebarModule,
        MenuModule,
        PanelMenuModule,
        InputTextModule,
        DropdownModule,
        ReactiveFormsModule,
        ProgressSpinnerModule,
        MessagesModule,
        MessageModule,
        AutoCompleteModule,
    ],
    providers: []
})
export class CoreModule { }