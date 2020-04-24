import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'customReverse',
})
export class CustomReversePipe implements PipeTransform {

    transform(value: any) {
        return (value as string).split('').reverse().join('');
    }

}