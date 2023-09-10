import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

function CryptoDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [cryptoInfo, setCryptoInfo] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`https://api.coincap.io/v2/assets/${id}`).then((response) => {
        setCryptoInfo(response.data.data);
      });
    }
  }, [id]);

  if (!cryptoInfo) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Detalles de {cryptoInfo.name}</h1>
      <p>Nombre: {cryptoInfo.name}</p>
      <p>Símbolo: {cryptoInfo.symbol}</p>
      <p>Precio: ${cryptoInfo.priceUsd}</p>
      <p>Suministro Máximo: {cryptoInfo.maxSupply}</p>
    </div>
  );
}

export default CryptoDetail;
