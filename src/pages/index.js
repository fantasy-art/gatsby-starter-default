import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>مسكنك للخدمات المنزلية</h1>
    <p><a href='https://www.masknk.com'>MASKNK . COM</a></p>
    <p>موقع يقدم افضل شركات تنظيف منازل ونقل عفش بالمملكة</p>
    <p>نسعد بتقديم خدماتنا لكم </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
