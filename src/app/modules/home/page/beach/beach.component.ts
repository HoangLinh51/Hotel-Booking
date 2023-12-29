import { Component } from '@angular/core';
import { ListBeach } from 'src/app/data/modal/beach';

@Component({
  selector: 'app-beach',
  templateUrl: './beach.component.html',
  styleUrl: './beach.component.css',
})
export class BeachComponent {
  public linkDetail = '/detail';
  favoriteStatus: boolean[] = [];
  currentImageIndex: number[] = [];

  showNextButton: boolean = true;
  showPrevButton: boolean = false;

  listBeach: ListBeach[] = [
    {
      id: 1,
      image: [
        'assets/image/home/beach/beach1-1.png',
        'assets/image/home/beach/beach1-2.png',
        'assets/image/home/beach/beach1-3.png',
        'assets/image/home/beach/beach1-4.png',
      ],
      location: 'Nusa Ceningan, Indonesia',
      distance: 'On the beach',
      date: 'Apr 7 - 12',
      price: 'Rp2,250,000',
      time: 'night',
      star: '4.83',
    },
    {
      id: 2,
      image: [
        'assets/image/home/beach/beach2-1.png',
        'assets/image/home/beach/beach2-2.png',
        'assets/image/home/beach/beach2-3.png',
        'assets/image/home/beach/beach2-4.png',
      ],
      location: 'Lovina Seririt, Indonesia',
      distance: '53 kilometers away',
      date: 'May 6 - 11',
      price: 'Rp2,932,910',
      time: 'night',
      star: '4.89',
    },
    {
      id: 3,
      image: [
        'assets/image/home/beach/beach3-1.png',
        'assets/image/home/beach/beach3-2.png',
        'assets/image/home/beach/beach3-3.png',
        'assets/image/home/beach/beach3-4.png',
      ],
      location: 'Kutuh, Indonesia',
      distance: 'On pandawa beach',
      date: 'Jun 20 - 25',
      price: 'Rp33,687,226',
      time: 'night',
      star: '4.80',
    },
    {
      id: 4,
      image: [
        'assets/image/home/beach/beach4-1.png',
        'assets/image/home/beach/beach4-2.png',
        'assets/image/home/beach/beach4-3.png',
        'assets/image/home/beach/beach4-4.png',
      ],
      location: 'Karangasem, Indonesia',
      distance: 'Near Pantai Ujung',
      date: 'Apr 12 - 17',
      price: 'Rp4,398,219',
      time: 'night',
      star: '4.83',
    },
    {
      id: 5,
      image: [
        'assets/image/home/beach/beach5-1.png',
        'assets/image/home/beach/beach5-2.png',
        'assets/image/home/beach/beach5-3.png',
        'assets/image/home/beach/beach5-4.png',
      ],
      location: 'Seminyak, Indonesia',
      distance: '2 min to Seminyak Beach',
      date: 'Oct 4 - 9',
      price: 'Rp2,563,061',
      time: 'night',
      star: '4.81',
    },
    {
      id: 6,
      image: [
        'assets/image/home/beach/beach6-1.png',
        'assets/image/home/beach/beach6-2.png',
        'assets/image/home/beach/beach6-3.png',
        'assets/image/home/beach/beach6-4.png',
      ],
      location: 'Badung, Indonesia',
      distance: '1 min to Seminyak Beach',
      date: 'May 2 - 7',
      price: 'Rp16,161,062',
      time: 'night',
      star: '4.89',
    },
    {
      id: 7,
      image: [
        'assets/image/home/beach/beach7-1.png',
        'assets/image/home/beach/beach7-2.png',
        'assets/image/home/beach/beach7-3.png',
        'assets/image/home/beach/beach7-4.png',
      ],
      location: 'Canggu, Indonesia',
      distance: '11 kilometers away',
      date: 'May 3- 8',
      price: 'Rp24,644,818',
      time: 'night',
      star: '5.00',
    },
    {
      id: 8,
      image: [
        'assets/image/home/beach/beach8-1.png',
        'assets/image/home/beach/beach8-2.png',
        'assets/image/home/beach/beach8-3.png',
        'assets/image/home/beach/beach8-4.png',
      ],
      location: 'Canggu, Indonesia',
      distance: '4 min to Seminyak Beach',
      date: 'Apr 8 - 15',
      price: 'Rp7,329,305',
      time: 'night',
      star: '4.88',
    },
    {
      id: 9,
      image: [
        'assets/image/home/beach/beach9-1.png',
        'assets/image/home/beach/beach9-2.png',
        'assets/image/home/beach/beach9-3.png',
        'assets/image/home/beach/beach9-4.png',
      ],
      location: 'Nusa Ceningan, Indonesia',
      distance: 'On the beach',
      date: 'Apr 7 - 12',
      price: 'Rp2,250,000',
      time: 'night',
      star: '4.83',
    },
    {
      id: 10,
      image: [
        'assets/image/home/beach/beach10-1.png',
        'assets/image/home/beach/beach10-2.png',
        'assets/image/home/beach/beach10-3.png',
        'assets/image/home/beach/beach10-4.png',
      ],
      location: 'Lovina Seririt, Indonesia',
      distance: '53 kilometers away',
      date: 'May 6 - 11',
      price: 'Rp2,932,910',
      time: 'night',
      star: '4.89',
    },
    {
      id: 11,
      image: [
        'assets/image/home/beach/beach11-1.png',
        'assets/image/home/beach/beach11-2.png',
        'assets/image/home/beach/beach11-3.png',
        'assets/image/home/beach/beach11-4.png',
      ],
      location: 'Kutuh, Indonesia',
      distance: 'On pandawa beach',
      date: 'Jun 20 - 25',
      price: 'Rp33,687,226',
      time: 'night',
      star: '4.80',
    },
    {
      id: 12,
      image: [
        'assets/image/home/beach/beach12-1.png',
        'assets/image/home/beach/beach12-2.png',
        'assets/image/home/beach/beach12-3.png',
        'assets/image/home/beach/beach12-4.png',
      ],
      location: 'Karangasem, Indonesia',
      distance: 'Near Pantai Ujung',
      date: 'Apr 12 - 17',
      price: 'Rp4,398,219',
      time: 'night',
      star: '4.83',
    },
    {
      id: 13,
      image: [
        'assets/image/home/beach/beach13-1.png',
        'assets/image/home/beach/beach13-2.png',
        'assets/image/home/beach/beach13-3.png',
        'assets/image/home/beach/beach13-4.png',
      ],
      location: 'Canggu, Indonesia',
      distance: '4 min to Seminyak Beach',
      date: 'Apr 8 - 15',
      price: 'Rp7,329,305',
      time: 'night',
      star: '4.88',
    },
    {
      id: 14,
      image: [
        'assets/image/home/beach/beach14-1.png',
        'assets/image/home/beach/beach14-2.png',
        'assets/image/home/beach/beach14-3.png',
        'assets/image/home/beach/beach14-4.png',
      ],
      location: 'Karangasem, Indonesia',
      distance: 'Near Pantai Ujung',
      date: 'Apr 12 - 17',
      price: 'Rp4,398,219',
      time: 'night',
      star: '4.83',
    },
    {
      id: 15,
      image: [
        'assets/image/home/beach/beach15-1.png',
        'assets/image/home/beach/beach15-2.png',
        'assets/image/home/beach/beach15-3.png',
        'assets/image/home/beach/beach15-4.png',
      ],
      location: 'Seminyak, Indonesia',
      distance: '2 min to Seminyak Beach',
      date: 'Oct 4 - 9',
      price: 'Rp2,563,061',
      time: 'night',
      star: '4.81',
    },
    {
      id: 16,
      image: [
        'assets/image/home/beach/beach16-1.png',
        'assets/image/home/beach/beach16-2.png',
        'assets/image/home/beach/beach16-3.png',
        'assets/image/home/beach/beach16-4.png',
      ],
      location: 'Canggu, Indonesia',
      distance: '11 kilometers away',
      date: 'May 3- 8',
      price: 'Rp24,644,818',
      time: 'night',
      star: '5.00',
    },
    {
      id: 17,
      image: [
        'assets/image/home/beach/beach3-1.png',
        'assets/image/home/beach/beach3-2.png',
        'assets/image/home/beach/beach3-3.png',
        'assets/image/home/beach/beach3-4.png',
      ],
      location: 'Kutuh, Indonesia',
      distance: 'On pandawa beach',
      date: 'Jun 20 - 25',
      price: 'Rp33,687,226',
      time: 'night',
      star: '4.80',
    },
    {
      id: 18,
      image: [
        'assets/image/home/beach/beach4-1.png',
        'assets/image/home/beach/beach4-2.png',
        'assets/image/home/beach/beach4-3.png',
        'assets/image/home/beach/beach4-4.png',
      ],
      location: 'Lovina Seririt, Indonesia',
      distance: '53 kilometers away',
      date: 'May 6 - 11',
      price: 'Rp2,932,910',
      time: 'night',
      star: '4.89',
    },
    {
      id: 19,
      image: [
        'assets/image/home/beach/beach9-1.png',
        'assets/image/home/beach/beach9-2.png',
        'assets/image/home/beach/beach9-3.png',
        'assets/image/home/beach/beach9-4.png',
      ],
      location: 'Nusa Ceningan, Indonesia',
      distance: 'On the beach',
      date: 'Apr 7 - 12',
      price: 'Rp2,250,000',
      time: 'night',
      star: '4.83',
    },
    {
      id: 20,
      image: [
        'assets/image/home/beach/beach6-1.png',
        'assets/image/home/beach/beach6-2.png',
        'assets/image/home/beach/beach6-3.png',
        'assets/image/home/beach/beach6-4.png',
      ],
      location: 'Badung, Indonesia',
      distance: '1 min to Seminyak Beach',
      date: 'May 2 - 7',
      price: 'Rp16,161,062',
      time: 'night',
      star: '4.89',
    },
    {
      id: 21,
      image: [
        'assets/image/home/beach/beach7-1.png',
        'assets/image/home/beach/beach7-2.png',
        'assets/image/home/beach/beach7-3.png',
        'assets/image/home/beach/beach7-4.png',
      ],
      location: 'Canggu, Indonesia',
      distance: '11 kilometers away',
      date: 'May 3- 8',
      price: 'Rp24,644,818',
      time: 'night',
      star: '5.00',
    },
    {
      id: 22,
      image: [
        'assets/image/home/beach/beach1-1.png',
        'assets/image/home/beach/beach1-2.png',
        'assets/image/home/beach/beach1-3.png',
        'assets/image/home/beach/beach1-4.png',
      ],
      location: 'Nusa Ceningan, Indonesia',
      distance: 'On the beach',
      date: 'Apr 7 - 12',
      price: 'Rp2,250,000',
      time: 'night',
      star: '4.83',
    },
    {
      id: 23,
      image: [
        'assets/image/home/beach/beach8-1.png',
        'assets/image/home/beach/beach8-2.png',
        'assets/image/home/beach/beach8-3.png',
        'assets/image/home/beach/beach8-4.png',
      ],
      location: 'Canggu, Indonesia',
      distance: '4 min to Seminyak Beach',
      date: 'Apr 8 - 15',
      price: 'Rp7,329,305',
      time: 'night',
      star: '4.88',
    },
    {
      id: 24,
      image: [
        'assets/image/home/beach/beach5-1.png',
        'assets/image/home/beach/beach5-2.png',
        'assets/image/home/beach/beach5-3.png',
        'assets/image/home/beach/beach5-4.png',
      ],
      location: 'Seminyak, Indonesia',
      distance: '2 min to Seminyak Beach',
      date: 'Oct 4 - 9',
      price: 'Rp2,563,061',
      time: 'night',
      star: '4.81',
    },
  ];

