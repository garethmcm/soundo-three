import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";

import BasicNav from '../Basics/BasicNav';

const BasicLanding = React.lazy(() => import("./BasicLanding"));
const Equaliser = React.lazy(() => import("./Equaliser"));
const Compressor = React.lazy(() => import("./Compressor"));
const Delay = React.lazy(() => import("./Delay"));
const Reverb = React.lazy(() => import("./Reverb"));

function BasicsFront() {
  return (
    <div className="flex">
      <div className="w-[60px] py-4 px-4 hidden lg:block">
        <BasicNav />
      </div>
      <section className="flex-1 flex justify-center flex-grow py-12 max-w-xl min-w-m mx-auto bg-background">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<BasicLanding />} />
            <Route path="/Equaliser" element={<Equaliser />} />
            <Route path="/Compressor" element={<Compressor />} />
            <Route path="/Delay" element={<Delay />} />
            <Route path="/Reverb" element={<Reverb />} />
          </Routes>
        </Suspense>
      </section>
    </div>
  );
}
  
  export default BasicsFront;
  