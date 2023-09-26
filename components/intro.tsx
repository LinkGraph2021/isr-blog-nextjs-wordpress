import { useState, useEffect } from 'react';
import { CMS_NAME, CMS_URL } from '../lib/constants';
import Image from 'next/image';
import Accordion from '../components/accordion';

export default function Intro() {
  const [mediaImage, setMediaImage] = useState(null);

  useEffect(() => {
    fetch('https://basicwordp1stg.wpenginepowered.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          {
            mediaItemBy(slug: "hero-image-3") {
              sourceUrl
              altText
            }
          }
        `
      }),
    })
    .then(res => res.json())
    .then(data => {
      setMediaImage(data.data.mediaItemBy);
    })
    .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <section 
        style={{
          backgroundImage: `url('https://basicwordp1stg.wpenginepowered.com/wp-content/uploads/2023/09/features-hero-bg.webp')`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
        }}
        className="px-4 flex-col md:flex-row flex items-center md:justify-between mb-16 md:mb-12 header1 cid-t9fGBrS5Op mbr-fullscreen"
      >
        <div className="container flex md:flex-row flex-col"> {/* Added flex and md:flex-row here */}
          <div className="flex-1">
            <h1 className="text-6xl font-bold tracking-tighter leading-tight md:pr-8 mbr-section-title mbr-fonts-style mb-3 display-1">
              SearchAtlas
            </h1>
          </div>
          <div className="flex-1">
            {mediaImage && <Image src={mediaImage.sourceUrl} alt={mediaImage.altText} width={516} height={400} />}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="content16 cid-tNbUWJTv2K">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10">
              <div className="mbr-section-head align-center mb-4">
                <h3 className="mbr-section-title mb-0 mbr-fonts-style display-2">
                  FAQ
                </h3>
              </div>
              <div id="accordion_1" className="panel-group accordionStyles accordion" role="tablist" aria-multiselectable="true">
              
              <Accordion title="What is SEO software, and why do I need it?">
                <p>SEO (Search Engine Optimization) software is a set of tools and applications designed to help businesses and website owners improve their online visibility by optimizing their website for search engines like Google. You need an <a href="https://searchatlas.com/">SEO software suite</a> to analyze, track, and enhance your website's performance to rank higher in search engine results and drive more organic traffic.</p>
              </Accordion>


              <Accordion title="What are the typical features of SEO software?">
              <p style={{ display: 'block' }}>SEO software usually includes features such as:</p>
              <ul>
                <li>- Keyword research and analysis.</li>
                <li>- Site audit and on-page optimization recommendations.</li>
                <li>- Backlink analysis and management.</li>
                <li>- Rank tracking and monitoring.</li>
                <li>- Competitor analysis.</li>
                <li>- Content optimization suggestions.</li>
                <li>- Reporting and analytics.</li>
              </ul>
              </Accordion>

              <Accordion title="Do I need technical expertise to use SEO software effectively?">
                While technical expertise can be beneficial, many SEO software tools are designed to be user-friendly and require no specialized technical skills. Most tools offer guides and tutorials to help users navigate and make the most of their features.
              </Accordion>

            </div>
            </div>
          </div>
        </div>
      </section>
      {/* Video Section */}
      <section className="video2 cid-t9j5IJrIY6">
        <div className="container">
          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-10 video-block">
              <div className="video-wrapper">
                <iframe 
                  className="mbr-embedded-video" 
                  src="https://www.youtube.com/embed/aCL9SmapEps?si=IIOMKwBgADaMK5iw?rel=0&amp;&amp;showinfo=0&amp;autoplay=0&amp;loop=0" 
                  width="1280" 
                  height="720" 
                  allowFullScreen 
                  style={{height: "601px"}}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="video3 cid-tNbYUo143c">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap mt-4">
          
          {/* Video 1 */}
          <div className="w-full md:w-1/2 video-block">
            <div className="video-wrapper">
              <iframe 
                className="mbr-embedded-video" 
                src="https://www.youtube.com/embed/1JJfWnAryrM?si=hDmO270n74_vr9q8?rel=0&amp;&amp;showinfo=0&amp;autoplay=0&amp;loop=0" 
                width="1280" 
                height="720" 
                frameBorder="0" 
                allowFullScreen 
                style={{height: "353px"}}
              ></iframe>
            </div>
          </div>

          {/* Video 2 */}
          <div className="w-full md:w-1/2 video-block">
            <div className="video-wrapper">
              <iframe 
                className="mbr-embedded-video" 
                src="https://www.youtube.com/embed/f4igJfT6iU0?si=7PckjR1-tDCLnq90?rel=0&amp;&amp;showinfo=0&amp;autoplay=0&amp;loop=0" 
                width="1280" 
                height="720" 
                frameBorder="0" 
                allowFullScreen 
                style={{height: "353px"}}
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
      <div id="custom-html-o">
      <div>
        <h2 className="display-1 display-bspe-legal">BSPE Legal Marketing</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.790560529298!2d-73.99024728834254!3d40.74463383549783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259dd51bcf5d3%3A0xf5dbe31c090c5d24!2sLinkGraph!5e0!3m2!1ses-419!2spy!4v1695764780131!5m2!1ses-419!2spy"
          width="600"
          height="450"
          style={{border: "0"}}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    </>
  )
}
