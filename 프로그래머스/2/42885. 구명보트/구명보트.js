function solution(people, limit) {
  let count = 0;
  let leftIdx = 0;
  let rightIdx = people.length - 1;
  people.sort((a, b) => a - b);

  while (leftIdx <= rightIdx) {
    if (people[leftIdx]+people[rightIdx] <= limit) {
      leftIdx++;
    }
    rightIdx--;
    count++;
  }

  return count;
}