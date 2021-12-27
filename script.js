'use strict';

const imgArray = [
  'img/cameron-venti-bS5OwMjMc1I-unsplash.jpg',
  'img/cosmic-timetraveler-ik2BN5dI6tE-unsplash.jpg',
  'img/jake-blucker-c6miNI_WdZ4-unsplash.jpg',
  'img/jonathan-van-den-broek-TecUcF21J0o-unsplash.jpg',
  'img/ricardo-frantz-eCnROTxfnik-unsplash.jpg',
];
const imgCarousel = document.querySelector('#carousel-img');
const dots = document.querySelector('.dots').children;
const removeDots = function () {
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
};
let count = 0;

document.querySelector('#back').addEventListener('click', function () {
  if (count <= 0) {
    count = imgArray.length - 1;
    imgCarousel.src = imgArray[count];
    removeDots();
    dots[count].classList.add('active');
  } else {
    count--;
    imgCarousel.src = imgArray[count];
    removeDots();
    dots[count].classList.add('active');
  }
});

document.querySelector('#next').addEventListener('click', function () {
  if (count >= imgArray.length - 1) {
    count = 0;
    imgCarousel.src = imgArray[count];
    removeDots();
    dots[count].classList.add('active');
  } else {
    count++;
    imgCarousel.src = imgArray[count];
    removeDots();
    dots[count].classList.add('active');
  }
});
