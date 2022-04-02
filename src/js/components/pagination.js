import React from "react";

const Pagination = ({current, pageCount, onChange}) => {
    if(pageCount === 0){
        return  null;
    }

    const page = [];
    for(let i = 1; i <= pageCount; i++){
        page.push(i)
    }
    return (
        <nav>
            <ul className="pagination">
                {page.map((item, index) => {
					const classes = "pagination__button" + (item === current ? " pagination__button--active" : "");
					return (
                        <li className="pagination__item " key={'page_' + index}>
                            <button className={classes} onClick={() => onChange(item)}>
                                {item}
                            </button>
                        </li>
                    )

                })}

            </ul>
        </nav>
    )

}

export default Pagination;