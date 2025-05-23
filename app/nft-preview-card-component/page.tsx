import { Outfit } from "next/font/google";
import styles from './styles.module.scss'
import clsx from "clsx";

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

const NftPreviewCardComponent = () => {
  return (
    <body className={clsx(outfitSans.variable, styles.body)}>
      <div className="card">
        <img
          className={styles["card-image"]}
          src="/images/image-equilibrium.jpg"
          alt="Image Equilibrium"
        />
        <h1 className={styles["card-title"]}>Equilibrium #3429</h1>
        <p className={styles["card-description"]}>
          Our Equilibrium collection promotes balance and calm.
        </p>

        <div className={styles["card-values"]}>
          <div className={clsx(styles["card-value"], styles["card-eth"])}>
            <img src="/images/icon-ethereum.svg" alt="" />
            0.041 ETH
          </div>
          <div className={clsx(styles["card-value"], styles["card-days"])}>
            <img src="/images/icon-clock.svg" alt="" />3 days left
          </div>
        </div>

        <hr className={styles["card-hr"]} />

        <div className={styles["card-avatar"]}>
          <img src="/images/image-avatar.png" alt="" />
          <span>
            {" "}
            Creation of <span className={styles["card-avatar-name"]}>
              Jules Wyvern
            </span>{" "}
          </span>
        </div>
      </div>
    </body>
  );
};

export default NftPreviewCardComponent;
