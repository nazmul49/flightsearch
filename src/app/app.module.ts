import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppComponent } from './app.component';

import { AppRoutingModule, routingComponents } from './app-routing.modules';
import { FlightService } from './services/flight.service';
import { SearchPipe } from './custom-pipes/search.pipe';
import { FlightComponent } from './flight/flight.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { I18nPipe } from "./custom-pipes/i18n.pipe";
import { I18nService } from './services/i18n.service';


@NgModule({
	declarations: [
		AppComponent,
		routingComponents,
		SearchPipe,
		I18nPipe,
		FlightComponent,
		TopBarComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		FormsModule,
		HttpClientModule,
		NgbModule.forRoot(),
		DragulaModule.forRoot(),
		ToastrModule.forRoot(),
		NgxPaginationModule,
		AppRoutingModule
	],
	providers: [
		FlightService,
		I18nService,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
