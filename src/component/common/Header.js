import { withRouter } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

import styled from "styled-components";

import PillInput from "./PillInput";
import IconButton from "./IconButton";
import LogoText from "../../image/logo_text.svg";
import LogoImage from "../../image/logo_img.svg";
import { IoSearch, IoPeople, IoLayers } from "react-icons/io5";
import DropDown from "./DropDown";

function Header(props) {
    // 미디어 쿼리
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    // 클릭 이벤트
    const goRecommendPage = () => props.history.push('/recommend');
    const goFeedPage = () => props.history.push('/feed');
	const goProfilePage = () => console.log("my profile page");
    const goSettingPage = () => props.history.push('/setting');
    const logout = () => console.log("logout");
    
    const options = [
        {
            text: "내 프로필",
            eventHandler: goProfilePage
        },
        {
            text: "설정",
            eventHandler: goSettingPage
        },
        {
            text: "seperator"
        },
        {
            text: "로그아웃",
            eventHandler: logout
        }
    ]

    return (
        <Container transparent={props.transparent}>
            <Icon src={isMobile ? LogoImage : LogoText} transparent={props.transparent}/>
            {props.search && !isMobile && <Search width="300px" placeholder="프로필을 검색합니다"/>}
            <MenuLayout>
                {props.search && isMobile && <IconButton icon={IoSearch} color={props.transparent ? "black" : "white"}/>}
                {props.recommend && <IconButton icon={IoPeople} onClick={goRecommendPage} color={props.transparent ? "black" : "white"}/>}
                {props.feed && <IconButton icon={IoLayers} onClick={goFeedPage} color={props.transparent ? "black" : "white"}/>}
                <DropDown id="profile" width="188" options={options}/>
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
    z-index: 1;
`
const Icon = styled.img`
    position: absolute;
    left: 30px;
    display: ${props => props.transparent ? "none" : "unset"};
    height: 25px;
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