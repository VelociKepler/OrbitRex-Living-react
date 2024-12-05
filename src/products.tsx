import { Size } from "./pages/products/ProductPage.type.ts";

interface ProductType {
  id: number;
  name: string;
  imageThumbnail: string;
  image: string[];
  description: string;
  detail?: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
  productNumber?: string;
  size: Size;
}

export const products: ProductType[] = [
  {
    id: 1,
    name: "GLADSTAD กลอดสท็อด",
    imageThumbnail:
      "src/images/products/bed/gladstad-upholstered-bed-4-storage-boxes-kabusa-light-grey_thumbnail.jpg",
    image: [
      "/images/products/bed/gladstad-upholstered-bed-4-storage-boxes-kabusa-light-grey_1.jpg",
      "/images/products/bed/gladstad-upholstered-bed-4-storage-boxes-kabusa-light-grey_2.jpg",
      "/images/products/bed/gladstad-upholstered-bed-4-storage-boxes-kabusa-light-grey_3.jpg",
      "/images/products/bed/gladstad-upholstered-bed-4-storage-boxes-kabusa-light-grey_4.jpg",
      "/images/products/bed/gladstad-upholstered-bed-4-storage-boxes-kabusa-light-grey_5.jpg",
      "/images/products/bed/gladstad-upholstered-bed-4-storage-boxes-kabusa-light-grey_6.jpg",
      "/images/products/bed/gladstad-upholstered-bed-4-storage-boxes-kabusa-light-grey_7.jpg",
    ],
    description:
      "เตียงบุนวมพร้อมกล่องเก็บของ 4 ใบ, คอบูซา เทาอ่อน, 150x200 ซม.",
    detail: `เลื่อนกล่องลิ้นชักเข้าและออกง่าย เพราะที่ฐานกล่องมีล้อเลื่อน
      ดีไซน์เรียบง่ายแต่หลากหลาย เข้ากับเฟอร์นิเจอร์ห้องนอนอื่นๆ ได้ดี ลงตัวกับทุกห้องนอนที่แต่งในสไตล์โมเดิร์น
      หัวเตียงบุนวมเป็นพนักพิงที่นุ่มสบาย เช่น ตอนอ่านหนังสือ หรือเพลิดเพลินกับอาหารเช้าสุดสัปดาห์บนเตียง
      โครงเตียงมาพร้อมกล่องเก็บของใต้เตียง 4 ชิ้น จึงเป็นทั้งมุมพักผ่อนแสนสบายและที่เก็บของฟังก์ชั่นครบครัน
      ผ้าหุ้ม KABUSA/คอบูซา เนื้อนุ่มผิวสัมผัสมีรายละเอียด ทอด้วยด้ายโทนสีเทา 3 ช่วยพรางคราบเปื้อน
      กล่องเก็บของใต้เตียงสีเทาเฉดเดียวกับผ้าหุ้ม KABUSA/คอบูซา และโครงโครงเตียง
      มือจับสายคล้องช่วยให้คุณดึงกล่องออกมาค้นหาของได้สะดวก หรือจะซ่อนที่สายเพื่อให้ดูเนี้ยบ หรือดึงออกมาให้เห็นก็ดูดีไปอีกแบบ`,
    brand: "GLADSTAD",
    category: "bed",
    price: 13990,
    countInStock: 10,
    rating: 5,
    numReviews: 8,
    size: {
      length: 212,
      width: 157,
      thickness: 33,
      height: 95,
    },
  },
  {
    id: 2,
    name: "IDANÄS อิดาแนส",
    imageThumbnail:
      "src/images/products/bed/idanaes-upholstered-storage-bed-gunnared-dark-grey_thumbnail.jpg",
    image: [
      "src/images/products/bed/idanaes-upholstered-storage-bed-gunnared-dark-grey_1.jpg",
      "src/images/products/bed/idanaes-upholstered-storage-bed-gunnared-dark-grey_2.jpg",
      "src/images/products/bed/idanaes-upholstered-storage-bed-gunnared-dark-grey_3.jpg",
      "src/images/products/bed/idanaes-upholstered-storage-bed-gunnared-dark-grey_4.jpg",
      "src/images/products/bed/idanaes-upholstered-storage-bed-gunnared-dark-grey_5.jpg",
      "src/images/products/bed/idanaes-upholstered-storage-bed-gunnared-dark-grey_6.jpg",
      "src/images/products/bed/idanaes-upholstered-storage-bed-gunnared-dark-grey_7.jpg",
      "src/images/products/bed/idanaes-upholstered-storage-bed-gunnared-dark-grey_8.jpg",
    ],
    description: "เตียงบุนวมพร้อมที่เก็บของ, กุนนาเรียด เทาเข้ม, 150x200 ซม.",
    detail:
      "หัวเตียงบุนวมนุ่มพิงสบายทั้งเวลานั่งอ่านหนังสือหรือดูทีวีบนเตียงนอน",
    brand: "IDANÄS",
    category: "bed",
    price: 21990,
    countInStock: 14,
    rating: 4.5,
    numReviews: 2,
    productNumber: "804.471.72",
    size: {
      length: 223,
      width: 160,
      thickness: 49,
      height: 121,
    },
  },
  {
    id: 3,
    name: "RAMNEFJÄLL รัมเนิฟแยล",
    description: "โครงเตียงบุนวม, Kilanda ไลท์เบจ/ลูร์เอย, 150x200 ซม.",
    imageThumbnail:
      "src/images/products/bed/ramnefjaell-upholstered-bed-frame-kilanda-light-beige-luroey_thumbnail.jpg",
    image: [
      "src/images/products/bed/ramnefjaell-upholstered-bed-frame-kilanda-light-beige-luroey_1",
      "src/images/products/bed/ramnefjaell-upholstered-bed-frame-kilanda-light-beige-luroey_2",
      "src/images/products/bed/ramnefjaell-upholstered-bed-frame-kilanda-light-beige-luroey_3",
      "src/images/products/bed/ramnefjaell-upholstered-bed-frame-kilanda-light-beige-luroey_4",
      "src/images/products/bed/ramnefjaell-upholstered-bed-frame-kilanda-light-beige-luroey_5",
      "src/images/products/bed/ramnefjaell-upholstered-bed-frame-kilanda-light-beige-luroey_6",
      "src/images/products/bed/ramnefjaell-upholstered-bed-frame-kilanda-light-beige-luroey_7",
      "src/images/products/bed/ramnefjaell-upholstered-bed-frame-kilanda-light-beige-luroey_8",
    ],
    detail:
      "หัวเตียงบุนวมนุ่มพิงสบายทั้งเวลานั่งอ่านหนังสือหรือดูทีวีบนเตียงนอน",
    brand: "RAMNEFJÄLL",
    category: "bed",
    price: 8990,
    countInStock: 7,
    rating: 4.5,
    numReviews: 1,
    productNumber: "295.601.66",
    size: {
      length: 210,
      width: 155,
      thickness: 43,
      height: 100,
    },
  },
  {
    id: 4,
    name: "SONGESAND ซองเงซันด์",
    imageThumbnail:
      "src/images/products/bed/songesand-bed-frame-brown-luroey_thumbnail.jpg",
    image: [
      "src/images/products/bed/songesand-bed-frame-brown-luroey_1",
      "src/images/products/bed/songesand-bed-frame-brown-luroey_2",
      "src/images/products/bed/songesand-bed-frame-brown-luroey_3",
      "src/images/products/bed/songesand-bed-frame-brown-luroey_4",
      "src/images/products/bed/songesand-bed-frame-brown-luroey_5",
    ],
    description: "โครงเตียง, น้ำตาล/ลูร์เอย, 180x200 ซม.",
    detail: `ข้างเตียงปรับความสูงได้ ใช้ได้กับที่นอนที่มีความหนาต่างกัน
      โครงเตียงดีไซน์คลาสสิกดูสวยลงตัวไม่ว่าจะเลือกใช้กับเครื่องนอนหรือเฟอร์นิเจอร์ห้องนอนแบบใดก็ตาม 
      และแน่นอนว่าสามารถใช้ร่วมกับเฟอร์นิเจอร์อื่นๆ ในซีรีส์ SONGESAND/ซองเงซันด์ ได้อย่างเหมาะเจาะ
      คุณสามารถเพิ่มกล่องเก็บของใต้เตียง SONGESAND/ซองเงซันด์ ได้ เหมาะสำหรับเก็บผ้านวมและหมอนสำรอง
      คุณสามารถดูดฝุ่นใต้โครงเตียงได้ง่ายๆ เพื่อให้พื้นที่ใต้เตียงสะอาดและไร้ฝุ่น`,
    brand: "SONGESAND",
    category: "bed",
    price: 6990,
    countInStock: 10,
    rating: 5,
    numReviews: 8,
    size: {
      length: 207,
      width: 193,
      thickness: 41,
      height: 95,
    },
  },
  {
    id: 5,
    name: "VADSÖ วอดเซอ",
    imageThumbnail:
      "src/images/products/bed/vadsoe-sprung-mattress-extra-firm-light-blue_thumbnail.jpg",
    image: [
      "src/images/products/bed/vadsoe-sprung-mattress-extra-firm-light-blue_1",
      "src/images/products/bed/vadsoe-sprung-mattress-extra-firm-light-blue_2",
      "src/images/products/bed/vadsoe-sprung-mattress-extra-firm-light-blue_3",
      "src/images/products/bed/vadsoe-sprung-mattress-extra-firm-light-blue_4",
      "src/images/products/bed/vadsoe-sprung-mattress-extra-firm-light-blue_5",
    ],
    description:
      "ที่นอนที่ใช้สปริงบอนเนลล์นั้นเหมาะอย่างยิ่งสำหรับคนที่นอนคนเดียว...",
    brand: "VADSÖ",
    category: "bed",
    price: 1990,
    countInStock: 10,
    rating: 5,
    numReviews: 20,
    size: {
      length: 200,
      width: 90,
      thickness: 17,
    },
  },
  {
    id: 6,
    name: "ADDE อ็อดเด",
    imageThumbnail:
      "src/images/products/chair/adde-chair-white__0728280_pe736170_s5.jpg",
    image: [
      "src/iimages/products/chair/adde-chair-white__0728280_pe736170_s5.jpg",
      "src/iimages/products/chair/adde-chair-white__0872092_pe716742_s5.jpg",
      "src/iimages/products/chair/adde-chair-white__1052547_pe846202_s5.jpg",
      "src/iimages/products/chair/adde-chair-white__1052547_pe846202_s5.jpg",
    ],
    description: "เก้าอี้",
    detail: `เก้าอี้ ADDE/อ็อดเด มีดีไซน์โปร่งและเบาสามารถวางซ้อนกันได้ 
    ทำให้ง่ายต่อการจัดเก็บเวลาคุณต้องการพื้นที่กว้างๆสำหรับกิจกรรมต่างๆ 
    และยังเหมาะสำหรับเวลาที่คุณมีแขกมาบ้านหลายๆ คนอีกด้วย`,
    brand: "ADDE",
    category: "chair",
    price: 299,
    countInStock: 130,
    rating: 5,
    numReviews: 8,
    size: {
      length: 39,
      width: 39,
      thickness: 39,
      height: 77,
    },
  },
  {
    id: 7,
    name: "SMÄLLEN สเมลเลน",
    imageThumbnail:
      "src/images/products/chair/smaellen-swivel-chair-black__1096271_pe864278_s5.jpg",
    image: [
      "src/images/products/chair/smaellen-swivel-chair-black__1096272_pe864279_s5.jpg",
      "src/images/products/chair/smaellen-swivel-chair-black__1096275_pe864280_s5.jpg",
      "src/images/products/chair/smaellen-swivel-chair-black__1115595_pe872151_s5.jpg",
      "src/images/products/chair/smaellen-swivel-chair-black__1135201_ph186313_s5.jpg",
    ],
    description: "เก้าอี้หมุน",
    detail: `เก้าอี้ SMÄLLEN/สเมลเลน มีดีไซน์ที่เรียบง่าย สะอาดตา และมีพื้นผิวที่สัมผัสได้ถึงคุณภาพที่ดีเยี่ยม หากคุณต้องการเก้าอี้ที่ดูดี มีเอกลักษณ์ เก้าอี้ดีไซน์เรียบง่ายตัวนี้สามารถตอบโจทย์ความต้องการของคุณได้อย่างครบครัน!`,
    brand: "SMÄLLEN",
    category: "chair",
    price: 799,
    countInStock: 130,
    rating: 5,
    numReviews: 8,
    size: {
      length: 39,
      width: 39,
      thickness: 39,
      height: 77,
    },
  },
  {
    id: 8,
    name: "FLINTAN ฟลินตัน",
    imageThumbnail:
      "src/images/products/chair/flintan-office-chair-beige__1007198_pe825954_s5.jpg",
    image: [
      "src/images/products/chair/flintan-office-chair-beige__1026868_pe834576_s5.jpg",
      "src/images/products/chair/flintan-office-chair-beige__1033625_pe837360_s5.jpg",
      "src/images/products/chair/flintan-office-chair-beige__1160253_pe888828_s5.jpg",
      "src/images/products/chair/flintan-office-chair-beige__1160255_pe888830_s5.jpg",
    ],
    description: "เก้าอี้สำนักงาน, เบจ",
    detail:
      "เก้าอี้สำนักงานเออร์โกโนมิกช่วยให้คุณนั่งสบายและมีสมาธิด้วยพนักพิงทรงสูงที่รองรับหลังอย่างดี ทำด้วยผ้าตาข่ายเพิ่มความเย็นสบาย ผ้าหุ้มที่นั่งถอดซักได้ รับประกัน 10 ปี",
    brand: "SMÄLLEN",
    category: "chair",
    price: 2799,
    countInStock: 130,
    rating: 5,
    numReviews: 8,
    size: {
      length: 39,
      width: 39,
      thickness: 39,
      height: 77,
    },
  },
  {
    id: 9,
    name: "BLECKBERGET เบลคเบเรียต",
    imageThumbnail:
      "src/images/products/chair/bleckberget-swivel-chair-idekulla-beige__0814722_pe776008_s5.jpg",
    image: [
      "src/images/products/chair/bleckberget-swivel-chair-idekulla-beige__0814724_pe776010_s5.jpg",
      "src/images/products/chair/bleckberget-swivel-chair-idekulla-beige__0814725_pe776011_s5.jpg",
      "src/images/products/chair/bleckberget-swivel-chair-idekulla-beige__1026885_pe834604_s5.jpg",
      "src/images/products/chair/bleckberget-swivel-chair-idekulla-beige__1369059_pe958004_s5.jpg",
    ],
    description: "เก้าอี้หมุน, อีเดคุลลา เบจ",
    detail:
      "เก้าอี้สำนักงานเออร์โกโนมิกช่วยให้คุณนั่งสบายและมีสมาธิด้วยพนักพิงทรงสูงที่รองรับหลังอย่างดี ทำด้วยผ้าตาข่ายเพิ่มความเย็นสบาย ผ้าหุ้มที่นั่งถอดซักได้ รับประกัน 10 ปี",
    brand: "BLECKBERGET",
    category: "chair",
    price: 1999,
    countInStock: 130,
    rating: 5,
    numReviews: 8,
    size: {
      length: 39,
      width: 39,
      thickness: 39,
      height: 77,
    },
  },
  {
    id: 10,
    name: "ELDBERGET เอลด์เบเรียต / MALSKÄR มัลแควร์",
    imageThumbnail:
      "src/images/products/chair/eldberget-malskaer-swivel-chair-pad-dark-grey-black__0814540_pe772625_s5.jpg",
    image: [
      "src/images/products/chair/eldberget-malskaer-swivel-chair-pad-dark-grey-black__0814541_pe772657_s5.jpg",
      "src/images/products/chair/eldberget-malskaer-swivel-chair-pad-dark-grey-black__0814542_pe772658_s5.jpg",
      "src/images/products/chair/eldberget-malskaer-swivel-chair-pad-dark-grey-black__0814543_pe772659_s5 (1).jpg",
      "src/images/products/chair/eldberget-malskaer-swivel-chair-pad-dark-grey-black__0814543_pe772659_s5 (1).jpg",
    ],
    description: "เก้าอี้หมุน+เบาะรอง, เทาเข้ม/ดำ",
    detail:
      "รองรับหลังบริเวณส่วนล่างสามารถปรับระดับความสูงได้ โดยมาพร้อมล้อเลื่อนที่แข็งแรง รวมทุกอย่างไว้ที่เก้าอี้หมุนตัวนี้เป็นที่เรียบร้อยจะไถลเลื่อนไปใช้งานที่โต๊ะอาหาร หรือเพลิดเพลินกับความนุ่มสบายของเบาะที่นั่งก็ได้เช่นกัน",
    brand: "ELDBERGET",
    category: "chair",
    price: 1699,
    countInStock: 130,
    rating: 5,
    numReviews: 8,
    size: {
      length: 39,
      width: 39,
      thickness: 39,
      height: 77,
    },
  },
  {
    id: 11,
    name: "MATCHSPEL มาต์ชสเปียล์",
    imageThumbnail:
      "src/images/products/chair/matchspel-gaming-chair-bomstad-light-grey__1236054_pe917426_s5.jpg",
    image: [
      "src/images/products/chair/matchspel-gaming-chair-bomstad-light-grey__1236055_pe917427_s5.jpg",
      "src/images/products/chair/matchspel-gaming-chair-bomstad-light-grey__1236056_pe917428_s5.jpg",
      "src/images/products/chair/matchspel-gaming-chair-bomstad-light-grey__1248931_pe923288_s5.jpg",
      "src/images/products/chair/matchspel-gaming-chair-bomstad-light-grey__1257808_ph194303_s5.jpg",
    ],
    description: "เก้าอี้สำหรับเล่นเกม, บุมสตอด เทาอ่อน",
    detail:
      "เก้าอี้สำหรับเล่นเกม MATCHSPEL/มาต์ชสเปียล์ ช่วยให้คุณนั่งเล่นเกมได้อย่างเพลิดเพลิน รองรับสรีระร่างกายทุกส่วนและปรับระดับความสูงของเก้าอี้ได้ พร้อมพนักพิงศีรษะและที่วางแขน คุณจึงนั่งได้อย่างสบาย พร้อมลุยทุกเกมโปรด",
    brand: "MATCHSPEL",
    category: "chair",
    price: 4999,
    countInStock: 130,
    rating: 5,
    numReviews: 8,
    size: {
      length: 39,
      width: 39,
      thickness: 39,
      height: 77,
    },
  },
  {
    id: 11,
    name: "GRIMSBU กริมส์บู",
    imageThumbnail:
      "src/images/products/bed/grimsbu-bed-frame-grey__0749251_pe747239_s5-thumbnail.jpg",
    image: [
      "src/images/products/bed/grimsbu-bed-frame-grey__0749251_pe747239_s5-1.jpg",
      "src/images/products/bed/grimsbu-bed-frame-grey__0749251_pe747239_s5-2.jpg",
      "src/images/products/bed/grimsbu-bed-frame-grey__0749251_pe747239_s5-3.jpg",
      "src/images/products/bed/grimsbu-bed-frame-grey__0749251_pe747239_s5-4.jpg",
    ],
    description: "โครงเตียง, เทา, 90x200 ซม.",
    detail: `โครงเตียงทำจากเหล็กพ่นสีฝุ่น จึงมั่นคงแข็งแรง ทนทาน และดูแลรักษาง่าย

      คุณสามารถดูดฝุ่นใต้โครงเตียงได้ง่ายๆ เพื่อให้พื้นที่ใต้เตียงสะอาดและไร้ฝุ่น
      
      ดีไซน์ครบครันที่เหมาะอย่างยิ่งสำหรับใช้ในมุมแคบๆ หรือบริเวณที่เพดานไม่สูงนัก ทำให้คุณใช้พื้นที่ที่มีได้อย่างคุ้มค่า
      
      ใต้เตียงมีพื้นที่สำหรับวางกล่องเก็บของ เหมาะสำหรับเก็บผ้านวมและหมอนสำรอง
      
      ประกอบใช้ได้ด้วยขั้นตอนง่ายๆ เพียงไม่กี่ขั้นตอน`,
    brand: "GRIMSBU",
    category: "bed",
    price: 1290,
    countInStock: 20,
    rating: 5,
    numReviews: 7,
    size: {
      length: 202,
      width: 92,
      thickness: 27,
      height: 55,
    },
  },
  {
    id: 11,
    name: "TARVA ทาร์ฟวา",
    imageThumbnail:
      "src/images/products/bed/tarva-bed-frame-pine__0655004_pe708894_s5-thumbnail.jpg",
    image: [
      "src/images/products/bed/tarva-bed-frame-pine__0368084_ph106085_s5.jpg",
      "src/images/products/bed/tarva-bed-frame-pine__0860730_pe566702_s5.jpg",
      "src/images/products/bed/tarva-bed-frame-pine__1101955_pe866881_s5.jpg",
      "src/images/products/bed/tarva-bed-frame-pine__1101956_pe866882_s5.jpg",
      "src/images/products/bed/tarva-bed-frame-pine__1101957_pe866883_s5.jpg",
      "src/images/products/bed/tarva-bed-frame-pine__1208950_pe908923_s5-d.jpg",
    ],
    description: "โครงเตียง, เทา, 90x200 ซม.",
    detail: `ทำจากไม้จริงไม่ทำสี ทำผิวได้หลายแบบตามต้องการ เช่น ใช้แล็กเกอร์ สีย้อมไม้ แว็กซ์ หรือน้ำมันเคลือบ เพื่อให้ผิวไม้แข็งแรงทนทานยิ่งขึ้น

      คุณสามารถดูดฝุ่นใต้โครงเตียงได้ง่ายๆ เพื่อให้พื้นที่ใต้เตียงสะอาดและไร้ฝุ่น
      
      ไม้สนที่ขึ้นชื่อเรื่องความทนทาน มีลวดลายในเนื้อไม้ รวมถึงสีและผิวสัมผัสที่แตกต่างกันไปตามธรรมชาติ เฟอร์นิเจอร์ทุกชิ้นที่ผลิตด้วยไม้สน จึงมีลุคที่เป็นเอกลักษณ์ไม่ซ้ำกัน
      
      ใต้เตียงมีพื้นที่สำหรับวางกล่องเก็บของ เหมาะสำหรับเก็บผ้านวมและหมอนสำรอง`,
    brand: "TARVA",
    category: "bed",
    price: 3290,
    countInStock: 20,
    rating: 5,
    numReviews: 7,
    size: {
      length: 209,
      width: 98,
      thickness: 32,
      height: 92,
    },
  },
  {
    id: 11,
    name: "VEVELSTAD เวียเวลสตัด",
    imageThumbnail:
      "src/images/products/bed/vevelstad-bed-frame-white__1035360_pe840536_s5-thumbnail.jpg",
    image: [
      "src/images/products/bed/vevelstad-bed-frame-white__1035350_pe840525_s5.jpg",
      "src/images/products/bed/vevelstad-bed-frame-white__1035352_pe840526_s5.jpg",
      "src/images/products/bed/vevelstad-bed-frame-white__1035716_pe838155_s5.jpg",
      "src/images/products/bed/vevelstad-bed-frame-white__1097674_pe865098_s5.jpg",
      "src/images/products/bed/vevelstad-bed-frame-white__1116344_pe872490_s5.jpg",
    ],
    description: "โครงเตียง, เทา, 90x200 ซม.",
    detail: `คุณสามารถดูดฝุ่นใต้โครงเตียงได้ง่ายๆ เพื่อให้พื้นที่ใต้เตียงสะอาดและไร้ฝุ่น

      ดีไซน์ที่เรียบง่ายสะอาดตาเข้ากับเฟอร์นิเจอร์อื่นๆ ในห้องนอน และยังเหมาะกับห้องนอนสไตล์โมเดิร์นทุกประเภท
      
      โลหะพ่นสีฝุ่นสีขาวและสกรูที่มองเห็นได้ทำให้โครงเตียงดูทันสมัย
      
      โลหะพ่นสีฝุ่นจะทำให้โครงเตียงทำความสะอาดและดูและรักษาได้ง่าย
      
      มีพื้นที่มากมายใต้เตียงสำหรับเก็บกล่องเก็บของ เหมาะใช้งานในกรณีที่คุณต้องการใช้งานพื้นที่ว่างให้เกิดประโยชน์สูงสุด
      
      เพิ่ม FREDVANG/เฟรียดวัง เพื่อใช้เป็นโต๊ะข้างเตียงที่ใช้งานได้จริง และยังมีพื้นที่เก็บของเพิ่มเติมใต้เตียงอีกด้วย เหมาะสำหรับพื้นที่อยู่อาศัยขนาดเล็ก`,
    brand: "VEVELSTAD",
    category: "bed",
    price: 2990,
    countInStock: 20,
    rating: 5,
    numReviews: 5,
    size: {
      length: 207,
      width: 96,
      thickness: 27,
      height: 27,
    },
  },
  {
    id: 11,
    name: "UTÅKER อูทัวเคร์",
    imageThumbnail:
      "src/images/products/bed/utaker-stackable-bed-with-2-mattresses-pine-afjaell-firm__1161848_pe889564_s5-thumbnail.jpg",
    image: [
      "src/images/products/bed/utaker-stackable-bed-with-2-mattresses-pine-afjaell-firm__0860733_pe649178_s5.jpg",
      "src/images/products/bed/utaker-stackable-bed-with-2-mattresses-pine-afjaell-firm__0860737_pe649179_s5.jpg",
      "src/images/products/bed/utaker-stackable-bed-with-2-mattresses-pine-afjaell-firm__0976032_pe812963_s5.jpg",
      "src/images/products/bed/utaker-stackable-bed-with-2-mattresses-pine-afjaell-firm__0986620_pe818094_s5.jpg",
      "src/images/products/bed/utaker-stackable-bed-with-2-mattresses-pine-afjaell-firm__1063819_ph182872_s5.jpg",
      "src/images/products/bed/utaker-stackable-bed-with-2-mattresses-pine-afjaell-firm__1101313_pe866582_s5.jpg",
      "src/images/products/bed/utaker-stackable-bed-with-2-mattresses-pine-afjaell-firm__1101314_pe866569_s5.jpg",
    ],
    description: "โครงเตียง, เทา, 90x200 ซม.",
    detail: `ที่นอนโฟมยืดหยุ่นสูง รองรับสรีระได้ดีและมอบความสบาย

      ทำจากไม้สนไม่ทำสี วัสดุที่เป็นมิตรกับสิ่งแวดล้อมและสวยด้วยลายไม้ธรรมชาติ ให้เฟอร์นิเจอร์แต่ละชิ้นมีเอกลักษณ์ต่างกันไป เลือกทาสี ทาน้ำมันเคลือบ หรือใช้สีย้อมไม้ได้ เพื่อเพิ่มความทนทานและความสวยงามตามแบบที่ชอบ
      
      เตียงทั้งสองวางซ้อนกันอย่างมั่นคง เพราะเตียงด้านบนมีขาพลาสติกที่ประกอบเข้ากับรูที่เจาะไว้ที่เตียงด้านล่างได้พอดี
      
      ดีไซน์ครบครันที่เหมาะอย่างยิ่งสำหรับใช้ในมุมแคบๆ หรือบริเวณที่เพดานไม่สูงนัก ทำให้คุณใช้พื้นที่ที่มีได้อย่างคุ้มค่า
      
      ปรับเตียงที่ตั้งซ้อนกันให้เป็นเตียงคู่ เตียงทวิน หรือเป็นโซฟาเข้ามุมได้ง่าย
      
      โครงมีน้ำหนักเบาจึงยกและเคลื่อนย้ายง่าย`,
    brand: "UTÅKER",
    category: "bed",
    price: 12970,
    countInStock: 20,
    rating: 5,
    numReviews: 5,
    size: {
      length: 205,
      width: 83,
      thickness: 23,
      height: 46,
    },
  },
];

export default products;
