import { useState, useEffect } from 'react';

function FetchExample() {
  let [data, setData] = useState(null);
  useEffect(() => {
    fetch('/some/url').then(setData);
  }, []);
  return data;
}

export default FetchExample;
