/**
 * @author   : Rajkeshwawr Prasad (rajkeshwar.pd@gmail.com) 
 * @date     : 2017-02-25 13:46:01 
 * @copyright: (c) 2016 Unclehub Inc 
 * @website  : https://www.unclehub.com/ 
 */

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as commonPipes from './common-pipes';

@NgModule({
  declarations: [
    commonPipes.CapitalizePipe,
    commonPipes.FieldfilterPipe,
    commonPipes.MomentFormatPipe,
    commonPipes.StripUnderscorePipe,
    commonPipes.TrimWhitespacePipe,
    commonPipes.DomSafePipe
  ],
  imports: [
    FormsModule
  ],
  exports: [
    commonPipes.CapitalizePipe,
    commonPipes.FieldfilterPipe,
    commonPipes.MomentFormatPipe,
    commonPipes.StripUnderscorePipe,
    commonPipes.TrimWhitespacePipe,
    commonPipes.DomSafePipe
  ]
})
export class PipesModule { }