import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IconsProviderModule } from "src/app/icons-provider.module";
import { SharedModule } from "src/app/shared/shared.module";
import { LayoutDefaultComponent } from "./default/default.component";

@NgModule({
    imports: [
        SharedModule,
        IconsProviderModule,
        RouterModule
    ],
    declarations: [
        LayoutDefaultComponent,
    ],
    exports: [
        LayoutDefaultComponent,
    ]
})
export class LayoutModule {

}