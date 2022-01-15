import { useEffect } from "react";
import Layout from "../components/main/Layout";

import { api } from "../globals";
import { makeRequest } from "../utils/network";

export default function Home() {
  return <Layout>Hello Next</Layout>;
}
