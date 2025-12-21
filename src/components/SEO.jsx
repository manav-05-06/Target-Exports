import { useEffect } from "react";

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url,
  type = "website"
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      if (!content) return;
      
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Primary Meta Tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("title", title);

    // Open Graph Tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:type", type, true);

    // Twitter Tags
    updateMetaTag("twitter:card", "summary_large_image", true);
    updateMetaTag("twitter:title", title, true);
    updateMetaTag("twitter:description", description, true);
    updateMetaTag("twitter:image", image, true);

    // Canonical URL
    let canonical = document.querySelector("link[rel='canonical']");
    if (url) {
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", url);
    }
  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEO;

