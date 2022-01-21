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

    return (
        <Container>
            <Header feed recommend/>
            <SearchBar></SearchBar>
            <MobileSpace></MobileSpace>

            {/* {!loading && <ProfileList>
                {recommends.map((profile, index) => 
                    <ProfileCard key={index} profile={profile} onClick={() => goProfilePage(profile.memberId)}/>
                )}
            </ProfileList>} */}
            <Progress isInProgress={loading} fullscreen={fullscreen}/>
        </Container>
    );
}
export default RecommendPage;