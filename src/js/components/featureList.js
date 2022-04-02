import React, {useEffect, useState} from "react";
import Feature from "./feature";
import Pagination from "./pagination";

const fetchItems = (pageNumber) => {
    return new Promise((resolve, reject) => {
        const url = new URL("http://localhost:3000/list");
        url.searchParams.append('page', pageNumber);
        fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    })
};

const FeatureList = () => {
    const [posts, setPosts] = useState([]);
    const [total, setTotal] = useState(0);
	const [page, setPage] = useState(1);

    useEffect(() => {
		fetchItems(1).then(data => {
			setPosts(data.items);
			setTotal(data.total);
		})
    }, []);


    const handlePaginationChange = (pageNumber) => {
        setPage(pageNumber);
        fetchItems(pageNumber).then(data => {
            setPosts(data.items);
            setTotal(data.total);
        })
    }
    return (
        <section className="page__feature feature">
            <div className="feature__container container">
                <div className="feature__block">
                    <div className="feature__header">
                        <h3 className="feature__title">
                            Featured works
                        </h3>
                    </div>
                    <div className="feature__body">
                        {posts.map(({id, ...post}, index) =>
                            <Feature post={post} key={id}/>
                        )}
                    </div>
                </div>
                <Pagination current={page} pageCount={total/3} onChange={handlePaginationChange}/>
            </div>
        </section>
    )

}

export default FeatureList;