import logo from './logo.svg';
import './App.css';

const fruits = [
  { 
    title: "Apple", 
    price: 150, 
    isAvailable: true 
  },
  { 
    title: "Banana", 
    price: 50, 
    isAvailable: true 
  },
  { 
    title: "Orange", 
    price: 99, 
    isAvailable: false 
  },
  { 
    title: "Grapes", 
    price: 200, 
    isAvailable: true 
  },
  { 
    title: "Mango", 
    price: 299, 
    isAvailable: false
  }
];

const tableFruits = fruits.map(fruit => {
  return (
    <tr>
      <td 
       style={{
        backgroundColor: fruit.isAvailable ? 'white' : 'red'
      }}>{fruit.title}</td>
      <td
      style={{
        backgroundColor: fruit.isAvailable ? 'white' : 'red'
      }}>{fruit.price}</td>
    </tr>)
});

function App() {
  return (
    <div className="App">
      <table border="1px">
          <th>Products</th><th>Price</th>
          {tableFruits}
       </table>
    </div>
  );
}

export default App;
