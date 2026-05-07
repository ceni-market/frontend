import './AppPopular.scss';

const POPULAR_PRODUCTS = [
  {
    title: '맥북 에어 M1 13인치',
    category: 'ITㆍ디지털',
    price: '650,000원',
    time: '2시간 전',
    likes: 12,
  },
  {
    title: '맥북 에어 M1 13인치',
    category: 'ITㆍ디지털',
    price: '650,000원',
    time: '2시간 전',
    likes: 12,
  },
  {
    title: '맥북 에어 M1 13인치',
    category: 'ITㆍ디지털',
    price: '650,000원',
    time: '2시간 전',
    likes: 12,
  },
  {
    title: '맥북 에어 M1 13인치',
    category: 'ITㆍ디지털',
    price: '650,000원',
    time: '2시간 전',
    likes: 12,
  },
  {
    title: '맥북 에어 M1 13인치',
    category: 'ITㆍ디지털',
    price: '650,000원',
    time: '2시간 전',
    likes: 12,
  },
  {
    title: '맥북 에어 M1 13인치',
    category: 'ITㆍ디지털',
    price: '650,000원',
    time: '2시간 전',
    likes: 12,
  },
];

function AppPopular() {
  return (
    <section className="app-popular" data-node-id="425:2079">
      <div className="app-popular-inner content-container">
        <div className="app-popular-header" data-node-id="425:2160">
          <h2 className="app-popular-title">지금 인기 있는 상품</h2>
          <a className="app-popular-more" href="/">
            더 보기 &gt;
          </a>
        </div>

        <div className="app-popular-list" data-node-id="425:2081">
          {POPULAR_PRODUCTS.map((product, index) => (
            <a className="app-popular-card" href="/" key={`${product.title}-${index}`}>
              <div className="app-popular-thumb">
                <img
                  className="app-popular-thumb-image"
                  src="/assets/images/popular-sample.jpeg"
                  alt=""
                />
                <span className="app-popular-like">
                  <i className="app-popular-like-icon bi bi-heart" aria-hidden="true" />
                  <span className="app-popular-like-count">{product.likes}</span>
                </span>
              </div>

              <div className="app-popular-info">
                <strong className="app-popular-card-title">{product.title}</strong>
                <span className="app-popular-category">{product.category}</span>
                <span className="app-popular-meta">
                  <span className="app-popular-price">{product.price}</span>
                  <span className="app-popular-time">{product.time}</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AppPopular;
