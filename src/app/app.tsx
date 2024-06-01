import { loadRemote } from '@module-federation/runtime';
import { lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// @ts-expect-error different type but it works as expected
const RemoteApp = lazy(async () => await loadRemote('mf_remote/App'));

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"
          element={<h1>Hello</h1>}
        />
        <Route path="/remote/*"
          element={<RemoteApp />}
        />
      </Routes>
    </Router>
  );
}

export default App;
