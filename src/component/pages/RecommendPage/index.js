import React, { useState, useEffect } from "react";

import { Container, ProfileList, MobileSpace } from "./style";
import Header from "../../common/Header";
import SearchBar from "../../common/SearchBar";
import ProfileCard from "../../common/ProfileCard";
import FloatingButton from "../../common/FloatingButton";
import { GiPencil } from "react-icons/gi";
import Progress from "../../common/modal/Progress";

import * as api from "../../../utils/api";

function RecommendPage(props) {
    const [loading, setLoading] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    const [recommends, setRecommends] = useState([]);

    const goProfilePage = (memberId) => props.history.push(`/profile/${memberId}`);
    const goWritePage = () => props.history.push('/write');

    async function fetchRecommends() {
        setLoading(true);
        setFullscreen(true);
        const response = await api.getRecommends();
        setRecommends(response.data.profiles);
        setLoading(false);
        setFullscreen(false);
    }
    useEffect(() => {
        fetchRecommends();
    }, []);

    return (
        <Container>
            <Header search feed/>
            <SearchBar></SearchBar>
            <MobileSpace></MobileSpace>



            {!loading && <ProfileList>
                {recommends.map((profile, index) => 
                    <ProfileCard key={index} profile={profile} onClick={() => goProfilePage(profile.memberId)}/>
                )}
            </ProfileList>}
            <FloatingButton icon={GiPencil} onClick={goWritePage}/>
            {/* 모달 */}
            <Progress isInProgress={loading} fullscreen={fullscreen}/>
        </Container>
    );
}

export default RecommendPage;