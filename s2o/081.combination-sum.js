

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {

  const ret = []
  const dfs = (target, visit, idx) => {

    if (target < 0 || idx >= candidates.length) {
      return ;
    }

    if (target === 0) {
        ret.push(visit)
        return ;
    }

    // 选择或者不选择
    dfs(target, visit, idx + 1)
    if (target - candidates[idx] >= 0) {
      dfs(target-candidates[idx], [...visit, candidates[idx]], idx)
    }
  }

  dfs(target, [], 0)
  return ret
};



const fn = (candidates, target) => {

  const ret = []
  const visit = []
  const dfs = (n, begin) => {
    if (n < 0 || begin >= candidates.length) {
      return ;
    }
    if (n === 0) {
      ret.push([...visit])
    }

    for (let i = 0; i < candidates.length; i++) {
      visit.push(candidates[i]);
      dfs(n - candidates[i], begin + 1)
      visit.pop()
    }
  }

  dfs(target, 0)
  return ret
}


const ret = fn([2, 3, 6, 7], 7)
console.log(ret)