import { OnInit } from '@angular/core';
import { ApiService } from '../api.service';
export declare class ListingBlogmanagementlibComponent implements OnInit {
    private apiService;
    blogListConfig: any;
    loader: boolean;
    config: any;
    constructor(apiService: ApiService);
    ngOnInit(): void;
}
