
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Fat from './Fat';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './pges/Effect'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Fat />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
// import React from 'react';
// import Basic from './Event/Event class/Basic';
// import UsesState from './Event/Event class/UsesState/UsesState';

// export default function App() {
//   return (
//     <div>
//       <Basic />
//       <UsesState />
//     </div>
//   );
// }
