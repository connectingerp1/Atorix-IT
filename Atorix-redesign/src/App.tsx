import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Industries from './pages/Industries';
// import Contact from './pages/Contact';
// import DemoProduct from './pages/DemoProduct';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            {/* <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="industries" element={<Industries />} />
            <Route path="contact" element={<Contact />} />
            <Route path="get-demo" element={<DemoProduct />} /> */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
