import React, { useEffect, useState } from 'react';

const SitemapComponent = () => {
  const [sitemap, setSitemap] = useState([]);

  useEffect(() => {
    fetch('/sitemap')
      .then((response) => response.json())
      .then((data) => setSitemap(data));
  }, []);

  return (
    <div>
      <h1>Sitemap</h1>
      <ul>
        {sitemap.map((item, index) => (
          <li key={index}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SitemapComponent;
