import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './login/login';
import { Profile } from './pages/profile/profile';
import { About } from './pages/about/about';
import { UserDetails } from './pages/user-details/user-details';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { Setting } from './pages/setting/setting';
import { Products } from './services/products';
import { Productsapi } from './pages/productsapi/productsapi';
import { ProductList } from './components/product-list/product-list';
import { ProductDetails } from './components/product-details/product-details';

export const routes: Routes = [
    {path:"",component:Home},
    {path:"login",component:Login},
    {path:"about",component:About},
    {path:"users",loadComponent:()=>import("./pages/users/users").then((m)=>m.Users),

        children:[
            {path:"",redirectTo:"profile",pathMatch:"full"},
            {path:"profile",loadComponent:()=>import("./pages/profile/profile").then((m)=>m.Profile)},
            {path:"setting",loadComponent:()=>import("./pages/setting/setting").then((m)=>m.Setting)},
        ]
    },
    {path:"user-details/:id",component:UserDetails},
        {path:"productsapi",component:Productsapi},
        {path:"product-list",component:ProductList},
        {path:"product-details/:id",component:ProductDetails},
    {path:"**",component:PageNotFound},
];
