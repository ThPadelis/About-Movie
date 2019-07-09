import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "numArray"
})
export class NumArrayPipe implements PipeTransform {
  transform(value: number): any {
    const rating = Math.trunc(value);
    const numbers = [];
    for (let i = 1; i <= rating; i++) {
      numbers.push(i);
    }
    return numbers;
  }
}
