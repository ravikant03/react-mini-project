import Calculator from "./components/Calculator";
import CalculatorProvider from "./reducer/CalculatorProvider";

const App = () => {
  return (
    <CalculatorProvider>
      <Calculator />
    </CalculatorProvider>
  );
};

export default App;
