import style from "../beerhistory.module.css";

const ScrollTopButton: React.FC = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className={style.ToTop} onClick={handleScrollTop}>
      To top
    </button>
  );
};

export default ScrollTopButton;
