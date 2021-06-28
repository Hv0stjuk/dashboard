import s from './New.module.css';
import newImg from './../../assets/img/new-img-1.jpg';

function New () {
    return (
        <article className={s.new}>
            <img className={s.newImg} src={newImg} alt="img" />
            <div className={s.info}>
                <h1 className={s.title}>Travellers to pay more than $2K, Trudeau says</h1>
                <div className={s.label}>
                    <a className={s.labelLink} href="#">BBC NEWS</a>
                    <span className={s.labelClock}>2:00 pm</span>
                </div>
            </div>
        </article>
    );

}

export default New;