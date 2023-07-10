import { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import Home_text from "./hometext";
import cardBackImage from "../../public/images/card_back.png";

const suits = ["hearts", "diamonds", "spades", "clubs"]; // カードのスートを配列で定義
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
]; // カードの数字を配列で定義

const Test_shuffle = () => {
  const [cardPositions, setCardPositions] = useState<
    { suit: string; value: string; isFlipped: boolean }[]
  >([]); // カードの位置情報を管理するステート変数を定義

  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null
  ); // 選択されたカードのインデックスを管理するステート変数を定義

  useEffect(() => {
    const shuffledPositions = generateShuffledPositions(); // カードの位置情報をシャッフルして取得
    setCardPositions(shuffledPositions); // シャッフルされたカードの位置情報をステートにセット
  }, []);

  const generateShuffledPositions = () => {
    // カードの位置情報をシャッフルする関数
    const positions = [];

    for (let i = 0; i < suits.length * values.length; i++) {
      // スートと数字の組み合わせの数だけループ
      const randomIndex = Math.floor(
        Math.random() * (suits.length * values.length)
      ); // ランダムなインデックスを生成
      const cardPosition = {
        // カードの位置情報オブジェクトを生成
        suit: suits[Math.floor(randomIndex / values.length)], // カードのスートを設定
        value: values[randomIndex % values.length], // カードの数字を設定
        isFlipped: true, // カードが裏返し状態かどうかを設定
      };
      positions.push(cardPosition); // カードの位置情報を配列に追加
    }

    return positions; // シャッフルされたカードの位置情報を返す
  };

  const handleClick = (index: number) => {
    // カードがクリックされたときの処理
    const clickedCard = cardPositions[index]; // クリックされたカードの情報を取得

    if (clickedCard.isFlipped) {
      // クリックされたカードが裏返し状態である場合
      if (selectedCardIndex === null) {
        // 選択されたカードがない場合
        setSelectedCardIndex(index); // 選択されたカードのインデックスをセット
      } else {
        const firstCard = cardPositions[selectedCardIndex]; // 最初に選択されたカードの情報を取得

        if (firstCard.value === clickedCard.value) {
          // 選択されたカードとクリックされたカードの数字が一致する場合
          const updatedCardPositions = cardPositions.map((card, i) =>
            i === selectedCardIndex || i === index
              ? { ...card, isFlipped: false }
              : card
          ); // カードの位置情報を更新

          setCardPositions(updatedCardPositions); // カードの位置情報をステートにセット
        } else {
          // 選択されたカードとクリックされたカードの数字が一致しない場合
          setTimeout(() => {
            const updatedCardPositions = cardPositions.map((card, i) => {
              if (i === selectedCardIndex || i === index) {
                // クリックされたカードと選択されたカードのみ裏返す
                return { ...card, isFlipped: true };
              } else {
                // それ以外のカードは元の状態を保持
                return card;
              }
            });
            setCardPositions(updatedCardPositions); // カードの位置情報をステートにセット
          }, 1000);
        }

        setSelectedCardIndex(null); // 選択されたカードのインデックスをリセット
      }
    }
  };

  const cards = cardPositions.map((card, index) => (
    <Image
      key={`${card.value}_of_${card.suit}`}
      src={
        card.isFlipped
          ? cardBackImage
          : `/images/${card.value}_of_${card.suit}.png`
      }
      alt={`${card.value}_of_${card.suit}`}
      width={90}
      height={140}
      style={{
        cursor: "pointer",
        position: "absolute",
        top: `${Math.floor(index / 13) * 178}px`,
        left: `${(index % 13) * 114}px`,
      }}
      onClick={() => handleClick(index)}
    />
  )); // カードの要素を生成

  return (
    <Container>
      {cards}
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

export default Test_shuffle; // Test_shuffleコンポーネントをエクスポート
