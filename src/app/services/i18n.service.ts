import { Injectable, ApplicationRef } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { delay, map, catchError } from 'rxjs//operators';
import { Observable } from "rxjs";

@Injectable()
export class I18nService {

    public data: {};
    public currentLanguage: any;
    public configs: any;

    constructor(
        private http: HttpClient,
        private ref: ApplicationRef) {
        this.setLanguage(localStorage.getItem('lang') || "en-US");
    }

    public setLanguage(language) {
        localStorage.setItem('lang', language);
        this.currentLanguage = language;
        this.fetch(language)
    }

    public getTranslation(phrase: string, variableData: any = null): string {
        return this.data && this.data[phrase] ? this.data[phrase] : phrase
    }

    private fetch(locale: any) {
        let langFilePath = `assets/langs/${locale}.json`;
        this.fetchFile(langFilePath)
            .subscribe((data: any) => {
                this.data = data;
                this.ref.tick();
            })
    }

    private fetchFile(url): Observable<any> {
        return this.http.get(this.getBaseUrl() + url)
            .pipe(
                map((data: any) => (data.data || data))
            );
    }

    private getBaseUrl() {
        return location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/'
    }



}
