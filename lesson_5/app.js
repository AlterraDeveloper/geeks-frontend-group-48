const kgsInput = document.querySelector("#kgsInput");

const usdFilter = document.querySelector("#usdFilter");
const euroFilter = document.querySelector("#eurFilter");
const yuanFilter = document.querySelector("#cnyFilter");

const usdBlock = document.querySelector("#usdBlock");
const euroBlock = document.querySelector("#eurBlock");
const yuanBlock = document.querySelector("#cnyBlock");

const usdResult = usdBlock.querySelector("#usdOutput");
const euroResult = euroBlock.querySelector("#eurOutput");
const yuanResult = yuanBlock.querySelector("#cnyOutput");

renderApp();
kgsInput.addEventListener("input", renderApp);
// kgsInput.addEventListener("change", renderApp);
usdFilter.addEventListener("change", renderApp);
euroFilter.addEventListener("change", renderApp);
yuanFilter.onchange = renderApp;

function renderApp() {
  const kgsValue = Number(kgsInput.value);

  if (!kgsValue) {
    usdBlock.style.display = "none";
    euroBlock.style.display = "none";
    yuanBlock.style.display = "none";
    return;
  }

  if (usdFilter.checked) {
    const usdValue = kgsValue / 87;
    usdResult.innerText = usdValue.toFixed(2);
    usdBlock.style.display = "block";
  } else {
    usdBlock.style.display = "none";
  }

  if (euroFilter.checked) {
    const euroValue = kgsValue / 95;
    euroResult.innerText = euroValue.toFixed(2);
    euroBlock.style.display = "block";
  } else {
    euroBlock.style.display = "none";
  }

  if (yuanFilter.checked) {
    const yuanValue = kgsValue / 10;
    yuanResult.innerText = yuanValue.toFixed(2);
    yuanBlock.style.display = "block";
  } else {
    yuanBlock.style.display = "none";
  }
}

// debugging - отладка

// truthy
// falsy: 0, "", null, undefined, NaN


// https://alterradeveloper.github.io/geeks-frontend-group-48

// HTTP - Hypertext Transfer Protocol


