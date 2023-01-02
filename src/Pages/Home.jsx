import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../Component/Card";
import CardHome from "../Component/CardHome";
import SmallCard from "../Component/SmallCard";
import { store } from "./Details";

const Home = () => {
    const [detail] = useContext(store);
    return (
        <div>
            <div className="Home">
                <div className="home__container">
                    <div className="home__first">
                        <Link to="/Technology">
                            {" "}
                            <img
                                src={"https://resources.stuff.co.nz/content/dam/images/1/1/q/7/c/6/image.related.StuffLandscapeSixteenByNine.710x400.179jfn.png/1443838362802.jpg"}
                                alt="not found" height="320px" width="800px"
                            />
                        </Link>
                    </div>
                    <div className="home_right_container">
                        <div className="home__sec">
                            <Link to="/fitness">
                                {" "}
                                <img
                                    src={"https://th.bing.com/th/id/OIP.kyJ2fwB_4uBOxM1fA5szOQHaJQ?w=194&h=243&c=7&r=0&o=5&dpr=1.5&pid=1.7"}
                                    alt="not found" height="150px" width="150px"
                                />
                            </Link>
                        </div>

                        <div className="home__thir">
                            <Link to="/Food">
                                {" "}
                                <img
                                    src={"https://i.pinimg.com/736x/53/be/59/53be59b6c4012801aef36db20038dd8a.jpg"}
                                    alt="not found" height="150px" width="150px"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                <h1 style={{ marginTop: "40px" }}>The Latest</h1>
                <hr style={{ width: "200px", thickness: "20px" }} />
                <div className="home__left left1">
                    {detail
                        .filter((article) => {
                            return article.category === "bollywood";
                        })
                        .map((n) => (
                            <CardHome
                                key={n.id}
                                articleid={n.id}
                                imgUrl={n.img}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))}
                </div>
                <div className="home__left left1">
                    {detail
                        .filter((article) => {
                            return article.category === "technology";
                        })
                        .map((n) => (
                            <CardHome
                                key={n.id}
                                articleid={n.id}
                                imgUrl={n.img}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))}
                </div>
                <div className="home__left left1">
                    {detail
                        .filter((article) => {
                            return article.category === "food";
                        })
                        .map((n) => (
                            <CardHome
                                key={n.id}
                                articleid={n.id}
                                imgUrl={n.img}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))}
                </div>
                <h1 style={{ marginTop: "40px", display: "inline-block" }}>
                    Latest Articles
                </h1>

                <h1 className="Top">Top Posts</h1>
                <hr style={{ width: "200px", thickness: "20px" }} />

                <div className="rightbar2">
                    {detail
                        .filter((article) => {
                            return article.category === "mix";
                        })
                        .map((n) => (
                            <Card
                                key={n.id}
                                articleid={n.id}
                                imgUrl={n.img}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))}
                </div>
                <div className="sidebar2">
                    {detail
                        .filter((article) => {
                            return article.category === "mix";
                        })
                        .map((n) => (
                            <SmallCard
                                key={n.id}
                                articleid={n.id}
                                imgUrl={n.img}
                                description={n.description.slice(0, 200)}
                                title={n.title.slice(0, 25)}
                                author={n.author}
                            />
                        ))}

                    <div className="advertisement">
                        <p>Advertisement</p>
                    </div>
                </div>
                <h1 style={{ marginTop: "40px", display: "inline-block" }}>
                    Latest Stories
                </h1>
                <hr />

                <div className="home__left">
                    {detail
                        .filter((article) => {
                            return article.category === "footer3";
                        })
                        .map((n) => (
                            <CardHome
                                key={n.id}
                                articleid={n.id}
                                imgUrl={n.img}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))}
                </div>

                <div className="home__left">
                    {detail
                        .filter((article) => {
                            return article.category === "footer2";
                        })
                        .map((n) => (
                            <CardHome
                                key={n.id}
                                articleid={n.id}
                                imgUrl={n.img}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))}
                </div>

                <div className="home__left">
                    {detail
                        .filter((article) => {
                            return article.category ==="footer1" ;
                        })
                        .map((n) => (
                            <CardHome
                                key={n.id}
                                articleid={n.id}
                                imgUrl={n.img}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Home;