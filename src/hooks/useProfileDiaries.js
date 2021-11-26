import { useState, useEffect } from "react";

import * as api from "../utils/api";
import * as defaultData from "../utils/defaultData";

function useProfileDiaries(memberId) {
    const [profileDiaries, setProfileDiaries] = useState(defaultData.diaries);

    // 프로필 마음글 불러오기
    const getProfileDiaries = async () => {
        try {
            const response = await api.getProfileDiaries(memberId, 0);
            setProfileDiaries(response.data);
            console.log(response.data);
        }
        catch(error) {
            setProfileDiaries(defaultData.diaries);
        }
    };
    useEffect(() => {
        getProfileDiaries();
        // eslint-disable-next-line
    }, []);

    return profileDiaries;
}

export default useProfileDiaries;