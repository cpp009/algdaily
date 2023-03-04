
/**
 * 
 * n^3 版本
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  function isPalindrome(str) {
    let i = 0, j = str.length - 1
    while (i <= j) {
      if (str[i++] !== str[j--]) {
        return false
      }
    }
    return true;
  }

  let ret = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const sb = s.slice(i, j)
      if (isPalindrome(sb)) {
        ret += 1
      }
    }
  }
  return ret
};


/**
 * 不用每次都计算是否为回文串
 * 计算回文串的同时也在计算字串
 */

const fn = (s) => {

  let ret = 0
  for (let i = 0; i < s.length; i++) {
    let l = r = i
    while (l >= 0 && r < s.length) {
      if (s[l--] === s[r++]) {
        ret++
      } else {
        break
      }
    }

    l = i
    r = i + 1
    while (l >= 0 && r < s.length) {
      if (s[l--] === s[r++]) {
        ret++
      } else {
        break
      }
    }
  }

  return ret
}

/**
 * TODO 还差一个 Manacher 算法
 * 
 */

const ret = fn("aaa")
console.log(ret)
