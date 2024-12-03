import { Sentence } from '../types';

export const sentences: Sentence[] = [
  // Easy Level - Simple Present & Simple Past & Future Simple
  {
    id: 1,
    active: "Tom writes letters.",
    passive: "Letters are written by Tom.",
    tense: "Simple Present",
    difficulty: "easy",
    hint: "Simple Present Passive: am/is/are + V3",
    points: 10
  },
  {
    id: 2,
    active: "They cleaned the room.",
    passive: "The room was cleaned by them.",
    tense: "Simple Past",
    difficulty: "easy",
    hint: "Simple Past Passive: was/were + V3",
    points: 10
  },
  {
    id: 3,
    active: "They will clean the room.",
    passive: "The room will be cleaned by them.",
    tense: "Future Simple",
    difficulty: "easy",
    hint: "Future Simple Passive: will + be + V3",
    points: 10
  },
  {
    id: 4,
    active: "The students read many books.",
    passive: "Many books are read by the students.",
    tense: "Simple Present",
    difficulty: "easy",
    hint: "Simple Present Passive: am/is/are + V3",
    points: 10
  },
  {
    id: 5,
    active: "The company built this building.",
    passive: "This building was built by the company.",
    tense: "Simple Past",
    difficulty: "easy",
    hint: "Simple Past Passive: was/were + V3",
    points: 10
  },

  // Medium Level - Present Continuous & Past Continuous & Present Perfect
  {
    id: 6,
    active: "They are painting the house.",
    passive: "The house is being painted by them.",
    tense: "Present Continuous",
    difficulty: "medium",
    hint: "Present Continuous Passive: am/is/are + being + V3",
    points: 20
  },
  {
    id: 7,
    active: "They were watching a movie.",
    passive: "A movie was being watched by them.",
    tense: "Past Continuous",
    difficulty: "medium",
    hint: "Past Continuous Passive: was/were + being + V3",
    points: 20
  },
  {
    id: 8,
    active: "They have finished the project.",
    passive: "The project has been finished by them.",
    tense: "Present Perfect",
    difficulty: "medium",
    hint: "Present Perfect Passive: has/have + been + V3",
    points: 20
  },
  {
    id: 9,
    active: "The chef is preparing dinner.",
    passive: "Dinner is being prepared by the chef.",
    tense: "Present Continuous",
    difficulty: "medium",
    hint: "Present Continuous Passive: am/is/are + being + V3",
    points: 20
  },
  {
    id: 10,
    active: "The teacher has graded all tests.",
    passive: "All tests have been graded by the teacher.",
    tense: "Present Perfect",
    difficulty: "medium",
    hint: "Present Perfect Passive: has/have + been + V3",
    points: 20
  },

  // Hard Level - Past Perfect & Modal Present & Future Perfect
  {
    id: 11,
    active: "They had completed the task.",
    passive: "The task had been completed by them.",
    tense: "Past Perfect",
    difficulty: "hard",
    hint: "Past Perfect Passive: had + been + V3",
    points: 30
  },
  {
    id: 12,
    active: "They must finish this work.",
    passive: "This work must be finished by them.",
    tense: "Modal Present",
    difficulty: "hard",
    hint: "Modal Present Passive: modal + be + V3",
    points: 30
  },
  {
    id: 13,
    active: "They will have completed the building.",
    passive: "The building will have been completed by them.",
    tense: "Future Perfect",
    difficulty: "hard",
    hint: "Future Perfect Passive: will + have + been + V3",
    points: 30
  },
  {
    id: 14,
    active: "The storm had destroyed the house.",
    passive: "The house had been destroyed by the storm.",
    tense: "Past Perfect",
    difficulty: "hard",
    hint: "Past Perfect Passive: had + been + V3",
    points: 30
  },
  {
    id: 15,
    active: "You should submit the report.",
    passive: "The report should be submitted by you.",
    tense: "Modal Present",
    difficulty: "hard",
    hint: "Modal Present Passive: modal + be + V3",
    points: 30
  },

  // Very Hard Level - Modal Perfect & Mixed Complex Tenses
  {
    id: 16,
    active: "The company must have launched the product.",
    passive: "The product must have been launched by the company.",
    tense: "Modal Perfect",
    difficulty: "very-hard",
    hint: "Modal Perfect Passive: modal + have + been + V3",
    points: 50
  },
  {
    id: 17,
    active: "The scientists could have solved the problem.",
    passive: "The problem could have been solved by the scientists.",
    tense: "Modal Perfect",
    difficulty: "very-hard",
    hint: "Modal Perfect Passive: modal + have + been + V3",
    points: 50
  },
  {
    id: 18,
    active: "They would have finished the race.",
    passive: "The race would have been finished by them.",
    tense: "Modal Perfect",
    difficulty: "very-hard",
    hint: "Modal Perfect Passive: modal + have + been + V3",
    points: 50
  },
  {
    id: 19,
    active: "The committee should have approved the proposal.",
    passive: "The proposal should have been approved by the committee.",
    tense: "Modal Perfect",
    difficulty: "very-hard",
    hint: "Modal Perfect Passive: modal + have + been + V3",
    points: 50
  },
  {
    id: 20,
    active: "The experts might have discovered the solution.",
    passive: "The solution might have been discovered by the experts.",
    tense: "Modal Perfect",
    difficulty: "very-hard",
    hint: "Modal Perfect Passive: modal + have + been + V3",
    points: 50
  }
];