function removeInvalidParentheses(s) {
  let queue = new Set([s]);
  while (queue.size) {
    const next = new Set();
    for (let v of queue) {
      if (isValid(v)) {
        return [...queue].filter(isValid);
      }
      
      for (let i = 0; i < v.length; i++) {
        next.add(v.slice(0, i) + v.slice(i+1));
      }
    }
    queue = next;
  }
  return [''];
}

function isValid(str) {
  let bal = 0;
  for (let ch of str) {
    if (ch === '(') {
      bal++;
    } else if (ch === ')') {
      bal--;
    }
    if (bal < 0) {
      return false;
    }
  }
  return bal === 0;
}