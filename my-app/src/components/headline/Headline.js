import s from './Headline.module.css';
import thumbnail from './../../assets/img/headline-img-1.jpg';
import like from './../../assets/img/icon-likes.svg';
import dislike from './../../assets/img/icon-dislike.svg';

function Headline() {
    return (
        <article className={s.headline}>
            <img className={s.headlineImg} src={thumbnail} alt="img" />
            <div className={s.info}>
            <h1 className={s.title}>Hate speech vs free speech</h1>
                <div className={s.rating}>
                    <div className={s.like}>
                        <img className={s.ratingLike} src={dislike} alt="img" />
                        <span className={s.ratingText}>10.8k</span>
                    </div>
                    <div className={s.dislike}>
                        <img className={s.ratingDislike} src={like} alt="img" />
                        <span className={s.ratingText}>1.4k</span>
                    </div>
                </div>
                <div className={s.label}>
                    <a className={s.labelLink} href="#">BBC NEWS</a>
                    <span className={s.labelClock}>2:00 pm</span>
                </div>
            </div>
        </article>
    )
}

export default Headline;