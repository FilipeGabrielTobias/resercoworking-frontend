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
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzUploadModule } from 'ng-zorro-antd/upload';

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
        NzCalendarModule,
        NzBadgeModule,
        NzDatePickerModule,
        NzTimePickerModule,
        NzInputNumberModule,
        NzUploadModule,
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
        NzCalendarModule,
        NzBadgeModule,
        NzDatePickerModule,
        NzTimePickerModule,
        NzInputNumberModule,
        NzUploadModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
    ]
})
export class SharedModule {}