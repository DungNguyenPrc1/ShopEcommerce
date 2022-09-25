const products = [
  {
    id: 1,
    name: "Iphone 14 Pro",
    desc: "Cuối cùng thì chiếc iPhone 14 Pro Max cũng đã chính thức lộ diện tại sự kiện ra mắt thường niên vào ngày 08/09 đến từ nhà Apple, kết thúc bao lời đồn đoán bằng một bộ thông số cực kỳ ấn tượng cùng vẻ ngoài đẹp mắt sang trọng",

    price: 33990990,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg",
    imageMini: "https://cdn.tgdd.vn/ValueIcons/label-moi-ra-mat-fnal.png",
  },
  {
    id: 2,
    name: "Samsung Galaxy z Flip 4 5G",
    desc: "Bộ phụ kiện 8 triệu giảm ngay 2 triệu",

    // desc: "Khi mua sắm cho mình phiên bản này người dùng sẽ nhận được cho mình một chiếc Samsung Galaxy Z Flip4 5G phiên bản màu vàng và kèm theo bên trong sẽ là bộ quà tặng đến từ nhà Samsung.",
    price: 40990990,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/290748/600x600-thumb-qua-dac-biet-600x600.jpg",
    imageMini: "https://cdn.tgdd.vn/ValueIcons/label-moi-ra-mat-fnal.png",
  },
  {
    id: 3,
    name: "Oppo A54",
    // desc: "Cuối cùng thì chiếc iPhone 14 Pro Max cũng đã chính thức lộ diện tại sự kiện ra mắt thường niên vào ngày 08/09 đến từ nhà Apple, kết thúc bao lời đồn đoán bằng một bộ thông số cực kỳ ấn tượng cùng vẻ ngoài đẹp mắt sang trọng",
    price: 10990990,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/236768/oppo-a54-4g-black-600x600.jpg",
    imageMini: "https://cdn.tgdd.vn/ValueIcons/Label_01-05.png",
  },
  {
    id: 4,
    name: "Macbook M2",

    price: 33990990,
    image:
      "https://cdn.tgdd.vn/Products/Images/44/231253/TimerThumb/apple-macbook-pro-2020-m1-myd82saa-(8).jpg",
    imageMini: "https://cdn.tgdd.vn/ValueIcons/label-moi-ra-mat-fnal.png",
  },
  {
    id: 5,
    name: "Iphone 14 Pro",
    desc: "Cuối cùng thì chiếc iPhone 14 Pro Max cũng đã chính thức lộ diện tại sự kiện ra mắt thường niên vào ngày 08/09 đến từ nhà Apple, kết thúc bao lời đồn đoán bằng một bộ thông số cực kỳ ấn tượng cùng vẻ ngoài đẹp mắt sang trọng",

    price: 68100000,
    image:
      "https://cdn.tgdd.vn/Products/Images/44/263914/macbook-pro-14-m1-max-2021-10-core-cpu-600x600.jpg",
    imageMini: "https://cdn.tgdd.vn/ValueIcons/label-moi-ra-mat-fnal.png",
  },
  {
    id: 6,
    name: "Điện thoại OPPO Reno8 Z 5G ",
    desc: "Ấn tượng với diện mạo thời trang và màn hình chất lượng",

    price: 53990990,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/282901/oppo-reno8-z-5g-vang-thumb-2-600x600.jpg",
    imageMini: "https://cdn.tgdd.vn/ValueIcons/Label_01-05.png",
  },
  {
    id: 7,
    name: "Samsung Galaxy M53",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/153856/TimerThumb/iPhone-11-thumb-h%E1%BA%B9n-gi%E1%BB%9D-2.jpg",

    price: 20990990,
    imageMini: "https://cdn.tgdd.vn/ValueIcons/Label_01-05.png",
  },
  {
    id: 8,
    name: "Iphone 11 Pro",
    desc: "Apple đã chính thức trình làng bộ 3 siêu phẩm iPhone 11, trong đó phiên bản iPhone 11 64GB có mức giá rẻ nhất nhưng vẫn được nâng cấp mạnh mẽ như iPhone Xr ra mắt trước đó.",

    price: 33990990,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/153856/TimerThumb/iPhone-11-thumb-h%E1%BA%B9n-gi%E1%BB%9D-2.jpg",
    imageMini: "https://cdn.tgdd.vn/ValueIcons/Label_01-05.png",
  },
  {
    id: 9,
    name: "Iphone 14 Pro",
    desc: "Cuối cùng thì chiếc iPhone 14 Pro Max cũng đã chính thức lộ diện tại sự kiện ra mắt thường niên vào ngày 08/09 đến từ nhà Apple, kết thúc bao lời đồn đoán bằng một bộ thông số cực kỳ ấn tượng cùng vẻ ngoài đẹp mắt sang trọng",

    price: 33990990,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg",
    imageMini: "https://cdn.tgdd.vn/ValueIcons/Label_01-05.png",
  },
  {
    id: 10,
    name: "Iphone 14 Pro",
    desc: "Cuối cùng thì chiếc iPhone 14 Pro Max cũng đã chính thức lộ diện tại sự kiện ra mắt thường niên vào ngày 08/09 đến từ nhà Apple, kết thúc bao lời đồn đoán bằng một bộ thông số cực kỳ ấn tượng cùng vẻ ngoài đẹp mắt sang trọng",

    price: 33990990,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg",
    imageMini: "https://cdn.tgdd.vn/ValueIcons/Label_01-05.png",
  },
];
module.exports = products;
