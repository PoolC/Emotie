import { withRouter } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

import styled from "styled-components";

import PillInput from "./PillInput";
import IconButton from "./IconButton";
import LogoText from "../../image/logo_text.svg";
import LogoImage from "../../image/logo_img.svg";
import { IoSearch, IoPeople, IoLayers } from "react-icons/io5";

function Header(props) {
    // 미디어 쿼리
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    // 클릭 이벤트
    const goRecommendPage = () => props.history.push('/recommend');
    const goFeedPage = () => props.history.push('/feed');
    const showMenu = () => {

    };

    return (
        <Container backgroundColor={props.backgroundColor}>
            <Icon src={isMobile ? LogoImage : LogoText}/>
            {props.search && !isMobile && <Center><PillInput width="300px" placeholder="프로필을 검색합니다"/></Center>}
            <MenuLayout>
                {isMobile && <IconButton icon={IoSearch}/>}
                {props.recommend && <IconButton icon={IoPeople} onClick={goRecommendPage}/>}
                {props.feed && <IconButton icon={IoLayers} onClick={goFeedPage}/>}
                <Circle onClick={showMenu}/>
            </MenuLayout>
        </Container>
    );
}

export default withRouter(Header);

const Container = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 0 30px;
    box-sizing: border-box;
    background-color: ${props => props.backgroundColor || "#3C3C3C"};
    z-index: 1;
`
const Icon = styled.img`
    height: 25px;
`
const Center = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`
const MenuLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 30px;
`
const Circle = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    background-color: white;
    border-radius: 50%;
`