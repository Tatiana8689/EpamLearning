const doc = document.body;

const throttle = (func, delay) => {
  let timeout = false;

  return function () {
    if (!timeout) {
      func.apply(arguments);

      timeout = true;

      setTimeout(() => {
        timeout = false;
      }, delay);
    }
  };
};

function show() {
  console.log('click');
}

const throttledShow = throttle(show, 3000);

doc.addEventListener('click', throttledShow);
