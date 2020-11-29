import PropTypes from 'prop-types';
import s from './Statistical.module.css';

function Statistic({ title, stats }) {
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>Upload stats</h2>}

            <ul className={s.list}>
                {stats.map(stat => (
                    <li className={s.item} key={stat.id}>
                        <span className={s.label}>{stat.label}</span>
                        <span className={s.percentage}>{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}    


Statistic.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }),
    ),
};


export default Statistic;