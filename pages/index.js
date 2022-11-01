import Head from "next/head";
import DevPtsTracker from "./devptstracker";

export default function Home() {
  return (
    <div>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4198054142689562"
          crossorigin="anonymous"
        ></script>
      </Head>
      <DevPtsTracker />
    </div>
  );
}
