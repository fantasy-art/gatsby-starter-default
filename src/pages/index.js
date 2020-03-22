import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="شركة متقنون للخدمات المنزلية" />
    <h1>أفضل شركة خدمات منزلية</h1>

    <p> نحن شركة متقنون نقدم افضل خدمات تنظيف منازل ونقل عفش بالمملكة</p>
    <p>نسعد بتقديم خدماتنا لكم </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">الصفحة التالية</Link>
  </Layout>
)

export default IndexPage
