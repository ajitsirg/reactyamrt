import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes/publicRoutes";
const App = () => {
  return (
    <>
      <Routes>
        {publicRoutes.map(({ id, path, Page }) => (
          <Route key={id} path={path} element={<Page />} />
        ))}
      </Routes>
    </>
  );
};

export default App;
