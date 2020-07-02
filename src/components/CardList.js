import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  //   const cardComponent = robots.map((robot, index) => {
  //     return (
  //       <Card key={index} id={robot.id} name={robot.name} email={robot.email} />
  //     );
  //   });

  return robots.map((robot, index) => {
    return (
      <Card key={index} id={robot.id} name={robot.name} email={robot.email} />
    );
  });
};

export default CardList;
