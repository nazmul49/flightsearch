import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class FlightService {

    private _searchEmployeeUrl: string = "http://nmflightapi.azurewebsites.net/api/flight";

    constructor(private _http: HttpClient) { }
    searchFlight(flightData) {

        console.log("search param: ", flightData);


        let Params = new HttpParams().set('DepartureAirportCode', flightData.departureAirportCode)
            .set('ArrivalAirportCode', flightData.arrivalAirportCode)
            .set('DepartureDate', flightData.departureDate)
            .set('ReturnDate', flightData.returnDate);

        let httpOptionsForSearchFlight = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            params: Params
        };

        return this._http.get<any>(this._searchEmployeeUrl, httpOptionsForSearchFlight)
            .catch(this.errorHandler);
    }

    errorHandler(error: HttpErrorResponse) {
        return Observable.throw(error.message || "Server Error");
    }
}
