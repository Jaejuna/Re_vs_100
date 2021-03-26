const Quizs = (no, question, answers) => ({
  no,
  question,
  answers
})

export default [
  Quizs(1,
  `호스트인 안태호 벗님은 1997년생(빠른)이다. 
  그렇다면 1997년도의 부활절은 다음 중 언제였을까?`,
  "3"),
  Quizs(2,
    `도마는 부활하신 예수님의 못자국을 보고자 했습니다. 
    도마가 보길 원했던 예수님의 못자국이 아닌 곳은?`,
  "2"),
  Quizs(3,
  `예수님이 며칠만에 부활하셨나요?`,
  "3"),
];