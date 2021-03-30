import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzSelectModule } from "ng-zorro-antd/select";

@NgModule({
    imports: [
        NzLayoutModule,
        NzMenuModule,
        NzFormModule,
        NzTableModule,
        NzButtonModule,
        NzInputModule,
        NzDividerModule,
        NzSelectModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
    ],
    declarations: [
    ],
    exports: [
        NzLayoutModule,
        NzMenuModule,
        NzFormModule,
        NzTableModule,
        NzButtonModule,
        NzInputModule,
        NzDividerModule,
        NzSelectModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
    ]
})
export class SharedModule {}