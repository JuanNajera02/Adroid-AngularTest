import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../../app/modules/home-module/pages/home/models/user.model';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(users: User[], searchTerm: string): User[] {
    if (!users || !searchTerm) {
      return users;
    }
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

}
