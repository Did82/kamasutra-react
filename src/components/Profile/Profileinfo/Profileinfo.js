import s from './Profileinfo.module.css';

export const Profileinfo = (props) => {
    return (
        <div className={s.description}>
            <div className={s.avatar}>
                <img className={s.photo} src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt=""/>
            </div>
            <div className={s.info}>
                description
            </div>
        </div>
    );
};

export default Profileinfo;
