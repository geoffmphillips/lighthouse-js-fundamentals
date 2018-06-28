function merge(arrayOne, arrayTwo) {
  arrayOne = arrayOne.concat(arrayTwo);

  for (var i = 0; i < arrayOne.length; i++) {
    for (var j = i + 1; j < arrayOne.length; j++) {
      if(arrayOne[i] > arrayOne[j]) {
        var temp = arrayOne[i];
        arrayOne[i] = arrayOne[j];
        arrayOne[j] = temp;
      }
    }
  }

  return arrayOne;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
