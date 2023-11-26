import { Route, Routes } from "react-router-dom";
import ErrorBoundary from '../../feature/error/ErrorBoundary';
import CounterApp from '../../feature/counter/Counter';
import NotFound from "../404/404";

const App = () => {

  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<CounterApp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;