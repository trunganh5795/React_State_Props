import logo from './logo.svg';
import './App.css';
import HeaderFunc from './components/HeaderFunc';
import HeaderClass from './components/HeaderClass';
import BaiTapLayout from './components/BaiTapLayout/BaiTapLayout';
import DataBinding from './DataBinding/DataBinding';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import BaiTapRenderWithMap from './RenderWithMap/BaiTapRenderWithMap';
import DemoProps from './Props/DemoProps';
import TestLifeCycle from './RenderWithMap/TestLifeCycle'
import DemoQLSP from './Props/DemoQLSP'
function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      {/* <DataBinding /> */}
      {/* <RenderWithMap /> */}
      {/* <BaiTapRenderWithMap /> */}
      {/* <DemoProps/> */}
      <DemoQLSP/>
      {/* <TestLifeCycle/> */}
    </div>
  );
}

export default App;
