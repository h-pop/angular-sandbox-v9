import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'customSort',
    pure: false
})
export class CustomSortPipe implements PipeTransform {

    transform(value: any, value2: string) {
        return value.sort((a, b) => a[value2] > b[value2] ? 1 : -1);
    }

}