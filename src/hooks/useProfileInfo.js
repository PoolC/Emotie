import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import * as api from "../utils/api";
import * as defaultData from "../utils/defaultData";

function useProfileInfo(uuid) {
    const [profileInfo, setProfileInfo] = useState(defaultData.profileInfo);
    const [isProfileMine, setProfileMine] = useState(false);

    // 프로필 정보 불러오기
    const getProfileInfo = async () => {
        try {
            const response = await api.getProfileInfo(uuid);
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
    const myUUID = useSelector(store => store.user.uuid);
    useEffect(() => setProfileMine(uuid === myUUID), [uuid, myUUID]);

    return { profileInfo, isProfileMine, setProfileInfo };
}

export default useProfileInfo;