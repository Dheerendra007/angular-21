import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './login/login';
import { Profile } from './pages/profile/profile';
import { About } from './pages/about/about';
export const routes: Routes = [
    {path:"",component:Home},
    {path:"login",component:Login},
    {path:"profile",component:Profile},
    {path:"about",component:About},
];
