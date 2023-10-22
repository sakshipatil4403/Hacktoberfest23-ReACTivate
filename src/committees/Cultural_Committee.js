import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cultural_Committee.css";
import ParticlesBg from 'particles-bg';

export const CulturalEvent = ({ clubName, events }) => {
    const calculateCountdown = (eventDate) => {
        const now = new Date();
        const targetDate = new Date(eventDate);
        const timeDifference = targetDate - now;

        let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        days = Math.max(days, 0);
        hours = Math.max(hours, 0);
        minutes = Math.max(minutes, 0);

        return { days, hours, minutes };
    };

    const [countdowns, setCountdowns] = useState(
        events.map((event) => calculateCountdown(event.date))
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdowns(events.map((event) => calculateCountdown(event.date)));
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [events]);

    const eventLink =(event)=>{
        const eventlink = "#"+ event.name;
        return eventlink;
    }

    return (
        <div className="container culwhole mt-5">
            <Link to="/" className="btn btn-primary mb-4 mt-2">
                Go to Home Page
            </Link>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-4 ">
                    <img
                        src="../logo-new.png"
                        alt="Club Logo"
                        className="img-fluid mt-4"
                        style={{ maxHeight: "70px", maxWidth: "60px" , borderRadius:"10px" }}
                    />
                </div>
                <div className="col-md-8 d-flex flex-column flex-sm-row align-items-center">
                    <h1 className="poppinsfonts mb-0 mr-sm-2">{clubName}</h1>
                </div>
            </div>
            <div className="row mt-5">
                <h2 className="poppinsfonts text-center">Upcoming Events :</h2>
                <div className="horlinecover2 mb-4">
                <div className="horline"></div>
                </div>
                {events && events.length > 0 ? (
                    events.map((event, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="moolifonts Cardcover">
                            <a href={eventLink(event)}>
                                <div class="Card ">
                                    <div class="innerCard">
                                        
                                        <div class="frontSide">
                                            <img
                                                src={`../images/${event.imageFileName}`}
                                                alt={event.name}
                                                className="culimg img-fluid mb-3"
                                                style={{ maxHeight: "12em" }}
                                            />
                                            <h3>{event.name}</h3>
                                        </div>
                                        <div class="backSide">
                                            <p>Date: {event.date}</p>
                                            <p>Time: {event.time}</p>
                                            <div className="text-center">
                                                <h5>
                                                    Countdown: {countdowns[index].days} days{" "}
                                                    {countdowns[index].hours} hours {countdowns[index].minutes}{" "}
                                                    minutes
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="moolifonts">No current events</p>
                )}
            </div>

            <div>
                <h2 className="culeventdes mt-5 moolifonts text-center">Events Description :</h2>
            </div>
            <div className="horlinecover2">
                <div className="horline"></div>
            </div>
            <div className="eventdes">
                {
                    events.map((data,index)=>{
                        return(
                            <div key={index} id={data.name} className="culeventdes moolifonts row mt-5">
                            <div className="col-md-12">
                                <h3 className="mt-4 mb-4 text-decoration-underline">{data.name}</h3>
                                <p>{data.eventDes}</p>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
            
            <div className="moolifonts row mt-5">
                <div className="p-5 col-md-6">
                    <h2>Club Information</h2>
                    <div>
                    <div className="horline"></div>
                    </div>
                    <p>
                        The Cultural Committee is responsible for keeping the student community of DA-IICT culturally alive, the college life happening and simultaneously preserving our culture amongst the students. It also promotes various cultural activities like music, drama and dance amongst the student community. The Cultural Committee organises various big events all year round the academic calendar, thus creating an aura of excitement and enjoyment along with providing a platform for students to showcase their talent in front of the college. Some of the main OAT events include the Dance Nite, the Drama Nite, etc. Apart from these, the Cultural Committee also takes upon its onus, the celebrations of various festivals throughout the year including Janmashtami, Eid and, one of the most popular one, Navratri. With this, it makes an attempt to promote the significance of these festivals as well as generate a homely feeling for the students. The Cultural Committee recognises itself as an important aspect of the soul of a student’s life and strives to make the college life a colourful and memorable one.
                    </p>
                </div>
                <div className="p-5 col-md-6">
                    <h2>Event Organizers</h2>
                    <div className="horlinecover3">
                    <div className="horline"></div>
                    </div>
                    <ul>
                        {
                        events.map((data,index)=>{
                            return(
                                <li key={index}>
                                    <strong>{data.name} - </strong>{data.eventorganizer}
                                </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <h2>Convener and Deputy Convener</h2>
                    <p>Convener: Convener Name</p>
                    <p>Deputy Convener: Deputy Convener Name</p>
                </div>
                <div className="horlinecover">
                <div className="horline"></div>
                </div>
                <div className="cullinks">
                    <a className="culfacebooklink" href="https://www.facebook.com/DaiictCulturalCommittee/">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                    </a>
                    <a className="culinstalink" href="https://www.instagram.com/cultural_daiict/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

const eventsData = [
    {
        name: "Teachers Day",
        date: "2023-10-25T18:00:00",
        time: "10:00 AM",
        imageFileName: "teachers-day.jpg",
        eventorganizer: "Organizer 1",
        eventDes: "When we come together to express our gratitude and appreciation for the wonderful educators who have played a pivotal role in shaping our academic journeys, who are guiding lights in the journey of knowledge, celebrating the mentors who shape our tomorrows. 'Teaching is a very noble profession that shapes the character, caliber,and future of an individual. If people remember me as a good teacher thatwill be the biggest honor for me.' - APJ Abdul Kalam",
    },
    {
        name: "Janmashtami",
        date: "2023-10-26T14:30:00",
        time: "2:30 PM",
        imageFileName: "mud-holi.jpg",
        eventorganizer: "Organizer 2",
        eventDes: " Celebrated to mark the birth of Lord Krishna, the festival of Janmashtami is celebrated with much fervour at DAIICT. During this festival, dahi handi and mud holi events are held. The festival falls during the Hindu month of Bhadrapada on the Ashtami. The college's Janmashtami festival is an enchanting blend of cultural richness and youthful enthusiasm. Vibrant decorations, melodious bhajans, and spirited dance performances create an atmosphere of devotion and merriment. The students' dedication in organizing this event showcases their admirable commitment to tradition. The diverse and colorful attire, heartfelt prayers, and delicious prasad further elevate the celebration. This festival not only commemorates Lord Krishna's birth but also fosters unity, respect, and spirituality, making it a truly memorable and cherished event for everyone involved.",
    },
    {
        name: "Tarang(Navratri)",
        date: "2023-10-30T14:30:00",
        time: "2:30 PM",
        imageFileName: "garba.jpg",
        eventorganizer: "Organizer 3",
        eventDes: "It's that time of the year when the beats of the dhol and the twirl of colorful attires fill the air! Think vibrant Garba, energetic Dandiya Raas, mouthwatering food stalls, and a whole lot of fun. Tarang is all about celebrating together and creating beautiful memories. Tarang is one of the most anticipated cultural celebrations of the year, and it's an event that brings the vibrant spirit of Navratri to life. Navratri festival is a spectacular tapestry of tradition and jubilation. The vibrant, elaborate decorations, mesmerizing garba dances, and soul-stirring dandiya raas performances infuse the campus with an electrifying energy.",
    },
    {
        name: "Maniere",
        date: "2023-11-03T18:30:00",
        time: "2:30 PM",
        imageFileName: "maniere.jpeg",
        eventorganizer: "Organizer 4",
        eventDes: "Ganesh Chaturthi, a festival celebrated with utmost enthusiasm and devotion, has once again enhanced our college campus. During the Ganesh Sthapna, we witnessed a crazy overflow of enthusiasm and excitement as Baappa made his grand entry onto campus. It was an incredible delight to capture the spontaneous dancing and celebration that erupted all around during the Ganesh Visarjan, we embarked on an adventure to ensure that we captured every heartwarming scene.",
    },
    {
        name: "Ganesh Chaturthi",
        date: "2023-11-04T14:30:00",
        time: "2:30 PM",
        imageFileName: "ganesh-sthapana.jpeg",
        eventorganizer: "Organizer 5",
        eventDes: "MANIERE: The Fashion Night. It is an event where designers showcase their fashion designs inspired by comic books, movies, TV shows, and other forms of pop culture. From superhero-inspired looks to your favourite fantasy character from Harry Potter or Game of Thrones, this theme will have something for everyone.Maniere is not just a fashion show but a celebration of individuality and innovation in the world of fashion. We welcome all the fashion enthusiasts to come together and make this event a resounding success.",
    },
    // Just add more event objects as needed in the same above format 
];

const Cultural = () => {
    return (
        <div className="culturalbox">
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-12">
                        <CulturalEvent clubName="Cultural Committee" events={eventsData} />
                        {/* Add other components or content here */}
                    </div>
                </div>
            </div>
            <ParticlesBg type="circle" bg={true} />
        </div>
    );
};

export default Cultural;
