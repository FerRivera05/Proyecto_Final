import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterlibrosporfecha'
})
export class FilterlibrosporfechaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const resultPosts = [];
    for (const post of value) {
      if (post.fechaprestamo.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }

}
