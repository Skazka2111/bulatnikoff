import { useState, Fragment } from "react";
import landing from "./assets/img/landing.jpg";
import copy from "./assets/img/copy.png";

// Импорты всех картинок
import vk from "./assets/img/vk.png";
import telegram from "./assets/img/telegram.png";
import instagram from "./assets/img/instagram.png";
import instagramWhite from "./assets/img/instagram_white.png";

function App() {
    const [currentPage, setCurrentPage] = useState(0);
    const [copied, setCopied] = useState(false);

    const utm_medium =
        new URLSearchParams(window.location.search).get("utm_medium") ?? 32099646;
    const promokod =
        new URLSearchParams(window.location.search).get("promokod") ??
        "pkrskljdga354";

    return (
        <div className="application">
            <div className="mainBlock">
                {currentPage === 0 ? (
                    <Fragment>
                        <img src={landing} alt="landing" className="landingPicture" />
                        <div className="blockTexts">
                            <h2 className="title">Продажи через переписки</h2>
                            <p>
                                Обучу продавать онлайн-школы в переписках с конверсией до 30% без марафонов, вебинаров и прочих танцев.
                            </p>
                            <a href={`https://vk.com/app5898182_-196295046#s=1471896&utm_medium=${utm_medium}`} target={"_blank"} className="linkWithImage" rel="noreferrer">
                                <img className="linkImage" src={vk} alt="ВКонтакте" />
                            </a>
                            <a href={`https://salebot.site/r/b42e15d59506bfc2f7cba61180fb1016_1?ref=${promokod}`} target="_blank" className="linkWithImage" rel="noreferrer">
                                <img className="linkImage" src={telegram} alt="Telegram" />
                            </a>
                          
                            <span
                                className={"linkWithImage tap"}
                                onClick={() => setCurrentPage(1)}
                            >
                <img className="linkImage" src={instagram} alt="Instagram" />
              </span>
                        </div>
                    </Fragment>
                ) : (
                    <Fragment>
                        <img src={landing} alt="landing" className="landingPicture" />
                        <div className="blockTexts">
                            <h2 className="title">Instagram</h2>
                            <p>
                                Нажмите на кнопку ниже и у Вас автоматически скопируется Ваш код
                                в буфер обмена, затем переходите в профиль Instagram, открывайте
                                директ, отправляйте скопированный текст и получите кейс как я заработал 10 миллионов рублей с рентабельностью 98% на охватах в 500
                            </p>
                            <div className="inputZone">
                                <input
                                    className="promokodInput"
                                    readOnly={true}
                                    value={copied ? "Скопировано!" : "Мой промокод " + promokod}
                                />
                                <button
                                    className="copyButton tap"
                                    onClick={() => {
                                        navigator.clipboard.writeText("Мой промокод " + promokod).then(() => {
                                            setCopied(true);
                                            setTimeout(() => {
                                                setCopied(false);
                                            }, 1000);
                                        })
                                    }}
                                >
                                    <img src={copy} alt={"copy icon"} />
                                </button>
                            </div>
                            <div className="instagramLink">
                                <a
                                    href={"https://instagram.com/iliabulatnikov"}
                                    target={"_blank"}
                                    className="instagramLinkButton" rel="noreferrer"
                                >
                                    <img
                                        className="instagramLinkButtonImage"
                                        src={instagramWhite}
                                        alt="Instagram"
                                    />{" "}
                                    Перейти в профиль
                                </a>
                            </div>
                            <span className="tap" onClick={() => setCurrentPage(0)}>
                Вернуться назад
              </span>
                        </div>
                    </Fragment>
                )}
            </div>
        </div>
    );
}

export default App;
