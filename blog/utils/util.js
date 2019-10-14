export default {
  /**
   * 将数组分割成多元数组
   * @method splitArrToMultivariateArr
   * @param { number } num 每个数组长度
   * @param { array } arr 原数组
   * @example
   * arr = [1, 2, 3, 4, 5, 6, 7]
   * splitArrToMultivariateArr(2, arr) => [[1, 2], [3, 4], [5, 6], [7]]
   */
  splitArrToMultivariateArr(num, arr) {
    const MultivariateArr = [];

    for (let i = 0; i < arr.length;) {
      MultivariateArr.push(arr.slice(i, i += num));
    }

    return MultivariateArr;
  }
};
