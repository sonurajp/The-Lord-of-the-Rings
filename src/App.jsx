import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./pages/Header";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route
                    path="/character/:id"
                    element={<CharacterDetailsPage />}
                  />
                </Routes>
                {/* <Footer /> */}
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
