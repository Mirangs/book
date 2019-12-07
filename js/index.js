const book = $('.bookContainer').turn({
  width: 566,
  height: 283,
  autoCenter: true
});
const leftArrow = $('.bookWrapper .leftArrow');
const rightArrow = $('.bookWrapper .rightArrow');
const bookWrapper = $('.bookWrapper');

const hideBg = bg => {
  bg.css('background-image', '');
}

const showBg = bg => {
  bg.css('background-image', 'url(\'./assets/background-shape.png\')');
}

const hideArrow = arrow => {
  arrow.css('display', 'none');
}

const showArrow = arrow => {
  arrow.css('display', '');
}

rightArrow.click(evt => {
  evt.preventDefault();
  book.turn('next');
});

leftArrow.click(evt => {
  evt.preventDefault();
  book.turn('previous');
});

book.bind('turned', (evt, page, view) => {
  if (page === 1) {
    hideBg(bookWrapper);
    hideArrow(leftArrow);
  } else if (page === 8) { // Hardcode!!!
    hideBg(bookWrapper);
    hideArrow(rightArrow);
  } else {
    showBg(bookWrapper);
    showArrow(leftArrow);
    showArrow(rightArrow);
  }
});

