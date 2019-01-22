import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookComponent} from './components/book/book.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'deneme',
    pathMatch: 'full',
  },
  {
    path: 'deneme',
    component: BookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
