import { useCallback } from "react";
import { useState, useEffect } from "react";

import * as api from "../utils/api";

function useProfileGuestbooks(memberId, pageCount) {
    const [profileGuestbooks, setProfileGuestbooks] = useState([]);
    const [isLoadingGuestbooks, setLoadingGuestbooks] = useState(true);

    // 프로필 방명록 불러오기
    const getProfileGuestbooks = useCallback(async () => {
        try {
            setLoadingGuestbooks(true);

            const response = await api.getProfileGuestbooks(memberId, pageCount);
            const responseGuestbooks = response.data.guestbooks ?? [];

            // 추가 방명록이 없다면 더 이상의 pagination을 진행하지 않는다.
            if (responseGuestbooks.length <= 0) return;

            if (pageCount <= 0) setProfileGuestbooks(responseGuestbooks);
            else setProfileGuestbooks([...profileGuestbooks, ...responseGuestbooks]);

            setLoadingGuestbooks(false);
        }
        catch(error) {
            console.log('방명록을 불러올 수 없습니다.');
        }
    }, [memberId, pageCount, profileGuestbooks]);

    useEffect(() => {
        getProfileGuestbooks();
        // eslint-disable-next-line
    }, [memberId, pageCount]);

    return { profileGuestbooks, isLoadingGuestbooks };
}

export default useProfileGuestbooks;