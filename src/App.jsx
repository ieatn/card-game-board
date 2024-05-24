import React, { useState } from "react";
import "./App.css";
import Card from "./Card";
import Board from "./Board";
import { Paper, Grid, Box } from '@mui/material';

function App() {

  const deck = [
    { frontText: "card 1", backText: "People accumulate their wealth in many ways. What is the source of your wealth? Check all that apply." },
    { frontText: "card 2", backText: "To what or whom do you attribute your wealth? Check all that apply." },
    { frontText: "card 3", backText: "What personal values are of the greatest importance to you at this time in your life? Check the 5 most important to you." },
    { frontText: "card 4", backText: "To whom do you feel a sense of obligation when it comes to the distribution of your wealth? Check all that apply." },
    { frontText: "card 5", backText: "There are many goals for financial and estate planning, among them the following. Rank all four goals in order of importance to you." },
    { frontText: "card 6", backText: "If your estate were distributed to your beneficiaries (excluding your spouse, if applicable), give your best estimate of how it would be allocated among the following, if you did no additional planning and your estate were settled as it exists today. Please put percentages, in order, of the following categories:" },
    { frontText: "card 7", backText: "If you could allocate your estate to beneficiaries at your death any way you wanted among the following choices, (excluding your spouse, if applicable), what would your ideal allocation look like? Please put percentages, in order, of the following categories:" },
    { frontText: "card 8", backText: "How likely are the following to influence you in the creation or revision of your current plan? Rank all 5 influences in order of importance to you:" },
    { frontText: "card 9", backText: "Which statement most closely reflects your definition of financial independence?" },
    { frontText: "card 10", backText: "Money sometimes creates special opportunities. Which of the following opportunities of affluence or wealth are important to you? Check all that apply." },
    { frontText: "card 11a", backText: "In order to ensure lifetime financial independence for you (and your spouse, if applicable), please indicate your best estimate of the annual after-tax income assets you will need, expressed in today's dollars:" },
    { frontText: "card 12a", backText: "If your present income is more than sufficient to maintain lifetime financial independence for you (and your spouse, if applicable), even in the face of potential future inflation, health expenses, economic downturns or other unknowns, indicate what amount of excess income you currently possess. Estimate to the best of your ability." },
    { frontText: "card 12b", backText: "If your present assets are more than sufficient to maintain lifetime financial independence for you (and your spouse, if applicable), even in the face of potential future inflation, health expenses, economic downturns or other unknowns, indicate what amount of excess assets you currently possess. Estimate to the best of your ability." },
    { frontText: "card 13", backText: "Which statement most closely reflects your thoughts regarding your willingness to give up ownership or control of assets?" },
    { frontText: "card 14", backText: "Which statement most closely reflects your view regarding your responsibility to conserve assets for heirs?" },
    { frontText: "card 15", backText: "If there were no limit to the amount of wealth you could leave your heirs other than spouse, what is the sum total dollar amount you would leave to them?" },
    { frontText: "card 16", backText: "Check any of the following philosophies of financial stewardship that you wish to impart to your children and other heirs" },
    { frontText: "card 17", backText: "There are various perspectives regarding whether to discuss family financial resources with children or other heirs. Check the statement that most closely reflects your views." },
    { frontText: "card 18", backText: "Regarding their specific potential inheritance, when is the best time to reveal your estate plan to children or other heirs? Check the statement that most closely reflects your view." },
    { frontText: "card 17/18b", backText: "If you answered either of the above questions that children or other heirs should be informed of the family's financial situation or their inheritance at a certain age, what would that age be?" },
    { frontText: "card 19", backText: "Do you believe your children currently possess the necessary skills to manage wealth?" },
    { frontText: "card 20", backText: "How much inheritance should you leave your children?" },
    { frontText: "card 21", backText: "Should each child be left the same amount of inheritance?" },
    { frontText: "card 22", backText: "What do you think about transferring assets to children and/or other heirs during your lifetime?" },
    { frontText: "card 23", backText: "What do you think about transferring assets to grandchildren?" },
    { frontText: "card 24", backText: "There are numerous ways to transfer your family financial values to children and other heirs. Check the three that are most important to you." },
    { frontText: "card 25", backText: "How does the transfer of family assets to children also affect the wealth you seek to preserve? Check all that apply." },
    { frontText: "card 26", backText: "Taking into account all of the taxes you have paid over your lifetime (income, property, etc.), if you were required to give estate assets away, and your only choices were government and charitable purposes, what percent would you allocate to each?" },
    { frontText: "card 27", backText: "Which statement most close reflects your thoughts regarding the transfer of charitable gifts through your estate plan?" },
    { frontText: "card 28a", backText: "How much involvement have you had with charitable organizations, including volunteerism and monetary donations?" },
    { frontText: "card 28b", backText: "If you answered 'little or no charitable involvement', choose one statement that best reflects your feelings" },
    { frontText: "card 28c", backText: "If you answered 'moderate involvement', choose one statement that best reflects your future plans" },
    { frontText: "card 28d", backText: "If you answered 'I have been active with charitable organizations', choose one statement that best reflects your future plans" },
    { frontText: "card 29", backText: "What do you think about transferring assets for charitable purposes during your lifetime?" },
    { frontText: "card 30", backText: "On a scale of 1 to 5, how satisfied are you with the current effectiveness of your charitable gifts of time and money in improving the well-being of others?" },
    { frontText: "card 31a", backText: "Which statement most closely reflects your view regarding the level of charitable contributions you make?" },
    { frontText: "card 31b", backText: "If you answered 'I am likely to increase my current level of charitable contributions if certain conditions occur' in 31a, please check the all following conditions that would lead to a likely increase" },
    { frontText: "card 32", backText: "Some families establish personal or family foundations through which they channel their charitable contributions. Which statement most closely reflects your view?" },
    { frontText: "card 33", backText: "Which of the following statements reflect your view regarding the process of family or 'shared' philanthropy? Check all that apply." },
    { frontText: "card 34", backText: "A variety of charitable purposes could benefit from your contributions. Rank from 1 to 4 the areas that are of greatest interest to you." },
    { frontText: "card 35", backText: "What is your preference regarding recognition for philanthropic contributions? Check all that apply." },
    { frontText: "card 36", backText: "If you were given $1,000,000 and were required to give it to charity, what charitable organizations or causes would you support, and at what dollar amount?" }
  ];


  return (
    <div className="app">
      <Paper elevation={24} style={{ width: 740, height: 576, padding: 20, borderRadius: 20 }}>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <Board id="board-1" className="board">
                {deck.slice(0, Math.ceil(deck.length / 2)).map((card, index) => (
                  <Card
                    key={index}
                    id={`card-${index}`}
                    frontText={card.frontText}
                    backText={card.backText}
                  />
                ))}
              </Board>
            </Grid>
            <Grid item xs={4}>
              <Board id="board-2" className="board"></Board>
            </Grid>
            <Grid item xs={4}>
              <Board id="board-3" className="board"></Board>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <Board id="board-4" className="board">
                {deck.slice(Math.ceil(deck.length / 2)).map((card, index) => {
                  let cardClass = "card";
                  if (index !== deck.length - 1) {
                    cardClass += " not-last-child";
                  }
                  return (
                    <Card
                      key={index}
                      id={`card-${index}`}
                      frontText={card.frontText}
                      backText={card.backText}
                      className={cardClass}
                    />
                  );
                })}
              </Board>
            </Grid>
            <Grid item xs={4}>
              <Board id="board-5" className="board"></Board>
            </Grid>
            <Grid item xs={4}>
              <Board id="board-6" className="board"></Board>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <Board id="board-7" className="board"></Board>
            </Grid>
            <Grid item xs={4}>
              <Board id="board-8" className="board"></Board>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </div>
  );
}

export default App;
