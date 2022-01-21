import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

import { IoSearch } from "react-icons/io5";
import styled from "styled-components";
import PillInput from "./PillInput";

import * as api from "../../utils/api";

function SearchBar(props) {
    // 스토어
    const dispatch = useDispatch();
    const authStatus = useSelector(store => store.auth.status);
    const myMemberId = useSelector(store => store.user.memberId);

    const [value, setValue] = useState("");
    const [loading, setLoading] = useState(false);

    // 미디어 쿼리
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const onChange = (e) => {
        setValue(e.target.value);
        console.log(value);
    }

    const SearchKeyPress = (e) => {
        if(e.key === 'Enter') {
            search();
        }
    }

    async function search() {
        setLoading(true);
        // setFullscreen(true);
        const response = await api.getSearch(value, 1);
        console.log(response);
        setLoading(false);
        // setRecommends(response.data.profiles);
        // console.log(response.data.profiles);
        // setLoading(false);
        // setFullscreen(false);
    }
    // useEffect(() => {
    //     fetchRecommends();
    // }, []);


    return (
        // isMobile&&
        <Container transparent={props.transparent}>
            <Search width="300px" placeholder="프로필을 검색합니다" value={value} onChange={onChange} onKeyPress={SearchKeyPress} loading={loading}/>
        </Container>
    );
}
export default withRouter(SearchBar);

const Container = styled.div`
        position: fixed;
        top: 59px;
        left: 0;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        width: 100%;
        height: 60px;
        box-sizing: border-box;
        opacity:${props => props.loading ? "0.5" : "1"};
        background-color: ${props => props.transparent ? "transparent" : "#3C3C3C"};
        z-index: 20;
        box-shadow: ${props => props.transparent ? `unset` : `0 0 2px rgba(0, 0, 0, 0.4)`};
`

const Search = styled(PillInput)`
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
`