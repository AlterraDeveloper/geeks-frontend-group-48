// <div class="fa fa-star"></div>
function makeStar(index) {
  const star = document.createElement("div");
  star.classList.add("fa", "fa-star");
  //   star.setAttribute("data-index", 5);
  star.dataset.index = index;
  return star;
}

const stars = document.querySelector(".stars");

for (let i = 0; i < 5; i++) {
  const star = makeStar(i + 1);
  stars.appendChild(star);
}

const starIcons = document.querySelectorAll(".fa-star");
const ratingText = document.querySelector(".rating-text");
const ratingValue = document.querySelector(".rating-value");

for (const starIcon of starIcons) {
  // anonymous function
  starIcon.onmouseover = function () {
    const starIndex = starIcon.dataset.index;

    switch (Number(starIndex)) {
      case 1:
        ratingText.dataset.content = "Terrible";
        break;
      case 2:
        ratingText.dataset.content = "Bad";
        break;
      case 3:
        ratingText.dataset.content = "Ok";
        break;
      case 4:
        ratingText.dataset.content = "Good";
        break;
      case 5:
        ratingText.dataset.content = "Amazing";
        break;
    }

    // if (starIndex === 1) {
    //   ratingText.dataset.content = "Terrible";
    // } else if (starIndex === 2) {
    //   ratingText.dataset.content = "Bad";
    // } else if (starIndex === 3) {
    //   ratingText.dataset.content = "Ok";
    // } else if (starIndex === 4) {
    //   ratingText.dataset.content = "Good";
    // } else if (starIndex === 5) {
    //   ratingText.dataset.content = "Amazing";
    // }
  };

  starIcon.onmouseleave = function () {
    ratingText.dataset.content = "";
  };

  starIcon.onclick = function () {
    const index = starIcon.dataset.index;
    // ratingValue.dataset.value = index;
    ratingValue.setAttribute("data-value", index);

    for (const iconStar of starIcons) {
      const starIndex = iconStar.dataset.index;
      if (index >= starIndex) {
        iconStar.classList.add("checked");
      } else {
        iconStar.classList.remove("checked");
      }
    }

    if (index == 5) {
      blowConfetti();
    }
  };
}

function blowConfetti() {
  confetti({
    particleCount: 400,
    angle: 60,
    spread: 150,
    origin: { x: 0 },
    shapes: ["star"],
    colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
  });

  confetti({
    particleCount: 400,
    angle: 120,
    spread: 150,
    origin: { x: 1 },
    shapes: ["star"],
    colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
  });
}
