import { Beach } from './beach';
import { Guest } from './guest';

export class DateBooked {
  checkIn!: string;
  checkOut!: string;
  numberOfDays!: number;
}

export class ProductBooked {
  dateBooked!: DateBooked[];
  idProduct!: number;
}

export class Payment {
  payment!: string;
  total!: number;
}

export class IUser {
  name!: string;
  email!: string;
  country!: string;
  phone!: string;
  note!: string;
  guest!: Guest;
  post!: Beach;
}

export class OrderInformation {
  date!: DateBooked;
  ifUser!: IUser;
}
export class Booking {
  orderInfo!: OrderInformation;
  payment!: Payment;
}