  constructor() {
    if (this.listBeach) {
      this.listBeach.forEach(() => {
        this.favoriteStatus.push(false);
        this.currentImageIndex.push(0);
      });
    }
  }

  changeImage(isNext: boolean, index: number): void {
    const maxIndex = this.listBeach[index].image.length - 1;

    if (isNext) {
      this.currentImageIndex[index] =
        (this.currentImageIndex[index] + 1) % (maxIndex + 1);
    } else {
      this.currentImageIndex[index] =
        (this.currentImageIndex[index] - 1 + (maxIndex + 1)) % (maxIndex + 1);
    }

    // Check if at the last image
    this.showNextButton = this.currentImageIndex[index] < maxIndex;

    // Check if at the first image
    this.showPrevButton = this.currentImageIndex[index] > 0;
  }

  getCurrentImageSource(index: number): string {
    return this.listBeach[index].image[this.currentImageIndex[index]];
  }
  toggleFavorite(index: number): void {
    this.favoriteStatus[index] = !this.favoriteStatus[index];
  }

  product(abc: any) {
    const a = JSON.parse(localStorage.getItem('listFavorite')!) || [];
    if (a) {
      a.push(abc);
      localStorage.removeItem(a);
    }
    localStorage.setItem('listFavorite', JSON.stringify(a));

    console.log('id----->', a);
  }
}
