import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  public linkDetail = '/detail';
  images1: string[] = [
    'assets/image/home/beach1-1.png',
    'assets/image/home/beach1-2.png',
    'assets/image/home/beach1-3.png',
    'assets/image/home/beach1-4.png',
  ];
  images2: string[] = [
    'assets/image/home/beach2-1.png',
    'assets/image/home/beach2-2.png',
    'assets/image/home/beach2-3.png',
    'assets/image/home/beach2-4.png',
  ];
  images3: string[] = [
    'assets/image/home/beach3-1.png',
    'assets/image/home/beach3-2.png',
    'assets/image/home/beach3-3.png',
    'assets/image/home/beach3-4.png',
  ];
  images4: string[] = [
    'assets/image/home/beach4-1.png',
    'assets/image/home/beach4-2.png',
    'assets/image/home/beach4-3.png',
    'assets/image/home/beach4-4.png',
  ];
  images5: string[] = [
    'assets/image/home/beach5-1.png',
    'assets/image/home/beach5-2.png',
    'assets/image/home/beach5-3.png',
    'assets/image/home/beach5-4.png',
  ];
  images6: string[] = [
    'assets/image/home/beach6-1.png',
    'assets/image/home/beach6-2.png',
    'assets/image/home/beach6-3.png',
    'assets/image/home/beach6-4.png',
  ];
  images7: string[] = [
    'assets/image/home/beach7-1.png',
    'assets/image/home/beach7-2.png',
    'assets/image/home/beach7-3.png',
    'assets/image/home/beach7-4.png',
  ];
  images8: string[] = [
    'assets/image/home/beach8-1.png',
    'assets/image/home/beach8-2.png',
    'assets/image/home/beach8-3.png',
    'assets/image/home/beach8-4.png',
  ];
  images9: string[] = [
    'assets/image/home/beach9-1.png',
    'assets/image/home/beach9-2.png',
    'assets/image/home/beach9-3.png',
    'assets/image/home/beach9-4.png',
  ];
  images10: string[] = [
    'assets/image/home/beach10-1.png',
    'assets/image/home/beach10-2.png',
    'assets/image/home/beach10-3.png',
    'assets/image/home/beach10-4.png',
  ];
  images11: string[] = [
    'assets/image/home/beach11-1.png',
    'assets/image/home/beach11-2.png',
    'assets/image/home/beach11-3.png',
    'assets/image/home/beach11-4.png',
  ];
  images12: string[] = [
    'assets/image/home/beach12-1.png',
    'assets/image/home/beach12-2.png',
    'assets/image/home/beach12-3.png',
    'assets/image/home/beach12-4.png',
  ];
  images13: string[] = [
    'assets/image/home/beach13-1.png',
    'assets/image/home/beach13-2.png',
    'assets/image/home/beach13-3.png',
    'assets/image/home/beach13-4.png',
  ];
  images14: string[] = [
    'assets/image/home/beach14-1.png',
    'assets/image/home/beach14-2.png',
    'assets/image/home/beach14-3.png',
    'assets/image/home/beach14-4.png',
  ];
  images15: string[] = [
    'assets/image/home/beach15-1.png',
    'assets/image/home/beach15-2.png',
    'assets/image/home/beach15-3.png',
    'assets/image/home/beach15-4.png',
  ];
  images16: string[] = [
    'assets/image/home/beach16-1.png',
    'assets/image/home/beach16-2.png',
    'assets/image/home/beach16-3.png',
    'assets/image/home/beach16-4.png',
  ];

  currentImageIndex1: number = 0;
  currentImageIndex2: number = 0;
  currentImageIndex3: number = 0;
  currentImageIndex4: number = 0;
  currentImageIndex5: number = 0;
  currentImageIndex6: number = 0;
  currentImageIndex7: number = 0;
  currentImageIndex8: number = 0;
  currentImageIndex9: number = 0;
  currentImageIndex10: number = 0;
  currentImageIndex11: number = 0;
  currentImageIndex12: number = 0;
  currentImageIndex13: number = 0;
  currentImageIndex14: number = 0;
  currentImageIndex15: number = 0;
  currentImageIndex16: number = 0;
  currentImageIndex17: number = 0;
  currentImageIndex18: number = 0;
  currentImageIndex19: number = 0;
  currentImageIndex20: number = 0;
  currentImageIndex21: number = 0;
  currentImageIndex22: number = 0;
  currentImageIndex23: number = 0;
  currentImageIndex24: number = 0;

  isFavorite1: boolean = false;
  isFavorite2: boolean = false;
  isFavorite3: boolean = false;
  isFavorite4: boolean = false;
  isFavorite5: boolean = false;
  isFavorite6: boolean = false;
  isFavorite7: boolean = false;
  isFavorite8: boolean = false;
  isFavorite9: boolean = false;
  isFavorite10: boolean = false;
  isFavorite11: boolean = false;
  isFavorite12: boolean = false;
  isFavorite13: boolean = false;
  isFavorite14: boolean = false;
  isFavorite15: boolean = false;
  isFavorite16: boolean = false;
  isFavorite17: boolean = false;
  isFavorite18: boolean = false;
  isFavorite19: boolean = false;
  isFavorite20: boolean = false;
  isFavorite21: boolean = false;
  isFavorite22: boolean = false;
  isFavorite23: boolean = false;
  isFavorite24: boolean = false;

  showNextButton: boolean = true;
  showPrevButton: boolean = false;

  changeImage1(forward: boolean) {
    if (forward && this.currentImageIndex1 < this.images1.length - 1) {
      this.currentImageIndex1++;
    } else if (!forward && this.currentImageIndex1 > 0) {
      this.currentImageIndex1--;
    }

    // Update button visibility
    this.showNextButton = this.currentImageIndex1 < this.images1.length - 1;
    this.showPrevButton = this.currentImageIndex1 > 0;
  }
  changeImage2(forward: boolean) {
    if (forward && this.currentImageIndex2 < this.images2.length - 1) {
      this.currentImageIndex2++;
    } else if (!forward && this.currentImageIndex2 > 0) {
      this.currentImageIndex2--;
    }

    // Update button visibility
    this.showNextButton = this.currentImageIndex2 < this.images2.length - 1;
    this.showPrevButton = this.currentImageIndex2 > 0;
  }
  changeImage3(forward: boolean) {
    if (forward && this.currentImageIndex3 < this.images3.length - 1) {
      this.currentImageIndex3++;
    } else if (!forward && this.currentImageIndex3 > 0) {
      this.currentImageIndex3--;
    }

    // Update button visibility
    this.showNextButton = this.currentImageIndex3 < this.images3.length - 1;
    this.showPrevButton = this.currentImageIndex3 > 0;
  }
  changeImage4(forward: boolean) {
    if (forward && this.currentImageIndex4 < this.images4.length - 1) {
      this.currentImageIndex4++;
    } else if (!forward && this.currentImageIndex4 > 0) {
      this.currentImageIndex4--;
    }

    // Update button visibility
    this.showNextButton = this.currentImageIndex4 < this.images4.length - 1;
    this.showPrevButton = this.currentImageIndex4 > 0;
  }
  changeImage5(forward: boolean) {
    if (forward && this.currentImageIndex5 < this.images5.length - 1) {
      this.currentImageIndex5++;
    } else if (!forward && this.currentImageIndex5 > 0) {
      this.currentImageIndex5--;
    }

    // Update button visibility
    this.showNextButton = this.currentImageIndex5 < this.images5.length - 1;
    this.showPrevButton = this.currentImageIndex5 > 0;
  }
  changeImage6(forward: boolean) {
    if (forward && this.currentImageIndex6 < this.images6.length - 1) {
      this.currentImageIndex6++;
    } else if (!forward && this.currentImageIndex6 > 0) {
      this.currentImageIndex6--;
    }

    // Update button visibility
    this.showNextButton = this.currentImageIndex6 < this.images6.length - 1;
    this.showPrevButton = this.currentImageIndex6 > 0;
  }
  changeImage7(forward: boolean) {
    if (forward && this.currentImageIndex7 < this.images7.length - 1) {
      this.currentImageIndex7++;
    } else if (!forward && this.currentImageIndex7 > 0) {
      this.currentImageIndex7--;
    }

    // Update button visibility
    this.showNextButton = this.currentImageIndex7 < this.images7.length - 1;
    this.showPrevButton = this.currentImageIndex7 > 0;
  }
  changeImage8(forward: boolean) {
    if (forward && this.currentImageIndex8 < this.images8.length - 1) {
      this.currentImageIndex8++;
    } else if (!forward && this.currentImageIndex8 > 0) {
      this.currentImageIndex8--;
    }

    // Update button visibility
    this.showNextButton = this.currentImageIndex8 < this.images8.length - 1;
    this.showPrevButton = this.currentImageIndex8 > 0;
  }
  changeImage9(forward: boolean) {
    if (forward && this.currentImageIndex9 < this.images9.length - 1) {
      this.currentImageIndex9++;
    } else if (!forward && this.currentImageIndex9 > 0) {
      this.currentImageIndex9--;
    }

    // Update button visibility
    this.showNextButton = this.currentImageIndex9 < this.images9.length - 1;
    this.showPrevButton = this.currentImageIndex9 > 0;
  }
  changeImage10(forward: boolean) {
    if (forward && this.currentImageIndex10 < this.images10.length - 1) {
      this.currentImageIndex10++;
    } else if (!forward && this.currentImageIndex10 > 0) {
      this.currentImageIndex10--;
    }

    // Update button visibility
    this.showNextButton = this.currentImageIndex10 < this.images10.length - 1;
    this.showPrevButton = this.currentImageIndex10 > 0;
  }
  changeImage11(forward: boolean) {
    if (forward && this.currentImageIndex11 < this.images11.length - 1) {
      this.currentImageIndex11++;
    } else if (!forward && this.currentImageIndex11 > 0) {
      this.currentImageIndex11--;
    }

    // Update button visibility
    this.showNextButton = this.currentImageIndex11 < this.images11.length - 1;
    this.showPrevButton = this.currentImageIndex11 > 0;
  }
  changeImage12(forward: boolean) {
    if (forward && this.currentImageIndex12 < this.images12.length - 1) {
      this.currentImageIndex12++;
    } else if (!forward && this.currentImageIndex12 > 0) {
      this.currentImageIndex12--;
    }

    // Update button visibility
    this.showNextButton = this.currentImageIndex12 < this.images12.length - 1;
    this.showPrevButton = this.currentImageIndex12 > 0;
  }
  changeImage13(forward: boolean) {
    if (forward && this.currentImageIndex13 < this.images13.length - 1) {
      this.currentImageIndex13++;
    } else if (!forward && this.currentImageIndex13 > 0) {
      this.currentImageIndex13--;
    }

    // Update button visibility
    this.showNextButton = this.currentImageIndex13 < this.images13.length - 1;
    this.showPrevButton = this.currentImageIndex13 > 0;
  }
  changeImage14(forward: boolean) {
    if (forward && this.currentImageIndex14 < this.images14.length - 1) {
      this.currentImageIndex14++;
    } else if (!forward && this.currentImageIndex14 > 0) {
      this.currentImageIndex14--;
    }

    // Update button visibility
    this.showNextButton = this.currentImageIndex14 < this.images14.length - 1;
    this.showPrevButton = this.currentImageIndex14 > 0;
  }
  changeImage15(forward: boolean) {
    if (forward && this.currentImageIndex15 < this.images15.length - 1) {
      this.currentImageIndex15++;
    } else if (!forward && this.currentImageIndex15 > 0) {
      this.currentImageIndex15--;
    }

    // Update button visibility
    this.showNextButton = this.currentImageIndex15 < this.images15.length - 1;
    this.showPrevButton = this.currentImageIndex15 > 0;
  }
  changeImage16(forward: boolean) {
    if (forward && this.currentImageIndex16 < this.images16.length - 1) {
      this.currentImageIndex16++;
    } else if (!forward && this.currentImageIndex16 > 0) {
      this.currentImageIndex16--;
    }

    // Update button visibility
    this.showNextButton = this.currentImageIndex16 < this.images16.length - 1;
    this.showPrevButton = this.currentImageIndex16 > 0;
  }
  changeImage17(forward: boolean) {
    if (forward && this.currentImageIndex17 < this.images3.length - 1) {
      this.currentImageIndex17++;
    } else if (!forward && this.currentImageIndex17 > 0) {
      this.currentImageIndex17--;
    }

    // Update button visibility
    this.showNextButton = this.currentImageIndex17 < this.images3.length - 1;
    this.showPrevButton = this.currentImageIndex17 > 0;
  }
  changeImage18(forward: boolean) {
    if (forward && this.currentImageIndex18 < this.images4.length - 1) {
      this.currentImageIndex18++;
    } else if (!forward && this.currentImageIndex18 > 0) {
      this.currentImageIndex18--;
    }

    // Update button visibility
    this.showNextButton = this.currentImageIndex18 < this.images4.length - 1;
    this.showPrevButton = this.currentImageIndex18 > 0;
  }
  changeImage19(forward: boolean) {
    if (forward && this.currentImageIndex19 < this.images9.length - 1) {
      this.currentImageIndex19++;
    } else if (!forward && this.currentImageIndex19 > 0) {
      this.currentImageIndex19--;
    }

    // Update button visibility
    this.showNextButton = this.currentImageIndex19 < this.images9.length - 1;
    this.showPrevButton = this.currentImageIndex19 > 0;
  }
  changeImage20(forward: boolean) {
    if (forward && this.currentImageIndex20 < this.images6.length - 1) {
      this.currentImageIndex20++;
    } else if (!forward && this.currentImageIndex20 > 0) {
      this.currentImageIndex20--;
    }

    // Update button visibility
    this.showNextButton = this.currentImageIndex20 < this.images6.length - 1;
    this.showPrevButton = this.currentImageIndex20 > 0;
  }
  changeImage21(forward: boolean) {
    if (forward && this.currentImageIndex21 < this.images7.length - 1) {
      this.currentImageIndex21++;
    } else if (!forward && this.currentImageIndex21 > 0) {
      this.currentImageIndex21--;
    }

    // Update button visibility
    this.showNextButton = this.currentImageIndex21 < this.images7.length - 1;
    this.showPrevButton = this.currentImageIndex21 > 0;
  }
  changeImage22(forward: boolean) {
    if (forward && this.currentImageIndex22 < this.images1.length - 1) {
      this.currentImageIndex22++;
    } else if (!forward && this.currentImageIndex22 > 0) {
      this.currentImageIndex22--;
    }

    // Update button visibility
    this.showNextButton = this.currentImageIndex22 < this.images1.length - 1;
    this.showPrevButton = this.currentImageIndex22 > 0;
  }
  changeImage23(forward: boolean) {
    if (forward && this.currentImageIndex23 < this.images8.length - 1) {
      this.currentImageIndex23++;
    } else if (!forward && this.currentImageIndex23 > 0) {
      this.currentImageIndex23--;
    }

    // Update button visibility
    this.showNextButton = this.currentImageIndex23 < this.images8.length - 1;
    this.showPrevButton = this.currentImageIndex23 > 0;
  }
  changeImage24(forward: boolean) {
    if (forward && this.currentImageIndex24 < this.images5.length - 1) {
      this.currentImageIndex24++;
    } else if (!forward && this.currentImageIndex24 > 0) {
      this.currentImageIndex24--;
    }

    // Update button visibility
    this.showNextButton = this.currentImageIndex24 < this.images5.length - 1;
    this.showPrevButton = this.currentImageIndex24 > 0;
  }

  toggleFavorite1() {
    this.isFavorite1 = !this.isFavorite1;
    console.log('show button like', this.isFavorite1);
  }
  toggleFavorite2() {
    this.isFavorite2 = !this.isFavorite2;
    console.log('show button like', this.isFavorite2);
  }
  toggleFavorite3() {
    this.isFavorite3 = !this.isFavorite3;
    console.log('show button like', this.isFavorite3);
  }
  toggleFavorite4() {
    this.isFavorite4 = !this.isFavorite4;
    console.log('show button like', this.isFavorite4);
  }
  toggleFavorite5() {
    this.isFavorite5 = !this.isFavorite5;
    console.log('show button like', this.isFavorite5);
  }
  toggleFavorite6() {
    this.isFavorite6 = !this.isFavorite6;
    console.log('show button like', this.isFavorite6);
  }
  toggleFavorite7() {
    this.isFavorite7 = !this.isFavorite7;
    console.log('show button like', this.isFavorite7);
  }
  toggleFavorite8() {
    this.isFavorite8 = !this.isFavorite8;
    console.log('show button like', this.isFavorite8);
  }
  toggleFavorite9() {
    this.isFavorite9 = !this.isFavorite9;
    console.log('show button like', this.isFavorite9);
  }
  toggleFavorite10() {
    this.isFavorite10 = !this.isFavorite10;
    console.log('show button like', this.isFavorite10);
  }
  toggleFavorite11() {
    this.isFavorite11 = !this.isFavorite11;
    console.log('show button like', this.isFavorite11);
  }
  toggleFavorite12() {
    this.isFavorite12 = !this.isFavorite12;
    console.log('show button like', this.isFavorite12);
  }
  toggleFavorite13() {
    this.isFavorite13 = !this.isFavorite13;
    console.log('show button like', this.isFavorite13);
  }
  toggleFavorite14() {
    this.isFavorite14 = !this.isFavorite14;
    console.log('show button like', this.isFavorite14);
  }
  toggleFavorite15() {
    this.isFavorite15 = !this.isFavorite15;
    console.log('show button like', this.isFavorite15);
  }
  toggleFavorite16() {
    this.isFavorite16 = !this.isFavorite16;
    console.log('show button like', this.isFavorite16);
  }
  toggleFavorite17() {
    this.isFavorite17 = !this.isFavorite17;
    console.log('show button like', this.isFavorite17);
  }
  toggleFavorite18() {
    this.isFavorite18 = !this.isFavorite18;
    console.log('show button like', this.isFavorite18);
  }
  toggleFavorite19() {
    this.isFavorite19 = !this.isFavorite19;
    console.log('show button like', this.isFavorite19);
  }
  toggleFavorite20() {
    this.isFavorite20 = !this.isFavorite20;
    console.log('show button like', this.isFavorite20);
  }
  toggleFavorite21() {
    this.isFavorite21 = !this.isFavorite21;
    console.log('show button like', this.isFavorite21);
  }
  toggleFavorite22() {
    this.isFavorite22 = !this.isFavorite22;
    console.log('show button like', this.isFavorite22);
  }
  toggleFavorite23() {
    this.isFavorite23 = !this.isFavorite23;
    console.log('show button like', this.isFavorite23);
  }
  toggleFavorite24() {
    this.isFavorite24 = !this.isFavorite24;
    console.log('show button like', this.isFavorite24);
  }
}

