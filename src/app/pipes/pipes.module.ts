import { NgModule } from "@angular/core";
import { TruncatePipe } from "./truncate.pipe";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [TruncatePipe],
  imports: [CommonModule],
  exports: [TruncatePipe]
})
export class PipesModule {}
