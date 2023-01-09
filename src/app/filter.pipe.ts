import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    return items.filter(item => {
      return String(item.documentName).toLowerCase().includes(searchText.toLowerCase());
    });
   }
}