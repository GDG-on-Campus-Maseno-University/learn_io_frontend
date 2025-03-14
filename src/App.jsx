import React from "react";
import Footer from "./Components/Footer";
//import Carosalepage from "./carossel/CarosselPage"
//import Home from "./Components/Home";
import Find from "./pastpaperpages/findpaper/FindPastpaper";
import Carosalepage from "./carossel/CarosselPage"
import Home from "./Components/Home";
import LearningPage from "./Components/LearningPage";
import Lesson from "./lessonpages/Lesson";

const App = () => {
  return (
    <div>
      <h1>Footer</h1>
      {/* Other components here */}
      <Footer />
    </div>
  );
};

export default App;
function App(){
  return(
    <>

     {/* <Home/> */}
     <Find/>
      <Home />
    </>
  )
}

