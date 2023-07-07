import { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import Home_text from "./hometext";

const suits = ["hearts", "diamonds", "spades", "clubs"];
const values = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
];

const Test_shuffle = () => {
  const [cardPositions, setCardPositions] = useState<
    { suit: string; value: string }[]
  >([]);

  useEffect(() => {
    const shuffledPositions = generateShuffledPositions();
    setCardPositions(shuffledPositions);
  }, []);
  //シャッフルされた位置情報の生成
  const generateShuffledPositions = () => {
    const positions = [];

    for (let i = 0; i < suits.length * values.length; i++) {
      const randomIndex = Math.floor(
        Math.random() * (suits.length * values.length)
      );
      const cardPosition = {
        suit: suits[Math.floor(randomIndex / values.length)],
        value: values[randomIndex % values.length],
      };
      positions.push(cardPosition);
    }

    return positions;
  };

  return (
    <Container>
      {cardPositions.map((card, index) => (
        <Image
          key={`${card.value}_of_${card.suit}`}
          src={`/images/${card.value}_of_${card.suit}.png`}
          alt={`${card.value}_of_${card.suit}`}
          width={90} //144
          height={140} //178
          style={{
            cursor: "pointer",
            position: "absolute",
            top: `${Math.floor(index / 13) * 178}px`, // カード同士の縦方向の間隔を指定
            left: `${(index % 13) * 114}px`, // カード同士の横方向の間隔を指定
          }}
          // onClick={handleClick}
        />
      ))}
      <div>
        <Home_text />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1000px;
`;

export default Test_shuffle;
