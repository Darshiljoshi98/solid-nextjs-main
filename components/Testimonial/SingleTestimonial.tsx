import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import '/'

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content, pdflink } = review;
  // const handleClick = async () => {   
  //   // Download image.png from API
  //   const apiResponse = await fetch('/api/file');
  //   const imageBlob = await apiResponse.blob();
  //   const imageUrl = window.URL.createObjectURL(imageBlob);
  //   const imageLink = document.createElement('a');
  //   imageLink.href = imageUrl;
  //   imageLink.setAttribute('download', 'dummy.pdf');
  //   document.body.appendChild(imageLink);
  //   imageLink.click();
  //   window.URL.revokeObjectURL(imageUrl);
  // };

  const handleClick = async () => {   
    try {
    
      const apiResponse = await fetch('/api/file');   
  
      if (!apiResponse.ok) {
        throw new Error(`Failed to download file. Status: ${apiResponse.status}`);
      }      

      const fileBlob = await apiResponse.blob();     

      const fileUrl = window.URL.createObjectURL(fileBlob);
      const fileLink = document.createElement('a');
      
    
      fileLink.href = fileUrl;
      fileLink.setAttribute('download', 'downloaded-file.pdf'); 
      

      document.body.appendChild(fileLink);

      fileLink.click();
      
  
      window.URL.revokeObjectURL(fileUrl);
    } catch (error) {
      console.error('Error during file download:', error);
    }
  };
  
  return (
    <div className="rounded-lg bg-white p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <div>
          <h3 className="mb-1.5 text-metatitle3 text-black dark:text-white">
            {name}
          </h3>
          <p>{designation}</p>
        </div>
        <Image width={60} height={50} className="" src={image} alt={name} />
      </div>

      <p>{content}</p>
      <button onClick={handleClick}>
        <div className="absolute   rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle2 font-medium uppercase text-white">

          Download our Portfolio

        </div>

      </button>
    </div>
  );
};

export default SingleTestimonial;
function async() {
  throw new Error("Function not implemented.");
}

