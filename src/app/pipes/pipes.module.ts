import { NgModule } from "@angular/core";
import { TruncatePipe } from "./truncate.pipe";
import { CommonModule } from "@angular/common";
import { NumArrayPipe } from "./numArray.pipe";

@NgModule({
  declarations: [TruncatePipe, NumArrayPipe],
  imports: [CommonModule],
  exports: [TruncatePipe, NumArrayPipe]
})
export class PipesModule {}
