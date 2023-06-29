import Image from "next/image";
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

export default function Test() {
  return (
    <div>
      {suits.map((suit) => (
        <div key={suit}>
          {values.map((value) => (
            <Image
              key={`${value}_of_${suit}`}
              src={`/images/${value}_of_${suit}.png`}
              alt={`${value}_of_${suit}`}
              width={200}
              height={300}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
