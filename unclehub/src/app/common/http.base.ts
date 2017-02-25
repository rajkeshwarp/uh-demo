/**
 * @author   : Rajkeshwawr Prasad (rajkeshwar.pd@gmail.com) 
 * @date     : 2017-02-25 13:43:12 
 * @copyright: (c) 2016 Unclehub Inc 
 * @website  : https://www.unclehub.com/ 
 */

import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class HttpClient {

    private BASE_URL:string;
    constructor(private http:Http) { 
        this.BASE_URL = 'https://api-unclehub.herokuapp.com';
    }

    private LOADER_INTEREVAL = 3000;

    get( url:string ) {
        return this.http.get(this.BASE_URL + url);
    }

    post( url:string, data:any ) {
        return this.http.post(this.BASE_URL + url, data);
    }

    put( url:string, data:any ) {
        return this.http.put(this.BASE_URL + url, data);
    }

    delete( url:string, data:any ) {
        let headers = new Headers({ 'content-type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(this.BASE_URL + url, options);
    }
}