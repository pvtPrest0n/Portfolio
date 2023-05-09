const wrapperEn = document.querySelector("#wrapper_en");
const wrapperRu = document.querySelector("#wrapper_ru");
const buttonEn = document.querySelectorAll(".button_en");
const buttonRu = document.querySelectorAll(".button_ru");

buttonEn.forEach((item) => item.classList.add("button_active"));

buttonRu.forEach((item) =>
  item.addEventListener("click", function () {
    wrapperRu.classList.remove("none");
    wrapperEn.classList.add("none");

    buttonRu.forEach((item) => item.classList.add("button_active"));
    buttonEn.forEach((item) => item.classList.remove("button_active"));
  })
);

buttonEn.forEach((item) =>
  item.addEventListener("click", function () {
    wrapperEn.classList.remove("none");
    wrapperRu.classList.add("none");

    buttonRu.forEach((item) => item.classList.remove("button_active"));
    buttonEn.forEach((item) => item.classList.add("button_active"));
  })
);
