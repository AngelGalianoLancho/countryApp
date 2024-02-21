import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';


export const routes: Routes = [
  { path: 'home-page', component: HomePageComponent }, // Ruta para la página de inicio
  { path: 'about-page', component: AboutPageComponent }, // Ruta para la página "Acerca de"
  { path: 'contact-page', component: ContactPageComponent }, // Ruta para la página "Contacto"
  { 
    path: 'countries', 
    loadChildren: () => import('./countries/country.routes').then((m) => m.countryRoutes),
  },
  { path: '**', component: HomePageComponent }, // Redirige cualquier otra URL a la página de inicio

];