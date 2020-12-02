import { CadastroResolveGuard } from './../shared/guards/cadastro-resolve.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { RegisterProductsComponent } from './pages/register-products/register-products.component';
import { HomeComponent } from './layout/home/home.component';
import { ProductResolverGuard } from '../shared/guards/products-resolve.guard';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: ProductsComponent },
      {
        path: 'new-cadastro',
        component: CadastroComponent,
        resolve: { cadastro: CadastroResolveGuard },
      },
      {
        path: 'update-product/:id',
        component: RegisterProductsComponent,
        resolve: { product: ProductResolverGuard },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
