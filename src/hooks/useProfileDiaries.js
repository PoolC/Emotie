import { useCallback } from "react";
import { useState, useEffect } from "react";

import * as api from "../utils/api";

function useProfileDiaries(memberId, pageCount) {
    const [profileDiaries, setProfileDiaries] = useState([]);
    const [isLoadingDiaries, setLoadingDiaries] = useState(true);

    // 프로필 마음글 불러오기
    const getProfileDiaries = useCallback(async () => {
        try {
            setLoadingDiaries(true);

            const response = await api.getProfileDiaries(memberId, pageCount);
            const responseDiaries = response.data.diaries ?? [];

            // 추가 마음글이 없다면 더 이상의 pagination을 진행하지 않는다.
            if (responseDiaries.length <= 0) return;

            if (pageCount <= 0) setProfileDiaries(responseDiaries);
            else setProfileDiaries([...profileDiaries, ...responseDiaries]);

            setLoadingDiaries(false);
        }
        catch(error) {
            console.log('마음글을 불러올 수 없습니다.');
        }
    }, [memberId, pageCount, profileDiaries]);

    useEffect(() => {
        getProfileDiaries();
        // eslint-disable-next-line
    }, [memberId, pageCount]);

    return { profileDiaries, isLoadingDiaries };
}

export default useProfileDiaries;