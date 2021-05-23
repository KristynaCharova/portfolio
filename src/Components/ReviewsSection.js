import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import ReviewItem from "../Components/ReviewItem";
import { InnerLayout } from "../styles/Layouts";

function ReviewsSection() {
  return (
    <ReviewsStyled>
      <Title title={"Reviews"} span={"Reviews"} />
      <InnerLayout>
        <div className="reviews">
          <ReviewItem
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.Atque nihil voluptates ea dolore vel repellat?"
            }
          />
          <ReviewItem
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.Atque nihil voluptates ea dolore vel repellat?"
            }
          />
        </div>
      </InnerLayout>
    </ReviewsStyled>
  );
}

const ReviewsStyled = styled.section`
  .reviews {
    display: flex;
  }
`;

export default ReviewsSection;
