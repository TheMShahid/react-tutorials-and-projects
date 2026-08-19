import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "mfaiytk2qy3e",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchNewProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const proejcts = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      // console.log(response);
      setProjects(proejcts);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
