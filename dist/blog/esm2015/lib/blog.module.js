/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { BlogComponent } from './blog.component';
import { BrowserModule } from '@angular/platform-browser';
import { DemoMaterialModule } from './material-module';
import { FileUploadModule } from 'file-upload';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AddBlogComponent, Modal2 } from './add-blog/add-blog.component';
import { ListingModule } from 'lib-listing';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';
import { AddeditBlogmanagementComponent, Modal, YoutubeComponent } from './addedit-blogmanagement/addedit-blogmanagement.component';
import { YoutubeplayerComponent } from './youtubeplayer/youtubeplayer.component';
import { ListingBlogmanagementlibComponent } from './listing-blogmanagementlib/listing-blogmanagementlib.component';
export class BlogModule {
}
BlogModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    BlogComponent,
                    AddBlogComponent,
                    AddeditBlogmanagementComponent,
                    Modal,
                    YoutubeplayerComponent,
                    YoutubeComponent,
                    ListingBlogmanagementlibComponent, Modal2
                ],
                imports: [
                    DemoMaterialModule,
                    RouterModule,
                    AppRoutingModule,
                    ListingModule,
                    HttpClientModule,
                    FormsModule,
                    ReactiveFormsModule,
                    BrowserModule,
                    CKEditorModule,
                    ListingModule,
                    FileUploadModule,
                    CommonModule,
                ],
                exports: [BlogComponent, AddBlogComponent, AddeditBlogmanagementComponent, ListingBlogmanagementlibComponent],
                providers: [ApiService],
                entryComponents: [Modal2, Modal, YoutubeComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLyIsInNvdXJjZXMiOlsibGliL2Jsb2cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFFdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSw4QkFBOEIsRUFBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNuSSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQWtDcEgsTUFBTSxPQUFPLFVBQVU7OztZQS9CdEIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixhQUFhO29CQUNiLGdCQUFnQjtvQkFFaEIsOEJBQThCO29CQUM5QixLQUFLO29CQUNMLHNCQUFzQjtvQkFDdEIsZ0JBQWdCO29CQUNoQixpQ0FBaUMsRUFBQyxNQUFNO2lCQUN6QztnQkFDRCxPQUFPLEVBQUU7b0JBQ1Asa0JBQWtCO29CQUNsQixZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsYUFBYTtvQkFDYixnQkFBZ0I7b0JBQ2hCLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixnQkFBZ0I7b0JBQ2hCLFlBQVk7aUJBRWI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLGdCQUFnQixFQUFFLDhCQUE4QixFQUFDLGlDQUFpQyxDQUFDO2dCQUM1RyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ3ZCLGVBQWUsRUFBRSxDQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUM7YUFFbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmxvZ0NvbXBvbmVudCB9IGZyb20gJy4vYmxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRGVtb01hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9tYXRlcmlhbC1tb2R1bGUnXG5pbXBvcnQgeyBmcm9tIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGaWxlVXBsb2FkTW9kdWxlIH0gZnJvbSAnZmlsZS11cGxvYWQnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBBZGRCbG9nQ29tcG9uZW50LE1vZGFsMiB9IGZyb20gJy4vYWRkLWJsb2cvYWRkLWJsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RpbmdNb2R1bGUgfSBmcm9tICdsaWItbGlzdGluZyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENLRWRpdG9yTW9kdWxlIH0gZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1hbmd1bGFyJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBZGRlZGl0QmxvZ21hbmFnZW1lbnRDb21wb25lbnQsTW9kYWwsIFlvdXR1YmVDb21wb25lbnQgfSBmcm9tICcuL2FkZGVkaXQtYmxvZ21hbmFnZW1lbnQvYWRkZWRpdC1ibG9nbWFuYWdlbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgWW91dHViZXBsYXllckNvbXBvbmVudCB9IGZyb20gJy4veW91dHViZXBsYXllci95b3V0dWJlcGxheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0aW5nQmxvZ21hbmFnZW1lbnRsaWJDb21wb25lbnQgfSBmcm9tICcuL2xpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWIvbGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEJsb2dDb21wb25lbnQsXG4gICAgQWRkQmxvZ0NvbXBvbmVudCxcbiAgICBcbiAgICBBZGRlZGl0QmxvZ21hbmFnZW1lbnRDb21wb25lbnQsXG4gICAgTW9kYWwsXG4gICAgWW91dHViZXBsYXllckNvbXBvbmVudCxcbiAgICBZb3V0dWJlQ29tcG9uZW50LFxuICAgIExpc3RpbmdCbG9nbWFuYWdlbWVudGxpYkNvbXBvbmVudCxNb2RhbDJcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIERlbW9NYXRlcmlhbE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBMaXN0aW5nTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIENLRWRpdG9yTW9kdWxlLFxuICAgIExpc3RpbmdNb2R1bGUsXG4gICAgRmlsZVVwbG9hZE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gIFxuICBdLFxuICBleHBvcnRzOiBbQmxvZ0NvbXBvbmVudCwgQWRkQmxvZ0NvbXBvbmVudCwgQWRkZWRpdEJsb2dtYW5hZ2VtZW50Q29tcG9uZW50LExpc3RpbmdCbG9nbWFuYWdlbWVudGxpYkNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW0FwaVNlcnZpY2VdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtNb2RhbDIsTW9kYWwsIFlvdXR1YmVDb21wb25lbnRdLFxuXG59KVxuZXhwb3J0IGNsYXNzIEJsb2dNb2R1bGUgeyB9XG4iXX0=