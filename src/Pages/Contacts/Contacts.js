import React, { useState } from "react";
import GlitchText from "react-glitch-effect/core/GlitchText";
import TgIcon from "../../media/Telegram.svg";
import MailIcon from "../../media/Mail.svg";
import "./ContactsStyles.css";

export const Contacts = () => {
  const [isDisabled, setDisabled] = useState(false);
  return (
    <section className="ContactsWrapper panel" id="Pan">
      {/* marquee*/}
      <div className="TitleContactsContainer">
        <div class="marquee">
          <div class="track">
            <div class="content">
              &nbsp;contacts contacts contacts contacts contacts contacts
              contacts contacts contacts contacts contacts contacts contacts
              contacts contacts contacts contacts contacts contacts contacts
              contacts contacts contacts contacts contacts contacts contacts
              contacts contacts contacts contacts contacts contacts contacts
              contacts contacts contacts contacts contacts contacts contacts
              contacts contacts contacts contacts contacts contacts contacts
              contacts contacts contacts contacts contacts contacts
            </div>
          </div>
        </div>
      </div>
      {/* marquee end*/}
      <div className="ContactsContainer">
        <div className="infoContacts">
          <div class="arrow-wrapper">
            <div class="arrow"></div>
            <div class="arrow"></div>
            <div class="arrow"></div>
          </div>
          <GlitchText
            duration="3820"
            component="h1"
            color1="#4CA8E5"
            color2="#E82167"
            disabled={isDisabled}>
            <h1>
              Interested <br />
              to <br />
              collaborate <br />
              Together?
              <br />
            </h1>
          </GlitchText>
          <div class="arrow-wrapper">
            <div class="arrow"></div>
            <div class="arrow"></div>
            <div class="arrow"></div>
          </div>
        </div>

        <div className="TalkWrapper">
          <div classname="TalkContainer">
            <div className="WhiteBox"></div>
            <div className="BlackBox">
              <h3>Let's talk</h3>
              <div class="arrow-wrapper talkArrowWrapper">
                <div class="arrow talkArrow"></div>
                <div class="arrow talkArrow"></div>
                <div class="arrow talkArrow"></div>
              </div>
              <div class="wave-text TalkWave">
                TALK TALK TALK TALK
                <br />
                TALK TALK TALK TALK
                <br />
                TALK TALK TALK TALK
                <br />
                TALK TALK TALK TALK
                <br />
                TALK TALK TALK TALK
                <br />
                TALK TALK TALK TALK
                <br />
                TALK TALK TALK TALK
                <br />
                TALK TALK TALK TALK
              </div>
              <div class="arrow-wrapper talkArrowWrapper talkArrowWrapperSecond">
                <div class="arrow talkArrow"></div>
                <div class="arrow talkArrow"></div>
                <div class="arrow talkArrow"></div>
              </div>

              <a
                className="telegramLink"
                href="https://t.me/mikii249"
                target="_blank">
                <img className="telegramIcon" src={TgIcon} />
              </a>
              <a className="discordLink" href="mailto: ayanami10009@gmail.com">
                <img className="discordIcon" src={MailIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* marquee*/}
      <div className="TitleContactsContainer">
        <div class="marquee">
          <div class="track">
            <div class="content">
              &nbsp;contacts contacts contacts contacts contacts contacts
              contacts contacts contacts contacts contacts contacts contacts
              contacts contacts contacts contacts contacts contacts contacts
              contacts contacts contacts contacts contacts contacts contacts
              contacts contacts contacts contacts contacts contacts contacts
              contacts contacts contacts contacts contacts contacts contacts
              contacts contacts contacts contacts contacts contacts contacts
              contacts contacts contacts contacts contacts contacts
            </div>
          </div>
        </div>
      </div>
      {/* marquee end*/}
    </section>
  );
};
export default Contacts;
