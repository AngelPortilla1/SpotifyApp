import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
 
 
@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {
 
  constructor( private domSanitizer: DomSanitizer ){ }
 
  transform( value: string): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl( value );
  }
 
}
//transform( value: string, url: string): any {
  //return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
/*
@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(value: string, type: string): SafeResourceUrl {
    switch (type) {
      case 'resourceUrl':
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      default:
        throw new Error(`Invalid safe type specified: ${type}`);
    }
  }
}
*/