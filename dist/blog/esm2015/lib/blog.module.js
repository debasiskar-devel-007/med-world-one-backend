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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLyIsInNvdXJjZXMiOlsibGliL2Jsb2cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSw4QkFBOEIsRUFBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNuSSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQWtDcEgsTUFBTSxPQUFPLFVBQVU7OztZQS9CdEIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixhQUFhO29CQUNiLGdCQUFnQjtvQkFFaEIsOEJBQThCO29CQUM5QixLQUFLO29CQUNMLHNCQUFzQjtvQkFDdEIsZ0JBQWdCO29CQUNoQixpQ0FBaUMsRUFBQyxNQUFNO2lCQUN6QztnQkFDRCxPQUFPLEVBQUU7b0JBQ1Asa0JBQWtCO29CQUNsQixZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsYUFBYTtvQkFDYixnQkFBZ0I7b0JBQ2hCLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixnQkFBZ0I7b0JBQ2hCLFlBQVk7aUJBRWI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLGdCQUFnQixFQUFFLDhCQUE4QixFQUFDLGlDQUFpQyxDQUFDO2dCQUM1RyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ3ZCLGVBQWUsRUFBRSxDQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUM7YUFFbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9ibG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgRGVtb01hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9tYXRlcmlhbC1tb2R1bGUnXHJcbmltcG9ydCB7IEZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tICdmaWxlLXVwbG9hZCc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IEFkZEJsb2dDb21wb25lbnQsTW9kYWwyIH0gZnJvbSAnLi9hZGQtYmxvZy9hZGQtYmxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaXN0aW5nTW9kdWxlIH0gZnJvbSAnbGliLWxpc3RpbmcnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDS0VkaXRvck1vZHVsZSB9IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYW5ndWxhcic7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQWRkZWRpdEJsb2dtYW5hZ2VtZW50Q29tcG9uZW50LE1vZGFsLCBZb3V0dWJlQ29tcG9uZW50IH0gZnJvbSAnLi9hZGRlZGl0LWJsb2dtYW5hZ2VtZW50L2FkZGVkaXQtYmxvZ21hbmFnZW1lbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgWW91dHViZXBsYXllckNvbXBvbmVudCB9IGZyb20gJy4veW91dHViZXBsYXllci95b3V0dWJlcGxheWVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpc3RpbmdCbG9nbWFuYWdlbWVudGxpYkNvbXBvbmVudCB9IGZyb20gJy4vbGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliLmNvbXBvbmVudCc7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEJsb2dDb21wb25lbnQsXHJcbiAgICBBZGRCbG9nQ29tcG9uZW50LFxyXG4gICAgXHJcbiAgICBBZGRlZGl0QmxvZ21hbmFnZW1lbnRDb21wb25lbnQsXHJcbiAgICBNb2RhbCxcclxuICAgIFlvdXR1YmVwbGF5ZXJDb21wb25lbnQsXHJcbiAgICBZb3V0dWJlQ29tcG9uZW50LFxyXG4gICAgTGlzdGluZ0Jsb2dtYW5hZ2VtZW50bGliQ29tcG9uZW50LE1vZGFsMlxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgRGVtb01hdGVyaWFsTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgQXBwUm91dGluZ01vZHVsZSxcclxuICAgIExpc3RpbmdNb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgQnJvd3Nlck1vZHVsZSxcclxuICAgIENLRWRpdG9yTW9kdWxlLFxyXG4gICAgTGlzdGluZ01vZHVsZSxcclxuICAgIEZpbGVVcGxvYWRNb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgXHJcbiAgXSxcclxuICBleHBvcnRzOiBbQmxvZ0NvbXBvbmVudCwgQWRkQmxvZ0NvbXBvbmVudCwgQWRkZWRpdEJsb2dtYW5hZ2VtZW50Q29tcG9uZW50LExpc3RpbmdCbG9nbWFuYWdlbWVudGxpYkNvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbQXBpU2VydmljZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbTW9kYWwyLE1vZGFsLCBZb3V0dWJlQ29tcG9uZW50XSxcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCbG9nTW9kdWxlIHsgfVxyXG4iXX0=