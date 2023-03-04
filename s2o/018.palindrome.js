


/** 简陋版本 */
// var isPalindrome = (s) => {
//   const st = s.split('').filter(v => /[a-zA-Z0-9]/.test(v))
//   return st.join('').toLowerCase() === st.reverse().join('').toLowerCase()
// }


/** 单个字符版本 */

var isPalindrome = (s) => {
  let l = 0, r = s.length - 1

  const isAlphaAndDigit = ch => /[a-zA-Z0-9]/.test(ch)
  while(l <= r) {
    if(!isAlphaAndDigit(s[l])) l++
    else if (!isAlphaAndDigit(s[r])) r--
    else if (s[l++].toLowerCase() !== s[r--].toLowerCase()) return false;
  }

  return true
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))