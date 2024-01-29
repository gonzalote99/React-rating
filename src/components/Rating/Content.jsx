import styles from './Content.module.css'

const Content = () => {
  return(
    <div>
    <div className={styles['div-star']}>
        <img src={'https://raw.githubusercontent.com/devvanu/interactive-rating-component/53f9f53818a3c285f5df96cb7fe70aa1c5b55e5b/src/assets/icon-star.svg'} />
      <h2>How did we do?</h2>
      <p>Please let us know how we did with your support request</p>
    </div>
    </div>
  )
}

export default Content;