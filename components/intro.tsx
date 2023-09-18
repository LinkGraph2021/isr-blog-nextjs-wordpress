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
            mediaItemBy(slug: "2023-05-03") {
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
      <section className="px-4 flex-col md:flex-row flex items-center md:justify-between mb-16 md:mb-12 header1 cid-t9fGBrS5Op mbr-fullscreen">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5">
              <h1 className="text-6xl font-bold tracking-tighter leading-tight md:pr-8 mbr-section-title mbr-fonts-style mb-3 display-1">
                BSPE Legal Marketing
              </h1>
              {mediaImage && <Image src={mediaImage.sourceUrl} alt={mediaImage.altText} width={516} height={400} />}
            </div>
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
              
              <Accordion title="What Are Personal Injury Claims?">
                <p>Accidents and injuries can give rise to personal injury claims arising from a variety of situations, such as car collisions, slips and falls, or incidents in the workplace. When confronted with such circumstances, enlisting the aid of a proficient personal injury attorney becomes of paramount importance. These legal experts specialize in advocating for individuals who have suffered harm due to the recklessness or misconduct of others.</p>

                <p>The central role of a personal injury lawyer entails championing your rights and facilitating the pursuit of rightful compensation. Armed with an in-depth comprehension of personal injury legislation, these attorneys adeptly navigate the legal landscape on your behalf. By securing the services of a personal injury lawyer, you ensure that your case is handled with utmost professionalism, thereby enhancing your prospects of attaining a favorable resolution.</p>

                <p>Within the context of a personal injury claim, a myriad of factors converge to determine the potential compensation you might be eligible for. These factors encompass medical expenditures, income loss, emotional anguish, and the toll of physical suffering. A proficient personal injury lawyer meticulously scrutinizes the particulars of your case and assembles pertinent evidence to construct a compelling argument in your favor.</p>

                <p>In the realm of personal injury claims within Manhattan, the presence of a knowledgeable attorney can prove transformative. A Manhattan personal injury lawyer is well-versed in the local legal codes and statutes, thereby affording you invaluable guidance and bolstering your stance throughout the legal trajectory. Their specialized proficiency safeguards your entitlements and culminates in the equitable reparation for the injuries you have sustained.</p>

                <p>Navigating the intricacies of personal injury claims is a multifaceted legal affair that mandates the dexterity of a personal injury lawyer. Should you find yourself ensnared in a scenario wherein you've incurred injury due to another party's negligence, the imperative is to promptly secure legal counsel. A seasoned personal injury lawyer is resolute in safeguarding your interests and relentlessly endeavors to secure the restitution you are entitled to.</p>
              </Accordion>


              <Accordion title="What is a Manhattan Accident Compensation Lawyer?">
                Experiencing an accident can have profound, lasting effects on both your physical well-being and your emotional state. In such challenging times, it is imperative to engage the expertise of a Manhattan accident compensation attorney who specializes in cases involving personal injury. These legal professionals possess the acumen and insights required to shepherd you through the legal maze, aiding you in pursuing the rightful restitution that corresponds to your situation.

                A Manhattan accident compensation attorney, alternatively recognized as a personal injury lawyer, boasts a profound comprehension of the intricate landscape of personal injury law, honed through extensive exposure to analogous cases. They are adept at evaluating the particulars of your accident, amassing evidentiary support, and crafting a compelling argument on your behalf. Their objective revolves around ensuring that you are equitably compensated for your injuries, medical expenditures, wage loss, and any other associated damages.

                One of the predominant advantages tied to engaging a Manhattan accident compensation attorney lies in their adeptness at negotiation. They skillfully engage with insurance companies and other implicated parties to secure the most favorable settlement attainable for your circumstances. Given that insurance entities often endeavor to curtail payouts, the presence of a seasoned personal injury attorney restores equilibrium, effectively safeguarding your rights.

                Moreover, extending beyond negotiation prowess, a Manhattan accident compensation attorney furnishes you with invaluable legal counsel and direction throughout the entirety of the process. They expound upon your entitlements and alternatives, thereby enabling you to make judicious decisions. Personal injury lawyers possess the sagacity and familiarity requisite to navigate the intricate legal framework, ensuring the efficacious management of your case.

                Furthermore, a Manhattan accident compensation attorney, in their capacity as your personal injury advocate, is prepared to escalate matters to the courtroom if circumstances demand it. Armed with litigation acumen and resources, they proficiently advocate on your behalf within the legal arena. By enlisting a steadfast personal injury attorney, you are free to focus on your recovery while they adeptly handle the legal dimensions of your predicament.

                It is worth underlining that time is of the essence with regards to personal injury claims. In Manhattan, specific statutes of limitations dictate the window within which you can initiate a claim. Thus, seeking the counsel of a Manhattan accident compensation attorney, synonymous with a personal injury lawyer, in the aftermath of your accident is of paramount significance. They will serve as your guiding light, ensuring compliance with deadlines and steering you through the procedural intricacies.

                If you find yourself ensnared in an accident scenario in Manhattan, enlisting the services of a proficient accident compensation attorney, synonymous with a personal injury lawyer, is non-negotiable. They will ardently advocate for your rights, negotiate adeptly with insurance entities, and, if the need arises, represent your interests in court. By securing the services of a Manhattan accident compensation attorney, also recognized as a personal injury lawyer, you amplify your prospects of securing the reparation that corresponds to the injuries and damages you have suffered.
              </Accordion>

              <Accordion title="How can You Seek Legal Injury Assistance?">
                When confronted with a personal injury stemming from another party's negligence, it becomes paramount to secure legal aid from a qualified personal injury lawyer. These legal professionals specialize in representing individuals who have sustained injuries and offer indispensable guidance and assistance throughout the legal journey.

                A personal injury lawyer is well-versed in the intricacies of personal injury law and possesses the expertise required to navigate the labyrinthine legal landscape. They will meticulously analyze your case, amass pertinent evidence, and devise a robust legal strategy to facilitate your acquisition of rightful compensation. Collaborating with a personal injury lawyer permits you to focus on your recuperation as they adeptly manage the legal facets of your claim.

                In Manhattan, a multitude of accomplished personal injury lawyers stand ready to champion your quest for justice in the aftermath of your injuries. These seasoned experts exhibit an in-depth grasp of local statutes and regulations, and are poised to vigorously advocate for your rights. Whether you've suffered injury in an automobile accident, a slip and fall episode, or any other personal injury circumstance, a proficient personal injury lawyer will ensure an exhaustive scrutiny and pursuit of your case.

                A pivotal responsibility of a personal injury lawyer is to engage in negotiations with insurance companies and other involved parties. Insurance entities might endeavor to depreciate the worth of your claim or dismiss it altogether, yet a skilled personal injury lawyer possesses the acumen to counter their strategies. They will tenaciously safeguard your rights and relentlessly strive to optimize your compensation, encompassing medical expenditures, wage loss, physical and emotional distress, and additional damages.

                It's crucial to underline that throughout the process, your personal injury lawyer serves as your advocate and mentor. They elucidate your rights, address your inquiries, and furnish regular updates regarding the advancement of your case. Bolstered by their proficiency and support, you can confidently navigate the intricate legal milieu.

                Enlisting the services of a personal injury lawyer is an imperative course of action when confronted with a personal injury claim. Armed with knowledge, experience, and resources, they stand poised to assist you in attaining the reparation you rightfully merit. Should you find yourself a victim of personal injury in Manhattan, it is prudent to approach a reputable personal injury lawyer who can supply the legal representation and bolstering you require during this challenging juncture.
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
                  src="https://www.youtube.com/embed/m8PbttT8FaI?rel=0&amp;&amp;showinfo=0&amp;autoplay=0&amp;loop=0" 
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
                src="https://www.youtube.com/embed/OUqyqZg65D4?rel=0&amp;&amp;showinfo=0&amp;autoplay=0&amp;loop=0" 
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
                src="https://www.youtube.com/embed/E65IoivlMGI?rel=0&amp;&amp;showinfo=0&amp;autoplay=0&amp;loop=0" 
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
      <div id="custom-html-v">
        <div>
          <iframe 
            src="https://sample-cloud-1.s3.amazonaws.com/Personal-Injury-Attorney.html" 
            style={{border: "0px #ffffff none"}}
            name="myiFrame" 
            scrolling="yes" 
            frameBorder="1" 
            height="400px" 
            width="600px" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div id="custom-html-o">
      <div>
        <h2 className="display-1 display-bspe-legal">BSPE Legal Marketing</h2>
        
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.667899926605!2d-73.9878342!3d40.7033112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a33c8ef7855%3A0x909fe01aa225e5c5!2sBSPE%20Legal%20Marketing!5e0!3m2!1sen!2sus!4v1689619826533!5m2!1sen!2sus" 
          width="600" 
          height="450" 
          style={{border: "0"}} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        
        <p className="display-3">BSPE Legal Marketing</p>
        <p className="display-3">155 Water St #1a, Brooklyn, NY 11201</p>
        <p className="display-3">(929) 202-2244</p>
      </div>
    </div>
    </>
  )
}
