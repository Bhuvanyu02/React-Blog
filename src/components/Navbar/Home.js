import React from "react";
import img1 from "./HOME/img_wall.webp";
import img2 from "./HOME/img_2.webp";
import img3 from "./HOME/img_3.jpg";
import "./HOME/Home.css";
import L_grid from "./HOME/L_grid";
import L_grid2 from "./HOME/L_grid2";
import L_grid3 from "./HOME/L_grid3";
import Article_component from "./HOME/Article_component";
import Article_component2 from "./HOME/Article_component2";
import Article_component3 from "./HOME/Article_component3";
import Article_component4 from "./HOME/Article_component4";

import Post_component from "./HOME/Post_component";
import Post_component2 from "./HOME/Post_component2";
import Post_component3 from "./HOME/Post_componet3";

import Heading_component from "./HOME/Heading_component";
export default function Home() {
  return (
    <>
      {/* HEADER SECTION */}
      <section>
        <div className="maindiv">
          <div>
            <img src={img3} className="img1" alt="Image1"></img>
          </div>
          <div className="imgdiv">
            <img src={img2} className="img2" alt="Image2" />
            <img src={img1} className="img2" alt="Image3" />
          </div>
        </div>
      </section>
      {/* LATEST SECTION */}
      <section>
        <div className="Latest">
          <Heading_component text={"The Latest"} />
          <div className="latest_grid_row">
            <L_grid />
            <L_grid2 />
            <L_grid3 />
          </div>
        </div>
      </section>

      {/* ARTICLES SECTION */}
      <section>
        <div className="art_post">
          <div className="article">
            <Heading_component text={"Latest Articles"} />
            <div className="art2">
              <Article_component
                head={"Is this really the end of Twitter?"}
                para={
                  "The hashtag RIP Twitter is trending and lots of the site's users are scrambling to download their data.They're also sharing alternative places to find them."
                }
              />
              <Article_component2
                head={"MrBeast overtakes PewDiePie as most-subscribed YouTuber"}
                para={
                  "MrBeast has ended PewDiePie's reign as the YouTuber with the most subscribers - the first change at the top in almost 10 years."
                }
              />
              <Article_component3
                head={"FTX crypto exchange owes biggest creditors $3.1bn"}
                para={
                  "Cryptocurrency exchange FTX owes its 50 largest creditors almost $3.1bn (£2.6bn) but has not named any."
                }
              />
              <Article_component4
                head={"China urges military veterans to work at iPhone factory"}
                para={
                  "China wants retired military staff to help boost production at the world's largest iPhone factory in Zhengzhou."
                }
              />
            </div>
          </div>
          <div className="post">
            <Heading_component text={"Top Posts"} />
            <div className="art2">
              <Post_component />
              <Post_component2 />
              <Post_component3 />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
