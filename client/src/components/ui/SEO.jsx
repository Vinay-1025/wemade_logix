import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, ogImage, canonicalPath }) => {
  const siteTitle = 'Wemade Logix';
  const fullTitle = title ? `${title} | ${siteTitle}` : `Wemade Logix | Accelerating Businesses with Intelligent AI & Software`;
  const defaultDesc = 'Wemade Logix delivers enterprise-grade software platforms, AI-powered applications, and cloud-native solutions that enable organizations to innovate faster.';
  const baseUrl = 'https://wemadelogix.web.app';
  const canonicalUrl = `${baseUrl}${canonicalPath || ''}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      <meta name="keywords" content={keywords || 'Gen AI, AI/ML, Cloud, Software, Tech Solutions, Wemade Logix'} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage || `${baseUrl}/company_logo.png`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description || defaultDesc} />
      <meta property="twitter:image" content={ogImage || `${baseUrl}/company_logo.png`} />
    </Helmet>
  );
};

export default SEO;
