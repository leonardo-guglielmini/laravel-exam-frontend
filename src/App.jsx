import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import GlobalContext from './contexts/GlobalContext'
import { BrowserRouter, Routes, Route } from 'react-router'

import Homepage from './pages/Homepage'
import DetailPage from './pages/DetailPage'

import Default from './layouts/Default'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URI}/api/products`);
        setProducts(res.data.results);
      }
      catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  const [Loading, setLoading] = useState(false)

  return (
    <>
      <GlobalContext.Provider value={{ Loading, setLoading, products, setProducts }}>
        <BrowserRouter>
          <Routes>
            <Route element={<Default />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/product/:id" element={<DetailPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
