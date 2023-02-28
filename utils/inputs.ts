import readline from "readline";

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export default function ask(question: string): Promise<string> {
  return new Promise((resolve) => {
    r.question(question, (input) => {
      resolve(input);
    });
  });
}
