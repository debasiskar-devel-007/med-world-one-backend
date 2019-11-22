import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../Service/api.service';
import { HttpClient } from '@angular/common/http';
import { UploadService } from '../../Service/upload.service';
export declare class AddEditTeamComponent implements OnInit {
    fb: FormBuilder;
    activeroute: ActivatedRoute;
    _http: HttpClient;
    private uploadService;
    apiservice: ApiService;
    router: Router;
    teamData: any;
    allData: any;
    teamForm: FormGroup;
    params_id: any;
    getDataEndpointData: any;
    addEndpointData: any;
    serverUrlData: any;
    listrouteData: string;
    editarray: any;
    spinnerLoader: boolean;
    imageConfigData: any;
    SingleDataList: any;
    ButtonText: any;
    HeaderText: any;
    ErrCode: boolean;
    flag: boolean;
    img_var: any;
    image_name: any;
    image_type: any;
    imageUpload: any;
    singleData: any;
    serverUrl: any;
    ListRoute: any;
    getDataEndpoint: any;
    addEndpoint: any;
    constructor(fb: FormBuilder, activeroute: ActivatedRoute, _http: HttpClient, uploadService: UploadService, apiservice: ApiService, router: Router);
    ngOnInit(): void;
    inputUntouch(form: any, val: any): void;
    /**for multiple phone function start here**/
    addphone(a: any): void;
    removephone(index: any): void;
    /**multiple phone end here**/
    /**for multiple emails functions start here**/
    addemail(a: any): void;
    removeemail(index: any): void;
    /**multiple email functions end here**/
    getData(): void;
    /**resetting the form**/
    ResetForm(): void;
    /**bullet list function start here**/
    addBulletListData(a: any, b: any): void;
    deleteBulletListData(): void;
    trackByFn(index: any): any;
    /**bullet list function end here**/
    clear_image(): void;
    TeamFormSubmit(): void;
}
