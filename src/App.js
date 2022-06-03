
import './App.css';
import { PaymentCard } from './components/PaymentCard';
function App() {

  const cards = [{ id:1, date: "28/10/20", heading: "Amazon Gift Pay", subheading: "Desktop-Mobile", para: "Case Study",logo:"https://tse4.mm.bing.net/th?id=OIP.2WiqonFlHiBEbTcKMaHQIgHaHa&pid=Api&P=0&w=167&h=167" },
  {id:2, date: "18 Sept 20", heading: "Apple Gift Payment", subheading: "MacOS-Mobile", para: "Case Study",logo:"https://tse2.mm.bing.net/th?id=OIP.RrNq9h2Lq9uWNWAxPVBd0QHaHa&pid=Api&P=0&w=153&h=153" }]

  return (
    <div className="App">

      <PaymentCard cards={cards}/>

    </div>
  );
}

export default App;
