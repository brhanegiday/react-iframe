import Head from "next/head";
import CustomIframe from "../component/CustomIframe";
import TestComponent from "../component/TestComponent";

export default function Home() {
  return (
    <>
      <Head>
        <title>iFrame App</title>
      </Head>
      <div
        style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}
      >
        <CustomIframe title="A custom made iframe">
          <TestComponent />
        </CustomIframe>
      </div>
    </>
  );
}
