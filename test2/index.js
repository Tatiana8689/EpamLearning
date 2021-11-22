const input = document.getElementById('search');

const debounce = (func, delay) => {
  let timeout;

  return function () {
    const debouncedFunc = () => func.apply(arguments);
    
    clearTimeout(timeout);
    timeout = setTimeout(debouncedFunc, delay);
  };
}

function send() {
  const elem = dataMock.find(el => el.name === input.value);
  if (elem) {
    console.log(elem);
  } else {
    console.log('Not found');
  }
}

const debouncedSend = debounce(send, 1000);
input.addEventListener("keyup", debouncedSend);