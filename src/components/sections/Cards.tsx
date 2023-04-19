import React, { useEffect, useState } from "react";
import { Card, Cards as CardsContainer } from "@/components";

const cardsData = [
  {
    title: "Neque Quisquam",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum ante nec tincidunt iaculis. Duis.",
    cta: "Dolor sit",
    href: "/neque",
  },
  {
    title: "Mauris Feugiat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum ante nec tincidunt iaculis. Duis.",
    cta: "Dolor sit",
    href: "/mauris",
  },
  {
    title: "Suspendisse Mattis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum ante nec tincidunt iaculis. Duis.",
    cta: "Dolor sit",
    href: "/mattis",
  },
];

export const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData);
  }, []);

  return (
    <section className="-mt-20">
      <CardsContainer>
        {cards.map((card) => {
          return (
            <Card
              cta={card.cta}
              description={card.description}
              href={card.href}
              key={card.title}
              title={card.title}
            />
          );
        })}
      </CardsContainer>
    </section>
  );
};

export default Cards;
