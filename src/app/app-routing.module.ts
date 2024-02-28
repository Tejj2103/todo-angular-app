import { NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './shared/layout/default/default.component';
import { LoginComponent } from './pages/login/login.component';
import { MasterComponent } from './shared/layout/master/master.component';
import { TodoComponent } from './pages/todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './core/interceptors/http.interceptor';

const routes: Routes = [
  {
    path: "", 
    component: DefaultComponent, 
    children: [{ path: "", component: LoginComponent }]
  },
  {
    path: "", 
    component: MasterComponent, 
    children: [{ path: "todo", component: TodoComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: 
  [ provideHttpClient(withInterceptors([httpInterceptor])),
    importProvidersFrom(BrowserAnimationsModule)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
