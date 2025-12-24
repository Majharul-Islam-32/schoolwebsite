import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name, type, image }) => {
  const siteTitle = 'Abdullapur Bazar Govt. Primary School';
  const defaultDescription = 'Welcome to Abdullapur Bazar Government Primary School. Providing quality primary education.';
  // Use absolute URL for production, relative for development fallback
  const siteUrl = 'https://abdullapurbazargps.vercel.app';
  const defaultImage = `${siteUrl}/logo.png`; 

  // Ensure we have valid strings
  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaDescription = description && description.trim() !== '' ? description : defaultDescription;
  const metaImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : defaultImage;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{metaTitle}</title>
      <meta name='description' content={metaDescription} />
      
      {/* End standard metadata tags */}
      
      {/* Facebook tags */}
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={window.location.href} />
      {/* End Facebook tags */}
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name || siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      {/* End Twitter tags */}
    </Helmet>
  );
}

export default SEO;
