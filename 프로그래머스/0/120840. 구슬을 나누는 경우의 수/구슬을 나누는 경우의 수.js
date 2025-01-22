const fact = (num) => num === 0 ? 1 : num * fact(num - 1)

function solution(balls, share) {
  return Math.round(fact(balls) / fact(balls - share) / fact(share))
}