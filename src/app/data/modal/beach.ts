import { Guest } from './guest';

export interface ListBeach {
  id: number;
  image: string[];
  location: string;
  distance: string;
  date: string;
  price: string;
  time: string;
  star: string;
  categories: string;
}

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
  post!: ListBeach;
}

export class OrderInformation {
  date!: DateBooked;
  ifUser!: IUser;
}
export class Booking {
  orderInfo!: OrderInformation;
  payment!: Payment;
}
