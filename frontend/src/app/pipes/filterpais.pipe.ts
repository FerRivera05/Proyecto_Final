import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpais'
})
export class FilterpaisPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const resultPosts = [];
    for (const post of value) {
      if (post.pais.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }

}
