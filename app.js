const root = document.documentElement;

const sliders = {};

sliders[document.querySelector('.one-x').className] = '--card-one-x';
sliders[document.querySelector('.one-y').className] = '--card-one-y';
sliders[document.querySelector('.two-x').className] = '--card-two-x';
sliders[document.querySelector('.two-y').className] = '--card-two-y';
sliders[document.querySelector('.three-x').className] = '--card-three-x';
sliders[document.querySelector('.three-y').className] = '--card-three-y';
sliders[document.querySelector('.four-x').className] = '--card-four-x';
sliders[document.querySelector('.four-y').className] = '--card-four-y';

console.log('bing bong: ', document.querySelector('.two-y').className);

Object.keys(sliders).forEach(key => console.log('hello: ', sliders[key]));

console.log(document.querySelectorAll('.booth-slider'));
document.querySelectorAll('.booth-slider').forEach((element) => {
  console.log(element.className);
  element.addEventListener('input', handleSlider);
});
//as slider range's value changes, do something 
// rangeOneX.addEventListener('input', handleSliderX)
// rangeOneY.addEventListener('input', handleSliderY)

function handleSlider (e) {
  console.log(e.target.className);
  console.log(sliders[e.target.className]);

  let targetVar = sliders[e.target.className];
  let value = e.target.value;
  return root.style.setProperty(targetVar, value);
}

function handleSliderY (e) {
  console.log(e.target.value);
  let value = e.target.value;
  root.style.setProperty('--card-one-y', value);
}

