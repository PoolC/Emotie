import React, { useState, useEffect } from "react";

import { Container, PostList } from "./style";
import Header from "../../common/Header";
import PostCard from "../../common/PostCard";
import FloatingButton from "../../common/FloatingButton";
import { GiPencil } from "react-icons/gi";
import { MdKeyboardArrowUp } from "react-icons/md"
import Progress from "../../common/modal/Progress";

import server from "../../../utils/server";

const emotions = [{color:"#FFF27D", tag:"기쁨"}, {color:"#FF855E", tag:"화남"}, {color:"#9FA7EF", tag:"슬픔"}, {color:"#AEE477", tag:"놀람"}, {color:"#9431A4", tag:"질투"}, {color:"#F29CB6", tag:"설렘"}, {color:"#FFFFFF", tag:"무난"}, {color:"#ADADAD", tag:"지침"}];

function FeedPage(props) {
    const [loading, setLoading] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);
    // const [feeds, setFeeds] = useState(null);

    const goDetailPage = () => props.history.push('/profile/:1/post/:1');
    const goToTop = () => window.scrollTo(0, 0);
    const goWritePage = () => props.history.push('/profile/:1/write');

    const feeds =  emotions.map((emotion, index) => 
        <PostCard key={index} emotion={emotion} share blur report onClick={goDetailPage} id={index}/>
    );

    useEffect(() => {
        // async function fetchFeeds() {
        //     setLoading(true);
        //     setFullscreen(true);
        //     const response = await server.get('/feed');
        //     setFeeds(response);
        //     setLoading(false);
        //     setFullscreen(false);
        // }
        // fetchFeeds();
    }, []);

    return (
        <Container>
            <Header search recommend/>
            <PostList>
                {feeds}
            </PostList>
            <FloatingButton icon={MdKeyboardArrowUp} onClick={goToTop} bottom="90"/>
            <FloatingButton icon={GiPencil} onClick={goWritePage}/>
            {/* 모달 */}
            <Progress isInProgress={loading} fullscreen={fullscreen}/>
        </Container>
    );
}

export default FeedPage;