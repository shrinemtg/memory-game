"use client";
import styled from "styled-components";
import Image from "next/image";
import { use } from "react";
export default function Trump() {
  return (
    <TrumpContainer>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((number) => (
        <>
          {/* clubs */}
          <Image
            src={`/img/${number}_of_clubs.png`}
            alt=""
            layout="responsive"
            width={409}
            height={600}
          />
          {/* diamonds */}
          <Image
            src={`/img/${number}_of_diamonds.png`}
            alt=""
            layout="responsive"
            width={409}
            height={600}
          />
          {/* hearts */}
          <Image
            src={`/img/${number}_of_hearts.png`}
            alt=""
            layout="responsive"
            width={409}
            height={600}
          />
          {/* spades */}
          <Image
            src={`/img/${number}_of_spades.png`}
            alt=""
            layout="responsive"
            width={409}
            height={600}
          />
        </>
      ))}
    </TrumpContainer>
  );
}

const TrumpContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CardImage = styled(Image)`
  width: 25%; /* 画面幅に対しての割合で調整 */
  height: auto; /* 幅に合わせて高さを自動調整 */
  max-width: 100%; /* 最大幅を指定 */
  max-height: 100%; /* 最大高さを指定 */
`;
