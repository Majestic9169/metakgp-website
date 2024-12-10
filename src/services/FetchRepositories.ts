
export type Repository = {
  id: number;
  name: string;
  language: string | null;
  description: string;
};

export async function FetchRepositories(name: string): Promise<Repository[] | null> {
  try {
    const cacheData = localStorage.getItem("repoData");
    if (cacheData) {
      console.log("using cached data");
      return JSON.parse(cacheData);
    } else {
      console.log("fetching new data");
      const response = await fetch(
        `https://api.github.com/users/${name}/repos`
      );
      const jsonData = await response.json();
      localStorage.setItem("repoData", JSON.stringify(jsonData));
      return jsonData;
    }
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return null;
  }
}
