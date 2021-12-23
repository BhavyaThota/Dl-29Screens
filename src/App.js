import React from 'react';
import First from './First';
 import Second from './Second';
 import Third from './Third';
import Four from './Four';
 import Five from './Five';
import Six from './Six';
import Seven from './Seven';
 import Eight from './Eight';
 import Nine from './Nine';
import Ten from './Ten';
import Eleven from './Eleven';
 import Twelve from './Twelve';
 import Thirteen from './Thirteen';
import Fourteen from './Fourteen';
import Fifteen from './Fifteen';
import Sixteen from './Sixteen';
import Seventeen from './Seventeen';
import Eighteen from './Eighteen';
import Nineteen from './Nineteen';
import Twenty from './Twenty';
import Tone from './Tone';
import Ttwo from './Ttwo';
import Tthree from './Tthree';
import Tfour from './Tfour';
import Tfive from './Tfive';
  import Tsix from './Tsix';
import Tseven from './Tseven';
import Teight from './Teight';
import Tnine from './Tnine';

import {BrowserRouter,Route,Routes}from "react-router-dom";

const App = () => {
  return (

    <div>
    {/*<First />
      <Second />
      <Third />
        <Four />
      <Five />
    <Six />
    <Seven />
         <Eight/>
      <Nine />
    <Ten />
       <Eleven />
      <Twelve/>
      <Thirteen />
      <Fourteen />
     <Fifteen />
     <Sixteen />
    <Seventeen />
     <Eighteen />
      <Nineteen />
      <Twenty />
      <Tone />
      <Ttwo />
      <Tthree/>
    <Tfour />
          <Tfive />
      <Tsix />
     <Tseven />
    <Teight />
  <Tnine />*/}
    <BrowserRouter>
<Routes>
<Route path="/" element={<First />}/>
<Route path="/Second" element={<Second />}/>
<Route path="/Third" element={<Third />}/>
<Route path="/Four" element={<Four/>}/>
<Route path="/Five" element={<Five />}/>
<Route path="/Six" element={<Six />}/>
<Route path="/Seven" element={<Seven />}/>
<Route path="/Eight" element={<Eight />}/>
<Route path="/Nine" element={<Nine/>}/>
<Route path="/Ten" element={<Ten />}/>
<Route path="/Eleven" element={<Eleven />}/>
<Route path="/Twelve" element={<Twelve />}/>
<Route path="/Thirteen" element={<Thirteen />}/>
<Route path="/Fourteen" element={<Fourteen />}/>
<Route path="/Fifteen" element={<Fifteen />}/>
<Route path="/Sixteen" element={<Sixteen />}/>
<Route path="/Seventeen" element={<Seventeen />}/>
<Route path="/Eighteen" element={<Eighteen />}/>
<Route path="/Nineteen" element={<Nineteen />}/>
<Route path="/Twenty" element={<Twenty />}/>
<Route path="/Tone" element={<Tone />}/>
<Route path="/Ttwo" element={<Ttwo />}/>
<Route path="/Tthree" element={<Tthree />}/>
<Route path="/Tfour" element={<Tfour />}/>
<Route path="/Tfive" element={<Tfive />}/>
<Route path="/Tsix" element={<Tsix/>}/>
<Route path="/Tseven" element={<Tseven />}/>
<Route path="/Teight" element={<Teight />}/>
<Route path="/Tnine" element={<Tnine />}/>
</Routes>

    </BrowserRouter>
      </div>
  );
};

 export default App;
 








    