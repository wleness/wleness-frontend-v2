import React from "react";

function HomeVideosCards() {
  const videos = [
    "2S4PLSQlx3c",
    "qFK2nGvTBbQ",
    "LoqrKEAU_GU",
    "u9k6DJQUC24",
    "-Gn5drRIl_A",
    "ozmjKgnTPx0",
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
      {videos.map((value, i) => {
        return (
          <iframe
            key={i}
            className="h-52 w-full rounded-lg"
            src={`https://www.youtube.com/embed/${value}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
        );
      })}
    </div>
  );
}

export default HomeVideosCards;
