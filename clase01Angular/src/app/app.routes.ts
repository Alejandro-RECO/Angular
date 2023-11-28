import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ForegPasswordComponent } from './components/foreg-password/foreg-password.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'forgot-password', component: ForegPasswordComponent},
    {path: 'home', component:UsuariosComponent}
];
