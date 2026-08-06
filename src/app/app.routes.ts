import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './login/login';
import { Profile } from './pages/profile/profile';
import { About } from './pages/about/about';
import { Users } from './pages/users/users';
import { UserDetails } from './pages/user-details/user-details';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { Setting } from './pages/setting/setting';

export const routes: Routes = [
    {path:"",component:Home},
    {path:"login",component:Login},
    {path:"about",component:About},
    {path:"users",component:Users,
        children:[
            {path:"",redirectTo:"profile",pathMatch:"full"},
            {path:"profile",component:Profile},
            {path:"setting",component:Setting},
        ]
    },
    {path:"user-details/:id",component:UserDetails},
    {path:"**",component:PageNotFound},
];
