import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";

import AdvancedNav from '../Advanced/AdvancedNav';

const AdvancedLanding = React.lazy(() => import("./AdvancedLanding"));
const Chorus = React.lazy(() => import("./Chorus"));
const Distortion = React.lazy(() => import("./Distortion"));
const ConvoReverb = React.lazy(() => import("./ConvoReverb"));
const PreReverb = React.lazy(() => import("./PreReverb"));

function AdvancedFront() {
  return (
    <div className="flex">
      <div className="w-[60px] py-4 px-4 hidden lg:block">
        <AdvancedNav />
      </div>
      <section className="flex-1 flex justify-center flex-grow py-12 max-w-xl min-w-m mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<AdvancedLanding />} />
            <Route path="/Chorus" element={<Chorus />} />
            <Route path="/Distortion" element={<Distortion />} />
            <Route path="/ConvoReverb" element={<ConvoReverb />} />
            <Route path="/PreReverb" element={<PreReverb />} />
          </Routes>
        </Suspense>
      </section>
    </div>
  );
}
  
  export default AdvancedFront;
  