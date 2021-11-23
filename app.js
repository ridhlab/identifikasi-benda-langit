const obj = require("./obj");
const question = require("./question");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const printAnswer = (ans) => {
  console.log(`Jawabannya adalah ${ans}`);
  readline.close();
};

const printWrongAnswer = () => {
  console.log("Masukkan jawaban dengan benar");
  readline.close();
};

const printWrongQuestion = () => {
  console.log("Pertanyaan tidak sesuai");
  readline.close();
};
let tempAnsQ3 = "";
const promptQuestion = (q) => {
  readline.question(q, (ans) => {
    switch (ans) {
      case "Y":
        switch (q) {
          case question.q1:
            promptQuestion(question.q2);
            break;
          case question.q2:
            printAnswer(obj.b1);
            break;
          case question.q3:
            tempAnsQ3 = "Y";
            promptQuestion(question.q4);
            break;
          case question.q4:
            promptQuestion(question.q5);
            break;
          case question.q5:
            promptQuestion(question.q6);
            break;
          case question.q6:
            printAnswer(obj.b3);
            break;
          case question.q7:
            switch (tempAnsQ3) {
              case "Y":
                printAnswer(obj.b6);
                break;
              case "T":
                printAnswer(obj.b12);
                break;
              default:
                printWrongAnswer();
                break;
            }
            break;
          case question.q8:
            printAnswer(obj.b7);
            break;
          case question.q9:
            printAnswer(obj.b11);
            break;
          case question.q10:
            printAnswer(obj.b9);
            break;
          default:
            printWrongQuestion();
            break;
        }
        break;
      case "T":
        switch (q) {
          case question.q1:
            promptQuestion(question.q3);
            break;
          case question.q2:
            printAnswer(obj.b2);
            break;
          case question.q3:
            tempAnsQ3 = "T";
            promptQuestion(question.q7);
            break;
          case question.q4:
            promptQuestion(question.q7);
            break;
          case question.q5:
            printAnswer(obj.b5);
            break;
          case question.q6:
            printAnswer(obj.b4);
            break;
          case question.q7:
            switch (tempAnsQ3) {
              case "Y":
                promptQuestion(question.q8);
                break;
              case "T":
                promptQuestion(question.q9);
                break;
              default:
                printWrongAnswer();
                break;
            }
            break;
          case question.q8:
            printAnswer(obj.b8);
            break;
          case question.q9:
            promptQuestion(question.q10);
            break;
          case question.q10:
            printAnswer(obj.b10);
            break;
          default:
            printWrongQuestion();
            break;
        }
        break;

      default:
        printWrongAnswer();
        break;
    }
  });
};

console.log("Masukkan jawaban berupa Y dan T");
promptQuestion(question.q1);
