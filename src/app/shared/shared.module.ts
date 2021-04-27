import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzSwitchModule } from 'ng-zorro-antd/switch';

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
        NzCardModule,
        NzIconModule, 
        NzModalModule,
        NzSwitchModule,
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
        NzCardModule,
        NzIconModule,
        NzModalModule, 
        NzSwitchModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
    ]
})
export class SharedModule {}