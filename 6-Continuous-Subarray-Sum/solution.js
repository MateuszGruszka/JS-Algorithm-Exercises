const checkSubarraySum = (nums, k) => {
  // Handle special case when k === 0
  if (k === 0) {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] !== 0) continue;
      if (nums[i] === 0 && nums[i + 1] === 0) return true;
    }
    return false;
 
  } else {
    let currentSum = nums[0];
    const modMap = {};
    modMap[0] = -1;
    for (let i = 1; i < nums.length; i++) {
      const nextSum = currentSum + nums[i];
      const mod = nextSum % k;
      if (modMap[mod] !== undefined) {
        console.log(`Sub Array is: from index ${modMap[mod] + 1} to ${i}`);
        return true;
      }
      const prevMod = currentSum % k;
      modMap[prevMod] = i - 1;
      currentSum = nextSum;
    }
    return false;
  }
};