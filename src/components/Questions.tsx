import type { Question } from "./quiz";

export const QUESTIONS: Question[] = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "High Text Machine Language",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which tag is used to insert an image in an HTML page?",
    options: ["<img>", "<image>", "<src>", "<picture>"],
    correctAnswer: 0,
  },
  {
    question: "How do you write a comment in HTML?",
    options: [
      "// This is a comment",
      "/* This is a comment */",
      "<!-- This is a comment -->",
      "# This is a comment",
    ],
    correctAnswer: 2,
  },
  {
    question: "What does the CSS property 'color' do?",
    options: [
      "Change the font",
      "Change the text color",
      "Change the text size",
      "Change the background",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<hyperlink>"],
    correctAnswer: 0,
  },
  {
    question: "Which CSS selector targets all <p> elements inside a div?",
    options: ["div.p", "div > p", "div + p", "div p"],
    correctAnswer: 3,
  },
  {
    question: "How do you make text bold in CSS?",
    options: [
      "font-weight: bold;",
      "text-style: bold;",
      "font: bold;",
      "style: bold;",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which HTML attribute makes a link open in a new tab?",
    options: ['new="tab"', 'target="_blank"', 'open="new"', 'window="blank"'],
    correctAnswer: 1,
  },
  {
    question: "Which CSS property turns an element into a flexbox container?",
    options: [
      "flex: container;",
      "display: flex;",
      "flexbox: true;",
      "container: flex;",
    ],
    correctAnswer: 1,
  },
  {
    question: "How do you center an element horizontally using Flexbox?",
    options: [
      "justify-content: center;",
      "align-items: center;",
      "flex-align: center;",
      "text-align: center;",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which of these HTML tags is semantic?",
    options: ["<span>", "<div>", "<section>", "<font>"],
    correctAnswer: 2,
  },
  {
    question:
      "Which CSS unit adapts an element's size to the width of the window?",
    options: ["px", "em", "vw", "pt"],
    correctAnswer: 2,
  },
];
