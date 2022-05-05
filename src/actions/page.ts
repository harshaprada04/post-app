import { getPageInfo } from "../apis/page"

export const getPageDetailInfo :any = async (pageNumber:number) => {
    try {
       const response:any =  await getPageInfo(pageNumber)
        return response;
    } catch (error) {
        throw error;
    }
}