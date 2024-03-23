import { Router } from '@angular/router';

export class NavigatePage {
  navigateDetail(
    stastus: boolean,
    id: number,
    router: Router,
    checkIn: string,
    checkOut: string
  ) {
    if (stastus === false) {
      router.navigate([null]);
    } else {
      router.navigate(['/detail/', id], {
        queryParams: { checkIn: checkIn, checkOut: checkOut },
      });
    }
  }
}
