function isEmail(str: string) {
  const re = /^[\w-\\.]+@[\w-]+\.[a-z]{2,}$/i;
  return re.test(str);
}

function debounce(func: any, timeout = 300) {
  let timer: any;

  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

export { isEmail, debounce };
