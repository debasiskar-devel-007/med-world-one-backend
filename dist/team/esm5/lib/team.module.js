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
var TeamModule = /** @class */ (function () {
    function TeamModule() {
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
    return TeamModule;
}());
export { TeamModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90ZWFtLyIsInNvdXJjZXMiOlsibGliL3RlYW0ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFDLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN6RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFL0M7SUFBQTtJQWdCMEIsQ0FBQzs7Z0JBaEIxQixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsYUFBYSxFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDO29CQUMvRyxPQUFPLEVBQUU7d0JBQ1AsYUFBYTt3QkFDYixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLHVCQUF1Qjt3QkFDdkIsYUFBYTt3QkFDYixnQkFBZ0I7cUJBQ2pCO29CQUNELFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDdkIsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFDLG9CQUFvQixFQUFDLG9CQUFvQixFQUFDLGlCQUFpQixFQUFDLGlCQUFpQixDQUFDO29CQUN0RyxPQUFPLEVBQUUsQ0FBRSxzQkFBc0IsQ0FBRTtpQkFDcEM7O0lBQ3lCLGlCQUFDO0NBQUEsQUFoQjNCLElBZ0IyQjtTQUFkLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSxDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZWFtQ29tcG9uZW50IH0gZnJvbSAnLi90ZWFtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZGRFZGl0VGVhbUNvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50L2FkZC1lZGl0LXRlYW0vYWRkLWVkaXQtdGVhbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vbWF0ZXJpYWwubW9kdWxlJztcbmltcG9ydCB7IExpc3RpbmdNb2R1bGUgfSBmcm9tICdsaWItbGlzdGluZyc7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBBZGRlZGl0VGVhbUNvbXBvbmVudCB9IGZyb20gJy4vQ2F0ZWdvcnktTWFuYWdlbWVudC9hZGRlZGl0LXRlYW0vYWRkZWRpdC10ZWFtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0VGVhbUNvbXBvbmVudCB9IGZyb20gJy4vQ2F0ZWdvcnktTWFuYWdlbWVudC9saXN0LXRlYW0vbGlzdC10ZWFtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vbGliL1NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGVhbUxpc3RDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudC90ZWFtLWxpc3QvdGVhbS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWxlVXBsb2FkTW9kdWxlIH0gZnJvbSAnZmlsZS11cGxvYWQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUZWFtQ29tcG9uZW50LCBBZGRFZGl0VGVhbUNvbXBvbmVudCwgQWRkZWRpdFRlYW1Db21wb25lbnQsIExpc3RUZWFtQ29tcG9uZW50LCBUZWFtTGlzdENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBNYXRlcmlhbE1vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICBMaXN0aW5nTW9kdWxlLFxuICAgIEZpbGVVcGxvYWRNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbQXBpU2VydmljZV0sXG4gIGV4cG9ydHM6IFtUZWFtQ29tcG9uZW50LEFkZEVkaXRUZWFtQ29tcG9uZW50LEFkZGVkaXRUZWFtQ29tcG9uZW50LExpc3RUZWFtQ29tcG9uZW50LFRlYW1MaXN0Q29tcG9uZW50XSxcbiAgc2NoZW1hczogWyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIF1cbn0pXG5leHBvcnQgY2xhc3MgVGVhbU1vZHVsZSB7IH1cbiJdfQ==