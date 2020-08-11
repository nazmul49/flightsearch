import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlightComponent } from './flight/flight.component';

const routes: Routes = [
    { path: '', redirectTo: 'flight', pathMatch: 'full' },
    { path: 'flight', component: FlightComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [
    FlightComponent,
]