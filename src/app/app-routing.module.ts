import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home-con',
    loadChildren: () => import('./pages/home-con/home-con.module').then( m => m.HomeConPageModule)
  },
  {
    path: 'options-con',
    loadChildren: () => import('./pages/options-con/options-con.module').then( m => m.OptionsConPageModule)
  },
  {
    path: 'form-con',
    loadChildren: () => import('./pages/form-con/form-con.module').then( m => m.FormConPageModule)
  },
  {
    path: 'form-con',
    loadChildren: () => import('./pages/form-con/form-con.module').then( m => m.FormConPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
