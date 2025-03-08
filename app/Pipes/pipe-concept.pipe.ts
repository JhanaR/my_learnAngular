import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeConcept'
})
export class PipeConceptPipe implements PipeTransform {

  transform(value: unknown):unknown {
    if(value== "" ||value == undefined ||value == null){
    return "NA"
  } else {
    return value;
  }
  }

}
