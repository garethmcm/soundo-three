import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import Landing from './Landing';

const SimpleOscillator = React.lazy(() => import("./SimpleOscillator"));
const BasicsFront = React.lazy(() => import("../Basics/BasicsFront"));
const AdvancedFront = React.lazy(() => import("../Advanced/AdvancedFront"));

function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Background" element={<SimpleOscillator />} />
        <Route path="/Basics/*" element={<BasicsFront />} />
        <Route path="/Advanced/*" element={<AdvancedFront />} />
      </Routes>
    </Suspense>
  );
}

export default Router;
