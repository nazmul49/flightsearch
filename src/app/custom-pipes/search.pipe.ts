import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchFilter' })

export class SearchPipe implements PipeTransform {
    transform(value: any, args?: any): any {

        if (!value) return null;
        if (!args) return value;

        args = args.toLowerCase();

        return value.filter(function (item) {
            let newValues = JSON.stringify(item.AirlineName).toLowerCase().includes(args);
            return newValues;
        });
    }
}
