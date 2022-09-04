import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResults from "./pages/SearchResults/SearchResults";
import AddRecords from "./pages/AddRecords/AddRecords";
import { RecordProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <RecordProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/add-records" element={<AddRecords />} />
        </Routes>
      </BrowserRouter>
    </RecordProvider>
 
);
