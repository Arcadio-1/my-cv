import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";
const Video = () => {
  return (
    <div>
      <div className="content flex flex-col items-center">
        <div className="">
          <ReactPlayer
            light={
              <Image
                src={"/video/tumbnail_1.jpg"}
                alt="Digikala Clone"
                width={400}
                height={250}
                className="rounded-lg w-full"
              />
            }
            url="https://youtu.be/fP-_-p-z8tA?si=uM9XkHNeSsTIXfye"
            height="auto"
            width="auto"
            controls={true}
            className="bg-dark overflow-hidden !max-w-[45rem] !max-h-[28rem] sm:!w-[40rem] sm:!h-[25rem] md:!w-[42rem] md:!h-[25rem]  xl:!w-[50rem] xl:!h-[30rem] pl-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
