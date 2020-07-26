import React from 'react';

import ReadMeImg from '../ReadMeImg';
import Text from '../Text';

export interface Props {
  games: Array<Object>;
  pieceImages: Object;
  date: String,
};

export const CurrentGames: React.FC<Props> = ({
  games,
  pieceImages,
  date,
}) => {
  return (
    <ReadMeImg
      width="600"
      height="263">
      <style>
        {`
          #title {
            margin: .5rem;
            text-align: center;
          }
          .time-stamp {
            color: #999999;
            margin-left: 4px;
            font-size: 12px;
          }
          .games-wrapper {
            display: flex;
            justify-content: space-around;
          }
          .row {
            display: flex;
          }
          .col {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 22px;
            height: 22px;
            background: #B58863;
          }
          .col.light {
            background: #F0D9B5;
          }
          .col img {
            width: 90%;
          }
          .username {
            text-align: center;
          }
        `}
      </style>
      <Text
        id="title"
        weight="bold"
        size="title">
        current games
        <span className="time-stamp">
          (updated {date})
        </span>
      </Text>
      
      <div className="games-wrapper">
        {games.map((game, gameIndex) => (
          <div
            key={`chess-game-${gameIndex}`}
            className="game">
            <Text
              className="username"
              color="grey-lighter">
              {game.isWhite ? game.black : game.white}
            </Text>

            <div className="board">
              {game.position.map((row, rowIndex) => (
              <div
                key={`chess-game-${gameIndex}=row-${rowIndex}`}
                className="row">
                {row.map((col, colIndex) => (
                <div
                  key={`chess-game-${gameIndex}=row-${rowIndex}-col-${colIndex}`}
                  className={(rowIndex + colIndex) % 2 === (game.isWhite ? 0 : 1) ? 'col light' : 'col'}>
                  {col && <img src={pieceImages[`${col === col.toUpperCase() ? 'white' : 'black'}-${col.toLowerCase()}`]}></img>}
                </div>
                ))}
              </div>
              ))}
            </div>

            <Text
              className="username"
              color="grey-lighter">
              {game.isWhite ? game.white : game.black}
            </Text>
          </div>
        ))}
      </div>
    </ReadMeImg>
  );
};