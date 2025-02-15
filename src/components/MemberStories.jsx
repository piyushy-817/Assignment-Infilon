import img1 from "../assets/image1.png"
import img2 from "../assets/image2.png"
import img3 from "../assets/image3.png"
import img4 from "../assets/image4.png"


const MemberStories = () => {
    const stories = [
      {
        title: "John’s Story",
        image: img1,
        description: "Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh",
      },
      {
        title: "The Journey",
        image: img2,
        description: "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
      },
      {
        title: "Catch Day",
        image: img3,
        description: "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
      },
      {
        title: "Trout Tales",
        image:img4,
        description: "Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed",
      },
    ];
  
    return (
        <section className=" py-15">
  <h2 className="text-4xl text-[48px] font-[600]  text-left mb-10 px-44">Member Stories</h2>

 
  <div className="flex flex-wrap justify-between gap-5 px-44">
    {stories.map((story, index) => (
      <div
        key={index}
        className="flex items-center   w-[488px] h-[200px] bg-white "
      >
       
        <img
          src={story.image}
          alt={story.title}
          className="w-[200px] h-[200px] object-cover"
        />

       
        <div className="pl-5 pr-2">
          <h3 className="text-[32px] text-[#1C1812] font-Gluten font-[400] ">{story.title}</h3>
          <p className="text-[#65625E] font-Inter text-[14px] font-[400]">{story.description}</p>
          <button className=" mt-4 mb-5 py-0.5 px-2 text-[14px] bg-[#DFDEDD] text-black rounded-md">
            Read More
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

      
    );
  };
  
  export default MemberStories;
  