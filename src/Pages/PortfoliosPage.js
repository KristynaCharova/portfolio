import React, { useState } from "react";
import Title from "../Components/Title";
import portfolios from "../Data/portfolios";
import Menu from "../Components/Menu";
import Button from "../Components/Button";
import { MainLayout, InnerLayout } from "../styles/Layouts";

const allButtons = ["All", ...new Set(portfolios.map((item) => item.category))];

function PortfoliosPage() {
  const [menuItem, setMenuItems] = useState(portfolios);
  const [button, setButtons] = useState(allButtons);

  const filter = (button) => {
    if (button === "All") {
      setMenuItems(portfolios);
      return;
    }
    const filtredData = portfolios.filter((item) => item.category === button);
    setMenuItems(filtredData);
  };

  return (
    <MainLayout>
      <Title title={"Portfolio"} span={"Portfolio"} />
      <InnerLayout>
        <Button filter={filter} button={button} />
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>
  );
}

export default PortfoliosPage;
