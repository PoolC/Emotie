import React from "react";

import { Container, ProfileList } from "./style";
import Header from "../../common/Header";
import ProfileCard from "../../common/ProfileCard";
import FloatingButton from "../../common/FloatingButton";
import { GiPencil } from "react-icons/gi";

const emotions = [{color:"#FFF27D", tag:"기쁨"}, {color:"#FF855E", tag:"화남"}, {color:"#9FA7EF", tag:"슬픔"}, {color:"#AEE477", tag:"놀람"}, {color:"#9431A4", tag:"질투"}, {color:"#F29CB6", tag:"설렘"}, {color:"#FFFFFF", tag:"무난"}, {color:"#ADADAD", tag:"지침"}];

function RecommendPage(props) {
    const profiles =  emotions.map((emotion, index) => 
        <ProfileCard key={index} emotion={emotion}/>
    );

    return (
        <Container>
            <Header search/>
            <ProfileList>
                {profiles}
            </ProfileList>
            <FloatingButton icon={GiPencil}/>
        </Container>
    );
}

export default RecommendPage;