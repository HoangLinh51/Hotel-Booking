import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LUser } from 'src/app/data/modal/user';
import { AuthService } from 'src/app/data/service/auth.service';
import { LocalStorageService } from 'src/app/data/service/localstorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public linkAboutus = '/about-us';
  private BOOKED_KEY = 'booked';
  date!: FormGroup;
  user?: LUser | null;

  constructor(
    private authService: AuthService,
    private form: FormBuilder,
    private localStorageService: LocalStorageService
  ) {
    this.authService.user.subscribe((x) => (this.user = x));
  }

  ngOnInit() {
    this.date = this.form.group({
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.date.valid) {
      const checkInDate = new Date(this.date.value.checkIn);
      const checkOutDate = new Date(this.date.value.checkOut);

      const checkIn = checkInDate.toISOString().slice(0, 10); // Lấy ngày không có giờ
      const checkOut = checkOutDate.toISOString().slice(0, 10); // Lấy ngày không có giờ

      if (!isNaN(checkInDate.getTime()) && !isNaN(checkOutDate.getTime())) {
        const timeDiff = Math.abs(
          checkOutDate.getTime() - checkInDate.getTime()
        );
        const numberOfDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        const date = { numberOfDays, checkIn, checkOut };
        this.localStorageService.saveItem('date' + this.user?.id, date);
      }
    }
  }

  hideProduct() {
    this;
  }

  // hideProduct() {
  //   const dataPost = this.localStorageService.getItem('listBeach');
  //   const productBooked =
  //     this.localStorageService.getItem(this.BOOKED_KEY) || [];
  //   const date = this.localStorageService.getItem('date' + this.user?.id);
  //   for (let i = 0; i < date.length; i++)
  //     productBooked.forEach((product: any) => {
  //       if (
  //         product.dateBooked.checkIn === this.date.value.checkIn &&
  //         product.dateBooked.checkOut === this.date.value.checkOut
  //       ) {
  //         const foundProduct = dataPost.find(
  //           (item: any) => item.id === product.idProduct
  //         );
  //         console.log('foundProduct', foundProduct);

  //         let newListProduct = [];
  //         for (let i = 0; i < dataPost.length; i++) {
  //           if (foundProduct !== dataPost[i]) {
  //             newListProduct.push(dataPost[i]);
  //           }
  //         }
  //         console.log('listbeach', newListProduct);
  //         this.localStorageService.saveItem('listBeach', newListProduct);
  //       }
  //     });
  // }

  logout() {
    this.authService.logout();
  }
}
// for (let i = 0; i < dataPost; i++) {
//   console.log('dataPost', dataPost[1]);
//   debugger;
//   if (
//     !dataPost.find(
//       (booked: { id: number }) => booked.id == dataPost[i].id
//     )
//   ) {
//     newListProduct.push(dataPost[i]);
//   }
// }
