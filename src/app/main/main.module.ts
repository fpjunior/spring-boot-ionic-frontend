import { CadastroComponent } from './pages/cadastro/cadastro.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main.routing';
import { ProductsComponent } from './pages/products/products.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RegisterProductsComponent } from './pages/register-products/register-products.component';
import { HomeComponent } from './layout/home/home.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { ToggleButtonModule } from 'primeng/togglebutton';

import { CardModule } from 'primeng/card';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DialogModule } from 'primeng/dialog';
import { ProgressBarModule } from 'primeng/progressbar';
import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import { TabViewModule } from 'primeng/tabview';
import { MessageModule } from 'primeng/message';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PanelModule } from 'primeng/panel';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AccordionModule } from 'primeng/accordion';
import { PickListModule } from 'primeng/picklist';

@NgModule({
  declarations: [ProductsComponent, RegisterProductsComponent, HomeComponent, CadastroComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    ToolbarModule,
    ReactiveFormsModule,
    ToggleButtonModule,
    CardModule,
    AutoCompleteModule,
    DialogModule,
    ProgressBarModule,
    CheckboxModule,
    InputMaskModule,
    TabViewModule,
    MessageModule,
    DropdownModule,
    ProgressSpinnerModule,
    PanelModule,
    InputSwitchModule,
    ConfirmDialogModule,
    RadioButtonModule,
    AccordionModule,
    PickListModule
  ],
})
export class MainModule { }
