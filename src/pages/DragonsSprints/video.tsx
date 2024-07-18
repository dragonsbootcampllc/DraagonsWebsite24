import React from "react";
import Video from "@/components/LiveVideo/Video";
import VideoInfo from "@/components/LiveVideo/VideoInfo";
import Transcription from "@/components/LiveVideo/Transcription";
import Comments from "@/components/LiveVideo/Comments";
import DragonsImage from "@/../public/Identity/Images/2023/sd.png";

const LiveVideo: React.FC = () => {

  const dummyComments = [
    {
      id: 1,
      name: "Dragons Team",
      img: "https://via.placeholder.com/50",
      comment: "Feel free to ask any questions!"
    },
    {
      id: 2,
      name: "Jane Smith",
      img: "https://via.placeholder.com/50",
      comment: "Loving the content!"
    },
    {
      id: 3,
      name: "Alice Johnson",
      img: "https://via.placeholder.com/50",
      comment: "Very informative, thanks!"
    }
  ];

  return (
   <div className="flex justify-center">
     <div className="flex max-xl:flex-col max-w-[1400px] justify-center">
      <div className="md:w-[900px]">
<div className="bg-purple-800/20 my-5 rounded-3xl">
<Video link="https://www.youtube.com/embed/1y_kfWUCFDQ" />

</div>
        <VideoInfo
          imgUrl={DragonsImage.src}
          Title="Master Development with Our Dragons Bootcamp"
          Hash="Frontend"
        />
        <Transcription Text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde nam laborum aliquam nulla, repudiandae eaque culpa! Dolor, eius incidunt vero facilis veritatis pariatur, minima laborum deserunt libero nihil harum ipsum? Sit, modi facere provident iusto eaque accusamus nam reiciendis placeat doloremque vitae iste quo non rerum deserunt officia laborum rem. Modi sequi, ex magni libero corrupti molestias error molestiae! Exercitationem, soluta. Incidunt error nam fugit, ut est dolorem maxime rem unde ipsum delectus quidem, et voluptates vitae dolore qui sapiente tempora exercitationem debitis aspernatur praesentium quo dolorum! Iste assumenda esse quam omnis ratione, autem perferendis. Quo deleniti culpa veniam est eius blanditiis rem quos, debitis, explicabo porro libero iusto optio ipsum nihil neque quidem laboriosam tempore quas totam. Soluta reiciendis autem praesentium molestias, similique aliquam incidunt illum amet molestiae temporibus ipsum laborum. Voluptas neque tenetur quibusdam, minus molestiae error assumenda omnis adipisci vero enim. Quam non quia, perspiciatis magni ipsa incidunt itaque fugiat eius saepe vitae sequi impedit adipisci doloribus blanditiis id. Asperiores ab quasi illum esse quaerat, nam possimus? Ex error voluptatum facere quaerat aut mollitia neque voluptatibus accusamus deleniti? Perspiciatis repellat totam tempora! Ducimus cumque repellat illo, nisi, hic similique, illum harum nobis facere commodi amet beatae laudantium quod doloremque necessitatibus. Repellat soluta nostrum ipsam autem error, facilis excepturi ducimus dolores consectetur, molestiae id quam assumenda cupiditate obcaecati exercitationem saepe eos quisquam iure iste voluptatum. Suscipit provident ad magni, repellendus dolorum necessitatibus veritatis qui consectetur eveniet impedit? Aliquam officiis esse quo cupiditate autem incidunt, commodi in itaque aliquid recusandae sapiente unde amet nemo iure omnis vero soluta. Possimus, voluptates qui hic tenetur facilis ut officiis quasi veritatis, iusto, at voluptatibus eum esse ratione unde officia corrupti sit repellat aliquid. Possimus sequi deserunt rem, ipsa modi ea, perspiciatis consequuntur recusandae voluptates esse quae, minima consectetur dolorem aperiam facilis magni?" />
      </div>
      <div>
        <Comments 
          comments={dummyComments}
        />
      </div>
    </div>
   </div>
  );
};

export default LiveVideo;
