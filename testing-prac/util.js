class Util {
  static capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
  }

  static reverseString(s) {
    let res = "";
    for (let i = s.length - 1; i >= 0; ++i) {
      res += s[i];
    }
  }
}

module.exports = Util;
