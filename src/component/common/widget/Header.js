import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import * as saga from "@store/actions/_saga";

import styled from "styled-components";

import PillInput from "@common/input/PillInput";
import IconButton from "@common/button/IconButton";
import LogoText from "@image/logo_text.svg";
import LogoImage from "@image/logo_img.svg";
import { IoSearch, IoPeople, IoLayers } from "react-icons/io5";
import { RiHomeSmileFill } from "react-icons/ri";
import DropDown from "@common/modal/DropDown";

function Header(props) {
    // 스토어
    const dispatch = useDispatch();
    const authStatus = useSelector(store => store.auth.status);
    const myMemberId = useSelector(store => store.user.memberId);

    // 미디어 쿼리
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    // 클릭 이벤트
    const goLandingPage = () => props.history.push('/');
    const goRecommendPage = () => props.history.push('/recommend');
    const goSearchPage = () => props.history.push('/search');
    const goFeedPage = () => props.history.push('/feed');
	const goProfilePage = () => props.history.push(`/profile/${myMemberId}`);
    const goSettingPage = () => props.history.push('/setting');
    const goLoginPage = () => props.history.push('/login');
    const logout = () => dispatch(saga.logout());
    
    // 드롭다운
    const dropdownOptions = 
    [
        { text: "내 프로필", eventHandler: goProfilePage },
        { text: "설정", eventHandler: goSettingPage },
        { text: "seperator" },
        { text: "로그아웃", eventHandler: logout }
    ];

    return (
        <Container transparent={props.transparent}>
            <Icon src={isMobile ? LogoImage : LogoText} transparent={props.transparent} onClick={authStatus === 'AUTHORIZED' ? goFeedPage : goLandingPage}/>
            <MenuLayout>
                {props.search && <IconButton icon={IoSearch} onClick={goSearchPage} color={props.transparent ? "black" : "white"}/>}
                {props.recommend && <IconButton icon={IoPeople} onClick={goRecommendPage} color={props.transparent ? "black" : "white"}/>}
                {props.feed && <IconButton icon={IoLayers} onClick={goFeedPage} color={props.transparent ? "black" : "white"}/>}
                {authStatus === 'AUTHORIZED' ? <DropDown id="profile" icon={RiHomeSmileFill} width="188" options={dropdownOptions} color={props.transparent ? "black" : "white"}/>
                : <Login onClick={goLoginPage}>로그인</Login>
                }
            </MenuLayout>
        </Container>
    );
}

export default withRouter(Header);

const Container = styled.div`
    position: fixed;
    top: 0;
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
const Icon = styled.img`
    position: absolute;
    left: 30px;
    display: ${props => props.transparent ? "none" : "unset"};
    height: 25px;

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }
`
const Search = styled(PillInput)`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`
const MenuLayout = styled.div`
    position: absolute;
    right: 30px;
    display: flex;
    flex-flow: row nowrap;
    gap: 30px;
`

const Login = styled.span`
    color: white;

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }
`