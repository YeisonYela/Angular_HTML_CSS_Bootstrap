import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroeComponent } from "./components/heroe/heroe.component";
import { BuscarComponent } from "./components/buscar/buscar.component";

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },    
    { path: 'heroes', component: HeroesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes/heroe/:id', component: HeroeComponent },
    { path: 'buscar/:termino', component: BuscarComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];

export const APP_ROUTING = RouterModule.forRoot(appRoutes);
