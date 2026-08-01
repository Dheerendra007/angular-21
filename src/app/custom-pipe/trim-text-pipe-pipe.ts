import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimTextPipe',
})
export class TrimTextPipePipe implements PipeTransform {
  transform(value: string, ...args: number[]): string {

    return value.substring(0,5);
  }
}
