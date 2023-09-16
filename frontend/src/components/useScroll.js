import { useEffect, useCallback } from "react";

// Step 2: Create a custom hook for infinite scrolling
const useScroll = (hasMore, setPage) => {
    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.clientHeight;

        // Load more data when the user reaches the bottom of the page
        if (scrollY + windowHeight >= bodyHeight && hasMore) {
            // Increment the page number and load more products
            setPage((prevPage) => prevPage + 1);
        }
    }, [hasMore, setPage]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);
};

export default useScroll;
