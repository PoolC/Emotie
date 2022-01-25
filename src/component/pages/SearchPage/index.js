import React, { useState, useEffect } from "react";

import { Container, ProfileList, MobileSpace } from "./style";
import Header from "../../common/Header";
import Progress from "../../common/modal/Progress";
import PillInput from "../../common/PillInput";
import { IoSearch } from "react-icons/io5";
import IconButton from "../../common/IconButton";
import ProfileCard from "../../common/ProfileCard";

import styled from "styled-components";


import * as api from "../../../utils/api";

function SearchPage(props) {
    const [debug, setDebug] = useState(false);

    const goProfilePage = (memberId) => props.history.push(`/profile/${memberId}`);

    const [loading, setLoading] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    const [profiles, setProfiles] = useState([]);

    const [value, setValue] = useState("");

    const onChange = (e) => {
        setValue(e.target.value);
        if(debug) console.log(value);
    }

    const SearchKeyPress = (e) => {
        if(e.key === 'Enter') {
            Search();
        }
    }

    async function Search() {
        setLoading(true);
        // setFullscreen(true);
        const response = await api.getSearch(value, 0);
        if(debug) console.log(response);
        setProfiles(response.data.profiles);
        setLoading(false);
    }

    return (
        <Container>
            <Header feed recommend />
            <SearchBar>
            <Bar width="250px" placeholder="프로필을 검색합니다" value={value} onChange={onChange} onKeyPress={SearchKeyPress}/>
            </SearchBar>
            <MobileSpace></MobileSpace>

            {!loading && <ProfileList>
                {profiles.map((profile, index) => 
                    <ProfileCard key={index} profile={profile} onClick={() => goProfilePage(profile.memberId)}/>
                )}
            </ProfileList>}
            <Progress isInProgress={loading} fullscreen={fullscreen} />
        </Container>
    );
}
export default SearchPage;

const SearchBar = styled.div`
        position: fixed;
        top: 59px;
        left: 0;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        width: 100%;
        height: 60px;
        box-sizing: border-box;
        // opacity:${props => props.loading ? "0.5" : "1"};
        background-color:#3C3C3C;
        z-index: 10;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);

        justify-content:center;
`

const Icon = styled(IconButton)`
    margin:10px;
`

const Bar = styled(PillInput)`
    margin:10px;
`