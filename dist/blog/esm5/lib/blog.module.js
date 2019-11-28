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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLyIsInNvdXJjZXMiOlsibGliL2Jsb2cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSw4QkFBOEIsRUFBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNuSSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUdwSDtJQUFBO0lBK0IwQixDQUFDOztnQkEvQjFCLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osYUFBYTt3QkFDYixnQkFBZ0I7d0JBRWhCLDhCQUE4Qjt3QkFDOUIsS0FBSzt3QkFDTCxzQkFBc0I7d0JBQ3RCLGdCQUFnQjt3QkFDaEIsaUNBQWlDLEVBQUMsTUFBTTtxQkFDekM7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjt3QkFDbEIsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFDYixjQUFjO3dCQUNkLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixZQUFZO3FCQUViO29CQUNELE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSw4QkFBOEIsRUFBQyxpQ0FBaUMsQ0FBQztvQkFDNUcsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO29CQUN2QixlQUFlLEVBQUUsQ0FBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDO2lCQUVsRDs7SUFDeUIsaUJBQUM7Q0FBQSxBQS9CM0IsSUErQjJCO1NBQWQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJsb2dDb21wb25lbnQgfSBmcm9tICcuL2Jsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBEZW1vTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL21hdGVyaWFsLW1vZHVsZSdcclxuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ2ZpbGUtdXBsb2FkJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgQWRkQmxvZ0NvbXBvbmVudCxNb2RhbDIgfSBmcm9tICcuL2FkZC1ibG9nL2FkZC1ibG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpc3RpbmdNb2R1bGUgfSBmcm9tICdsaWItbGlzdGluZyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENLRWRpdG9yTW9kdWxlIH0gZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1hbmd1bGFyJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBBZGRlZGl0QmxvZ21hbmFnZW1lbnRDb21wb25lbnQsTW9kYWwsIFlvdXR1YmVDb21wb25lbnQgfSBmcm9tICcuL2FkZGVkaXQtYmxvZ21hbmFnZW1lbnQvYWRkZWRpdC1ibG9nbWFuYWdlbWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBZb3V0dWJlcGxheWVyQ29tcG9uZW50IH0gZnJvbSAnLi95b3V0dWJlcGxheWVyL3lvdXR1YmVwbGF5ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGlzdGluZ0Jsb2dtYW5hZ2VtZW50bGliQ29tcG9uZW50IH0gZnJvbSAnLi9saXN0aW5nLWJsb2dtYW5hZ2VtZW50bGliL2xpc3RpbmctYmxvZ21hbmFnZW1lbnRsaWIuY29tcG9uZW50JztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQmxvZ0NvbXBvbmVudCxcclxuICAgIEFkZEJsb2dDb21wb25lbnQsXHJcbiAgICBcclxuICAgIEFkZGVkaXRCbG9nbWFuYWdlbWVudENvbXBvbmVudCxcclxuICAgIE1vZGFsLFxyXG4gICAgWW91dHViZXBsYXllckNvbXBvbmVudCxcclxuICAgIFlvdXR1YmVDb21wb25lbnQsXHJcbiAgICBMaXN0aW5nQmxvZ21hbmFnZW1lbnRsaWJDb21wb25lbnQsTW9kYWwyXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBEZW1vTWF0ZXJpYWxNb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxyXG4gICAgTGlzdGluZ01vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgQ0tFZGl0b3JNb2R1bGUsXHJcbiAgICBMaXN0aW5nTW9kdWxlLFxyXG4gICAgRmlsZVVwbG9hZE1vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICBcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtCbG9nQ29tcG9uZW50LCBBZGRCbG9nQ29tcG9uZW50LCBBZGRlZGl0QmxvZ21hbmFnZW1lbnRDb21wb25lbnQsTGlzdGluZ0Jsb2dtYW5hZ2VtZW50bGliQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtBcGlTZXJ2aWNlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtNb2RhbDIsTW9kYWwsIFlvdXR1YmVDb21wb25lbnRdLFxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIEJsb2dNb2R1bGUgeyB9XHJcbiJdfQ==