


// const themeBtn = document.getElementById("themeBtn");

// themeBtn.addEventListener("click", () => {
//   const root = document.documentElement;
//   const currentBgColor = getComputedStyle(root).getPropertyValue('--color-body').trim();
  
//   if (currentBgColor === 'hsl(249, 19%, 14%)') {
//     root.style.setProperty('--text-Title', ' hsl(0, 0%, 100%)');
//     root.style.setProperty('--color-body', ' hsl(249, 19%, 14%)');
//   } else {
//     root.style.setProperty('--color-body', ' hsl(247, 54%, 59%)');
//     root.style.setProperty('--text-Title', ' hsl(247, 67%, 50%)');
//   }
// });

const body = document.body;
const slider = document.getElementById("slider");

function themeSwitch(){
  body.classList.toggle("dark");
}

slider.addEventListener("click", themeSwitch);