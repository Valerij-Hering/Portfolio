import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { ArrowIcon } from "../../assets/svg/ArrowIcon";

export const Pagination = ({ pageCount, onPageChange, forcePage }) => {
    return (
        <ReactPaginate
            previousLabel={<ArrowIcon rotate="left"/>}
            nextLabel={<ArrowIcon rotate="right"/>}
            breakLabel={"..."}
            forcePage={forcePage}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={onPageChange}
            containerClassName={styles.pagination}
            activeClassName={styles.active}
            pageClassName={styles.pageItem}
            previousClassName={styles.pagePrev}
            nextClassName={styles.pageNext}
            breakClassName={styles.pageBreak}
            pageLinkClassName={styles.pageLink}
            previousLinkClassName={styles.pageLink}
            nextLinkClassName={styles.pageLink}
            breakLinkClassName={styles.pageLink}
        />
    );
};