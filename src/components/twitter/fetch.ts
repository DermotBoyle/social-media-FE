import axios from "axios";

export const callFetch = async (tweetId: string) => {
	try {
		const res = await axios.get("http://localhost:3001/twitter/id=" + tweetId);
		console.log(res);
		return res;
	} catch (error) {
		console.error(error);
	}
};
