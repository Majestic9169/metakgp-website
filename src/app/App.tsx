import React, { useEffect, useState } from "react";
import { HeaderSection } from "../sections/Header";
import { HeroSection } from "../sections/Hero";
import { StatsSection } from "../sections/Statistics";
import { FetchRepositories, Repository } from "../services/FetchRepositories";
import "./App.css";

function App() {


/*
  const [data, setData] = useState<Repository[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await FetchRepositories("metakgp");
      setData(result);
      setIsLoading(false);
    };

    fetchData();

    const timer = setTimeout(() => {
      console.log("Clearing cache...");
      localStorage.removeItem("repoData"); // remove cached data
    }, 1000000); // 100 seconds

    return () => clearTimeout(timer);
  }, []); 
*/
  return (
    <div className="App">
{/* displaying data */}
    {/*   <div>
        <h1>Repository Details</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : Array.isArray(data) && data.length > 0 ? (
          data.map((repo: Repository) => (
            <div key={repo.id}>
              <h2>{repo.name}</h2>
              <p>{repo.description}</p>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
   */} 
      <header className="App-header">
        <HeaderSection />
      </header>
      <HeroSection />
      <StatsSection />
    </div>
  );
}

export default App;
