/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TeamComponent } from './team.component';
import { AddEditTeamComponent } from './Component/add-edit-team/add-edit-team.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from './material.module';
import { ListingModule } from 'lib-listing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddeditTeamComponent } from './Category-Management/addedit-team/addedit-team.component';
import { ListTeamComponent } from './Category-Management/list-team/list-team.component';
import { ApiService } from '../lib/Service/api.service';
import { TeamListComponent } from './Component/team-list/team-list.component';
import { FileUploadModule } from 'file-upload';
export class TeamModule {
}
TeamModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TeamComponent, AddEditTeamComponent, AddeditTeamComponent, ListTeamComponent, TeamListComponent],
                imports: [
                    BrowserModule,
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    MaterialModule,
                    BrowserAnimationsModule,
                    ListingModule,
                    FileUploadModule
                ],
                providers: [ApiService],
                exports: [TeamComponent, AddEditTeamComponent, AddeditTeamComponent, ListTeamComponent, TeamListComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90ZWFtLyIsInNvdXJjZXMiOlsibGliL3RlYW0ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFDLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN6RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFrQi9DLE1BQU0sT0FBTyxVQUFVOzs7WUFoQnRCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7Z0JBQy9HLE9BQU8sRUFBRTtvQkFDUCxhQUFhO29CQUNiLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixnQkFBZ0I7b0JBQ2hCLGNBQWM7b0JBQ2QsdUJBQXVCO29CQUN2QixhQUFhO29CQUNiLGdCQUFnQjtpQkFDakI7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUN2QixPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUMsb0JBQW9CLEVBQUMsb0JBQW9CLEVBQUMsaUJBQWlCLEVBQUMsaUJBQWlCLENBQUM7Z0JBQ3RHLE9BQU8sRUFBRSxDQUFFLHNCQUFzQixDQUFFO2FBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVhbUNvbXBvbmVudCB9IGZyb20gJy4vdGVhbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRkRWRpdFRlYW1Db21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudC9hZGQtZWRpdC10ZWFtL2FkZC1lZGl0LXRlYW0uY29tcG9uZW50JztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL21hdGVyaWFsLm1vZHVsZSc7XG5pbXBvcnQgeyBMaXN0aW5nTW9kdWxlIH0gZnJvbSAnbGliLWxpc3RpbmcnO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQWRkZWRpdFRlYW1Db21wb25lbnQgfSBmcm9tICcuL0NhdGVnb3J5LU1hbmFnZW1lbnQvYWRkZWRpdC10ZWFtL2FkZGVkaXQtdGVhbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFRlYW1Db21wb25lbnQgfSBmcm9tICcuL0NhdGVnb3J5LU1hbmFnZW1lbnQvbGlzdC10ZWFtL2xpc3QtdGVhbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2xpYi9TZXJ2aWNlL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IFRlYW1MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnQvdGVhbS1saXN0L3RlYW0tbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ2ZpbGUtdXBsb2FkJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVGVhbUNvbXBvbmVudCwgQWRkRWRpdFRlYW1Db21wb25lbnQsIEFkZGVkaXRUZWFtQ29tcG9uZW50LCBMaXN0VGVhbUNvbXBvbmVudCwgVGVhbUxpc3RDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTWF0ZXJpYWxNb2R1bGUsXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gICAgTGlzdGluZ01vZHVsZSxcbiAgICBGaWxlVXBsb2FkTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW0FwaVNlcnZpY2VdLFxuICBleHBvcnRzOiBbVGVhbUNvbXBvbmVudCxBZGRFZGl0VGVhbUNvbXBvbmVudCxBZGRlZGl0VGVhbUNvbXBvbmVudCxMaXN0VGVhbUNvbXBvbmVudCxUZWFtTGlzdENvbXBvbmVudF0sXG4gIHNjaGVtYXM6IFsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSBdXG59KVxuZXhwb3J0IGNsYXNzIFRlYW1Nb2R1bGUgeyB9XG4iXX0=