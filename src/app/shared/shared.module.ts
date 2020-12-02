import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaListaCadastradosComponent } from './components/tabela-lista-cadastrados/tabela-lista-cadastrados.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { StepsModule } from 'primeng/steps';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';

// import { ProgressSpinnerModule, ToastModule, CalendarModule, MultiSelectModule } from 'primeng';

// import { CustomProgressBarComponent } from './components/progress-bar/progress-bar.component';
// import { MsgComponentComponent } from './components/msg-component/msg-component.component';
// import { PerguntasFrequentesComponent } from './components/perguntas-frequentes/perguntas-frequentes.component';
// import { TabelaMovComponent } from './components/tabela-mov/tabela-mov.component';
// import { StepsFormComponent } from './components/steps-form/steps-form.component';
// import { BotaoSalvarSairComponent } from './components/botao-salvar-sair/botao-salvar-sair.component';
// import { ModalAutorizacaoComponent } from './components/modal-autorizacao/modal-autorizacao.component';
// import { ModalAprovarRejeitarComponent } from './components/modal-aprovar-rejeitar/modal-aprovar-rejeitar.component';
// import { ModalAutorizacaoManualComponent } from './components/modal-autorizacao-manual/modal-autorizacao-manual.component';


@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    DialogModule,
    // ProgressSpinnerModule,
    ConfirmDialogModule,
    TableModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule,
    InputSwitchModule,
    CheckboxModule,
    RouterModule,
    InputTextModule,
    StepsModule,
    DropdownModule,
    // ToastModule,
    // CalendarModule,
    TooltipModule,
    // MultiSelectModule
  ],
  declarations: [
    TabelaListaCadastradosComponent,
    // CustomProgressBarComponent,
    // MsgComponentComponent,
    // PerguntasFrequentesComponent,
    // TabelaMovComponent,
    // StepsFormComponent,
    // BotaoSalvarSairComponent,
    // ModalAutorizacaoComponent,
    // ModalAutorizacaoManualComponent,
    // ModalAprovarRejeitarComponent
  ]
})
export class SharedModule { }
