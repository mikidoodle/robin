import GettingStarted from "components/home/GettingStarted";
import Hero from "components/home/Hero";
import Meta from "components/Meta";
import Motion from "components/Motion";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Motion id="home">
      <Meta
        title="robin - A wrapper that makes JavaScript easy"
        description="robin - A wrapper that makes JavaScript easy"
        keywords=""
        ogImage=""
      />

      <Hero />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <GettingStarted />
    </Motion>
  );
};

export default Home;
