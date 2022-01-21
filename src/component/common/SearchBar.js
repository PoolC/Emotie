import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import * as saga from "../../store/actions/_saga";

import styled from "styled-components";

import PillInput from "./PillInput";

function SearchBar(props) {
    // 스토어
    const dispatch = useDispatch();
    const authStatus = useSelector(store => store.auth.status);
    const myMemberId = useSelector(store => store.user.memberId);

    // 미디어 쿼리
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });


    return (
        isMobile&&
        <Container transparent={props.transparent}>
            <Search width="300px" placeholder="프로필을 검색합니다" />
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
        background-color: ${props => props.transparent ? "transparent" : "#3C3C3C"};
        z-index: 20;
        box-shadow: ${props => props.transparent ? `unset` : `0 0 2px rgba(0, 0, 0, 0.4)`};
`

const Search = styled(PillInput)`
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
`