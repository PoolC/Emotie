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
    // const [feeds, setFeeds] = useState(null);

    const goDetailPage = () => props.history.push('/profile/post/:1');
    const goToTop = () => window.scrollTo(0, 0);
    const goWritePage = () => props.history.push('/write');

    const feeds =  emotions.map((emotion, index) => 
        <PostCard key={index} emotion={emotion} share blur report onClick={goDetailPage} category="diary" id={index}/>
    );

    // async function fetchFeeds() {
    //     setLoading(true);
    //     setFullscreen(true);
    //     const response = await api.getFeeds();
    //     setFeeds(response.data);
    //     setLoading(false);
    //     setFullscreen(false);
    // }
    // useEffect(() => {
    //     fetchFeeds();
    // }, []);

    const detectScroll = () => {
        setLoading(true);
        setFullscreen(false);
        // 추가로 10개 불러오는 api 호출
    }

    useBottomScrollListener(detectScroll);
    
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