import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({
  name: 'filter'
})
export class FilterPipe implements PipeTransform{
  transform (items: any, filterString: string, propName: string): any {
    if(items.length ===0 || filterString === '')
    {
      return items;
    }
    /*first v filter*/
   /* const resultArray = [];
    for(const item of items)
    {
      if (item[propName] === filterString)
      resultArray.push(item);
    }
    return resultArray;*/

   /* second variant filter*/
   return items.filter((i) =>{

     return i[propName].toLowerCase().indexOf(filterString.toLowerCase()) !== -1;
    });
  }
}
