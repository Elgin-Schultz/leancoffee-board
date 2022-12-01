import styled from "styled-components";

export default function Form({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <textarea
        placeholder="Type your thoughts ... "
        name="topic"
        required
      ></textarea>

      <textarea
        placeholder="Your name is ..."
        name="author"
        required
      ></textarea>

      <button type="submit">+</button>
    </form>
  );
}
