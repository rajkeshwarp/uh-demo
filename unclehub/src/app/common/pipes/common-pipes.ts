/**
 * @author   : Rajkeshwawr Prasad (rajkeshwar.pd@gmail.com) 
 * @date     : 2017-02-25 13:44:30 
 * @copyright: (c) 2016 Unclehub Inc 
 * @website  : https://www.unclehub.com/ 
 */

import { Pipe, PipeTransform } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

declare var moment:any;

@Pipe({name: 'stripUnderscore'})
export class StripUnderscorePipe implements PipeTransform {
    transform(underscoreString: string): any {
        return underscoreString && underscoreString.replace(/\_/g,' ');
    }
}

@Pipe({name: 'trim'})
export class TrimWhitespacePipe implements PipeTransform {

  transform(value: string): string {
    if( !value ) return 'value';    
    return value.replace(/^\s+|\s+$/g, '');
  }
}

@Pipe({name:'capitalize'})
export class CapitalizePipe implements PipeTransform {

  transform(str: string) {
        if ( !str ) return '';   

        str = str.replace(/\_/gi, ' ');
        str = str.toLowerCase();

        return str.replace(/(^|\s)([a-z])/gi , function(m:any ,p1:any ,p2:any ){ 
            return p1 + p2.toUpperCase();
        });
    }
}


@Pipe({name: 'fieldFilter'})
export class FieldfilterPipe implements PipeTransform {

  transform(objectList:Array<any>, fieldNames:Array<string>, filterStr): Array<any> {

    if( !objectList ) return [];    
    if( !filterStr ) return objectList;    

    return objectList.filter( object => {
        return fieldNames.filter(fieldName => {
            return object[fieldName].toLowerCase().indexOf(filterStr.toLowerCase()) >= 0;
        }).length > 0;
    })
  }
}

@Pipe({name: 'moment'})
export class MomentFormatPipe implements PipeTransform {

  transform( value: string, DATE_FORMAT:string ): string {
    if( !value ) return '';    
    return moment(value).format(DATE_FORMAT);
  }
}


@Pipe({ name: 'safe' })
export class DomSafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 

/**
 * export COMMON_PIPES_LIST as Array so that we can easily 
 * import as COMMON_PIPES_LIST all the pipes and its easy to 
 * import in NgModule as spread operator.
 * 
 * import { COMMON_PIPES_LIST } from './common-pipes';
 * @NgModule({
 *   declarations: [
 *     ...COMMON_PIPES_LIST,
 *   ],
 *   exports: [
 *     ...COMMON_PIPES_LIST
 *   ]
 * })
 * 
 * ex: COMMON_PIPES_LIST = [
 *         StripUnderscorePipe,
 *         TrimWhitespacePipe,
 *         CapitalizePipe
 *     ]
 */
export const COMMON_PIPES_LIST = Object.keys(this).map( pipeName => this[pipeName]);
