import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { CamaraComponent } from "./camara.component";
@NgModule({
    imports: [IonicModule, RouterModule.forChild([{ path: '', component: CamaraComponent}])],
    declarations: [CamaraComponent],
    exports: [CamaraComponent],
})
export class CamaraModule {}