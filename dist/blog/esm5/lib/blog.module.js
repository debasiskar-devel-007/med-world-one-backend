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
// import { ListingModule} from 'listing';
import { ListingModule } from 'listing-angular7';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';
import { AddeditBlogmanagementComponent, Modal, YoutubeComponent } from './addedit-blogmanagement/addedit-blogmanagement.component';
import { YoutubeplayerComponent } from './youtubeplayer/youtubeplayer.component';
import { ListingBlogmanagementlibComponent } from './listing-blogmanagementlib/listing-blogmanagementlib.component';
var BlogModule = /** @class */ (function () {
    function BlogModule() {
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
    return BlogModule;
}());
export { BlogModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLyIsInNvdXJjZXMiOlsibGliL2Jsb2cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFFdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRXhFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSw4QkFBOEIsRUFBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNuSSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUdwSDtJQUFBO0lBK0IwQixDQUFDOztnQkEvQjFCLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osYUFBYTt3QkFDYixnQkFBZ0I7d0JBRWhCLDhCQUE4Qjt3QkFDOUIsS0FBSzt3QkFDTCxzQkFBc0I7d0JBQ3RCLGdCQUFnQjt3QkFDaEIsaUNBQWlDLEVBQUMsTUFBTTtxQkFDekM7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjt3QkFDbEIsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFDYixjQUFjO3dCQUNkLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixZQUFZO3FCQUViO29CQUNELE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSw4QkFBOEIsRUFBQyxpQ0FBaUMsQ0FBQztvQkFDNUcsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO29CQUN2QixlQUFlLEVBQUUsQ0FBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDO2lCQUVsRDs7SUFDeUIsaUJBQUM7Q0FBQSxBQS9CM0IsSUErQjJCO1NBQWQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9ibG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBEZW1vTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL21hdGVyaWFsLW1vZHVsZSdcbmltcG9ydCB7IGZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tICdmaWxlLXVwbG9hZCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEFkZEJsb2dDb21wb25lbnQsTW9kYWwyIH0gZnJvbSAnLi9hZGQtYmxvZy9hZGQtYmxvZy5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgTGlzdGluZ01vZHVsZX0gZnJvbSAnbGlzdGluZyc7XG5pbXBvcnQgeyBMaXN0aW5nTW9kdWxlIH0gZnJvbSAnbGlzdGluZy1hbmd1bGFyNyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENLRWRpdG9yTW9kdWxlIH0gZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1hbmd1bGFyJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBZGRlZGl0QmxvZ21hbmFnZW1lbnRDb21wb25lbnQsTW9kYWwsIFlvdXR1YmVDb21wb25lbnQgfSBmcm9tICcuL2FkZGVkaXQtYmxvZ21hbmFnZW1lbnQvYWRkZWRpdC1ibG9nbWFuYWdlbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgWW91dHViZXBsYXllckNvbXBvbmVudCB9IGZyb20gJy4veW91dHViZXBsYXllci95b3V0dWJlcGxheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0aW5nQmxvZ21hbmFnZW1lbnRsaWJDb21wb25lbnQgfSBmcm9tICcuL2xpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWIvbGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEJsb2dDb21wb25lbnQsXG4gICAgQWRkQmxvZ0NvbXBvbmVudCxcbiAgICBcbiAgICBBZGRlZGl0QmxvZ21hbmFnZW1lbnRDb21wb25lbnQsXG4gICAgTW9kYWwsXG4gICAgWW91dHViZXBsYXllckNvbXBvbmVudCxcbiAgICBZb3V0dWJlQ29tcG9uZW50LFxuICAgIExpc3RpbmdCbG9nbWFuYWdlbWVudGxpYkNvbXBvbmVudCxNb2RhbDJcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIERlbW9NYXRlcmlhbE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBMaXN0aW5nTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIENLRWRpdG9yTW9kdWxlLFxuICAgIExpc3RpbmdNb2R1bGUsXG4gICAgRmlsZVVwbG9hZE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gIFxuICBdLFxuICBleHBvcnRzOiBbQmxvZ0NvbXBvbmVudCwgQWRkQmxvZ0NvbXBvbmVudCwgQWRkZWRpdEJsb2dtYW5hZ2VtZW50Q29tcG9uZW50LExpc3RpbmdCbG9nbWFuYWdlbWVudGxpYkNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW0FwaVNlcnZpY2VdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtNb2RhbDIsTW9kYWwsIFlvdXR1YmVDb21wb25lbnRdLFxuXG59KVxuZXhwb3J0IGNsYXNzIEJsb2dNb2R1bGUgeyB9XG4iXX0=