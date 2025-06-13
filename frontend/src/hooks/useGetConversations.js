import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);

	useEffect(() => {
		const getConversations = async () => {
			setLoading(true);
			try {
				const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users`, {
					credentials: "include", // if using cookies with JWT
				});
				const data = await res.json();

				if (!res.ok && data?.error) {
					throw new Error(data.error);
				}

				setConversations(data);
			} catch (error) {
				toast.error(error.message || "Failed to fetch conversations");
			} finally {
				setLoading(false);
			}
		};

		getConversations();
	}, []);

	return { loading, conversations };
};

export default useGetConversations;
