module.exports = function towelSort(matrix, par) {
  matrix = matrix.split('');
  function reduseSimilar() {
    for (let i = 0; i < matrix.length; i++) {
      par.forEach(element => {
        if (element[0] == matrix[i] && element[1] == matrix[i + 1]) {
          matrix.splice(i, 2);
          if (matrix.length > 0) {
            reduseSimilar();
          }
        }
      });
    }
    return matrix;
  }
  reduseSimilar();
  if (matrix.length > 0) {
    return false;
  } else {
    return true;
  }
}