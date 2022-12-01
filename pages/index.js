import styled from "styled-components";
import { useState } from "react";
import { nanoid } from "nanoid";

import Header from "../Components/Header";
import Card from "../Components/Card";
import Form from "../Components/Form";

export default function HomePage() {
  const [cards, setCards] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const newTopic = event.target.topic.value;
    const newAuthor = event.target.author.value;
    setCards([...cards, { id: nanoid(), topic: newTopic, author: newAuthor }]);
    event.target.reset();
  }
  function handleDelete(id) {
    const updatedList = cards.filter((card) => {
      return card.id !== id;
    });
    setCards([...updatedList]);
    console.log(updatedList);
  }

  return (
    <>
      <Header />
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          topic={card.topic}
          author={card.author}
          onDelete={handleDelete}
        />
      ))}
      <Form onSubmit={handleSubmit} cards={cards} />
    </>
  );
}
