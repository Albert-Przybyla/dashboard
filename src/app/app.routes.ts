import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResidentialProxiesComponent } from './pages/residential-proxies/residential-proxies.component';
import { StaticProxiesComponent } from './pages/static-proxies/static-proxies.component';
import { HybridProxiesComponent } from './pages/hybrid-proxies/hybrid-proxies.component';
import { BundlesComponent } from './pages/bundles/bundles.component';
import { ProgramsComponent } from './pages/programs/programs.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      label: 'Home',
      icon: 'bi-house',
    },
  },
  {
    path: 'residential-proxies',
    component: ResidentialProxiesComponent,
    data: {
      label: 'Residential Proxies',
      icon: 'bi-globe',
    },
  },
  {
    path: 'static-proxies',
    component: StaticProxiesComponent,
    data: {
      label: 'Static Proxies',
      icon: 'bi-box',
    },
  },
  {
    path: 'hybrid-proxies',
    component: HybridProxiesComponent,
    data: {
      label: 'Hybrid Proxies',
      icon: 'bi-lamp',
    },
  },
  {
    path: 'bundles',
    component: BundlesComponent,
    data: {
      label: 'Bundles',
      icon: 'bi-box-seam',
    },
  },
  {
    path: 'programs',
    component: ProgramsComponent,
    data: {
      label: 'Programs',
      icon: 'bi-window',
    },
  },
];

export const getRoutesForApp = (): any[] => {
  return routes.filter((x) => x.data).map((x) => x.data);
};
