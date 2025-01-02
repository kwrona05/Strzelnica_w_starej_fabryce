const { Router } = require("react-router-dom");

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/components/main" element={<MainPage />}></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </Router>
  );
};
