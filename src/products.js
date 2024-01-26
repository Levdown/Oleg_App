// import photo1 from "./photo/iBOX Alpha WiFi комплектация.jpg"
// import photo2 from "./photo/RoadScan с обратной стороны.jpg"
// import photo3 from "./photo/Rover WiFi GPS Dual с лицевой стороны в автомобиле.jpg"
// import photo4 from "./photo/iBOX Evo LaserVision WiFi Signature Dual с обратной стороны в автомобиле.jpg"
// import photo5 from "./photo/iBOX F5 LaserScan WiFi Signature Dual с обратной стороны в автомобиле.jpg"
// import photo6 from "./photo/iBOX Nova LaserVision WiFi Signature Dual с обратной стороны в автомобиле.jpg"
// import photo7 from "./photo/iBOX Alert LaserScan Signature Cloud комплектация.jpg"
// import photo8 from "./photo/iBOX One LaserVision WiFi Signature с лицевой стороны.png"
// import photo9 from "./photo/iBOX Sonar LaserScan Signature Cloud комплектация.tif"

import photo1 from "./photo/iBOX-Alpha-WiFi-комплектация.webp"
import photo2 from "./photo/RoadScan-с-обратной-стороны.webp"
import photo3 from "./photo/Rover-WiFi-GPS-Dual-с-лицевой-стороны-в-автомобиле.webp"
import photo4 from "./photo/iBOX-Evo-LaserVision-WiFi-Signature-Dual-с-обратной-стороны-в-автомобиле.webp"
import photo5 from "./photo/iBOX-F5-LaserScan-WiFi-Signature-Dual-с-обратной-стороны-в-автомобиле.webp"
import photo6 from "./photo/iBOX-Nova-LaserVision-WiFi-Signature-Dual-с-обратной-стороны-в-автомобиле.webp"
import photo7 from "./photo/iBOX-Alert-LaserScan-Signature-Cloud-комплектация.webp"
import photo8 from "./photo/iBOX-One-LaserVision-WiFi-Signature-с-лицевой-стороны.webp"
import photo9 from "./photo/iBOX Sonar LaserScan Signature Cloud комплектация.webp"

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
        name: "Органическое МОЛОКО 5-6% коров породы джерси",
        description: "Описание молока",
        value: ['0.5 л.', "1 л."],
        pak: ["Пластик", "Стекло"],
        // price: {'0.5 л.': 115, "1 л.": 210},
        price: 200,
        photo: photo1,
    },
    {
        id: 2,
        name: "iBOX RoadScan WiFi GPS Dual",
        description: "Новейший видеорегистратор с GPS/ГЛОНАСС базой камер, WiFi-модулем и возможностью подключения камеры заднего вида.",
        price: 14999.0,
        photo: photo2,
    },
    {
        id: 3,
        name: "iBOX Rover WiFi GPS Dual",
        description: "Новейший видеорегистратор с GPS/ГЛОНАСС базой камер, WiFi-модулем и камерой заднего вида.",
        price: 13499.0,
        photo: photo3,
    },
    {
        id: 4,
        name: "iBOX Evo LaserVision WiFi Signature Dual",
        description: "Современное комбо-устройство с фирменной технологией LaserVision дальнобойным модулем XDR и усилителем сигнала LNA.",
        price: 24999.0,
        photo: photo4,
    },
    {
        id: 5,
        name: "iBOX F5 LaserScan WiFi Signature Dual",
        description: "Комбо-устройство с эффективной для дальнобойного детектирования малошумных камер рупорной антенной, сигнатурной технологией, современной оптической системой, обновляемой со смартфона базой камер и максимальным функционалом в своем классе устройств.",
        price: 27999.0,
        photo: photo5,
    },
    {
        id: 6,
        name: "iBOX Nova LaserVision WiFi Signature Dual",
        description: "Комбо-устройство с сигнатурным радар-детектором, фирменной технологией LaserVision, дальнобойным модулем ADR iLogic и возможностью обновления базы камер и копирования файлов по WiFi.",
        price: 19999.0,
        photo: photo6,
    },
    {
        id: 7,
        name: "iBOX Alert LaserScan Signature Cloud",
        description: "Сигнатурный радар-детектор с уникальным сервисом Cloud для автоматического обновления, технологией LaserScan, дальнобойным модулем ADR CORE и большим информативным дисплеем.",
        price: 8499.0,
        photo: photo7,
    },
    {
        id: 8,
        name: "iBOX One LaserVision WiFi Signature",
        description: "Сигнатурный радар-детектор, с фирменной технологией LaserVision, дальнобойным модулем ADR iLogic, усилителем сигнала LNA и возможностью обновления базы камер по WiFi.",
        price: 12999.0,
        photo: photo8,
    },
    {
        id: 9,
        name: "iBOX Sonar LaserScan Signature Cloud",
        description: "Сигнатурный радар-детектор с уникальной технологией LaserScan, дальнобойным модулем  ADR CORE, библиотекой различных источников ложных сигналов Z-сигнатур и большим информативным дисплеем.",
        price: 9999.0,
        photo: photo9,
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

function setDiscount(id, discount){

    for (var i = 0; i < dataProducts.length; i++) {
        if (dataProducts[i].id === id) {
            dataProducts[i].price = ((dataProducts[i].price) - dataProducts[i].price * 0.01 * discount);
        return;
        }
    }
    

}

export {dataProducts, getProductData, setDiscount};