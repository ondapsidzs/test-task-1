import React from "react";

import { Container, Check, RightArrow } from "./styles/Content2.styles";

const Content2 = () => {
  return (
    <Container className="flex fd-col">
      <section className="flex ai-c jc-sb">
        <div>
          <h3>
            Alen Sultanic
            <Check />
          </h3>
          <p>Nothing Held Back Coach</p>
        </div>
        <div className="flex ai-c">
          <p className="p1">
            <b>CALL TYPE:</b> EXPERT TRAINING
          </p>
          <p className="p1">
            <b>DATE OF CALL:</b> MAY 12TH, 2021
          </p>
          <p className="p1">
            <b>TIME OF CALL:</b> 11:00 A.M. EST
          </p>
        </div>
      </section>
      <p>
        Godzilla, Kong, and Mechagodzilla arrive in PUBG Mobile's version 1.4
        update which also brings microcosm gameplay, a new vehicle, Hangar which
        is new arena map available beginning June 1, and more. Check out the
        trailer. Godzilla, Kong and Mechagodzilla join the Battle Royale as
        non-hostile characters that may bring Titan Crystals, destroy Apex
        Cybernetics and Monster Settlements and drop enhancement items in the
        Erangel, Sanhok and Livk maps respectively. The Version 1.4 update is
        available now.
      </p>
      <p className="p2">Show more...</p>
      <div className="flex ai-c jc-sb sign-up-for-the-next-call">
        <button>SIGN UP FOR THE NEXT CALL</button>
        <div className="flex ai-c">
          Go to Next Lesson
          <RightArrow />
        </div>
      </div>
    </Container>
  );
};

export default Content2;
