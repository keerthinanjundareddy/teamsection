import React,{useState} from 'react';
import './Team.css'
import imageone from '../../src/Assets/one.jpg'
import imagetwo from '../../src/Assets/image-of-two-friendly-business-partner-working-on-2023-04-18-02-34-32-utc.JPG'
import imagethree from '../../src/Assets/two.jpg'
// import imagefour from '../../src/Assets/social-media-2022-11-14-07-05-26-utc.jpg'
// import imagefive from '../../src/Assets/assessment-analysis-bar-graph-presentation-2022-12-16-00-26-45-utc.jpg'
// impo/rt imagesix from '../../src/Assets/image-of-start-up-business-people-discussing-over-2023-01-31-03-28-56-utc.JPG'
// import imageseven from '../../src/Assets/a-man-chats-with-an-artificial-intelligence-chat-b-2023-08-29-05-17-51-utc.jpg'
import imageight from '../../src/Assets/facebook-icon (2).png'
import imagenine from '../../src/Assets/facebook-icon (3).png'
import imageten from '../../src/Assets/facebook-icon (4).png'



const dummyData = [
  { title: imageone,titletwo:imageight , heading: 'Sandesh p', contenttwo: "Entrepreneur in Residence" },
  { title: imagetwo,titletwo:imagenine , heading: 'vidhya rekha', contenttwo: "Consulting Partner" },
  { title: imagethree,titletwo:imageten , heading: 'suraj', content: 'Louis Phillippe', contenttwo: "Business Lead" },
//   { title: imagefour, heading: 'CONTENT MARKETING', contenttwo: "Content marketing is a strategy that focuses on creating and distributing valuable content such as blog posts, articles, and infographics. It involves optimization and tracking metrics to enhance branding and engage the audience effectively." },
//   { title: imagefive, heading: 'CONVERSION RATE OPTIMIZATION (CRO)', content: 'Coco-Cola', contenttwo: "Conversion Rate Optimization (CRO) is all about optimizing websites for higher engagement and conversions. It involves techniques like A/B testing, improving user experience, and enhancing the conversion funnel, often through effective call-to-action strategies." },
//   { title: imagesix, heading: 'REMARKETING AND RETARGETING', content: 'Amway', contenttwo: "Remarking and retargeting in online advertising involve personalized ads and tracking to optimize conversations and encourage conversions. It's a strategic approach within online advertising to re-engage potential customers who have shown previous interest." },
  // { title: imageseven, heading: 'EMERGING TRENDS AND TECHNOLOGIES', content: 'Ummeed Finance', contenttwo: "Emerging trends and technologies encompass Artificial Intelligence, chatbots, voice search, and automation. These innovations are reshaping the digital landscape, influencing user experiences, and driving the evolution of various industries." },
];



const Team= () => {
    const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <>
   

   <div style={{textAlign:"center",color:"black",marginTop:"20px",fontSize:"20px"}}><b>MEET OUR TEAM</b></div>
    <div className="card-container">
       {dummyData.map((data, index) => (
       <div
       key={index}
       className="card"
   
       onMouseEnter={() => setHoveredCard(index)}
       onMouseLeave={() => setHoveredCard(null)}
     >
          <div  className='imge-sections'>
             <img src={data.title}  alt="imgone" className='imge-section-two' />
            </div>
       <div className='heading-sections'style={{textTransform:"uppercase",marginTop:"160px",textAlign:"center",}}>{data.heading}</div>
          <div className='title-sections'  style={{ textAlign:"center",marginTop:"10px"}}>{data.contenttwo}</div>
          <div style={{display:"flex",flexDirection:"row",gap:"10px",justifyContent:"center",alignItems:"center",marginTop:"15px"}}>
            <div className='inst-image'><img src={imageight} className='inst-image-two' /></div>
            <div className='inst-image'><img src={imagenine} className='inst-image-two' /></div>
            <div className='inst-image'><img src={imageten} className='inst-image-two' /></div>
            </div>

 
          
  </div>
      ))}
    
    <style jsx>{`
    
    .title-sections{
       
    }

`}</style>
</div>
    </>

  );
};

export default Team;

