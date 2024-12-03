interface PassiveRule {
  tense: string;
  structure: string;
  example: {
    active: string;
    passive: string;
  };
}

export const passiveRules: PassiveRule[] = [
  {
    tense: "Simple Present",
    structure: "am/is/are + V3",
    example: {
      active: "They write letters.",
      passive: "Letters are written by them."
    }
  },
  {
    tense: "Simple Past",
    structure: "was/were + V3",
    example: {
      active: "She cleaned the room.",
      passive: "The room was cleaned by her."
    }
  },
  {
    tense: "Present Continuous",
    structure: "am/is/are + being + V3",
    example: {
      active: "They are building a house.",
      passive: "A house is being built by them."
    }
  },
  {
    tense: "Past Continuous",
    structure: "was/were + being + V3",
    example: {
      active: "He was reading a book.",
      passive: "A book was being read by him."
    }
  },
  {
    tense: "Present Perfect",
    structure: "has/have + been + V3",
    example: {
      active: "They have painted the wall.",
      passive: "The wall has been painted by them."
    }
  },
  {
    tense: "Past Perfect",
    structure: "had + been + V3",
    example: {
      active: "She had written the letter.",
      passive: "The letter had been written by her."
    }
  },
  {
    tense: "Future Simple",
    structure: "will + be + V3",
    example: {
      active: "They will clean the room.",
      passive: "The room will be cleaned by them."
    }
  },
  {
    tense: "Future Perfect",
    structure: "will + have + been + V3",
    example: {
      active: "They will have finished the project.",
      passive: "The project will have been finished by them."
    }
  },
  {
    tense: "Modal Present",
    structure: "modal + be + V3",
    example: {
      active: "They can solve the problem.",
      passive: "The problem can be solved by them."
    }
  },
  {
    tense: "Modal Perfect",
    structure: "modal + have + been + V3",
    example: {
      active: "They must have completed the task.",
      passive: "The task must have been completed by them."
    }
  }
];