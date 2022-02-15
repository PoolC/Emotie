import React, { useState, useEffect } from "react";

import { Container, ProfileList, MobileSpace, Info } from "./style";
import Header from "@common/widget/Header";
import Progress from "@common/modal/Progress";
import PillInput from "@common/input/PillInput";
import { IoSearch } from "react-icons/io5";
import IconButton from "@common/button/IconButton";
import ProfileCard from "@common/card/ProfileCard";

import styled from "styled-components";

import * as api from "@utils/api";

import { useBottomScrollListener } from 'react-bottom-scroll-listener';

function SearchPage(props) {
    const goProfilePage = (memberId) => props.history.push(`/profile/${memberId}`);

    const [loading, setLoading] = useState(false);
    const [noProfile, setNoProfile] = useState(true);
    const [fullscreen, setFullscreen] = useState(true);
    const [profiles, setProfiles] = useState([]);

    const [value, setValue] = useState("");

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const SearchKeyPress = (e) => {
        if(e.key === 'Enter') {
            Search();
        }
    }

    async function Search() {
        if(value===""){
            return;
        }
        setLoading(true);
        setProfiles([]);
        // setFullscreen(true);
        const response = await api.getSearch(value, 0);
        if((response.data.profiles).length===0){
            setNoProfile(true);
        }else{
            setNoProfile(false);
            setProfiles(response.data.profiles);
        }
        setLoading(false);
    }

    useBottomScrollListener(detectScroll);

    async function detectScroll() {
        //console.log('내림');
    }

    return (
        <Container>
            <Header feed recommend />
            <SearchBar>
            <Bar width="250px" placeholder="프로필을 검색합니다" value={value} onChange={onChange} onKeyPress={SearchKeyPress}/>
            </SearchBar>
            <MobileSpace></MobileSpace>
            {noProfile&&<Info>검색 결과가 없습니다.<br/>위의 바에서 프로필을 검색하세요</Info>}
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