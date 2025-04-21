const originalArray = [10, 95, 14, 48, 12, 87];
//                     0   1   2   3   4   5

// remove element from the array
const index = originalArray.indexOf(7);
let removedElements = [];
if (index !== -1) {
  removedElements = originalArray.splice(index, 1);
}
const index2 = originalArray.indexOf(45);
if (index2 >= 0) {
  originalArray.splice(index2, 1);
}

// originalArray[2] = 8;

console.log("after remove:", originalArray);
console.log("removed:", removedElements);

/* 
Array methods:
1) splice
2) findIndex
3) indexOf
4) map
5) filter
6) slice
7) sort
8) reverse

*/

const byFindIndex = originalArray.findIndex(function (item) {
  return item > 50;
});

console.log(byFindIndex);

// [1 2 3 4] => [HTML HTML HTML HTML]

const originalContainer = document.getElementById("original");
const updatedContainer = document.querySelector("#updated");
renderArray(originalArray, originalContainer);
// originalContainer.append(div, div, div, div);
// originalContainer.append(...[div, div, div, div]);
// ... - destructure operator

const buttons = document.querySelector(".methods");
buttons.onclick = function (event) {
  if (event.target.tagName.toLowerCase() !== "button") return;

  const command = event.target.textContent;

  if (command === "map +5") {
    const updatedArray = originalArray.map(function (item) {
      return item + 5;
    });
    renderArray(updatedArray, updatedContainer);
  }

  if (command === "map x2") {
    const updatedArray = originalArray.map((item) => item * 2);
    renderArray(updatedArray, updatedContainer);
  }

  if (command === "filter > 50") {
    const updatedArray = originalArray.filter(function (item) {
      return item > 50;
    });
    renderArray(updatedArray, updatedContainer);
  }

  if (command === "filter evens") {
    const updatedArray = originalArray.filter(function (item) {
      return item % 2 === 0;
    });
    renderArray(updatedArray, updatedContainer);
  }

  if (command === "slice top 3") {
    const updatedArray = originalArray.slice(0, 3);
    renderArray(updatedArray, updatedContainer);
  }

  if (command === "slice last 4") {
    const updatedArray = originalArray.slice(-4);
    renderArray(updatedArray, updatedContainer);
  }

  if (command === "sort ascending") {
    const updatedArray = originalArray.sort((a, b) => a - b);
    renderArray(updatedArray, updatedContainer);
  }

  if (command === "sort descending") {
    const updatedArray = originalArray.sort((a, b) => b - a);
    renderArray(updatedArray, updatedContainer);
  }
};

function renderArray(array, container) {
  container.innerHTML = "";
  const htmlElements = array.map(function (item) {
    const div = document.createElement("div");
    div.classList.add("array-item");
    div.innerText = item;
    return div;
  });
  container.append(...htmlElements);
}

const lessons = document.getElementById("lessons");
const lessonsHtml = [1, 2, 3, 4, 5, 6, 7, 8]
    .slice(0, 3)
    .map((lesson) => {
  const div = document.createElement("div");
  div.className = "lesson";
  div.textContent = `Урок №${lesson}`;
  return div;
});
lessons.append(...lessonsHtml);
