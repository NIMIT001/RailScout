import Map from "./components/Map";
import SampleStation from "./components/SampleStation";
import Camera from "./components/Camera";
import ThreeJSCanvas from "./components/ThreeJSCanvas";
import NotFound from "./pages/404";
import Error from "./pages/Error";
import Mascot from "./components/Mascot";
import Help from "./pages/Help";
import { data2 } from "./utils/data2";
import { data1 } from "./utils/data1";
import { data3 } from "./utils/data3";

function App() {
  return (
    <div className="h-screen w-full">
      {/* navigate */}
      {/* <Camera /> */}
      {/* <Map /> */}
      {/* <ThreeJSCanvas /> */}
      <SampleStation data2={data2} />
      {/* <SampleStation data2={data3} /> */}
      {/* <SampleStation data2={data1} /> */}
      <Mascot />
      {/* <Help /> */}
      <NotFound />
      <Error />
    </div>
  );
}

export default App;
