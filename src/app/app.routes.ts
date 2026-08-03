import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './login/login';
import { Profile } from './pages/profile/profile';
import { About } from './pages/about/about';
import { PageNotFound } from './pages/page-not-found/page-not-found';
export const routes: Routes = [
    {path:"",component:Home},
    {path:"login",component:Login},
    {path:"profile",component:Profile},
    {path:"about/:name",component:About},
    {path:"**",component:PageNotFound},
];
