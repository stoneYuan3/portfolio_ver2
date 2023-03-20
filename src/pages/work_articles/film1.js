import { WorkIntro } from "./commonParts"
import { PageTitle } from "../pages";
import { BackToGallery } from "./commonParts";
import { WorkIntroNoBanner } from "./commonParts";

export const WillFaliure = (props) => {
    return (
        <>
            <PageTitle title='Short Movie "Failure of the Will"' />
            <BackToGallery link={props.backlink} />

            <div className="flex flex-column section-contentDisplay">
                <div className="flex flex-column section-work">
                    <WorkIntroNoBanner
                        workType={'Short Movie'}
                        workSkill={'Filming | Editing | Premier '}
                        workContext={'School Project, individual, 2020'}
                    />

                    <div id="section-work-body">

                        <h2>Background</h2>

                        <p>This is a filming project for a film course. I'm asked to produce a 1 minute film with complete plots. Inspired by cognitive science theories I learned in an elective cognitive science class, I made a movie that shows that cognitive power could sometimes fail...</p>

                        <h2>Final Outcome</h2>

                        <div id="section-videoDemo">
                        <section>
                            <div class="section-vidBox">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/q4ue16LVqe0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </section>
                        </div>

                        <h2>Reflection</h2>
                        <p>This is a rather interesting and somewhat challenging project as I took the course during the pandemic, and I have to utilize what I got at home. I found arranging camera positions for the best result enjoyable, and I also get to practice my editing skill with Adobe Premier.</p>

                    </div>

                </div>

            </div>

        </>
    );
}