// images: string[][] = [
//   [
//     'assets/image/home/beach1-1.png',
//     'assets/image/home/beach1-2.png',
//     'assets/image/home/beach1-3.png',
//     'assets/image/home/beach1-4.png',
//   ],
//   [
//     'assets/image/home/beach2-1.png',
//     'assets/image/home/beach2-2.png',
//     'assets/image/home/beach2-3.png',
//     'assets/image/home/beach2-4.png',
//   ],
//   [
//     'assets/image/home/beach3-1.png',
//     'assets/image/home/beach3-2.png',
//     'assets/image/home/beach3-3.png',
//     'assets/image/home/beach3-4.png',
//   ],
//   [
//     'assets/image/home/beach4-1.png',
//     'assets/image/home/beach4-2.png',
//     'assets/image/home/beach4-3.png',
//     'assets/image/home/beach4-4.png',
//   ],
//   [
//     'assets/image/home/beach5-1.png',
//     'assets/image/home/beach5-2.png',
//     'assets/image/home/beach5-3.png',
//     'assets/image/home/beach5-4.png',
//   ],
//   [
//     'assets/image/home/beach6-1.png',
//     'assets/image/home/beach6-2.png',
//     'assets/image/home/beach6-3.png',
//     'assets/image/home/beach6-4.png',
//   ],
//   [
//     'assets/image/home/beach7-1.png',
//     'assets/image/home/beach7-2.png',
//     'assets/image/home/beach7-3.png',
//     'assets/image/home/beach7-4.png',
//   ],
//   [
//     'assets/image/home/beach8-1.png',
//     'assets/image/home/beach8-2.png',
//     'assets/image/home/beach8-3.png',
//     'assets/image/home/beach8-4.png',
//   ],
//   [
//     'assets/image/home/beach9-1.png',
//     'assets/image/home/beach9-2.png',
//     'assets/image/home/beach9-3.png',
//     'assets/image/home/beach9-4.png',
//   ],
//   [
//     'assets/image/home/beach10-1.png',
//     'assets/image/home/beach10-2.png',
//     'assets/image/home/beach10-3.png',
//     'assets/image/home/beach10-4.png',
//   ],
//   [
//     'assets/image/home/beach11-1.png',
//     'assets/image/home/beach11-2.png',
//     'assets/image/home/beach11-3.png',
//     'assets/image/home/beach11-4.png',
//   ],
//   [
//     'assets/image/home/beach12-1.png',
//     'assets/image/home/beach12-2.png',
//     'assets/image/home/beach12-3.png',
//     'assets/image/home/beach12-4.png',
//   ],
//   [
//     'assets/image/home/beach13-1.png',
//     'assets/image/home/beach13-2.png',
//     'assets/image/home/beach13-3.png',
//     'assets/image/home/beach13-4.png',
//   ],
//   [
//     'assets/image/home/beach14-1.png',
//     'assets/image/home/beach14-2.png',
//     'assets/image/home/beach14-3.png',
//     'assets/image/home/beach14-4.png',
//   ],
//   [
//     'assets/image/home/beach15-1.png',
//     'assets/image/home/beach15-2.png',
//     'assets/image/home/beach15-3.png',
//     'assets/image/home/beach15-4.png',
//   ],
//   [
//     'assets/image/home/beach16-1.png',
//     'assets/image/home/beach16-2.png',
//     'assets/image/home/beach16-3.png',
//     'assets/image/home/beach16-4.png',
//   ],
// ];

// imageInfos: Array<{
//   currentImageIndex: number;
//   showNextButton: boolean;
//   showPrevButton: boolean;
// }> = [];

// constructor() {
//   this.images.forEach(() => {
//     this.imageInfos.push({
//       currentImageIndex: 0,
//       showNextButton: true,
//       showPrevButton: false,
//     });
//   });
// }

// changeImage(index: number, forward: boolean) {
//   const imageIndex = index - 1;
//   const currentImageIndex = this.imageInfos[imageIndex].currentImageIndex;
//   const images = this.images[imageIndex];

//   if (forward && currentImageIndex < images.length - 1) {
//     this.imageInfos[imageIndex].currentImageIndex++;
//   } else if (!forward && currentImageIndex > 0) {
//     this.imageInfos[imageIndex].currentImageIndex--;
//   }

//   // Update button visibility
//   this.imageInfos[imageIndex].showNextButton =
//     this.imageInfos[imageIndex].currentImageIndex < images.length - 1;
//   this.imageInfos[imageIndex].showPrevButton =
//     this.imageInfos[imageIndex].currentImageIndex > 0;
// }
