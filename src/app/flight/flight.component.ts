import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
declare var $: any;

import { AppConstants } from '../app.constant';
import { FlightService } from '../services/flight.service';
import { I18nService } from '../services/i18n.service';

@Component({
    selector: 'app-flight',
    templateUrl: './flight.component.html',
    styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

    public flightSearchForm: FormGroup;
    public flights = [];
    public currentPage = 1;
    public searchText;
    public selectLang:any = 'en-US';

    public pageSize = 10;
    public p: number = 1;
    public collapse: boolean = true;

    constructor(private _flightService: FlightService,
        private _i18nService: I18nService,
        private _toastr: ToastrService,
        private formBuilder: FormBuilder) { }

    ngOnInit() {
        /**
         * initializing the flight search form
         */
        this.flightSearchForm = this.formBuilder.group({
            departureAirportCode: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern('^$|^[A-Za-z0-9]+')]],
            arrivalAirportCode: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern('^$|^[A-Za-z0-9]+')]],
            departureDate: [null, [Validators.required]],
            returnDate: [null, [Validators.required]],
        });
    }

    onSearchFlightSubmit() {
        this.flights = [];
        this._flightService.searchFlight(this.flightSearchForm.value)
            .subscribe(response => {
                this.flights = response;
                // console.log("search result: ", this.flights);
                // this.flightSearchForm.reset();
            }, error => {
                this._toastr.error(error.error.message);
            });
    }

    toggleIcon(el) {
        this.collapse = this.collapse == true ? false : true;
    }

    changeLng(){
        this._i18nService.setLanguage(this.selectLang);
    }
}
