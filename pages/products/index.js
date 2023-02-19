import ProductCard from "../../components/UI/productCard";

const products = [
  {
    productId: "123asc",
    name: "INTEL CPU",
    price: 37000,
    category: "cpu",
    inStock: true,
    imgs: [
      "https://m.media-amazon.com/images/I/51EtUSUQeJS.jpg",
      "https://images.unsplash.com/photo-1555616635-640b71bdb185?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1555617778-02518510b9fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ],
  },
  {
    productId: "123asadasd",
    name: "NVIDIA RTX 2080",
    price: 77000,
    category: "gpu",
    inStock: true,
    imgs: [
      "https://images.unsplash.com/photo-1591489237701-57358ac6d20d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1591405351990-4726e331f141?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1555618254-84e2cf498b01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    ],
  },
  {
    productId: "123fsc",
    name: "AMD CPU",
    price: 21000,
    category: "cpu",
    inStock: true,

    imgs: [
      "https://m.media-amazon.com/images/I/81b75EQJrgL._SY450_.jpg",
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1551640179-9e39f8055291?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1222&q=80",
    ],
  },
  {
    productId: "134asc",
    name: "Apple Mac Mini",
    price: 70000,
    category: "mac",
    inStock: true,

    imgs: [
      "https://allcell.am/wp-content/uploads/2022/05/Mac-Mini-M1-1.jpg",
      "https://s.yimg.com/uu/api/res/1.2/X8t6PJiuJWFJtS7h_xWeTQ--~B/aD0xMjI1O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-01/0c5842b0-9e70-11ed-bbdc-46e55792b8fa.cf.jpg",
      "https://images.unsplash.com/photo-1636298813354-00d8200924a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ],
  },
  {
    productId: "134asas23sc",
    name: "Razer Blade 15",
    price: 270000,
    category: "laptop",
    inStock: true,

    imgs: [
      "https://static.toiimg.com/thumb/resizemode-4,msid-88127329,imgsize-200,width-1200/88127329.jpg",
      "https://www.digitaltrends.com/wp-content/uploads/2022/04/razer-blade-17-12.jpg?p=1",
      "https://images.unsplash.com/photo-1605134513573-384dcf99a44c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ],
  },
  {
    productId: "134as23sc",
    name: "Lenovo ThinkStation",
    price: 210000,
    category: "desktop",
    inStock: true,

    imgs: [
      "https://m.media-amazon.com/images/I/41xpVzI8UZL._SX679_.jpg",
      "https://images.anandtech.com/doci/9214/Carousel_678x452_678x452.jpg",
      "https://www.servethehome.com/wp-content/uploads/2017/05/Lenovo-ThinkStation-P910-ThinkVision-P27.jpg",
    ],
  },
  {
    productId: "134as23sc",
    name: "Dell XPS 15",
    price: 310000,
    category: "laptop",
    inStock: true,
    imgs: [
      "https://s.yimg.com/uu/api/res/1.2/_VlKJPOn7iG6Ejcm.Ak4bQ--~B/aD0xMjE2O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-06/5e8c1f20-e8c7-11ec-bfdf-846a6ce9c468.cf.webp",
      "https://static1.xdaimages.com/wordpress/wp-content/uploads/2022/07/Dell-XPS-13-Plus-10.jpg",
      "https://cdn.mos.cms.futurecdn.net/S82RH7GjSAwEjfa8mNPcmn.jpg",
    ],
  },
  {
    productId: "1356as23sc",
    name: "Apple Macbook Pro",
    price: 285000,
    category: "mac",
    inStock: true,
    imgs: [
      "https://m.media-amazon.com/images/I/61bX2AoGj2L._SL1500_.jpg",
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206?wid=1280&hei=1190&fmt=jpeg&qlt=90&.v=1664497359481",
      "https://static.toiimg.com/thumb/resizemode-4,msid-81328406,imgsize-1399554,width-720/81328406.jpg",
    ],
  },
  {
    productId: "3676as23sc",
    name: "NZXT PC",
    price: 125000,
    category: "desktop",
    inStock: true,
    imgs: [
      "https://cdn.vox-cdn.com/thumbor/8ZII7xCKLfAWJCjlRuT_l27uF2g=/0x0:3000x2250/1400x1400/filters:focal(1332x1126:1333x1127)/cdn.vox-cdn.com/uploads/chorus_asset/file/21820772/NZXT_starter.jpg",
      "https://images.unsplash.com/photo-1634891392987-e91db6bf9557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
      "https://images.unsplash.com/photo-1644253058046-06bf9b4c2c44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ],
  },
];

function Products() {
  return (
    <div className="py-12 lg:py-24 w-[92%] lg:w-4/5 mx-auto">
      <h2 className="text-xl md:text-3xl font-semibold mb-4 lg:mb-8 text-center">
        All Products
      </h2>
      <ul className="flex flex-wrap justify-between gap-y-12 lg:gap-y-20">
        {/* {featuredJSX} */}
        {products.map((el, i) => (
          <ProductCard el={el} i={i} key={i} />
        ))}
      </ul>
    </div>
  );
}

export default Products;
