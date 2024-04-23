
import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Richie Zengoski",
    designation: "Founder",
    image: image1,
    content:
      "When you’re looking for quality in work and the best customer service, look no further than NsquareIT. I’ve had the pleasure of working with the team over the past few months and I couldn’t recommend them highly. My projects have excelled in the SEO and SMM space and it’s all thanks to Zarna Mehta and her team. Thank you very much for all your support and I look forward to our continued partnership.",
      pdflink:'../Documents/dummy.pdf',    
  },
  {
    id: 2,
    name: "Jesse Garcia",
    designation: "Founder",
    image: image2,
    content:
      "They did an amazing job developing a Wordpress website for my consulting team, and even added some bells and whistles that I didn't know about. This is a legitimate  top-notch website development team. Ihighly recommend them. Thanks Zarna for all of your help. - Jesse, My Marketing Auditors LLC.",
      pdflink:'../Documents/dummy.pdf', 
  },
  {
    id: 3,
    name: "Steve Price",
    designation: "Founder",
    image: image1,
    content:
      "i have worked with this company for a while now the service i get is both professional and effective and friendly, they make sure you are satisfied with all aspects of their service i have recommended them to many of my colleagues in the seo business as they are probably the most cost effictive company out there..",
      pdflink:'../Documents/dummy.pdf', 
  },
  {
    id: 4,
    name: "Ben Wendel",
    designation: "Founter @democompany",
    image: image2,
    content:
      "A professional company that have helped me achieve results for clients.",
      pdflink:'../Documents/dummy.pdf', 
  },
];
