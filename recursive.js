function rec(x) {
    if (x == 0)
      return;
    console.log('hello');
    return (rec(x - 1));
  }
  rec(3);