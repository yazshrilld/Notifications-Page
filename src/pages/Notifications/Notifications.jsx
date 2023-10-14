import { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const Notifications = () => {
  dayjs.extend(relativeTime);
  const nowDate = dayjs().add(1, "m");
  const relativeDate = nowDate.toNow();
  const moreDate = dayjs().add(5, "m");
  const relativeMoreDate = moreDate.toNow();
  const secDate = dayjs().add(15, "s");
  const relativeSecDate = secDate.toNow();

  const [notificationsCount, setNotificationsCount] = useState(3);
  const [read, setRead] = useState(true);

  const fisrsClick = () => {
    setNotificationsCount((prevS) => prevS - 1);
  };

  const handleMarkAll = () => {
    setNotificationsCount(0);
    setRead(true);
  };
  console.log({ notificationsCount, read });

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
                  className={`absolute right-0 top-5 -translate-y-3 translate-x-6 h-[12px] w-[12px]  border-2 border-solid border-blue rounded-[50%] bg-[#0A327B] animate-ping ${
                    read === true ? "hidden" : "visible"
                  }`}
                ></button>
              </p>
              <div>
                <button className="bg-[#0A327B] w-[32px] h-[25px] text-white rounded-md">
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
            <div className="event">
              <div className="image--event">
                <img
                  src="https://s3-alpha-sig.figma.com/img/3fe9/8e57/da8fc038a6ba43fc075671b63941d303?Expires=1698019200&Signature=MdLWTSYdMKyvJbIHWkGrd79j3B1liPpCCL-YMuSJNeseJ8Mzhvf8FmLUuglKyggWlOK3RDWOlsLkuXVi3OyBIMnwzO6~6BOo0Yox01V4Ngo8CcSWYr9zP6oSrxAX6tlVXZeM1AcTFPe6IvqA~E8aJroGsdfhdVQE9XfcV2a8PO76DmdKSxdjtrwjVr0xJSJu~xcSR5C5Ahgtb4PWowUAqGigAVdySyNp4YyfsHJd2Urb~o8S4PUJ2JpdzrYsYTMECf4TCpnmp2eNno-bZ9J~-3HBafWms--C-8BGkVJblstfB6VBMoQWSItJHOODJx9v16aURchcIwGutKyEvm4U2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="user image"
                  className="rounded-full border-2 border-red-500"
                />
              </div>
              <div className="action-event text-sm">
                <p className="text-black font-bold">
                  Mark Webber{" "}
                  <span className="text-[#5E6778] font-thin italic">
                    reacted to your recent post
                  </span>{" "}
                  <span>
                    <strong className="text-[#0A327B] relative cursor-pointer">
                      My first tournament today!
                      <button
                        className={`absolute right-0 top-0 translate-y-1 translate-x-4 h-[12px] w-[12px]  border-2 rounded-[50%] bg-red-500 ${
                          read === true ? "hidden" : "visible"
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
            <div className="event">
              <div className="image--event">
                <img
                  src="https://s3-alpha-sig.figma.com/img/0c16/80be/bc0e45eb9b71ee1fdd3e99d8b506b49a?Expires=1698019200&Signature=U8qS8MkrzkKYpV5AyL2Fjv9vsQz0vw91TS7JEESauhf1V3USpZhsyaF66cliLmvh~tWVMQZ2m1iFx1PCPVU16wJDAHQnMk~SAvqjPjO9pBMjOXnbWU~W9kSmh0e1~RzKvNo~YTejIE1Q83l7rN-CZ5Gr3YxFhyv4OfHKDJW6KfD-v4WqXVURsfO4Ca-FK9-tDjutmXXhDKyzXSGrgjUJQqN5~axXlkOoOr1YtCSZkyPl6FxxS19V84XDBxYvGamp9HqlmKnwCuyvTL-VboW0lC48DtTCU0rOXhaf9Vmwt0eHttviBBFV1Rzy0ENcZx~URjMnaXE1G85NxmXEeIpWlg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="user image"
                  className="rounded-full border-2 border-green-500"
                />
              </div>
              <div className="action-event text-sm">
                <p className="text-black font-bold">
                  Jannie{" "}
                  <span className="text-[#5E6778] font-thin italic">
                    updated her
                  </span>{" "}
                  <span>
                    <strong className="text-[#0A327B] relative">
                      status
                      <button
                        className={`absolute right-0 top-0 translate-y-1 translate-x-4 h-[12px] w-[12px]  border-2 rounded-[50%] bg-red-500 ${
                          read === true ? "hidden" : "visible"
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
            <div className="event">
              <div className="image--event">
                <img
                  src="https://s3-alpha-sig.figma.com/img/44bb/fe7e/ca6ef908da8a984da65c6f4b675f6834?Expires=1698019200&Signature=FJl~pS8B6XpIT0IwbZapaxBSRo1p2X3YkMWqaTEFsluzeUDSByEZ3yIyH7knud0vvyXIEQQU8oVbC0yT6PgHdNDZcPomHyDsFolFrmziAlo0FvAWLMZMnp3xsGsC38DAFfc~yoYFtySRtJJkTLxgXWcVB0toQfE1u0mX9YJofIq69X5r1jkorMr9kxejXX4ho8pMUp31FANY6XhB6RRM0vqRqIYlhwwNTTl7i6Q2NQrnhAUSrVD7uOLNQLLoZR-o29IznqXLRrqi-ox1VFI1YKSEN8fyL2vN~IEL9sjrlr1wjw7FKhdBIdgHDV7frngRiUNfyKmB~olUzbKkzNwNhQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
                    <strong className="text-[#0A327B] relative capitalize">
                      chess club
                      <button
                        className={`absolute right-0 top-0 translate-y-1 translate-x-4 h-[12px] w-[12px]  border-2 rounded-[50%] bg-red-500 ${
                          read === true ? "hidden" : "visible"
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
            <div className="event">
              <div className="image--event">
                <img
                  src="https://s3-alpha-sig.figma.com/img/5431/223f/91e1410483ef6324ce0ffe0dbce1552d?Expires=1698019200&Signature=CxPaDH5MZOs5m1~U-bV~yyrwkXkA3hoAjE~jprQfBobq6Sm0smywStejj0qeit4kMAroz8sPMKaOrAFxgo7QRtL1L~vr~z~vUpoiqd5snmydHtJi0VsBI0NIravCQBqpWOq-su2m~BgxunVE3ikGvQGrA3yPol8Ip3HmDRKepmgYrmSl5sjqWMZOHkbZnSPK2K0yQdhZx7gTASRSXNdD3GqawrGTrb78XO-i-nhctxIaDwFVss8kyqlfLI5xwrjmnQ0ZQANGO2A51meVCUQKI0IuTnsvKEZr4e79cGFrrZ0nRUqLr-SEbsW7CiyjOaYfAQS5xoKjpN9oCaVq~qRzHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="user image"
                  className="rounded-full "
                />
              </div>
              <div className="action-event text-sm">
                <p className="text-black font-bold">
                  Rizky Hasanuddin{" "}
                  <span className="text-[#5E6778] font-thin italic">
                    sent you a private message
                  </span>
                </p>
              </div>
              <div className="time-event text-sm">{relativeSecDate}</div>
              <div className="action-event-comment border-2 p-2 hover:bg-[#E5EFFA] hover:border-none hover:ease-linear hover:duration-200 cursor-pointer rounded-[5px]">
                <p className="text-[#5E6778] font-medium text-sm">
                  Hello, thanks for setting up the Chess Club. I’ve been a
                  member for a few weeks now and I’m already having lots of fun
                  and improving my game.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg">
            <div className="event">
              <div className="image--event">
                <img
                  src="https://s3-alpha-sig.figma.com/img/4824/8e10/d7c8076c6d0819ece7f7ffc16c25eaa7?Expires=1698019200&Signature=byL55qpbXYohPqCONR65P3s-lciGg5dGsXNEd0qrmrs3KJyLydAz8Pb8ZUq5pUQSy1ZdBv8MqqNGxIAnuhGRKpAGIL8wYaFqj2ome2hxT9THqKJoG7DxgJPCDpu7aKOHGA4NZyou64YF1CK01XE2nRoN6f4SkwEpMKfim4QsnEutHcTsKD3-9qIm5rl0MYFE5Nxmhc9uCMvW2SCsQC7ugLif1VDr9yKx0lu9LBHLXYq0ahUnX2A8FTbsI~e5S4tQRtOv-6LN-jud~BRNA9~tNM7CY~qrTXKXQRpydBnGGb97tUrQjkqW1XoEzSGiwVnLcXQVdShgaCjLziFCb9fd1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
              <div className="comment-image--event">
                <img
                  src="https://s3-alpha-sig.figma.com/img/6110/3a53/2235e7756ac13d12213d12efd2f4d2a5?Expires=1698019200&Signature=YUZI464vSuAjM3acqZ~dWoR4d2Zc-eNUc1xh8u9pdGHvnwAo87yBqB-1HoBxV61am1S2BZhYtSYljHNH9b~cNURBGnZXGGqR9sGsoATPuFPoR0IdYzFJjWUV1u3HRpjiKZLqW4Dgk9qyh7lkwe9zROCEjCWnXxDU~Lu35L9I-DvZnRb~~I-DgkEwkSuY37diwACD-LZ~9lACymO8HGS82-uUhnMYKuKydpFF00N0aCZOhNkAbFLhJmKkD3iNwW~k3QfPHlAFhowqQmiS9da8IilI2HHj2BLUEhrGmo1bdz5fkGrQp0AseqPUnVClWtFLiQsfIq19PreocU1roi-~Kw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="user image"
                  className="outline-none rounded-lg w-[49px] h-[39px]"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg">
            <div className="event">
              <div className="image--event">
                <img
                  src="https://s3-alpha-sig.figma.com/img/6b1f/d533/a043b91129676cf909b26ff15d192d79?Expires=1698019200&Signature=fpbfyTskTmmKk3Pclgf9PAn7u8HgJbMsMuluAFGJBcyHfYj9XttibnNPP2idGDmw6psLumQqhpgcFZoM~3KddTl1OLDxqHURkLELyaP3XiGvUumq~zhdsXZDO2bmERkykYOp2K6FANsOsPbtVDrdL~IpE-0muMvYZojgzoYh-f1YdazXDFM9PkWJjBikQeHCqxUg9OrEqLmC8S0tVXy8E5qhCZIXB6utNwLpa5qoGV4vJmIxvop4tbVmM4nHL1lDkRhNAZQmCDLA-VoxLGbJgvcepZRFFLL4zI-fS8vYaUjE9N465leHqxmvjrtlh0q7cqECO5dMxAvPA6kRnB084g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
            <div className="event">
              <div className="image--event">
                <img
                  src="https://s3-alpha-sig.figma.com/img/405d/fba2/2e58681ac44c6474bb69ac31ee3cf7a6?Expires=1698019200&Signature=Jmu8waobnhhQcdvuU3sMCgR1nyO2ZepvyFw0YTqhi6En68mOxMfr7lDEdjkx5-a5sS49Tui4NYO3mf6yBscBn5THGlJi~6bQ~XIXJzZgQ9JDF9OlUB0J3mc4amAxWzmnOubWuDLC-QH2NituQn4PG1hHLQVoyAHgo9T5MuFQTq0sbgyFyDEdlyq9~3wUuHIa~Rb0~Ns1ee6kq0KSUulSnI0pDBI0HkbMxwROZFqvGh6067t5ILThzogZSwExAyDR6vu2QRBnv0JnPQt5zzY8~NxxhpdbAaSgZiSrgyhTcVg66jYqbO~LV0LuRHxO~yDVYi~fkOEcy70cyGLcWnopJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
    </>
  );
};

export default Notifications;
