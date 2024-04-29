import { WorkIntro } from "../commonParts"
import { PageTitle } from "../../pages";
import { BackToGallery } from "../commonParts";

export const GardenCom = (props) => {
    return (
        <>
            <PageTitle title="Community Garden Network App" />
            <BackToGallery link={props.backlink} />

            <div className="flex flex-column section-contentDisplay">
                <div className="flex flex-column section-work">

                    <WorkIntro 
                        banner={"/img/banner-communityGarden.png"}
                        workType={'UI/UX design'}
                        workSkill={'User Interface Design, User Experience Design, Figma, Protopie'}
                        workContext={"School Project, Group"}
                        time={"2022"}
                        link={
                            <div className="sectionList workIntroLinks">
                                <a className="link" href="https://cloud.protopie.io/p/cf3f94f3db">
                                    <img src="/img/base/link-webGeneral.svg" />Prototype Link
                                </a>
                            </div>
                        }
                    />  

                    <div id="section-work-body">

                        <h2>Background</h2>

                        <p>This project is the final project of a user experience and interface design course that lasts for 6-7 weeks. It is done with a group of five. The task for this project is to research an industry and develop a digital solution (such as an app) for a problem found in this industry.</p>

                        <p>We choose agriculture and gardening as the industry we want to focus on and the problem we land on is the lack of connection between members in community gardens: community garden users only knows one or two other users from the same garden and many community gardens nowadays is just a garden that happens to be public.</p>
                        
                        <p> The final outcome of this project is a prototype of the app done in Protopie and a promotional video for the app.</p>


                        {/* <h2>Final Outcome Video</h2>

                        <div id="section-videoDemo">
                        <section>
                            <div class="section-vidBox">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/zLMV5tn9jiw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </section>
                        </div> */}

                        <h2>Process</h2>
                        <p>The initial problem that we were focusing on is the lack of connection between small farmers and consumers. We interviewed some local small farm owners, and we find that some of them complained about the lack of public exposure for their business.</p>

                        <p>Based on our research, our initial idea was to develop a local farm map that also links to an online farm market, but we soon find that existing platforms such as Etsy already solves the issue to some extent based on the feedback we got.</p>

                        <div className="flex section-image-3col">
                            <div>
                                <img src="/img/gallery/communityGarden/farmstore-map.png" />
                            </div>
                            <div>
                                <img src="/img/gallery/communityGarden/farmstore-findotherstore.png" />
                            </div>
                            <div>
                                <img src="/img/gallery/communityGarden/farmstore-otherstore.png" />
                            </div>
                            <div>
                                <img src="/img/gallery/communityGarden/farmstore-otherstoreproduce.png" />
                            </div>

                            <div>
                                <img src="/img/gallery/communityGarden/farmstore-createstore.png" />
                            </div>
                            <div>
                                <img src="/img/gallery/communityGarden/farmstore-yourstore.png" />
                            </div>
                        </div>
                        <p className="p-work-imageCap"><em>Some early prototypes of our farm store idea. Left to Right: Find other people's farms on map, check other people's farm produce, and start your own farm market</em></p>

                        <p>We then went back to some abandoned brainstorming ideas we had before. Some of our brainstorming ideas involve setting up information boards in community gardens or encouraging bartering within the local garden enthusiast community. We visited some community gardens to explore those possibilities.</p>

                        <div className="flex section-image-2col">
                            <div>
                                <img src="/img/gallery/communityGarden/IMG_2945.jpg" />
                            </div>
                            <div>
                                <img src="/img/gallery/communityGarden/IMG_2948.jpg" />
                            </div>
                            <div>
                                <img src="/img/gallery/communityGarden/IMG_2962.jpg" />
                            </div>
                            <div>
                                <img src="/img/gallery/communityGarden/IMG_3074.jpg" />
                            </div>
                        </div>
                        <p className="p-work-imageCap"><em>Some community farms that we visited</em></p>

                        <p>During our visit, we found an issue with community gardens that we haven't realised before: although community gardens are meant to be a place to build community, the lack of communication infrastructure and the fact that gardeners visit their gardens in their own time makes it hard to know other garden users. </p>

                        <p>We interviewed some garden users, and find that they generally only know about 2-3 people in the garden, which is roughly 30% of the entire community. </p>

                        <p>Although it may be enough for simple helps such as help watering, users are not able to reach out to the entire community for gardening advice from potential experts or organize collective events that connect everyone in the community. Interview results show that community garden users found this frustrating, where a community garden in this sense is just a garden that happens to be public.</p>

                        <p>This inspires us to get into the topic of community building for community gardens. The result we propose is a community garden manager, a platform that helps gardeners to monitor the status of their plants remotely, know who else is in the garden, and reach out for help and organize collective events that build the community.</p>

                        <h2>Reflection</h2>
                        <p>The most important thing I learned from this project is the importance of organizing field trips and getting real data in a user experience design project. Our trip to those community gardens plus our interviews with real garden users are key for us to realize this new problem space that we didn't realize before. Such new insights helped us to move away from the old idea which didn't work out, and we wouldn't be able to do so without the data we gathered from real users. </p>

                    </div>

                </div>

            </div>

        </>
    );
}