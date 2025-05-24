import Image from 'next/image'
import { Outfit } from 'next/font/google'
import styles from './styles.module.scss'
import clsx from 'clsx'

const outfitSans = Outfit({
  variable: '--font-outfit-sans',
  subsets: ['latin']
})

const IMAGES_PREFIX = '/images/nft-preview-card-component'

const NftPreviewCardComponent = () => {
  return (
    <body className={clsx(outfitSans.variable, styles.body)}>
      <div className={styles['card']}>
        <Image
          className={styles['card-image']}
          src={`${IMAGES_PREFIX}/image-equilibrium.jpg`}
          alt='Image Equilibrium'
          width={300}
          height={300}
        />
        <h1 className={styles['card-title']}>Equilibrium #3429</h1>
        <p className={styles['card-description']}>
          Our Equilibrium collection promotes balance and calm.
        </p>

        <div className={styles['card-values']}>
          <div className={clsx(styles['card-value'], styles['card-eth'])}>
            <Image
              src={`${IMAGES_PREFIX}/icon-ethereum.svg`}
              alt=''
              width={11}
              height={18}
            />
            0.041 ETH
          </div>
          <div className={clsx(styles['card-value'], styles['card-days'])}>
            <Image
              src={`${IMAGES_PREFIX}/icon-clock.svg`}
              alt=''
              width={17}
              height={17}
            />
            3 days left
          </div>
        </div>

        <hr className={styles['card-hr']} />

        <div className={styles['card-avatar']}>
          <Image
            src={`${IMAGES_PREFIX}/image-avatar.png`}
            alt=''
            width={38}
            height={38}
          />
          <span>
            {' '}
            Creation of{' '}
            <span className={styles['card-avatar-name']}>
              Jules Wyvern
            </span>{' '}
          </span>
        </div>
      </div>
    </body>
  )
}

export default NftPreviewCardComponent
