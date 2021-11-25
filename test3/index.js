const throttle = (func, delay) => {
  let timeout = false;

  return function () {
    if (timeout) {
      return;
    }

    func(...arguments);

    timeout = true;

    setTimeout(() => {
      timeout = false;
    }, delay);
  }
};

function show() {
  console.log('scroll');
}

const throttledShow = throttle(show, 2000);

window.addEventListener('scroll', throttledShow);
