import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-dom";
import LayoutPage from "./layout/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutPage />}>
          {/* <Route path='' element={}/> */}
          <Route />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
