import './Headline.css';
import thumbnail from './../../assets/img/headline-img-1.jpg';
import like from './../../assets/img/icon-likes.svg';
import dislike from './../../assets/img/icon-dislike.svg';

function Headline() {
    return (
        <article className="headline">
            <img className="headline-img" src={thumbnail} alt="img" />
            <div className="info">
            <h1 className="title">Hate speech vs free speech</h1>
                <div className="rating">
                    <div className="like">
                        <img className="rating-like" src={dislike} alt="img" />
                        <span className="rating-text">10.8k</span>
                    </div>
                    <div className="dislike">
                        <img className="rating-dislike" src={like} alt="img" />
                        <span className="rating-text">1.4k</span>
                    </div>
                </div>
                <div className="label">
                    <a className="label-link" href="#">BBC NEWS</a>
                    <span className="label-clock">2:00 pm</span>
                </div>
            </div>
        </article>
    )

}

export default Headline;