import React, { useState, useEffect } from "react";

import { Container, PostList, Info, WBR } from "./style";
import Header from "@common/widget/Header";
import PostCard from "@common/card/PostCard";
import FloatingButton from "@common/button/FloatingButton";
import { GiPencil } from "react-icons/gi";
import { MdKeyboardArrowUp } from "react-icons/md"
import Progress from "@common/modal/Progress";
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { IoPeople } from "react-icons/io5";

import * as api from "@utils/api";

function FeedPage(props) {
    const [loading, setLoading] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);
    const [feeds, setFeeds] = useState(() => JSON.parse(window.localStorage.getItem("feeds")) || []);
    const [page, setPage] = useState(() => JSON.parse(window.localStorage.getItem("page")) || 0);

    const goDetailPage = (diaryId) => props.history.push(`/profile/post/${diaryId}`);
    const goToTop = () => window.scrollTo(0, 0);
    const goWritePage = () => props.history.push('/write');

    async function fetchFeeds() {
        setLoading(true);
        setFullscreen(true);
        const response = await api.getFeeds(page);
        setFeeds(response.data.diaries);
        setLoading(false);
        setFullscreen(false);
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
            {!fullscreen && 
            feeds.length === 0 ?
            <Info>상단의 <IoPeople/>을 눌러 추천페이지로 이동하여<WBR/> 다른 유저를 팔로우해보세요.</Info>
            : <PostList>
                {feeds.map((feed, index) => 
                    <PostCard key={index} post={feed} share blur report onClick={() => goDetailPage(feed.diaryId)} category="diary"/>
                )}
            </PostList>}
            <FloatingButton icon={MdKeyboardArrowUp} onClick={goToTop} bottom="90"/>
            <FloatingButton icon={GiPencil} onClick={goWritePage}/>
            {/* 모달 */}
            <Progress isInProgress={loading} fullscreen={fullscreen}/>
        </Container>
    );
}

export default FeedPage;