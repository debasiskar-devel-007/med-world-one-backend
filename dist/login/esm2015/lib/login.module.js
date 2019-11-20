/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginComponent } from './login.component';
import { DemoMaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent, successModalComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent, snackBarComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ApiService } from './api.service';
export class LoginModule {
}
LoginModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    LoginComponent,
                    SignUpComponent,
                    ForgetPasswordComponent,
                    ResetPasswordComponent,
                    successModalComponent,
                    snackBarComponent,
                ],
                imports: [
                    DemoMaterialModule,
                    FormsModule,
                    ReactiveFormsModule,
                    BrowserAnimationsModule,
                    CommonModule,
                    HttpClientModule
                ],
                exports: [LoginComponent, SignUpComponent, ForgetPasswordComponent, ResetPasswordComponent],
                providers: [ApiService],
                bootstrap: [],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
                entryComponents: [successModalComponent, snackBarComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9naW4vIiwic291cmNlcyI6WyJsaWIvbG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBMkIzQyxNQUFNLE9BQU8sV0FBVzs7O1lBekJ2QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZix1QkFBdUI7b0JBQ3ZCLHNCQUFzQjtvQkFDdEIscUJBQXFCO29CQUNyQixpQkFBaUI7aUJBR2xCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxrQkFBa0I7b0JBQ2xCLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQix1QkFBdUI7b0JBQ3ZCLFlBQVk7b0JBQ1osZ0JBQWdCO2lCQUNqQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsZUFBZSxFQUFFLHVCQUF1QixFQUFFLHNCQUFzQixDQUFDO2dCQUMzRixTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ3ZCLFNBQVMsRUFBRSxFQUFFO2dCQUNiLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2dCQUNqQyxlQUFlLEVBQUUsQ0FBRSxxQkFBcUIsRUFBRSxpQkFBaUIsQ0FBQzthQUM3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEZW1vTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL21hdGVyaWFsLW1vZHVsZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFNpZ25VcENvbXBvbmVudCwgc3VjY2Vzc01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9yZ2V0UGFzc3dvcmRDb21wb25lbnQsIHNuYWNrQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgIFNpZ25VcENvbXBvbmVudCxcclxuICAgIEZvcmdldFBhc3N3b3JkQ29tcG9uZW50LFxyXG4gICAgUmVzZXRQYXNzd29yZENvbXBvbmVudCxcclxuICAgIHN1Y2Nlc3NNb2RhbENvbXBvbmVudCxcclxuICAgIHNuYWNrQmFyQ29tcG9uZW50LFxyXG4gICAgLy8gY29tbW9uTW9kYWxDb21wb25lbnRcclxuXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBEZW1vTWF0ZXJpYWxNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtMb2dpbkNvbXBvbmVudCwgU2lnblVwQ29tcG9uZW50LCBGb3JnZXRQYXNzd29yZENvbXBvbmVudCwgUmVzZXRQYXNzd29yZENvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbQXBpU2VydmljZV0sXHJcbiAgYm9vdHN0cmFwOiBbXSxcclxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbIHN1Y2Nlc3NNb2RhbENvbXBvbmVudCwgc25hY2tCYXJDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbk1vZHVsZSB7IH1cclxuIl19