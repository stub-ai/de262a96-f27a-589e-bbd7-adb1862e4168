import { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleButtonClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      alert('Invalid mathematical expression');
    }
  };

  const clearInput = () => {
    setInput("");
    setResult(0);
  };

  return (
    <div className="p-5 bg-white rounded shadow-lg w-64">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold text-gray-800">Calculator</h2>
        <button onClick={clearInput} className="text-red-500 hover:text-red-700 transition duration-200">Clear</button>
      </div>
      <div className="border p-3 mb-5">
        <p className="text-right">{input}</p>
        <p className="text-right font-bold">{result}</p>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <button
            key={number}
            onClick={() => handleButtonClick(number.toString())}
            className="bg-blue-500 text-white rounded p-2 hover:bg-blue-700 transition duration-200"
          >
            {number}
          </button>
        ))}
        {['+', '-', '*', '/'].map((operator) => (
          <button
            key={operator}
            onClick={() => handleButtonClick(operator)}
            className="bg-green-500 text-white rounded p-2 hover:bg-green-700 transition duration-200"
          >
            {operator}
          </button>
        ))}
        <button
          onClick={calculate}
          className="col-span-4 bg-yellow-500 text-white rounded p-2 hover:bg-yellow-700 transition duration-200"
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default Calculator;