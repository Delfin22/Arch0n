/* eslint-disable react/prop-types */
import styles from "./BottomPanel.module.css";
function BottomPanel({ currentPage, onCurrentPage }) {
  function handlePreviousPage() {
    if (currentPage <= 1) return;
    onCurrentPage((p) => p - 1);
  }
  function handleNextPage() {
    //TODO handle maximum page
    onCurrentPage((p) => p + 1);
  }
  return (
    <div className={styles.wrap}>
      <span onClick={handlePreviousPage}>&#x2190;</span>
      <span onClick={handleNextPage}>&#x2192;</span>
    </div>
  );
}
export default BottomPanel;
