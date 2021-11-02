import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import * as api from "../utils/api";
import * as defaultData from "../utils/defaultData";

function useProfileInfo(memberId) {
    const [profileInfo, setProfileInfo] = useState(defaultData.profileInfo);
    const [isProfileMine, setProfileMine] = useState(false);

    // 프로필 정보 불러오기
    const getProfileInfo = async () => {
        try {
            const response = await api.getProfileInfo(memberId);
            setProfileInfo(response.data);
        }
        catch(error) {
            setProfileInfo(defaultData.profileInfo);
        }
    };
    useEffect(() => {
        getProfileInfo();
        // eslint-disable-next-line
    }, []);

    // 자신의 프로필인지 확인
    const myMemberId = useSelector(store => store.user.memberId);
    useEffect(() => setProfileMine(memberId === myMemberId), [memberId, myMemberId]);

    return { profileInfo, isProfileMine, setProfileInfo };
}

export default useProfileInfo;