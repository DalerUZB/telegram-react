import React from "react";

const App = () => {
  return (
    <div class="container">
      <div class="wrapper">
        <header>
          <span>Unigram New</span>
          <div class="images">
            <img src="./images/ChromeMinimize.svg" alt="minus" />
            <img src="./images/ChromeMaximize.svg" alt="cvadrat" />
            <img src="./images/ChromeClose.svg" alt="x" />
          </div>
        </header>
        <div class="wrapper-two-div">
          <div class="left-div">
            <div class="left-header-div">
              <div class="image-burger">
                <img src="../" alt="" />
              </div>
              <span>Chats</span>
            </div>
            <div class="input-div">
              <span>
                <input type="text" placeholder="Search" />
                <img src="./searchIcon/Vector.svg" alt="" />
              </span>
            </div>
            <div class="div-component">
              <div class="image-info-div">
                <div class="image-div-radius">
                  <img
                    class="image-person"
                    src="https://thumbs.dreamstime.com/b/picturesque-autumn-scenery-santa-maddalena-village-church-road-colorful-trees-meadows-foreground-mountain-peaks-159426189.jpg"
                    alt="image"
                  />
                </div>
                <span class="radiusGreen"></span>
                <div class="parent-div-description">
                  <span class="title">Sweetie</span>
                  <span class="description">I love you so much!</span>
                </div>
              </div>

              <div class="clock-info-div">
                <span>8:32 PM</span>
              </div>
            </div>
          </div>

          <div class="right-div">
            <div class="right-header">
              <div class="info-chat">
                <div class="chat-image-div">
                  <img
                    src="https://thumbs.dreamstime.com/b/picturesque-autumn-scenery-santa-maddalena-village-church-road-colorful-trees-meadows-foreground-mountain-peaks-159426189.jpg"
                    alt=""
                  />
                </div>
                <div class="chat-div-title">
                  <span>Design Review Chat</span>
                  <span>5 members, 3 online</span>
                </div>
              </div>
              <div class="wrapper-circle">
                <div class="circle circle-1">
                  <img src="./rightHeader/Shape.svg" alt="search" />
                </div>
                <div class="circle circle-2">
                  <img src="./rightHeader/Shape-2.svg" alt="message" />
                </div>
                <div class="circle circle-3">
                  <img src="./rightHeader/Shape-1.svg" alt="info" />
                </div>
              </div>
            </div>

            <div class="div-wrapper-components">
              <div class="for-reverse">
                <div class="wrapper-info-component">
                  <div class="person">
                    <img
                      src="https://cdn4.vectorstock.com/i/1000x1000/47/93/person-icon-iconic-design-vector-18314793.jpg"
                      alt="person"
                    />
                  </div>
                  <div class="wrapper-div-messages">
                    <span>
                      i love figma! There is sooooo many features and its ui so
                      intuitive!
                    </span>
                    <span>10:03 AM</span>
                  </div>
                </div>
                <div class="wrapper-info-component">
                  <div class="person">
                    <img
                      src="https://cdn4.vectorstock.com/i/1000x1000/47/93/person-icon-iconic-design-vector-18314793.jpg"
                      alt="person"
                    />
                  </div>
                  <div class="wrapper-div-messages">
                    <span>
                      i love figma! There is sooooo many features and its ui so
                      intuitive!
                    </span>
                    <span>10:03 AM</span>
                  </div>
                </div>
                <div class="wrapper-info-component">
                  <div class="person">
                    <img
                      src="https://cdn4.vectorstock.com/i/1000x1000/47/93/person-icon-iconic-design-vector-18314793.jpg"
                      alt="person"
                    />
                  </div>
                  <div class="wrapper-div-messages">
                    <span>
                      i love figma! There is sooooo many features and its ui so
                      intuitive!
                    </span>
                    <span>10:03 AM</span>
                  </div>
                </div>
                <div class="wrapper-info-component">
                  <div class="person">
                    <img
                      src="https://cdn4.vectorstock.com/i/1000x1000/47/93/person-icon-iconic-design-vector-18314793.jpg"
                      alt="person"
                    />
                  </div>
                  <div class="wrapper-div-messages">
                    <span>chappa qushilish kir</span>
                    <span>10:03 AM</span>
                  </div>
                </div>
                <div class="wrapper-info-component">
                  <div class="person">
                    <img
                      src="https://cdn4.vectorstock.com/i/1000x1000/47/93/person-icon-iconic-design-vector-18314793.jpg"
                      alt="person"
                    />
                  </div>
                  <div class="wrapper-div-messages">
                    <span>chappa qushilish kir</span>
                    <span>10:03 AM</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="send-message-div">
              <div class="sendFileToMessage">
                <img
                  src="./footerSendMessage/Shape-2.svg"
                  alt=""
                  class="chooseFile"
                />
                <input
                  class="sendMessage"
                  type="text"
                  placeholder="Write a message..."
                />
              </div>
              <div class="sendEmojiVoice">
                <img src="./footerSendMessage/Shape-1.svg" alt="" />
                <img src="./footerSendMessage/Shape.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
