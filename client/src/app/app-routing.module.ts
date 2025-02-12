import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/auth/login/login.component";
import {AuthGuard} from "./guard/auth.guard";
import {LayoutComponent} from "./components/layout/layout.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/home',
    pathMatch: 'full'

  },
  {
    path: 'dashboard',
    redirectTo: 'dashboard/home',
    pathMatch: 'full'

  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'home',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'questions',
        loadChildren: () => import('./components/questions/questions.module').then(m => m.QuestionsModule),
      },
      {
        path: 'categories',
        loadChildren: () => import('./components/categories/categories.module').then(m => m.CategoriesModule),
      },
      {
        path: 'images',
        loadChildren: () => import('./components/images/images.module').then(m => m.ImagesModule),
      },
      {
        path: 'blogs',
        loadChildren: () => import('./components/blog/blog.module').then(m => m.BlogModule),
      },
      {
        path: 'users',
        loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule),
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
