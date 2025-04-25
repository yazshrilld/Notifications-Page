import { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import FirstImage from "../../assets/img/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import SecondImage from "../../assets/img/alex-suprun-ZHvM3XIOHoE-unsplash.jpg";
import ThirdImage from "../../assets/img/alexander-hipp-iEEBWgY_6lA-unsplash.jpg";
import FourthImage from "../../assets/img/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";
import FifthImage from "../../assets/img/diego-hernandez-MSepzbKFz10-unsplash.jpg";
import SixthImage from "../../assets/img/ferr-studio-G2Qjx1y9aAM-unsplash.jpg";
import SeventhImage from "../../assets/img/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import EighthImage from "../../assets/img/vicky-hladynets-C8Ta0gwPbQg-unsplash.jpg";

const Notifications = () => {
  const repeatedImages = Array(30).fill(FifthImage); // 30 identical images

  dayjs.extend(relativeTime);
  const nowDate = dayjs().add(1, "m");
  const relativeDate = nowDate.toNow();
  const moreDate = dayjs().add(5, "m");
  const relativeMoreDate = moreDate.toNow();
  const secDate = dayjs().add(15, "s");
  const relativeSecDate = secDate.toNow();

  const [notificationsCount, setNotificationsCount] = useState(3);
  const [read, setRead] = useState(false);

  const actionNotification = {
    status: {
      name: "ST",
      value: 1,
      read: false,
    },
    comment: {
      name: "CT",
      value: 2,
      read: false,
    },
    group: {
      name: "GP",
      value: 3,
      read: false,
    },
    reaction: {
      name: "RT",
      value: 4,
      read: false,
    },
  };

  const [myActions, setMyActions] = useState({
    clickedStatus: actionNotification.status.read,
    clickedComment: actionNotification.comment.read,
    clickedGroup: actionNotification.group.read,
    clickedReacted: actionNotification.comment.read,
  });

  const fisrsClick = () => {};

  const handleMarkAll = () => {
    setNotificationsCount(0);
    setMyActions((prevS) => ({
      ...prevS,
      clickedStatus: true,
      clickedComment: true,
      clickedGroup: true,
    }));
    setRead(true);
  };

  const handleFirstClick = () => {
    if (!myActions.clickedStatus) {
      setNotificationsCount(notificationsCount - 1);
      setMyActions((prevS) => ({
        ...prevS,
        clickedStatus: true,
      }));
    }
  };

  const handleSecondClick = () => {
    if (!myActions.clickedComment) {
      setNotificationsCount(notificationsCount - 1);
      setMyActions((prevS) => ({
        ...prevS,
        clickedComment: true,
      }));
    }
  };

  const handleThirdClick = () => {
    if (!myActions.clickedGroup) {
      setNotificationsCount(notificationsCount - 1);
      setMyActions((prevS) => ({
        ...prevS,
        clickedGroup: true,
      }));
    }
  };

  const handleFourthClick = () => {
    console.log("I am clicked");
  };

  return (
    <>
      <div
        className={`min-h-screen font-light rounded-md xsm:bg-white md:w-[768px] md:mx-auto md:max-w-full md:px-10`}
      >
        <header className="container mt-[2rem] mb-[1rem]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 mt-[2rem]">
              <p
                className="text-xl text-black font-bold relative cursor-pointer"
                onClick={fisrsClick}
              >
                Notifications{" "}
                <button
                  className={`absolute right-0 top-5 -translate-y-3 translate-x-6 h-[12px] w-[12px] border-2 border-solid border-blue rounded-[50%] bg-[#0A327B] animate-ping ${
                    read === true || notificationsCount === 0
                      ? "hidden"
                      : "visible"
                  }`}
                ></button>
              </p>
              <div>
                <button className={`bg-[#0A327B] w-[32px] h-[25px] text-white rounded-md ${read === true ? "ease-linear duration-200 rotate-180"
                      : ""}`}>
                  {notificationsCount}
                </button>
              </div>
            </div>
            <p
              className="text-sm mt-[2rem] cursor-pointer"
              onClick={handleMarkAll}
            >
              Mark all as read
            </p>
          </div>
        </header>

        <section className="container space-y-4">
          <div className="bg-[#F7FAFD] rounded-lg">
            <div className="event cursor-pointer">
              <div className="image--event">
                <img
                  src={FifthImage}
                  alt="user image"
                  className= "rounded-full h-50 border-[3px] border-purple-500"
                />
              </div>
              <div className="action-event text-sm">
                <p className="text-black font-bold">
                  Mark Webber{" "}
                  <span className="text-[#5E6778] font-thin italic">
                    reacted to your recent post
                  </span>{" "}
                  <span>
                    <strong
                      className="text-[#0A327B] relative cursor-pointer"
                      onClick={handleFirstClick}
                    >
                      My first tournament today!
                      <button
                        className={`absolute right-0 top-0 translate-y-1 translate-x-4 h-[12px] w-[12px]  border-2 rounded-[50%] bg-red-500 ${
                          myActions.clickedStatus === true
                            ? "hidden"
                            : "visible"
                        }`}
                      ></button>
                    </strong>
                  </span>
                </p>
              </div>
              <div className="time-event text-sm">{relativeDate}</div>
            </div>
          </div>

          <div className="bg-[#F7FAFD] rounded-lg">
            <div className="event cursor-pointer">
              <div className="image--event">
                <img
                  src={SecondImage}
                  alt="user image"
                  className={`rounded-full border-green-500 ${
                    !myActions.clickedComment === true
                      ? "border-[3px]"
                      : "border-0"
                  }`}
                />
              </div>
              <div className="action-event text-sm">
                <p className="text-black font-bold">
                  Jannie{" "}
                  <span className="text-[#5E6778] font-thin italic">
                    updated her
                  </span>{" "}
                  <span>
                    <strong
                      className="text-[#0A327B] relative"
                      onClick={handleSecondClick}
                    >
                      status
                      <button
                        className={`absolute right-0 top-0 translate-y-1 translate-x-4 h-[12px] w-[12px]  border-2 rounded-[50%] bg-red-500 ${
                          myActions.clickedComment === true
                            ? "hidden"
                            : "visible"
                        }`}
                      ></button>
                    </strong>
                  </span>
                </p>
              </div>
              <div className="time-event text-sm">{relativeMoreDate}</div>
            </div>
          </div>

          <div className="bg-[#F7FAFD] rounded-lg">
            <div className="event cursor-pointer">
              <div className="image--event">
                <img
                  src={ThirdImage}
                  alt="user image"
                  className="rounded-full "
                />
              </div>
              <div className="action-event text-sm">
                <p className="text-black font-bold">
                  Jacob Thompson{" "}
                  <span className="text-[#5E6778] font-thin italic">
                    has joined your group
                  </span>{" "}
                  <span>
                    <strong
                      className="text-[#0A327B] relative capitalize"
                      onClick={handleThirdClick}
                    >
                      chess club
                      <button
                        className={`absolute right-0 top-0 translate-y-1 translate-x-4 h-[12px] w-[12px]  border-2 rounded-[50%] bg-red-500 ${
                          myActions.clickedGroup === true ? "hidden" : "visible"
                        }`}
                      ></button>
                    </strong>
                  </span>
                </p>
              </div>
              <div className="time-event text-sm">{relativeSecDate}</div>
            </div>
          </div>

          <div className="rounded-lg">
            <div className="event cursor-pointer">
              <div className="image--event">
                <img
                  src={SecondImage}
                  alt="user image"
                  className="rounded-full "
                />
              </div>
              <div className="action-event text-sm">
                <p className="text-black font-bold">
                  Rizky Hasanuddin{" "}
                  <span className="text-[#5E6778] font-thin italic" onClick={handleFourthClick}>
                    sent you a private message
                  </span>
                </p>
              </div>
              <div className="time-event text-sm">{relativeSecDate}</div>
              <div className="action-event-comment border-2 p-2 hover:bg-[#E5EFFA] hover:border-none hover:ease-linear hover:duration-200 cursor-pointer rounded-[5px]">
                <p className="text-[#5E6778] font-medium text-sm" onClick={handleFourthClick}>
                  Hello, thanks for setting up the Chess Club. I’ve been a
                  member for a few weeks now and I’m already having lots of fun
                  and improving my game.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg">
            <div className="relative event cursor-pointer">
              <div className="image--event">
                <img
                  src={ThirdImage}
                  alt="user image"
                  className="rounded-full "
                />
              </div>
              <div className="action-event text-sm">
                <p className="text-black font-bold">
                  Kimberly Smith{" "}
                  <span className="text-[#5E6778] font-thin italic">
                    commented on your picture
                  </span>
                </p>
              </div>
              <div className="time-event text-sm">{relativeSecDate}</div>
              <div className="comment-image--event md:absolute bottom-50 right-5">
                <img
                  src={SixthImage}
                  alt="user image"
                  className="outline-none rounded-lg w-[49px] h-[39px]"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg">
            <div className="event cursor-pointer">
              <div className="image--event">
                <img
                  src={FifthImage}
                  alt="user image"
                  className="rounded-full"
                />
              </div>
              <div className="action-event text-sm">
                <p className="text-black font-bold">
                  Nathan Peterson{" "}
                  <span className="text-[#5E6778] font-thin italic">
                    reacted to your recent post
                  </span>{" "}
                  <span>
                    <strong className="text-[#0A327B] relative">
                      5 end-game strategies to increase your win rate
                    </strong>
                  </span>
                </p>
              </div>
              <div className="time-event text-sm">{relativeDate}</div>
            </div>
          </div>

          <div className="rounded-lg">
            <div className="event cursor-pointer">
              <div className="image--event">
                <img
                  src={SixthImage}
                  alt="user image"
                  className="rounded-full "
                />
              </div>
              <div className="action-event text-sm">
                <p className="text-black font-bold capitalize">
                  Anna kim{" "}
                  <span className="text-[#5E6778] font-thin italic lowercase">
                    left the group
                  </span>{" "}
                  <span>
                    <strong className="text-[#0A327B] relative capitalize">
                      chess club
                    </strong>
                  </span>
                </p>
              </div>
              <div className="time-event text-sm">{relativeMoreDate}</div>
            </div>
          </div>
        </section>
      </div> 
    
      {/* <div>{""}</div>
      <section class="bg-[#DFFFE0] p-10">
        <h2 class="text-[#333] text-xl font-bold">Welcome to My Page</h2>
        <p class="text-[#333]">This section has a calm light green background.</p>
      </section>

      <section class="bg-[#FFF4E0] p-10">
        <h2 class="text-[#333] text-xl font-bold">More Info</h2>
        <p class="text-[#333]">This section uses a soft orange for warmth.</p>
      </section>
      <section class="bg-[#DFFFE0] p-12">
        <div class="bg-[#FFF4E0] p-6 rounded-lg shadow">
          <h3 class="text-lg font-semibold text-[#333]">Card Title</h3>
          <p class="text-[#333]">Card content on light orange against green backdrop.</p>
        </div>
      </section>
      {/* <div style="background: linear-gradient(to right, #DFFFE0, #FFF4E0);" className="p-12"> */}
      {/* <h1 class="text-xl font-bold text-[#333] bg-red-500">Mixed Color Background</h1>
      <div className="flex flex-row items-start gap-x-[20px] bg-green-200 relative">
        <div className="sticky top-0 self-start">
          <p className="text-blue-500 mb-2">First image</p>
          <img
            src={FirstImage}
            alt="user image"
            className="rounded-full h-[50px] w-[50px] border-[3px] border-purple-500"
          />
        </div>
        <div>
          <p className="text-blue-500">Second images</p>
          {repeatedImages.map((img, index) => (
            <div key={index} className="mb-2">
              <img
                src={img}
                alt={`user-${index}`}
                className="rounded-full h-[50px] w-[50px] border-[3px] border-purple-500"
              />
            </div>
          ))}
        </div>
      </div> */}
      {/* </div> */}
    </>
  );
};

export default Notifications;
