import liff from '@line/liff';
import { useEffect } from 'react';
import './App.css';
import Share from './Share';

function App() {
  async function liffInit() {
    try {
      await liff.init({ liffId: '1655535261-kgwXKqJb' });
      console.log('liff init success!');
    } catch (error) {
      console.error('liff init error!');
    }
  }

  useEffect(() => {
    liffInit();
  })
  return (
    <Share />
  );
}

export default App;
