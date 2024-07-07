import React, { useState, useEffect } from 'react';

const NinjaAPI = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
console.log(process.env.REACT_APP_RAPID_API_KEY)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        
    
        const response = await fetch('https://api.api-ninjas.com/v1/recipe?query=breakfast', { 
            method: "GET",
            headers: {
            'X-Api-Key': process.env.REACT_APP_RAPID_API_KEY , 
    
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }

        const responseData = await response.json();
        setData(responseData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Empty array as second argument means useEffect runs only once on component mount

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Data from API Ninjas</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default NinjaAPI;