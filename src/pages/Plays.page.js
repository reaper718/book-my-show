import React from "react";
import Poster from '../components/Poster/poster.component';
import PlaysFilter from "../components/PlaysFilter/PlaysFilter.componenet";

const Plays = () => {
    return (
        <>
            <div className="container mx-auto px-4">
                <div className="w-full lg:flex lg:flex-row-reverse">
                    <div className="lg:w-8/12">
                        <h2 className="text-2xl font-bold mb-4">Plays in Mumbai</h2>
                        <div className="flex flex-wrap">
                            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                                <Poster
                                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzMCBBcHI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00317651-hncymrzbbu-portrait.jpg"
                                    title="Prison Games"
                                    subtitle="Dorangos Hall 1: Bandra"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                                <Poster
                                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzMCBBcHI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00317651-hncymrzbbu-portrait.jpg"
                                    title="Prison Games"
                                    subtitle="Dorangos Hall 1: Bandra"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                                <Poster
                                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzMCBBcHI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00317651-hncymrzbbu-portrait.jpg"
                                    title="Prison Games"
                                    subtitle="Dorangos Hall 1: Bandra"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                                <Poster
                                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzMCBBcHI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00317651-hncymrzbbu-portrait.jpg"
                                    title="Prison Games"
                                    subtitle="Dorangos Hall 1: Bandra"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                                <Poster
                                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzMCBBcHI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00317651-hncymrzbbu-portrait.jpg"
                                    title="Prison Games"
                                    subtitle="Dorangos Hall 1: Bandra"
                                />
                            </div>

                        </div>
                    </div>

                    <div className="lg:w-1/4">
                        <h2 className="text-2xl font-bold mb-4">Filters</h2>
                        <div>
                            <PlaysFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]} />
                            <PlaysFilter title="Language" tags={["English", "Hindi", "Spanish"]} />
                            <PlaysFilter title="Categories" tags={["Theatre", "Storytelling"]} />
                            <PlaysFilter title="Genres" tags={["Drama", "Comedy", "Mystery", "Sci-Fi"]} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Plays;
