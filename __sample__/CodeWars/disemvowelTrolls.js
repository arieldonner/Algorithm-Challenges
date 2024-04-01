function disemvowel(str) {
    const myArr = [];
    for (let i = 0; i < str.length; i++) {
      let lower = str[i].toLowerCase();
      if (lower != 'a' && lower != 'e' && lower != 'i' && lower != 'o' && lower != 'u') {
        myArr.push(str[i]);
      } 
    }
    return myArr.join("");
  }