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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLyIsInNvdXJjZXMiOlsibGliL2Jsb2cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFFdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSw4QkFBOEIsRUFBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNuSSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUdwSDtJQUFBO0lBK0IwQixDQUFDOztnQkEvQjFCLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osYUFBYTt3QkFDYixnQkFBZ0I7d0JBRWhCLDhCQUE4Qjt3QkFDOUIsS0FBSzt3QkFDTCxzQkFBc0I7d0JBQ3RCLGdCQUFnQjt3QkFDaEIsaUNBQWlDLEVBQUMsTUFBTTtxQkFDekM7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjt3QkFDbEIsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFDYixjQUFjO3dCQUNkLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixZQUFZO3FCQUViO29CQUNELE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSw4QkFBOEIsRUFBQyxpQ0FBaUMsQ0FBQztvQkFDNUcsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO29CQUN2QixlQUFlLEVBQUUsQ0FBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDO2lCQUVsRDs7SUFDeUIsaUJBQUM7Q0FBQSxBQS9CM0IsSUErQjJCO1NBQWQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9ibG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBEZW1vTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL21hdGVyaWFsLW1vZHVsZSdcbmltcG9ydCB7IGZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tICdmaWxlLXVwbG9hZCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEFkZEJsb2dDb21wb25lbnQsTW9kYWwyIH0gZnJvbSAnLi9hZGQtYmxvZy9hZGQtYmxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdGluZ01vZHVsZSB9IGZyb20gJ2xpYi1saXN0aW5nJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ0tFZGl0b3JNb2R1bGUgfSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWFuZ3VsYXInO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFkZGVkaXRCbG9nbWFuYWdlbWVudENvbXBvbmVudCxNb2RhbCwgWW91dHViZUNvbXBvbmVudCB9IGZyb20gJy4vYWRkZWRpdC1ibG9nbWFuYWdlbWVudC9hZGRlZGl0LWJsb2dtYW5hZ2VtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBZb3V0dWJlcGxheWVyQ29tcG9uZW50IH0gZnJvbSAnLi95b3V0dWJlcGxheWVyL3lvdXR1YmVwbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RpbmdCbG9nbWFuYWdlbWVudGxpYkNvbXBvbmVudCB9IGZyb20gJy4vbGlzdGluZy1ibG9nbWFuYWdlbWVudGxpYi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliLmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQmxvZ0NvbXBvbmVudCxcbiAgICBBZGRCbG9nQ29tcG9uZW50LFxuICAgIFxuICAgIEFkZGVkaXRCbG9nbWFuYWdlbWVudENvbXBvbmVudCxcbiAgICBNb2RhbCxcbiAgICBZb3V0dWJlcGxheWVyQ29tcG9uZW50LFxuICAgIFlvdXR1YmVDb21wb25lbnQsXG4gICAgTGlzdGluZ0Jsb2dtYW5hZ2VtZW50bGliQ29tcG9uZW50LE1vZGFsMlxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgRGVtb01hdGVyaWFsTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgIExpc3RpbmdNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgQ0tFZGl0b3JNb2R1bGUsXG4gICAgTGlzdGluZ01vZHVsZSxcbiAgICBGaWxlVXBsb2FkTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgXG4gIF0sXG4gIGV4cG9ydHM6IFtCbG9nQ29tcG9uZW50LCBBZGRCbG9nQ29tcG9uZW50LCBBZGRlZGl0QmxvZ21hbmFnZW1lbnRDb21wb25lbnQsTGlzdGluZ0Jsb2dtYW5hZ2VtZW50bGliQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbQXBpU2VydmljZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW01vZGFsMixNb2RhbCwgWW91dHViZUNvbXBvbmVudF0sXG5cbn0pXG5leHBvcnQgY2xhc3MgQmxvZ01vZHVsZSB7IH1cbiJdfQ==