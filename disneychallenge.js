

/*
An array of integers arr[], print out all non-duplicate ((A,B,(C,D))) where arr[A] + arr[B] = arr[C] + arr[D]  ----- A != B != C !=  D ( (A,B,), (C,D) ) = ( (B, A ), (D,C)) = ((D,C) , (A,B) ) != ((A,C), (B,D))

 1 2 3 4 5 6 2 6 9 11 15 

((A,B),(C,D)) rr[A] + arr[B] = arr[C] + arr[D]

 [2,5], [1,6]
*/

const test = [1,2,3,4,5,6,2,6,9,11,15];

const test = [1,1,1,1];

const printNonDuplicatePairs = (array) => {
  // find all the sums of pairs and store all pairs that make that sum in an object keyed by sum
  const sums = {  };

  for (let i = 0; i < array.length; i++) {
    for (let k = i; k < array.length; k++) {
      const sum = array[i] + array[k];
      if (sums[sum]) sums[sum].push([i, k]);
      else sums[sum] = [[i, k]];
    }
  }

  for (const sum in sums) {

    if (sums[sum].length > 1) {
      for (let i = 0; i < sums[sum].length; i++) {
        for (let k = 0; k < sums[sum].length; k++) {
          if (!sums[sum][k].includes(sums[sum][i][0])
              && !sums[sum][k].includes(sums[sum][i][1])) {
            console.log(sums[sum][i], sums[sum][k]);
          }
        }
      }

    }
  }
}