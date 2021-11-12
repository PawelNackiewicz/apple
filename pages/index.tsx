import type { NextPage } from "next";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center">
        <p className="text-xl">Hello wolrd 👋</p>
      </div>
    </Layout>
  );
};

export default Home;
