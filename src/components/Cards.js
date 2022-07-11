import Card from './Card';

export default function Cards() {
  return (
    <div className='d-flex flex-row m-5'>
      <Card
        title='Saint-Petersburg'
        text='St. Petersburg is a very popular place'
        link='http://www.saint-petersburg.com/'
      >
        <img
          className='card-img-top'
          src='https://ixbt.online/live/images/original/20/85/03/2022/06/04/5f00293f9d.jpg?w=877'
          alt='Saint-Petersburg'
        />
      </Card>
      <Card
        title='Google'
        text='Google is a most popular search engine'
        link='https://www.google.ru/'
      ></Card>
    </div>
  );
}
