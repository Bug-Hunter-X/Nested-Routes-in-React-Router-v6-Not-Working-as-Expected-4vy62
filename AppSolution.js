```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout(){
  return(
    <div>
      <header>
        {/*Navigation*/}
      </header>
      <main>
        {/*Children routes will render here*/}
      </main>
    </div>
  );
}

function Home(){
  return(
    <div>Home</div>
  );
}

function About(){
  return(
    <div>About</div>
  );
}

export default App;
```