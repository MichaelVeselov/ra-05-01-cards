import PropTypes from 'prop-types';

function Card({ title, text, link, ...props }) {
  return (
    <div className='card me-5' style={{ width: '18rem' }}>
      {props.children}
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{text}</p>
        <a href={link} target='blank' className='btn btn-primary'>
          Go {title}
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
