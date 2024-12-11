interface IProduct {
  _id: string; // Assuming ObjectId is represented as a string
  name: string;
  description: string;
  category: string;
  pricing: string;
  rating: number;
  numReviews: number;
  stock: {
    total: number;
    status: "in_stock" | "out_of_stock";
  };
  images: string[]; // URLs or paths
  color: string[];
  metadata: {
    brand: string;
    weight: number;
    dimensions: {
      width: number;
      height: number;
      length: number;
    };
  };
}

export const products: IProduct[] = [
  {
    _id: "1", // Assuming ObjectId is a string, use the product's ID as a string
    name: "GLADSTAD กลอดสท็อด",
    description:
      "เตียงบุนวมพร้อมกล่องเก็บของ 4 ใบ, คอบูซา เทาอ่อน, 150x200 ซม.",
    category: "bed",
    pricing: "13990", // Assuming price is a string, otherwise you can keep it as a number
    rating: 4.5,
    numReviews: 10,
    stock: {
      total: 10,
      status: "in_stock" // Assuming this product is in stock
    },
    images: [
      "src/images/products/bed/gladstad-upholstered-bed-4-storage-boxes-kabusa-light-grey_thumbnail.jpg",
      "src/images/products/bed/gladstad-upholstered-bed-4-storage-boxes-kabusa-light-grey_1.jpg",
      "src/images/products/bed/gladstad-upholstered-bed-4-storage-boxes-kabusa-light-grey_2.jpg",
      "src/images/products/bed/gladstad-upholstered-bed-4-storage-boxes-kabusa-light-grey_3.jpg",
      "src/images/products/bed/gladstad-upholstered-bed-4-storage-boxes-kabusa-light-grey_4.jpg",
      "src/images/products/bed/gladstad-upholstered-bed-4-storage-boxes-kabusa-light-grey_5.jpg",
      "src/images/products/bed/gladstad-upholstered-bed-4-storage-boxes-kabusa-light-grey_6.jpg",
      "src/images/products/bed/gladstad-upholstered-bed-4-storage-boxes-kabusa-light-grey_7.jpg"
    ], // Only one image URL for now (as per the structure)
    color: ["#A1D6E2", "#1995AD", "#003B46"], // You can add color options if applicable
    metadata: {
      brand: "GLADSTAD",
      weight: 0, // You can add the weight if you have it
      dimensions: {
        width: 157,
        height: 95,
        length: 212
      }
    }
  },
  {
    _id: "2", // Product ID as a string
    name: "IDANÄS อิดาแนส",
    description: "เตียงบุนวมพร้อมที่เก็บของ, กุนนาเรียด เทาเข้ม, 150x200 ซม.",
    category: "bed",
    pricing: "21990", // Price as a string
    rating: 5,
    numReviews: 10,
    stock: {
      total: 14,
      status: "in_stock" // Product is in stock
    },
    images: [
      "src/images/products/bed/idanaes-upholstered-storage-bed-gunnared-dark-grey_1.jpg",
      "src/images/products/bed/idanaes-upholstered-storage-bed-gunnared-dark-grey_2.jpg",
      "src/images/products/bed/idanaes-upholstered-storage-bed-gunnared-dark-grey_3.jpg",
      "src/images/products/bed/idanaes-upholstered-storage-bed-gunnared-dark-grey_4.jpg",
      "src/images/products/bed/idanaes-upholstered-storage-bed-gunnared-dark-grey_5.jpg",
      "src/images/products/bed/idanaes-upholstered-storage-bed-gunnared-dark-grey_6.jpg",
      "src/images/products/bed/idanaes-upholstered-storage-bed-gunnared-dark-grey_7.jpg",
      "src/images/products/bed/idanaes-upholstered-storage-bed-gunnared-dark-grey_8.jpg"
    ],
    color: ["#F4A259", "#5B2333", "#DB995A", "#2A2D34"], // Add color options if available
    metadata: {
      brand: "IDANÄS",
      weight: 0, // Add weight if available
      dimensions: {
        width: 160,
        height: 121,
        length: 223
      }
    }
  },
  {
    _id: "3", // Product ID as a string
    name: "RAMNEFJÄLL รัมเนิฟแยล",
    description: "โครงเตียงบุนวม, Kilanda ไลท์เบจ/ลูร์เอย, 150x200 ซม.",
    category: "bed",
    pricing: "8990", // Price as a string
    rating: 4,
    numReviews: 10,
    stock: {
      total: 7,
      status: "in_stock" // Product is in stock
    },
    images: [
      "src/images/products/bed/ramnefjaell-upholstered-bed-frame-kilanda-light-beige-luroey_thumbnail.jpg",
      "src/images/products/bed/ramnefjaell-upholstered-bed-frame-kilanda-light-beige-luroey_1.jpg",
      "src/images/products/bed/ramnefjaell-upholstered-bed-frame-kilanda-light-beige-luroey_2.jpg",
      "src/images/products/bed/ramnefjaell-upholstered-bed-frame-kilanda-light-beige-luroey_3.jpg",
      "src/images/products/bed/ramnefjaell-upholstered-bed-frame-kilanda-light-beige-luroey_4.jpg",
      "src/images/products/bed/ramnefjaell-upholstered-bed-frame-kilanda-light-beige-luroey_5.jpg"
    ],
    color: ["#C9D8B6", "#A3C4BC", "#688E26"], // Add color options if available
    metadata: {
      brand: "RAMNEFJÄLL",
      weight: 0, // Add weight if available
      dimensions: {
        width: 155,
        height: 100,
        length: 210
      }
    }
  },
  {
    _id: "4", // Product ID as a string
    name: "SONGESAND ซองเงซันด์",
    description: "โครงเตียง, น้ำตาล/ลูร์เอย, 180x200 ซม.",
    category: "bed",
    pricing: "6990", // Price as a string
    rating: 4.5,
    numReviews: 10,
    stock: {
      total: 10,
      status: "in_stock" // Product is in stock
    },
    images: [
      "src/images/products/bed/songesand-bed-frame-brown-luroey_thumbnail.jpg",
      "src/images/products/bed/songesand-bed-frame-brown-luroey_1.jpg",
      "src/images/products/bed/songesand-bed-frame-brown-luroey_2.jpg",
      "src/images/products/bed/songesand-bed-frame-brown-luroey_3.jpg",
      "src/images/products/bed/songesand-bed-frame-brown-luroey_4.jpg",
      "src/images/products/bed/songesand-bed-frame-brown-luroey_5.jpg"
    ],
    color: ["#FF6F59", "#254441", "#43AA8B", "#B2B09B", "#FFE156"], // Add color options if available
    metadata: {
      brand: "SONGESAND",
      weight: 0, // Add weight if available
      dimensions: {
        width: 193,
        height: 95,
        length: 207
      }
    }
  },
  {
    _id: "5", // Product ID as a string
    name: "VADSÖ วอดเซอ",
    description:
      "ที่นอนที่ใช้สปริงบอนเนลล์นั้นเหมาะอย่างยิ่งสำหรับคนที่นอนคนเดียว...",
    category: "bed",
    pricing: "1990", // Price as a string
    rating: 5,
    numReviews: 10,
    stock: {
      total: 10,
      status: "in_stock" // Product is in stock
    },
    images: [
      "src/images/products/bed/vadsoe-sprung-mattress-extra-firm-light-blue_thumbnail.jpg",
      "src/images/products/bed/vadsoe-sprung-mattress-extra-firm-light-blue_1.jpg",
      "src/images/products/bed/vadsoe-sprung-mattress-extra-firm-light-blue_2.jpg",
      "src/images/products/bed/vadsoe-sprung-mattress-extra-firm-light-blue_3.jpg",
      "src/images/products/bed/vadsoe-sprung-mattress-extra-firm-light-blue_4.jpg",
      "src/images/products/bed/vadsoe-sprung-mattress-extra-firm-light-blue_5.jpg"
    ],
    color: ["#D72638", "#3E8989", "#F46036"], // Add color options if available
    metadata: {
      brand: "VADSÖ",
      weight: 0, // Add weight if available
      dimensions: {
        width: 90,
        length: 200,
        height: 32
      }
    }
  },
  {
    _id: "6", // Product ID as a string
    name: "ADDE อ็อดเด",
    description: "เก้าอี้",
    category: "chair",
    pricing: "299", // Price as a string
    rating: 5,
    numReviews: 10,
    stock: {
      total: 130,
      status: "in_stock" // Product is in stock
    },
    images: [
      "src/images/products/chair/adde-chair-white__0728280_pe736170_s5.jpg",
      "src/images/products/chair/adde-chair-white__0872092_pe716742_s5.jpg",
      "src/images/products/chair/adde-chair-white__1052547_pe846202_s5.jpg"
    ],
    color: ["#F4E409", "#D90368", "#12EAEA", "#580AFF", "#C7F9CC"], // Add color options if available
    metadata: {
      brand: "ADDE",
      weight: 0, // Add weight if available
      dimensions: {
        width: 39,
        length: 39,
        height: 77
      }
    }
  },
  {
    _id: "7", // Product ID as a string
    name: "SMÄLLEN สเมลเลน",
    description: "เก้าอี้หมุน",
    category: "chair",
    pricing: "799", // Price as a string
    rating: 5,
    numReviews: 10,
    stock: {
      total: 130,
      status: "in_stock" // Product is in stock
    },
    images: [
      "src/images/products/chair/smaellen-swivel-chair-black__1096271_pe864278_s5.jpg",
      "src/images/products/chair/smaellen-swivel-chair-black__1096272_pe864279_s5.jpg",
      "src/images/products/chair/smaellen-swivel-chair-black__1096275_pe864280_s5.jpg",
      "src/images/products/chair/smaellen-swivel-chair-black__1115595_pe872151_s5.jpg",
      "src/images/products/chair/smaellen-swivel-chair-black__1135201_ph186313_s5.jpg"
    ],
    color: ["#FCE77D", "#A7C4BC", "#3282B8"], // Add color options if available
    metadata: {
      brand: "SMÄLLEN",
      weight: 0, // Add weight if available
      dimensions: {
        width: 39,
        length: 39,
        height: 77
      }
    }
  },
  {
    _id: "8", // Product ID as a string
    name: "FLINTAN ฟลินตัน",
    description: "เก้าอี้สำนักงาน, เบจ",
    category: "chair",
    pricing: "2799", // Price as a string
    rating: 4.5,
    numReviews: 10,
    stock: {
      total: 130,
      status: "in_stock" // Product is in stock
    },
    images: [
      "src/images/products/chair/flintan-office-chair-beige__1007198_pe825954_s5.jpg",
      "src/images/products/chair/flintan-office-chair-beige__1026868_pe834576_s5.jpg",
      "src/images/products/chair/flintan-office-chair-beige__1033625_pe837360_s5.jpg",
      "src/images/products/chair/flintan-office-chair-beige__1160253_pe888828_s5.jpg",
      "src/images/products/chair/flintan-office-chair-beige__1160255_pe888830_s5.jpg"
    ],
    color: ["#FFCBF2", "#D4A5A5", "#98878F", "#A5FFD6"], // Add color options if available
    metadata: {
      brand: "SMÄLLEN",
      weight: 0, // Add weight if available
      dimensions: {
        width: 39,
        length: 39,
        height: 77
      }
    }
  },
  {
    _id: "9", // Product ID as a string
    name: "BLECKBERGET เบลคเบเรียต",
    description: "เก้าอี้หมุน, อีเดคุลลา เบจ",
    category: "chair",
    pricing: "1999", // Price as a string
    rating: 4,
    numReviews: 10,
    stock: {
      total: 130,
      status: "in_stock" // Product is in stock
    },
    images: [
      "src/images/products/chair/bleckberget-swivel-chair-idekulla-beige__0814724_pe776010_s5.jpg",
      "src/images/products/chair/bleckberget-swivel-chair-idekulla-beige__0814725_pe776011_s5.jpg",
      "src/images/products/chair/bleckberget-swivel-chair-idekulla-beige__1026885_pe834604_s5.jpg",
      "src/images/products/chair/bleckberget-swivel-chair-idekulla-beige__1369059_pe958004_s5.jpg"
    ],
    color: ["#FF495C", "#2E2B2B", "#AB83A1", "#8FD6E1"], // Add color options if available
    metadata: {
      brand: "BLECKBERGET",
      weight: 0, // Add weight if available
      dimensions: {
        width: 39,
        length: 39,
        height: 77
      }
    }
  },
  {
    _id: "10", // Product ID as a string
    name: "ELDBERGET เอลด์เบเรียต / MALSKÄR มัลแควร์",
    description: "เก้าอี้หมุน+เบาะรอง, เทาเข้ม/ดำ",
    category: "chair",
    pricing: "1699", // Price as a string
    rating: 4,
    numReviews: 10,
    stock: {
      total: 130,
      status: "in_stock" // Product is in stock
    },
    images: [
      "src/images/products/chair/eldberget-malskaer-swivel-chair-pad-dark-grey-black__0814540_pe772625_s5.jpg",
      "src/images/products/chair/eldberget-malskaer-swivel-chair-pad-dark-grey-black__0814541_pe772657_s5.jpg",
      "src/images/products/chair/eldberget-malskaer-swivel-chair-pad-dark-grey-black__0814542_pe772658_s5.jpg",
      "src/images/products/chair/eldberget-malskaer-swivel-chair-pad-dark-grey-black__0814543_pe772659_s5 (1).jpg",
      "src/images/products/chair/eldberget-malskaer-swivel-chair-pad-dark-grey-black__0814543_pe772659_s5 (1).jpg"
    ],
    color: ["#6B9080", "#A4C3B2", "#CCE3DE", "#F6FFF8"], // Add color options if available
    metadata: {
      brand: "ELDBERGET",
      weight: 0, // Add weight if available
      dimensions: {
        width: 39,
        length: 39,
        height: 77
      }
    }
  },
  {
    _id: "11", // Product ID as a string
    name: "MATCHSPEL มาต์ชสเปียล์",
    description: "เก้าอี้สำหรับเล่นเกม, บุมสตอด เทาอ่อน",
    category: "chair",
    pricing: "4999", // Price as a string
    rating: 4.5,
    numReviews: 10,
    stock: {
      total: 130,
      status: "in_stock" // Product is in stock
    },
    images: [
      "src/images/products/chair/matchspel-gaming-chair-bomstad-light-grey__1236054_pe917426_s5.jpg",
      "src/images/products/chair/matchspel-gaming-chair-bomstad-light-grey__1236055_pe917427_s5.jpg",
      "src/images/products/chair/matchspel-gaming-chair-bomstad-light-grey__1236056_pe917428_s5.jpg",
      "src/images/products/chair/matchspel-gaming-chair-bomstad-light-grey__1248931_pe923288_s5.jpg",
      "src/images/products/chair/matchspel-gaming-chair-bomstad-light-grey__1257808_ph194303_s5.jpg"
    ],
    color: ["#ADEFD1", "#00203F", "#6C757D", "#F4A259", "#00509D"], // Add color options if available
    metadata: {
      brand: "MATCHSPEL",
      weight: 0, // Add weight if available
      dimensions: {
        width: 39,
        length: 39,
        height: 77
      }
    }
  },
  {
    _id: "12", // Assuming you use string for ObjectId
    name: "GRIMSBU กริมส์บู",
    description: "โครงเตียง, เทา, 90x200 ซม.",
    category: "bed",
    pricing: "1290", // Adjusted to string as per your interface
    rating: 5,
    numReviews: 10,
    stock: {
      total: 20,
      status: "in_stock"
    },
    images: [
      "src/images/products/bed/grimsbu-bed-frame-grey__0749251_pe747239_s5-thumbnail.jpg",
      "src/images/products/bed/grimsbu-bed-frame-grey__1101950_pe866876_s5-1.jpg",
      "src/images/products/bed/grimsbu-bed-frame-grey__1101951_pe866877_s5-2.jpg",
      "src/images/products/bed/grimsbu-bed-frame-grey__0750181_pe747235_s5-3.jpg",
      "src/images/products/bed/grimsbu-bed-frame-grey__0966522_ph175107_s5-4.jpg",
      "src/images/products/bed/grimsbu-bed-frame-grey__0751412_pe746981_s5-d.jpg"
    ],
    color: ["#8ACDEA", "#FF6978", "#D7FFAB"], // Assuming a simple color array
    metadata: {
      brand: "GRIMSBU",
      weight: 10, // Assuming weight (e.g., 10 kg or adjust as needed)
      dimensions: {
        width: 92,
        height: 55,
        length: 202
      }
    }
  },
  {
    _id: "13", // Assuming string for ObjectId
    name: "TARVA ทาร์ฟวา",
    description: "โครงเตียง, เทา, 90x200 ซม.",
    category: "bed",
    pricing: "3290", // Adjusted to string as per your interface
    rating: 4,
    numReviews: 10,
    stock: {
      total: 20,
      status: "in_stock"
    },
    images: [
      "src/images/products/bed/tarva-bed-frame-pine__0655004_pe708894_s5-thumbnail.jpg",
      "src/images/products/bed/tarva-bed-frame-pine__0368084_ph106085_s5.jpg",
      "src/images/products/bed/tarva-bed-frame-pine__0860730_pe566702_s5.jpg",
      "src/images/products/bed/tarva-bed-frame-pine__1101955_pe866881_s5.jpg",
      "src/images/products/bed/tarva-bed-frame-pine__1101956_pe866882_s5.jpg",
      "src/images/products/bed/tarva-bed-frame-pine__1101957_pe866883_s5.jpg",
      "src/images/products/bed/tarva-bed-frame-pine__1208950_pe908923_s5-d.jpg"
    ],
    color: ["#00203F", "#ADEFD1", "#DAA49A", "#606060"], // Assuming it's gray based on the description
    metadata: {
      brand: "TARVA",
      weight: 15, // Adjusted based on typical bed frame weight (e.g., 15 kg)
      dimensions: {
        width: 98,
        height: 92,
        length: 209
      }
    }
  },
  {
    _id: "14", // Assuming string for ObjectId
    name: "VEVELSTAD เวียเวลสตัด",
    description: "โครงเตียง, เทา, 90x200 ซม.",
    category: "bed",
    pricing: "2990", // Adjusted to string as per your interface
    rating: 4.5,
    numReviews: 10,
    stock: {
      total: 20,
      status: "in_stock"
    },
    images: [
      "src/images/products/bed/vevelstad-bed-frame-white__1035350_pe840525_s5.jpg",
      "src/images/products/bed/vevelstad-bed-frame-white__1035352_pe840526_s5.jpg",
      "src/images/products/bed/vevelstad-bed-frame-white__1035716_pe838155_s5.jpg",
      "src/images/products/bed/vevelstad-bed-frame-white__1097674_pe865098_s5.jpg",
      "src/images/products/bed/vevelstad-bed-frame-white__1116344_pe872490_s5.jpg"
    ],
    color: ["#FF5A5F", "#767676", "#4ECDC4", "#C7F9CC", "#FCE77D"], // Assuming it's white based on the product description and images
    metadata: {
      brand: "VEVELSTAD",
      weight: 20, // Adjusted based on typical weight for bed frames (e.g., 20 kg)
      dimensions: {
        width: 96,
        height: 27,
        length: 207
      }
    }
  },
  {
    _id: "15", // Assuming string for ObjectId
    name: "UTÅKER อูทัวเคร์",
    description: "โครงเตียง, เทา, 90x200 ซม.",
    category: "bed",
    pricing: "12970", // Adjusted to string as per your interface
    rating: 5,
    numReviews: 10,
    stock: {
      total: 20,
      status: "in_stock"
    },
    images: [
      "src/images/products/bed/utaker-stackable-bed-with-2-mattresses-pine-afjaell-firm__0860733_pe649178_s5.jpg",
      "src/images/products/bed/utaker-stackable-bed-with-2-mattresses-pine-afjaell-firm__0860737_pe649179_s5.jpg",
      "src/images/products/bed/utaker-stackable-bed-with-2-mattresses-pine-afjaell-firm__0976032_pe812963_s5.jpg",
      "src/images/products/bed/utaker-stackable-bed-with-2-mattresses-pine-afjaell-firm__0986620_pe818094_s5.jpg",
      "src/images/products/bed/utaker-stackable-bed-with-2-mattresses-pine-afjaell-firm__1063819_ph182872_s5.jpg",
      "src/images/products/bed/utaker-stackable-bed-with-2-mattresses-pine-afjaell-firm__1101313_pe866582_s5.jpg",
      "src/images/products/bed/utaker-stackable-bed-with-2-mattresses-pine-afjaell-firm__1101314_pe866569_s5.jpg"
    ],
    color: ["#F67280", "#C06C84", "#6C5B7B", "#355C7D"], // Based on the description mentioning "เทา" (gray)
    metadata: {
      brand: "UTÅKER",
      weight: 30, // Adjusted based on the size of the bed and materials used (estimated)
      dimensions: {
        width: 83,
        height: 46,
        length: 205
      }
    }
  }
];

export default products;
