import styled from "styled-components";
import PillInput from "./PillInput";
import IconButton from "./IconButton";
import { IoPersonOutline } from "react-icons/io5";

function Header(props) {
    return (
        <Container>
            <Icon/>
            {props.search && <Center><PillInput width="300px" placeholder="프로필을 검색합니다"/></Center>}
            <IconButton icon={IoPersonOutline}/>
        </Container>
    );
}

export default Header;

const Container = styled.div`
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 0 30px;
    box-sizing: border-box;
    background-color: #3C3C3C;
`
const Icon = styled.div`
    height: 40px;
    width: 100px;
    background-color: white;
`
const Center = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`