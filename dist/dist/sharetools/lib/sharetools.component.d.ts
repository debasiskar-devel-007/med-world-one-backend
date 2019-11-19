import { OnInit } from '@angular/core';
import { FacebookService } from 'ngx-facebook';
export declare class SharetoolsComponent implements OnInit {
    private fb;
    ConfigData: any;
    Config: any;
    constructor(fb: FacebookService);
    ngOnInit(): void;
    share(url: string): void;
    shareLink(url: any): void;
}
