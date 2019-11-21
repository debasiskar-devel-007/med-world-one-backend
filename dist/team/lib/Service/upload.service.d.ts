import { HttpClient } from '@angular/common/http';
export declare class UploadService {
    private httpClient;
    SERVER_URL: string;
    response: any;
    constructor(httpClient: HttpClient);
    upload(data: any, userId: any): import("rxjs").Observable<any>;
}
