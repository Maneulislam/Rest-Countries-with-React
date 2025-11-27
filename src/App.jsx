
import { Suspense } from 'react';
import './App.css'
import Countries from './component/Countries/Countries';

function App() {

  const countriesPromise = fetch('https://restcountries.com/v3.1/all?fields=name,flags')
    .then(res => res.json());

  return (
    <>



      <Suspense fallback={<h2>Countries Loading...</h2>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>

    </>
  )
}

export default App
