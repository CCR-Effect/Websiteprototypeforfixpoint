import { useEffect } from 'react';
import logoIcon from '../assets/logoIcon.png';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  canonical?: string;
  article?: {
    publishedTime?: string;
    author?: string;
    tags?: string[];
  };
}

export function SEO({
  title,
  description,
  keywords,
  ogType = 'website',
  ogImage = 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop',
  canonical,
  article,
}: SEOProps) {
  const siteName = 'FixPoint Accounting & Advisory';
  const fullTitle = `${title} | ${siteName}`;
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Helper function to update or create meta tag
    const updateMetaTag = (selector: string, content: string, attribute = 'content') => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const parts = selector.match(/\[(.+?)=["'](.+?)["']\]/);
        if (parts) {
          element.setAttribute(parts[1], parts[2]);
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, content);
    };

    // Update favicon
    let faviconElement = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (!faviconElement) {
      faviconElement = document.createElement('link');
      faviconElement.rel = 'icon';
      faviconElement.type = 'image/png';
      document.head.appendChild(faviconElement);
    }
    faviconElement.href = logoIcon;

    // Basic meta tags
    updateMetaTag('meta[name="description"]', description);
    if (keywords) {
      updateMetaTag('meta[name="keywords"]', keywords);
    }

    // Open Graph tags
    updateMetaTag('meta[property="og:title"]', fullTitle);
    updateMetaTag('meta[property="og:description"]', description);
    updateMetaTag('meta[property="og:type"]', ogType);
    updateMetaTag('meta[property="og:url"]', canonical || currentUrl);
    updateMetaTag('meta[property="og:image"]', ogImage);
    updateMetaTag('meta[property="og:site_name"]', siteName);

    // Twitter Card tags
    updateMetaTag('meta[name="twitter:card"]', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', fullTitle);
    updateMetaTag('meta[name="twitter:description"]', description);
    updateMetaTag('meta[name="twitter:image"]', ogImage);

    // Article specific tags
    if (article && ogType === 'article') {
      if (article.publishedTime) {
        updateMetaTag('meta[property="article:published_time"]', article.publishedTime);
      }
      if (article.author) {
        updateMetaTag('meta[property="article:author"]', article.author);
      }
      if (article.tags && article.tags.length > 0) {
        article.tags.forEach((tag, index) => {
          updateMetaTag(`meta[property="article:tag"][data-index="${index}"]`, tag);
        });
      }
    }

    // Canonical URL
    let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!linkElement) {
      linkElement = document.createElement('link');
      linkElement.rel = 'canonical';
      document.head.appendChild(linkElement);
    }
    linkElement.href = canonical || currentUrl;

    // Robots meta
    updateMetaTag('meta[name="robots"]', 'index, follow, max-snippet:-1, max-image-preview:large');
  }, [title, description, keywords, ogType, ogImage, canonical, article, fullTitle, currentUrl]);

  return null;
}