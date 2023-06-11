import BluePanel from "../components/resources/bluePanel";
import Columns from "../components/resources/columns";
import DarkPanel from "../components/resources/darkPanel";
import ResMore from "../components/resources/resMore";
import Stats2 from "../components/resources/stats2";

import Navbar from "../components/navbar";

export default function Resources() {
  return (
    <div>
     <Navbar/>
      <Columns />
      <DarkPanel />
      <Stats2 />
      <BluePanel />
      <ResMore />
    </div>
  );
}
