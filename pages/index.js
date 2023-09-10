import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

function HomePage() {
  const [cryptoList, setCryptoList] = useState([]);

  useEffect(() => {
    axios.get('https://api.coincap.io/v2/assets').then((response) => {
      setCryptoList(response.data.data);
    });
  }, []);

  return (
    <div>
      <h1>Listado de Criptomonedas</h1>
      <ul>
        {cryptoList.map((crypto) => (
          <li key={crypto.id}>
            <Link href={`/crypto/${crypto.id}`}>
              {crypto.name} ({crypto.symbol}): ${crypto.priceUsd}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
