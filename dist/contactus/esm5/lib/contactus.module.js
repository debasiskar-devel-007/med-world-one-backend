/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ContactusComponent, successModalComponent } from './contactus.component';
import { DemoMaterialModule } from './material-module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './api.service';
// import { AgmCoreModule} from '@agm/core';
import { ContactusListingComponent } from './contactus-listing/contactus-listing.component';
import { LoadingComponent } from './loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ListingModule } from 'listing-angular7';
var ContactusModule = /** @class */ (function () {
    function ContactusModule() {
    }
    ContactusModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ContactusComponent, successModalComponent, ContactusListingComponent, LoadingComponent],
                    imports: [
                        DemoMaterialModule,
                        BrowserAnimationsModule,
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        ListingModule,
                        HttpClientModule,
                    ],
                    exports: [ContactusComponent, ContactusListingComponent],
                    providers: [ApiService, LoadingComponent, CookieService],
                    bootstrap: [],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                    entryComponents: [successModalComponent]
                },] }
    ];
    return ContactusModule;
}());
export { ContactusModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbnRhY3R1cy8iLCJzb3VyY2VzIjpbImxpYi9jb250YWN0dXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2xGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHM0MsT0FBTyxFQUFFLHlCQUF5QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTSxFQUFDLGFBQWEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdqRDtJQUFBO0lBd0IrQixDQUFDOztnQkF4Qi9CLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSx5QkFBeUIsRUFBRSxnQkFBZ0IsQ0FBQztvQkFDdEcsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjt3QkFDbEIsdUJBQXVCO3dCQUN2QixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLGdCQUFnQjtxQkFRakI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUseUJBQXlCLENBQUM7b0JBQ3hELFNBQVMsRUFBRSxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLENBQUM7b0JBQ3hELFNBQVMsRUFBRSxFQUFFO29CQUNiLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO29CQUNqQyxlQUFlLEVBQUMsQ0FBQyxxQkFBcUIsQ0FBQztpQkFDeEM7O0lBQzhCLHNCQUFDO0NBQUEsQUF4QmhDLElBd0JnQztTQUFuQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRhY3R1c0NvbXBvbmVudCwgc3VjY2Vzc01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb250YWN0dXMuY29tcG9uZW50JztcbmltcG9ydCB7RGVtb01hdGVyaWFsTW9kdWxlfSBmcm9tICcuL21hdGVyaWFsLW1vZHVsZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7QnJvd3NlckFuaW1hdGlvbnNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG4vLyBpbXBvcnQgeyBBZ21Db3JlTW9kdWxlfSBmcm9tICdAYWdtL2NvcmUnO1xuXG5pbXBvcnQgeyBDb250YWN0dXNMaXN0aW5nQ29tcG9uZW50fSBmcm9tICcuL2NvbnRhY3R1cy1saXN0aW5nL2NvbnRhY3R1cy1saXN0aW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2FkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnR7Q29va2llU2VydmljZX0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcbmltcG9ydCB7IExpc3RpbmdNb2R1bGUgfSBmcm9tICdsaXN0aW5nLWFuZ3VsYXI3JztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtDb250YWN0dXNDb21wb25lbnQsIHN1Y2Nlc3NNb2RhbENvbXBvbmVudCwgQ29udGFjdHVzTGlzdGluZ0NvbXBvbmVudCwgTG9hZGluZ0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBEZW1vTWF0ZXJpYWxNb2R1bGUsXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTGlzdGluZ01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAvKiAgQWdtQ29yZU1vZHVsZS5mb3JSb290KHtcbiAgICAgIGFwaUtleTogJ0FJemFTeUJsT2h6MTlnLVhXTVdoTHBmY3hUdklGeFgzRU1ZLVU0WSdcbiAgICAgIC8hKiBhcGlLZXkgaXMgcmVxdWlyZWQsIHVubGVzcyB5b3UgYXJlIGFcbiAgICAgIHByZW1pdW0gY3VzdG9tZXIsIGluIHdoaWNoIGNhc2UgeW91IGNhblxuICAgICAgdXNlIGNsaWVudElkXG4gICAgICAqIS9cbiAgICB9KSovXG4gIF0sXG4gIGV4cG9ydHM6IFtDb250YWN0dXNDb21wb25lbnQsIENvbnRhY3R1c0xpc3RpbmdDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtBcGlTZXJ2aWNlLCBMb2FkaW5nQ29tcG9uZW50LCBDb29raWVTZXJ2aWNlXSxcbiAgYm9vdHN0cmFwOiBbXSxcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdLFxuICBlbnRyeUNvbXBvbmVudHM6W3N1Y2Nlc3NNb2RhbENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGFjdHVzTW9kdWxlIHsgfVxuXG4iXX0=