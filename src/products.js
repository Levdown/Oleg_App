import photo1 from "./photo/iBOX One LaserVision WiFi Signature с лицевой стороны.png"
import photo2 from "./photo/iBOX Nova LaserVision WiFi Signature Dual с лицевой стороны.jpg"
import photo3 from "./photo/iBOX F5 LaserScan WiFi Signature Dual с лицевой стороны.jpg"
import photo4 from "./photo/iBOX Evo LaserVision WiFi Signature Dual с лицевой стороны.jpg"
import photo5 from "./photo/Rover WiFi GPS Dual комплектация.jpg"
import photo6 from "./photo/RoadScan.jpg"
import photo7 from "./photo/iBOX Alpha WiFi комплектация.jpg"


// import photo1 from "./photo/iBOX Alpha WiFi комплектация.jxr"
// import photo2 from "./photo/iBOX Evo LaserVision WiFi Signature Dual с лицевой стороны.jxr"
// import photo3 from  "./photo/iBOX F5 LaserScan WiFi Signature Dual с лицевой стороны.jxr"
// import photo4 from  "./photo/iBOX Nova LaserVision WiFi Signature Dual с лицевой стороны.jxr"
// import photo5 from  "./photo/iBOX One LaserVision WiFi Signature с лицевой стороны.jxr"
// import photo6 from  "./photo/RoadScan.jxr"
// import photo7 from  "./photo/Rover WiFi GPS Dual комплектация.jxr"


const dataProducts = [
    {
        id: 1,
        name: "iBOX One LaserVision WiFi Signature",
        description: "Описание Характеристики Данные Прочее",
        price: 50.0,
        photo: photo1,
    },
    {
        id: 2,
        name: "iBOX Nova LaserVision WiFi Signature Dual",
        description: "Описание Характеристики Данные Прочее",
        price: 55.0,
        photo: photo2,
    },
    {
        id: 3,
        name: "iBOX F5 LaserScan WiFi Signature Dual",
        description: "Описание Характеристики Данные Прочее",
        price: 58.0,
        photo: photo3,
    },
    {
        id: 4,
        name: "iBOX Evo LaserVision WiFi Signature Dual",
        description: "Описание Характеристики Данные Прочее",
        price: 49.0,
        photo: photo4,
    },
    {
        id: 5,
        name: "Rover WiFi GPS Dual",
        description: "Описание Характеристики Данные Прочее",
        price: 60.0,
        photo: photo5,
    },
    {
        id: 6,
        name: "RoadScan",
        description: "Описание Характеристики Данные Прочее",
        price: 55.0,
        photo: photo6,
    },
    {
        id: 7,
        name: "iBOX Alpha WiFi",
        description: "Описание Характеристики Данные Прочее",
        price: 70.0,
        photo: photo7,
    }
]

function getProductData(id) {
    let productData = dataProducts.find(product => product.id === id)

    if (productData === undefined){
        console.log("no data with id: " + id);
        return undefined;
    }

    return productData;
}

export {dataProducts, getProductData};