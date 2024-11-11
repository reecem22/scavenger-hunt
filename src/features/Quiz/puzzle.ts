export const puzzles = {
  puzzles: [
    {
      title: "Our First Connection",
      location:"/troublesome.ants.glum",
      clue: "Our journey began on a special day, and here\u2019s a problem to take you to your next clue: Multiply the month number (February) by the day of the month we met. Then, take the square root of this result. Finally, add the number of letters in the word \u2018connection\u2019.",
      solution: {
        month: 2,
        day: 27,
        word_letters: 10,
        hint: "Summersalt Feb 27 2021",
        formula: "\\sqrt{2 \\times 27} + 10",
        calculation: [
          "2 \\times 27 = 54",
          "\\sqrt{54} \\approx 7.35",
          "7.35 + 10 = 17.35 (rounded to 17)",
        ]
      },
      correct_answer: 17,
      hint: "This number points to a nearby location where we first met.",
    },
    {
      title: "Our First Kiss",
      location:"/soggy.webcam.nappy",
      clue: "Our first kiss deserves a memorable puzzle: Let x be the sum of the digits in the day of the month we first kissed at wine machine. Multiply x by the number of letters in the month's name. Then, subtract the last two digits of the year we first met.",
      solution: {
        day_digits_sum: 10,
        month_letters: 5,
        year_met_last_two_digits: 21,
        hint: "Wine machine Mar 19 2022",
        formula: "(1 + 9) \\times 5 - 21",
        calculation: [
          "$x = 1 + 9 = 10$",
          "$10 \\times 5 = 50$",
          "$50 - 21 = 29$"
        ]
      },
      correct_answer: 29,
      hint: "Find a location connected to this number where we had our first kiss.",
    },
    {
      title: "Our first house",
      location:"/rinse.impelled.superego",
      clue: "This home is where our future begins. To get the next clue: Multiply the day by the month of our home purchase. Divide by the difference between the last two digits of the year we bought the house and the year we first met. Round the answer to the nearest whole number.",
      solution: {
        day: 3,
        month: 6,
        year_bought_last_two_digits: 24,
        year_met_last_two_digits: 21,
        hint: "Auction June 3rd 2024",
        formula: "\\frac{3 \\times 6}{24 - 21}",
        calculation: [
          "$3 \\times 6 = 18$",
          "$24 - 21 = 3$",
          "$18 \\div 3 = 6$"
        ]
      },
      correct_answer: 6,
      hint: "Look for something with this number at home.",
    },
    {
      title: "Final Puzzle for Proposal Location",
      location:"/cemented.promoters.looks",
      clue: "One final problem to reach your destination:\n- Add up the digits in our street number.\n- Multiply by the difference between the current year and the year we first met.\n- Then, add the month of our first meeting.",
      solution: {
        street_number_sum: 10,
        current_year: 2024,
        year_met: 2021,
        month_met: 2,
        hint: "Summersalt Feb 27 2021",
        formula: "(1 + 9) \\times (2024 - 2021) + 2",
        calculation: [
          "1 + 9 = 10",
          "10 * (2024 - 2021) = 10 * 3 = 30",
          "30 + 2 = 32",
        ],
      },
      correct_answer: 32,
      hint: "This final number will lead you to where I\u2019m waiting!",
    },
  ],
};
