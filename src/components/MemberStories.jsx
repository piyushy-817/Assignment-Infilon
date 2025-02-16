import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.png";

const MemberStories = () => {
  const stories = [
    {
      title: "John’s Story",
      image: img1,
      description:
        "Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh",
    },
    {
      title: "The Journey",
      image: img2,
      description:
        "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
    },
    {
      title: "Catch Day",
      image: img3,
      description:
        "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
    },
    {
      title: "Trout Tales",
      image: img4,
      description:
        "Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed",
    },
  ];

  return (
    <section className="py-15">
      
      <h2 className="text-4xl text-[48px] font-[600] text-left mb-10 px-6 md:px-44">
        Member Stories
      </h2>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-44">
        {stories.map((story, index) => (
          <div
            key={index}
            className="border-t border-gray-400 md:border-none py-4 md:py-0 w-full bg-white"
          >
           
            <div className="md:hidden flex flex-col gap-2">  
              
              <h3 className="text-[20px] text-[#1C1812] font-Gluten font-[400] mb-1">
                {story.title}
              </h3>

            
              <div className="flex items-center gap-4 flex-nowrap">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-[100px] h-[100px] object-cover"
                />
                <p className="text-[#65625E] font-Inter text-[14px] font-[400] min-w-0">
                  {story.description}
                </p>
              </div>

              
              <button className="mt-2 py-1 px-3 text-[14px] bg-white text-black rounded-md w-fit border border-gray-300">
                Read More
              </button>
            </div>

           
            <div className="hidden md:flex items-start justify-start gap-2">
             
              <img
                src={story.image}
                alt={story.title}
                className="w-[200px] h-[200px] object-cover"
              />

              
              <div className="pl-4 flex-1 flex flex-col">
                <h3 className="text-[32px] text-[#1C1812] font-Gluten font-[400] mt-0">
                  {story.title}
                </h3>
                <p className="text-[#65625E] font-Inter text-[14px] font-[400] mt-0">
                  {story.description}
                </p>

             
                <button className="mt-2 py-1 px-3 text-[14px] bg-[#DFDEDD] text-black rounded-md w-fit border border-gray-300">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemberStories;
