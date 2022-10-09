console.log('KAYAK First task')

A = [1, 4, 1, 5, 8, 1, 3, 5, 1, 4, 1, 3, 7, 2];
B = [3, 1, 4, 5, 9, 7, 6 ,4];
C = [3, 3, 3, 6];
D = [4, 5, 4, 5, 4, 9, 6, 6, 4, 5, 8, 6, 4];





const calculateNumberFrequency = (list) => {

      const uniqueArray = Array.from(new Set(list)); 
      const maxNum = Math.max(...list);
      const minNum = Math.min(...list);
      const numbers = [];
      const frequency = [];
  
  // All numbers from min(A) to max(A) saved in numbers array
      for (let i = minNum; i < maxNum + 1; i++) {
          numbers.push(i)
        }  
  
    // Frequency of each number in the list saved in frequency array
      for (let i = 0; i < numbers.length; i++){
        let counter = 0
        for (let j = 0; j < list.length; j++){
          if(numbers[i] == list[j]){
              counter++
          }
        }
        frequency.push(counter)
      }
  
  return {
    Frequency: frequency,
    Number: numbers
  }
  
  }
  
  // calculateNumberFrequency(A)
  console.log(calculateNumberFrequency(A))
  

  module.exports = calculateNumberFrequency





