import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "truncate"
})
export class TruncatePipe implements PipeTransform {
  transform(text: string, length: number, extension: string = "..."): string {
    if (text.length >= length) {
      return text.slice(0, length) + extension;
    } else {
      return text;
    }
  }
}
