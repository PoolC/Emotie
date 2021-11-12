import React, { useState, useEffect } from "react";

import { Container, PostList } from "./style";
import Header from "../../common/Header";
import PostCard from "../../common/PostCard";
import FloatingButton from "../../common/FloatingButton";
import { GiPencil } from "react-icons/gi";
import { MdKeyboardArrowUp } from "react-icons/md"
import Progress from "../../common/modal/Progress";
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

import * as api from "../../../utils/api";

const emotions = [{color:"#FFF27D", tag:"기쁨"}, {color:"#FF855E", tag:"화남"}, {color:"#9FA7EF", tag:"슬픔"}, {color:"#AEE477", tag:"놀람"}, {color:"#9431A4", tag:"질투"}, {color:"#F29CB6", tag:"설렘"}, {color:"#FFFFFF", tag:"무난"}, {color:"#ADADAD", tag:"지침"}];

function FeedPage(props) {
    const [loading, setLoading] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);
    const [feeds, setFeeds] = useState(() => JSON.parse(window.localStorage.getItem("feeds")) || []);
    const [page, setPage] = useState(() => JSON.parse(window.localStorage.getItem("page")) || 0);

    const goDetailPage = () => props.history.push('/profile/post/:1');
    const goToTop = () => window.scrollTo(0, 0);
    const goWritePage = () => props.history.push('/write');

    // const feeds =  emotions.map((emotion, index) => 
    //     <PostCard key={index} emotion={emotion} share blur report onClick={goDetailPage} category="diary" id={index}/>
    // );

    async function fetchFeeds() {
        setLoading(true);
        setFullscreen(true);
        const response = await api.getFeeds(page);
        setFeeds(response.data.diaries);
        setLoading(false);
        setFullscreen(false);
        console.log(feeds);
    }
    useEffect(() => {
        if(page === 0) {
            fetchFeeds();
        }
    }, []);
    useEffect(() => {
        window.localStorage.setItem("page", JSON.stringify(page));
        window.localStorage.setItem("feeds", JSON.stringify(feeds));
    }, [page, feeds]);
    
    async function detectScroll() {
        setLoading(true);
        setFullscreen(false);
        const response = await api.getFeeds(page + 1);
        if(response.data.diaries.length > 0) setPage(page + 1);
        setFeeds([...feeds, ...response.data.diaries]);
        setLoading(false);
        setFullscreen(false);
        console.log(page);
    }

    useBottomScrollListener(detectScroll);
    
    return (
        <Container>
            <Header search recommend/>
            <PostList>
                {feeds.map((feed, index) => 
                    <PostCard key={index} feed={feed} share blur report onClick={goDetailPage} category="diary"/>
                )}
                {/* {feeds} */}
            </PostList>
            <FloatingButton icon={MdKeyboardArrowUp} onClick={goToTop} bottom="90"/>
            <FloatingButton icon={GiPencil} onClick={goWritePage}/>
            {/* 모달 */}
            <Progress isInProgress={loading} fullscreen={fullscreen}/>
        </Container>
    );
}

export default FeedPage;