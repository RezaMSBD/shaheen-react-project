import React from "react";
import "./Hero.css";
import heropic from "../../assets/images/heropic.png";

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero-left">
        <h1>THIS IS THE HERO SECTION</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          provident explicabo distinctio! A fugiat natus sint odit quidem in
          omnis ea vero sit, dolorem quisquam ab quas porro, cum veritatis eum
          accusamus! Veritatis dolorum dolore ipsam enim tempora dolor illo quae
          nihil a sequi obcaecati cupiditate, odio cumque. Alias dolores,
          corporis perferendis sapiente qui, ad impedit fuga, cum ab similique
          vitae maxime quod suscipit temporibus maiores debitis! Alias facilis
          iusto dicta tenetur, tempora, sit ipsum sed temporibus natus beatae ad
          exercitationem fuga commodi qui nam quidem expedita eaque perspiciatis
          vero? Et molestias eaque impedit facilis corporis expedita dolorum
          aliquam odio.
        </p>

        <div className="serchButton">
          <input
            className="input-button"
            type="text"
            placeholder="What is your mind"
          />
          <button className="btn">Search</button>
        </div>
      </div>

      <div className="hero-right">
        <img src={heropic} alt="" />
      </div>
    </div>
  );
};

export default Hero;
