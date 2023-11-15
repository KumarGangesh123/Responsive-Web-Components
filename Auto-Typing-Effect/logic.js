let title = document.querySelector(".main_heading");
let data = [
  "gangesh kumar",
  "java development",
  "web development",
  "android development",
  "student",
];
let index = 1;
let indexx = 0;

const typeWriter = () => {
  if (indexx == data.length) {
    indexx = 0;
  }
  let new_title = data[indexx].slice(0, index);
  title.innerText = new_title;
  if (index == data[indexx].length) {
    index = 1;
    indexx++;
  }
  index++;
  setTimeout(() => typeWriter(), 200);
};

typeWriter();
