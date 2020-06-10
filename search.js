function testinput(re, str) {
    var midstring;
    if (str.search(re) != -1) {
      midstring = " contient ";
    } else {
      midstring = " ne contient pas ";
    }
    console.log('"' + str + '"' + midstring + '"' + re + '"');
  }
  
  testinput("string", "is there a string somewhere ?");
  testinput("leopard", "is there a string somewhere ?");