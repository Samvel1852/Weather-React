import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <p>{props.weekDay}</p>
      <div className={styles.wrapper}>
        <img src={props.imgURL} width={"100%"} alt="weather" />
      </div>
      <p>{props.temp}</p>
    </div>
  );
};

export default Card;
