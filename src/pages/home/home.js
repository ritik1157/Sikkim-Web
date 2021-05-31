import React from "react";
import "./home.scss";
import images from "../../Asset/images";
import Header from "../../component/Header";

const Home = () => {
    const KeyPoints = [
        { key: "Capital", value: "Gangtok" },
        { key: "Area", value: "7,096 sq Km" },
        { key: "Population", value: "6.19 Lakhs" },
        { key: "Literacy Rate", value: "78.01%" },
        { key: "Districts", value: "4" },
        { key: "Villages", value: "460" },
    ];

    const directory = [
        { key: "Fire and Rescue", value: "101" },
        { key: "Child HelpLine", value: "1098" },
        { key: "Women HelpLine", value: "1091" },
        { key: "Ambulance HelpLine", value: "102" },
        { key: "Police Control Room", value: "100" },
        { key: "Border Road Organisation", value: "	03592-203241, 202268" },
        { key: "Corona/Covid HelpLine", value: "102" },
    ];
    return (
        <>
            <div
                className="heading-container"
                style={{ backgroundImage: `url(${images.CoverImage})` }}
            >
                <Header />

                <div className="main-text">
                    <div>SIKKIM</div>
                    <div className="subtext">window to heaven</div>
                </div>
            </div>

            <section>
                <div className="row-1">
                    <div className="card about">
                        <h3>Welcome to Sikkim</h3>
                        <p>
                            Sikkim (/ˈsɪkɪm/) is a state in northeastern India.
                            It borders Tibet in the north and northeast, Bhutan
                            in the east, Nepal in the west, and West Bengal in
                            the south. Sikkim is also located close to India's
                            Siliguri Corridor near Bangladesh. Sikkim is the
                            least populous and second smallest among the Indian
                            states. A part of the Eastern Himalaya, Sikkim is
                            notable for its biodiversity, including alpine and
                            subtropical climates, as well as being a host to
                            Kangchenjunga, the highest peak in India and third
                            highest on Earth. Sikkim's capital and largest city
                            is Gangtok. Almost 35% of the state is covered by
                            the Khangchendzonga National Park. The Kingdom of
                            Sikkim was founded by the Namgyal dynasty in the
                            17th century. It was ruled by a Buddhist priest-king
                            known as the Chogyal. It became a princely state of
                            British India in 1890. After 1947, Sikkim continued
                            its protectorate status with the Republic of India.
                            It enjoyed the highest literacy rate and per capita
                            income among Himalayan states. In 1973,
                            anti-royalist riots took place in front of the
                            Chogyal's palace. In 1975, the monarchy was deposed
                            by the people. A referendum in 1975 led to Sikkim
                            joining India as its 22nd state. Modern Sikkim is a
                            multiethnic and multilingual Indian state. The
                            official languages of the state are English, Nepali,
                            Sikkimese and Lepcha. Additional official languages
                            include Gurung, Limbu, Magar, Mukhia, Newari, Rai,
                            Sherpa and Tamang for the purpose of preservation of
                            culture and tradition in the state. English is
                            taught in schools and used in government documents.
                            The predominant religions are Hinduism and Vajrayana
                            Buddhism. Sikkim's economy is largely dependent on
                            agriculture and tourism, and as of 2014 the state
                            had the third-smallest GDP among Indian states,
                            although it is also among the fastest-growing.
                        </p>
                    </div>

                    <div className="card glance">
                        <h3>Sikkim At a glance</h3>
                        <ul>
                            {KeyPoints.map((obj, idx) => (
                                <li key={idx}>
                                    <div className="key">{obj.key}</div>
                                    <div className="separator">:</div>
                                    <div className="value">{obj.value}</div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card profile">
                        <h3>Hon'ble Chief Minister</h3>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Prem_Singh_Tamang.jpg"
                            alt="cm"
                        ></img>
                        <span>Prem Singh Tamang</span>
                        <a href="http://">Profile</a>
                    </div>
                </div>

                <div className="row-2">
                    <div className="card map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905172.1500708294!2d87.90668453887083!3d27.59883962060906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a56a5805eafb%3A0xa4c4b857c39b5a04!2sSikkim!5e0!3m2!1sen!2sin!4v1622207021682!5m2!1sen!2sin"
                            allowFullScreen="true"
                            loading="lazy"
                            title="map"
                        ></iframe>
                    </div>

                    <div className="card directory">
                        <h3>HelpLine Numbers</h3>
                        <ul>
                            {directory.map((obj, idx) => (
                                <li key={idx}>
                                    <div className="key">{obj.key}</div>
                                    <div className="separator">:</div>
                                    <div className="value">{obj.value}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
