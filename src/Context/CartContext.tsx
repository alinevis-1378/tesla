import { createContext, useEffect, useState } from "react";
import { CardCarAccesory } from "../Components/CardCarAccesooryType/CardCarAccesory.type";


type CartContextProviderProps = {
children : React.ReactNode
}

type CartContextType = {
    userCart : CardCarAccesooryContext[],
    carAccesoryArry : CardCarAccesooryContext[],
    addProduct : (id : number) => void,
    removeProduct : (id : number) => void,
}

type CardCarAccesooryContext = {
    id : number,
    image : string,
    titr : string ,
    price : number
}

export const CartContext = createContext({} as CartContextType)

const CartContextProvider = ({children} : CartContextProviderProps) =>  {

    const [userCart , setUserCart] = useState<CardCarAccesooryContext[]>([])
    useEffect(() => {
        const mainStored = localStorage.getItem('cartItems')
        if(mainStored){
         setUserCart(JSON.parse(mainStored))
        }
     } , [])

      useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(userCart));
      } , [userCart])

    const carAccesoryArry : CardCarAccesooryContext[] = [
        {
            image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/Vault/1988713-00-A-1-04.png',
            titr: 'Cybertruck Tailgate Shield',
            price: 300,
            id: 1,

        },
        {
            image: "https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/Vault/1988713-00-A-2-01.jpg",
            titr: 'Cybertruck Jumpseat',
            price: 100,
            id: 2,
        },
        {
            image: "https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/EXTERIOR/1987068-00-A_1_2000.jpg",
            titr: 'Cybertruck Tailgate Ramp',
            price: 400,
            id: 3,
  
        },
        {
            image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/INTERIOR/1979224-00-A-01.png',
            titr: 'Cybertruck All-Weather Interior Liners',
            price: 295,
            id: 4,

        },
        {
            image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/INTERIOR/1877885-00-D-01.png',
            titr: 'Cybertruck Carpet Interior Mats',
            price: 155, 
            id: 5,
        },
        {
            image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/INTERIOR/1989035-00-A-3-01.png', titr: 'Cybertruck Front Trunk L-Track + Cargo Net',
            price: 85,
            id: 6,
        },
        {
            image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/INTERIOR/1985774-00-A-01.jpg', titr: 'Cybertruck Pet Liner', price: 145,
            id: 7,
        },
        {
            image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/INTERIOR/1970873-00-B-01.png', titr: 'Cybertruck Underseat Storage Bin', price: 250,
            id: 8,
        },
        {
            image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/INTERIOR/1988715-00-A-01.png', titr: 'Cybertruck J1772 Adapter Door Dock', price: 30,
            id: 9,
        },
        {
            image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/INTERIOR/1967433-00-A-01.png', titr: 'Cybertruck Glass Roof Sunshade', price: 115, 
            id: 10,
        },
        {
            image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/INTERIOR/1969033-00-A-01.png', titr: 'Cybertruck Center Console Tray', price: 40, 
            id: 11,
        },
        {
            image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1995188-10-A-01.jpg', titr: 'USB Drive | 128 GB', price: 45, 
            id: 12,
        },
         {
             image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/EXTERIOR/1948406-00-A_01_2000.png', titr: 'Cybertruck CyberTent', price: 2975,
             id: 13,
         },
         {
             image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/EXTERIOR/Slip-Grey-CT.png', titr: 'Cybertruck Color Paint Film', price: 9000,
             id: 14,
         },
         {
             image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/EXTERIOR/2021485-00-A_1_2000.png', titr: 'Cybertruck Satin Clear Paint Film', price: 5000,
             id: 15,
         },
         {
             image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/EXTERIOR/2018066-00-00-A-3-01.png', titr: 'Cybertruck Mud Flaps', price: 100,
             id: 16,
         },
         {
             image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/EXTERIOR/1897768-00-A-01_2000.png', titr: 'Cybertruck Crossbars', price: 800,
             id: 17,
         },
         {
             image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/EXTERIOR/1987068-00-A_1_2000.jpg', titr: 'Cybertruck Tailgate Ramp', price: 400,
             id: 18,
         },
         {
             image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/EXTERIOR/1991770-00-B-01.png', titr: 'Cybertruck Bumper Protectors', price: 103,
           id: 19,
         },
         {
             image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/EXTERIOR/1965074-00-A-01.png', titr: 'Cybertruck OMFG Decal', price: 55,
             id: 20,

         },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/Vault/1988713-00-A-1-04.png', titr: 'Cybertruck Tailgate Shield', price: 100,
               id: 21
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/Vault/1988713-00-A-2-01.jpg', titr: 'Cybertruck Jumpseat', price: 150,
               id: 22
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/Vault/1989037-00-A_1_2000.png', titr: 'Cybertruck Vault Cargo Divider', price: 250,
               id: 23
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/Vault/1988716-00-A_001_2000.png', titr: 'Cybertruck MOLLE Panels', price: 350,
               id: 24
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/Vault/1970872-00-A-01_2000.png', titr: 'Cybertruck Vault Cargo Bins', price: 140,
               id: 25
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/EXTERIOR/1987069-00-A-01.png', titr: 'Cybertruck L-Track Hooks', price: 100,
               id: 26
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/EXTERIOR/1987070-00-A-01.png', titr: ' Cybertruck L-Track Cleat', price: 35,
               id: 27
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/EXTERIOR/1987071-00-A-02-01.png', titr: 'Cybertruck L-Track Bottle Opener', price: 46,
               id: 28
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/EXTERIOR/1977842-00-A-01.png', titr: 'Cybertruck D-Rings', price: 54,
              id: 29
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/INTERIOR/1949544-00-A-2-01.png', titr: 'Cybertruck Gear Locker Dividers', price: 500,
               id: 30
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/WHEELS_AND_TIRES/1998888-00-A_1_2000.png', titr: 'Cybertruck Spare Tire + Tool Kit', price: 410,
               id: 31
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/WHEELS_AND_TIRES/1969063-00-A-2-01.png', titr: 'Cybertruck 20" Snow Chains', price: 320,
               id: 32
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/WHEELS_AND_TIRES/1998886-00-A_01_2000.png', titr: 'Cybertruck Air Compressor Ultra + Tire Repair Kit', price: 1000,
               id: 33
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/WHEELS_AND_TIRES/Cybertruck-Premium-Wheel-Cover-Front.png', titr: 'Cybertruck Cyber Wheel Cover', price: 2000,
               id: 34
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/WHEELS_AND_TIRES/2022439-01-B-01.png', titr: 'Cybertruck Tire Pressure Monitoring System', price: 102,
               id: 35
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/EXTERIOR/1988718-00-A-01.png', titr: 'Cybertruck Detailing Kit', price: 125,
               id: 36
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/CYBERTRUCK/INTERIOR/1874737-00-B-01.png', titr: 'Cybertruck HEPA Filter', price: 146,
               id: 37
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1131087-00-F_0_2000.jpg', titr: 'Key Card', price: 123,
               id: 38
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/CHARGING_ADAPTERS/1457768-02-H_01_2000.png', titr: 'Wall Connector', price: 452,
               id: 39
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/CHARGING_ADAPTERS/1734412-02-E-V2.png', titr: 'Universal Wall Connector', price: 145,
               id: 40
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1763817-00-A-02-01.png', titr: 'Mobile Connector', price: 412,
               id: 41
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/CHARGING_ADAPTERS/Tesla_Gateway3_HPWC_1.png', titr: 'Powershare Home Backup Bundle', price: 758,
               id: 42
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1515100-00-A_0_2000.jpg', titr: 'NEMA Adapter Bundle', price: 125,
               id: 43
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1104936-10-C_0_2000.jpg', titr: 'Gen 2 NEMA Adapters', price: 15,
               id: 44
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1656565-00-A_4_2000.jpg', titr: 'CCS Combo 1 Adapter', price: 25,
               id: 45
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/CHARGING_ADAPTERS/1067348-00-B_0_2000.jpg', titr: 'SAE J1772 Charging Adapter', price: 452,
               id: 46
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1551813-10-A_5_2000_Wall_Connector_Faceplate.jpg', titr: 'Wall Connector Color Matched Faceplate', price: 125,
               id: 47
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1551813-00-A_0_2000.jpg', titr: 'Wall Connector Glass Faceplate', price: 695,
               id: 48
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/CHARGING_ADAPTERS/1508484-00-B_3_2000.jpg', titr: 'Pedestal for Wall Connector', price: 800,
               id: 49
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1551814-00-A_0_2000.jpg', titr: 'Wall Connector Fastener Kit', price: 74,
               id: 50
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1551805-00-A_0_2000.jpg', titr: 'Wall Connector Wirebox Kit', price: 45,
               id: 51
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1521226-00-A_1_2000.jpg', titr: 'Cable Organizer', price: 855,
               id: 52
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/DRINKWARE/M_PDP_2000X2000_03.jpg', titr: 'Tesla Mezcal', price: 365,
               id: 53
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1997689-00-A-2-01.jpg', titr: 'CaraokeMic', price: 754,
               id: 54
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOYS/1714748-00-B-01.jpg', titr: 'Cyberquad for Kids', price: 854,
               id: 55
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1990496-00-A-01.png', titr: 'Cybertruck Elevate Backpack', price: 369,
               id: 56
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1859926-00-A_0_2000.jpg', titr: 'Mega [back] Pack', price: 458,
               id: 57
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1859925-00-A_0_2000.jpg', titr: 'Mega [mini] Pack', price: 547,
               id: 58
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/DRINKWARE/M_PDP_2000X2000_03.jpg', titr: 'Tesla Mezcal', price: 1020,
               id: 59
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/DRINKWARE/2034160-00-A_04_2000.png', titr: 'Copitas', price: 2554,
               id: 60
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/DRINKWARE/2002204-00-A-2-01.png', titr: 'CyberVessel', price: 458,
               id: 61
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/DRINKWARE/1860631-00-A_0_2000.jpg', titr: 'On the Road Vessel', price: 425,
               id: 62
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/DRINKWARE/1860626-00-A_0_2000.jpg', titr: 'On the Road Tumbler', price: 789,
               id: 63
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/DRINKWARE/1859203-00-B-1.jpg', titr: 'On the Road Cup', price: 253,
               id: 64
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/DRINKWARE/1949545-00-A-2-01.png', titr: 'CyberStein', price: 745,
               id: 65
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/DRINKWARE/1581744-00-A_1_2000.jpg', titr: 'Tesla Sipping Glasses', price: 125,
               id: 66
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOYS/1985666-00-A-01.png', titr: 'Cybertruck for Kids', price: 452,
               id: 67
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOYS/2041112-00-A-01.png', titr: 'Cybertruck for Kids Cover', price: 458,
               id: 68
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOYS/1714748-00-B-01.jpg', titr: 'Cyberquad for Kids', price: 965,
               id: 69
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOYS/1930736-00-A_1_2000.jpg', titr: 'Cyberquad for Kids Cover', price: 211,
               id: 70
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/COLLECTIBLES/1914381-00-A_01_2000.png', titr: '1:18 Scale Cybertruck Diecast', price: 210,
               id: 71
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/COLLECTIBLES/1914383-00-A-01.jpg', titr: 'Diecast 1:18 Scale Model Y', price: 320,
               id: 72
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/ACCESSORIES_COLLECTIBLES/COLLECTIBLES/1474940-00-A_15_2000.jpg', titr: 'Diecast 1:18 Scale Model 3', price: 750,
               id: 73
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/ACCESSORIES_COLLECTIBLES/COLLECTIBLES/1524001-00-A_0_2000.jpg', titr: 'Diecast 1:18 Scale Roadster', price: 150,
               id: 74
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/COLLECTIBLES/1474970-00-A_0_2000.jpg', titr: 'Diecast 1:24 Scale Semi', price: 145,
               id: 75
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1997689-00-A-2-01.jpg', titr: 'CaraokeMic', price: 254,
               id: 76
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/COLLECTIBLES/1975943-00-A-01.jpg', titr: 'Dog Mode', price: 125,
               id: 77
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/COLLECTIBLES/1975944-00-A-01.jpg', titr: 'Dog Mode Mini', price: 451,
               id: 78
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/COLLECTIBLES/1996927-00-A-2-01.png', titr: 'Cyberwhistle Stealth', price: 145,
               id: 79
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1975159-00-A-01.jpg', titr: 'CyberOpener', price: 541,
               id: 80
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1999705-00-A-01.jpg', titr: 'Cybersoft Blanket', price: 156,
               id: 81
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1950257-00-A_0_2000.jpg', titr: 'Ludicrously Cozy Throw ', price: 415,
               id: 82
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1808276-00-A_0_2000.jpg', titr: 'Tesla Branding Iron', price: 145,
               id: 83
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1799799-00-A_0_2000.jpg', titr: 'Wireless Charging Platform', price: 485,
               id: 84
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/ACCESSORIES_COLLECTIBLES/HOME_OFFICE/1625886-00-A_0_2000.jpg', titr: 'Wireless Portable Charger 2.0', price: 256,
               id: 85
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1758879-00-A_6_2000.jpg', titr: 'Giga Texas Belt Buckle', price: 557,
               id: 86
           }, 
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/Tesla_giftcard_f8f8.png', titr: 'Tesla Shop Gift Card', price: 102,
               id: 87
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1669541-00-A_0_2000.jpg', titr: 'Model S All-Weather Interior Liners', price: 254,
               id: 88
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1938526-00-A_1_2000.jpg', titr: 'Model S Plaid Track Package', price: 256,
               id: 89
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1940002-00-A_0_2000.jpg', titr: 'Model S Plaid 20" Zero-G Wheel and Tire Package', price: 145,
               id: 90
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1669541-00-A_0_2000.jpg', titr: 'Model S All-Weather Interior Liners', price: 387,
               id: 91
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1669543-01-A_0_2000.jpg', titr: 'Model S All-Weather Rear Cargo Liner Set', price: 125,
               id: 92
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1669542-00-A_0_2000.jpg', titr: 'Model S All-Weather Front Trunk Liner', price: 758,
               id: 93
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1565563-00-B_001.jpg', titr: 'Model S Carpet Interior Mats', price: 412,
               id: 94
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1019291-01-A_0.jpg', titr: '2012-2020 | Model S All-Weather Rear Trunk Liner Set', price: 242,
               id: 95
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1024370-00-A_0_2000.jpg', titr: '2012-2020 | Model S All-Weather Rear Well Liner', price: 251,
               id: 96
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1019289-02-B_0.jpg', titr: '2012-2020 | Model S All-Weather Front Trunk Liner', price: 552,
               id: 97
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1047686-00-B_0_2000.jpg', titr: '2012-2020 | Model S Carpet Interior Mats', price: 884,
               id: 98
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1562262-00-A_11_2000.jpg', titr: 'Model S/3/Y Pet Liner', price: 758,
               id: 99
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1801349-00-A_01_wht.jpg', titr: 'Model S Sunshades', price: 125,
               id: 100
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1130555-00-A_0_2000.jpg', titr: '2012-2021 | Model S Sunshades', price: 587,
               id: 101
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1537258-00-A_2_2000.jpg', titr: '2012-2021 | Model S Illuminated Door Sills', price: 158,
               id: 102
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1458421-00-A_0_2000.jpg', titr: '2012-2020| Model S/X Coat Hooks', price: 158,
               id: 103
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1086535-00-A_0.jpg', titr: '2012-2020 | Model S/X Performance Pedal Set', price: 452,
               id: 104
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/6565500-00-A_0.jpg', titr: '2012-2020 | Model S Enhanced Anti-theft Upgrade', price: 258,
               id: 105
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1868248-00-A_8_2000.jpg', titr: 'Solid State Drive | 1 TB', price: 159,
               id: 106
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1995188-10-A-01.jpg', titr: 'USB Drive | 128 GB', price: 488,
               id: 107
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1494684-00-A_1_2000.jpg', titr: 'Model S Roof Rack - Glass Roof', price: 525,
               id: 108
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1624227-00-B_0_2000.jpg', titr: 'Model S Carbon Fiber Spoiler', price: 485,
               id: 109
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1121299-00-A_0_2000.jpg', titr: '2012-2020 | Model S Carbon Fiber Spoiler', price: 415,
               id: 110
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1762507-00-B_0.jpg', titr: 'Model S Mud Flaps', price: 452,
               id: 111
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1017723-01-A_0.jpg', titr: 'Model S Car Cover', price: 785,
               id: 112
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1703857-00-A_0_2000.jpg', titr: 'Powered By the Sun License Plate Frame', price: 158,
               id: 113
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1938526-00-A_1_2000.jpg', titr: 'Model S Plaid Track Package', price: 489,
               id: 114
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1940002-00-A_0_2000.jpg', titr: 'Model S Plaid 20" Zero-G Wheel and Tire Package', price: 416,
               id: 115
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1744009-00-A_1_2000.jpg', titr: 'Model S 19" Tempest Wheel and Winter Tire Package', price: 785,
               id: 116
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1744033-00-A_4_2000.jpg', titr: 'Model S 21" Arachnid Wheel and Winter Tire Package', price: 298,
               id: 117
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1716198-00-A_1_2000.jpg', titr: 'Model S 19" Snow Chains', price: 748,
               id: 118
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1486286-01-A_0_2000.jpg', titr: 'Model S Tempest Wheel Cover', price: 258,
               id: 119
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1538901-00-A_0_2000.jpg', titr: '2012-2021 | Model S 19” Snow Chains', price: 426,
               id: 120
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1934882-00-A-01.jpg', titr: 'Air Compressor + Tire Repair Kit 3.0', price: 785,
               id: 121
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1133009-00-B_0_2000.jpg', titr: 'Air Compressor + Tire Repair Kit 2.0', price: 485,
               id: 122
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1934882-10-A-01.jpg', titr: 'Tire Repair Sealant 3.0', price: 256,
               id: 123
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1107992-00-A_0_2000.jpg', titr: 'Tire Repair Sealant 2.0', price: 478,
               id: 124
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1490750-00-A_0_2000.jpg', titr: 'Model SX3Y Tire Pressure Monitoring System', price: 152,
               id: 125
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1593777-00-A_0_2000.jpg', titr: 'Tire Tote', price: 785,
               id: 126
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1130327-00-C_1_2000.jpg', titr: 'Wheel Locks', price: 523,
               id: 127
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1988719-00-A-2-01.png', titr: 'Model SX3Y Detailing Kit', price: 452,
               id: 128
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1562215-00-A_0_2000.jpg', titr: 'Model S Wiper Blade', price: 785,
               id: 129
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1688910-00-C_0_2000.jpg', titr: 'Model S/X Air Filter', price: 588,
               id: 130
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1456933-00-A_1_2000.jpg', titr: '2012-2020 | Model S Wiper Blade', price: 158,
               id: 131
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1494109-00-A_0_2000.jpg', titr: '2012-2020 | Model S HEPA Air Filtration Upgrade', price: 145,
               id: 132
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/9000002_0_2000.jpg', titr: 'Paint Repair Kit', price: 785,
               id: 133
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1102893-00-A_0_2000.jpg', titr: 'Roadside Safety Kit', price: 125,
               id: 134
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1819443-00-A_0_2000.jpg', titr: 'Model S Key Fob', price: 785,
               id: 135
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1490875-00-A_4_2000.jpg', titr: 'Model S Key Band', price: 256,
               id: 136
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1131087-00-F_0_2000.jpg', titr: 'Key Card', price: 785,
               id: 137
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1974087-00-A_01_2000.jpg', titr: 'Model 3 All-Weather Interior Liners', price: 125,
               id: 138
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1977818-00-A_01_2000.jpg', titr: 'Model 3 Center Console Trays', price: 785,
               id: 139
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1128114-00-C_0_2000.jpg', titr: 'Model 3 Roof Rack', price: 452,
               id: 140
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1974087-00-A_01_2000.jpg', titr: 'Model 3 All-Weather Interior Liners', price: 526,
               id: 141
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1980893-TL-A_-01.png', titr: 'Model 3 All-Weather Rear Trunk Liner', price: 169,
               id: 142
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1980893-WL-A_-01.png', titr: 'Model 3 All-Weather Rear Well Liner', price: 412,
               id: 143
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1988455-00-A-5-01.png', titr: 'Model 3 All-Weather Front Trunk Liner', price: 185,
               id: 144
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1753940-00-C-Flat.jpg', titr: 'Model 3 Carpet Interior Mats', price: 625,
               id: 145
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1448751-00-B_0_2000.jpg', titr: '2017-2023 | Model 3 All-Weather Interior Liners', price: 785,
               id: 146
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1896493-00-A_0_2000.jpg', titr: '2017-2023 | Model 3 All-Weather Rear Cargo Liner Set', price: 369,
               id: 147
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1616600-00-A_0.jpg', titr: '2017-2023 | Model 3 All-Weather Front Trunk Liner', price: 257,
               id: 148
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1516554-00-A_0_2000.jpg', titr: '2017-2023 | Model 3 Carpet Interior Mats', price: 652,
               id: 149
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1090853-00-D_0_2000.jpg', titr: '2017-2023 | Model 3 Carpet Front Trunk Mat', price: 785,
               id: 150
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1977818-00-A_01_2000.jpg', titr: 'Model 3 Center Console Trays', price: 745,
               id: 151
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1979119-00-A-01.jpg', titr: 'Model 3 Trunk Storage Bins', price: 785,
               id: 152
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1763464-00-C_M3_Sunshade_Bundle-1.jpg', titr: 'Model 3 Sunshades', price: 684,
               id: 153
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1977843-00-A-01.jpg', titr: 'Model 3 J1772 Adapter Door Dock', price: 125,
               id: 154
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1562262-00-A_11_2000.jpg', titr: 'Model S/3/Y Pet Liner', price: 785,
               id: 155
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1634268-00-A_0_2000.jpg', titr: 'Model Y and 2017-2023 | Model 3 Center Console Trays', price: 258,
               id: 156
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1763464-00-B_0_2000.jpg', titr: '2017–2020 | Model 3 Sunshades', price: 458,
               id: 157
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1537260-01-A_2_2000.jpg', titr: '2017-2023 | Model 3 Illuminated Door Sills', price: 235,
               id: 158
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1907055-00-B_0_2000.png', titr: 'Model 3/Y Automatic Garage Opener', price: 758,
               id: 159
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1712460-00-A-001.jpg', titr: '2017-2023 | Model 3 Powered Trunk Retrofit', price: 485,
               id: 160
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1116143-00-A_0_2000.jpg', titr: '2017-2023 | Model 3 Phone Charging Cable', price: 256,
               id: 161
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1868248-00-A_8_2000.jpg', titr: 'Solid State Drive | 1 TB', price: 758,
               id: 162
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1995188-10-A-01.jpg', titr: 'USB Drive | 128 GB', price: 254,
               id: 163
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/1948419-00-A_1_2000.jpg', titr: 'Model 3/Y Color Paint Protection Film', price: 236,
               id: 164
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/1948407-00-A_0_2000.jpg', titr: 'Model 3/Y Clear Paint Protection Film', price: 785,
               id: 165
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1128114-00-C_0_2000.jpg', titr: 'Model 3 Roof Rack', price: 452,
               id: 166
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1937555-00-A_0_2000.jpg', titr: 'Model 3 Mud Flaps', price: 589,
               id: 167
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1135831-00-A_0.jpg', titr: 'Model 3 Car Cover', price: 265,
               id: 168
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1547351-00-C_0_2000.jpg', titr: 'Model 3 Paint Protection Film', price: 525,
               id: 169
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1703855-00-A_0_2000.jpg', titr: 'Model 3 License Plate Frame', price: 745,
               id: 170
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1703857-00-A_0_2000.jpg', titr: 'Powered By the Sun License Plate Frame', price: 365,
               id: 171
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1694505-00-D-01.png', titr: 'Model 3 Carbon Fiber Spoiler', price: 785,
               id: 172
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1455166-00-B_0_2000.jpg', titr: '2017-2023 | Model 3 Carbon Fiber Spoiler', price: 236,
               id: 173
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/EXTERIOR/1547974-00-B_1_2000.jpg', titr: '2017-2023 | Model 3 Mud Flaps', price: 785,
               id: 174
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1983906-00-A-01.png', titr: 'Model 3 18" Photon Wheel and Winter Tire Package', price: 584,
               id: 175
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/EXTERIOR/1344251-00-A-01.jpg', titr: 'Model 3 18" Photon Wheel Cover', price: 125,
               id: 176
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1518543-00-A_01_2000.jpg', titr: 'Model 3 Carbon Fiber Wheel Cap Kit', price: 325,
               id: 177
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1643520-00-E_0_2000.jpg', titr: '2017-2023 | Model 3 18" Aero Wheel and Winter Tire Package', price: 412,
               id: 178
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1643517-00-C_1.jpg', titr: '2017-2023 | Model 3 19" Sport Wheel and Winter Tire Package', price: 635,
               id: 179
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1643533-00-B_1_2000.jpg', titr: '2017-2023 | Model 3 20" Überturbine Wheel and Winter Tire Package', price: 785,
               id: 180
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1625883-00-A_2_2000.jpg', titr: 'Model 3 18" Snow Chains', price: 754,
               id: 181
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1625883-00-A_0_2000.jpg', titr: 'Model 3 19" Snow Chains', price: 685,
               id: 182
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1538902-00-A_0_2000.jpg', titr: '2017-2023 | Model 3 20" Performance Snow Chains', price: 250,
               id: 183
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1501561-00-A_0_2000.jpg', titr: '2017-2023 | Model 3 Track Package', price: 125,
               id: 184
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1044271-00-A_0_2000.jpg', titr: '2017-2023 | Model 3 Aero Wheel Cover', price: 352,
               id: 185
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1603630-00-A_0_2000.jpg', titr: '2017-2023 | Model 3 Aero Wheel Cap Kit', price: 85,
               id: 186
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1934882-00-A-01.jpg', titr: 'Air Compressor + Tire Repair Kit 3.0', price: 95,
               id: 187
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1133009-00-B_0_2000.jpg', titr: 'Air Compressor + Tire Repair Kit 2.0', price: 105,
               id: 188
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1934882-10-A-01.jpg', titr: 'Tire Repair Sealant 3.0', price: 689,
               id: 189
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1107992-00-A_0_2000.jpg', titr: 'Tire Repair Sealant 2.0', price: 26,
               id: 190
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1490750-00-A_0_2000.jpg', titr: 'Model SX3Y Tire Pressure Monitoring System', price : 156,
               id: 191
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1593777-00-A_0_2000.jpg', titr: 'Tire Tote', price: 78,
               id: 192
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/WHEELS_TIRES/1130327-00-C_1_2000.jpg', titr: 'Wheel Locks', price: 52,
               id: 193
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1988719-00-A-2-01.png', titr: 'Model SX3Y Detailing Kit', price: 256,
               id: 194
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/9000002_0_2000.jpg', titr: 'Paint Repair Kit', price: 415,
               id: 195
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1102893-00-A_0_2000.jpg', titr: 'Roadside Safety Kit', price: 652,
               id: 196
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1107681-00-A_0_2000.jpg', titr: 'Model 3/Y Air Filter', price: 856,
               id: 197
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1456933-00-A_1_2000.jpg', titr: 'Model 3 Wiper Blade', price: 265,
               id: 198
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/m3_key_band.jpg', titr: 'Model 3 Key Band', price: 650,
               id: 199
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1131087-00-F_0_2000.jpg', titr: 'Key Card', price: 302,
               id: 200
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1449859-00-D_0_2000.jpg', titr: 'Model 3/Y Key Fob', price: 180,
               id: 201
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1846376-00-A_0_2000.jpg', titr: 'Model X All-Weather Interior Liners', price: 858,
               id: 202
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/INTERIOR/1078360-00-A_0_2000.jpg', titr: 'Model X Sunshades', price: 452,
               id: 203
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/EXTERIOR/1068386-01-A_0.jpg', titr: 'Model X/Y Hitch Rack', price: 758,
               id: 204
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1846376-00-A_0_2000.jpg', titr: 'Model X All-Weather Interior Liners', price: 652,
               id: 205
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1849817-00-A_0_2000.jpg', titr: 'Model X All-Weather Rear Cargo Liner Set', price: 145,
               id: 206
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1846377-00-A_0_2000.jpg', titr: 'Model X All-Weather Front Trunk Liner', price: 256,
               id: 207
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/INTERIOR/1763873-00-A_0_2000.jpg', titr: 'Model X All-Weather Interior Mats', price: 758,
               id: 208
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1632219-00-B_001.jpg', titr: 'Model X Carpet Interior Mats', price: 268,
               id: 209
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1562263-00-A_0_2000.jpg', titr: 'Model X Pet Liner', price: 758,
               id: 210
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/INTERIOR/1521206-00-A_0_2000.jpg', titr: 'Model X Cargo Net', price: 369,
               id: 211
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/INTERIOR/1078360-00-A_0_2000.jpg', titr: 'Model X Sunshades', price: 785,
               id: 212
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1458421-00-A_0_2000.jpg', titr: '2012-2020| Model S/X Coat Hooks', price: 254,
               id: 213
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1086535-00-A_0.jpg', titr: '2012-2020 | Model S/X Performance Pedal Set', price: 756,
               id: 214
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/EXTERIOR/1068386-01-A_0.jpg', titr: 'Model X/Y Hitch Rack', price: 758,
               id: 215
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/EXTERIOR/1104792-00-A_0.jpg', titr: 'Model X/Y Ski/Snowboard Carrier for Hitch Rack', price: 365,
               id: 216
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/EXTERIOR/1069533-01-A_0_2000.jpg', titr: 'Model X Car Cover', price: 254,
               id: 217
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1703857-00-A_0_2000.jpg', titr: 'Powered By the Sun License Plate Frame', price: 458,
               id: 218
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/EXTERIOR/1803059-00-A_2_2000.jpg', titr: 'Model X Mud Flaps', price: 365,
               id: 219
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/WHEELS_TIRES/1744065-W4-A-01.jpg', titr: 'Model X 20" Cyberstream Wheel and Winter Tire Package', price: 263,
               id: 220
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_X/WHEELS_TIRES/1538899-00-A_0_2000.jpg', titr: 'Model X 20”/22” Snow Chains', price: 758,
               id: 221
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1934882-00-A-01.jpg', titr: 'Air Compressor + Tire Repair Kit 3.0', price: 145,
               id: 222
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/WHEELS_TIRES/1133009-00-B_0_2000.jpg', titr: 'Air Compressor + Tire Repair Kit 2.0', price: 954,
               id: 223
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1988719-00-A-2-01.png', titr: 'Model SX3Y Detailing Kit', price: 245,
               id: 224
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/EXTERIOR/1615631-00-A_0_2000.jpg', titr: 'Model X Wiper Blade', price: 756,
               id: 225
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/INTERIOR/1688910-00-C_0_2000.jpg', titr: 'Model S/X Air Filter', price: 325,
               id: 226
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1456933-00-A_1_2000.jpg', titr: '2015-2021 | Model X Wiper Blade', price: 852,
               id: 227
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/INTERIOR/1819444-00-A_0_2000.jpg', titr: 'Model X Key Fob', price: 235,
               id: 228
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_X/INTERIOR/1490876-00-A_4_2000.jpg', titr: 'Model X Key Band', price: 922,
               id: 229
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1131087-00-F_0_2000.jpg', titr: 'Key Card', price: 236,
               id: 230
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/INTERIOR/2013118-00-A-01.jpg', titr: 'Model Y Air Mattress', price: 365,
               id: 231
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1616599-00-A_0_2000.jpg', titr: 'Model Y All-Weather Interior Liners', price: 125,
               id: 232
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1518236-00-A_0_2000.jpg', titr: 'Model Y Roof Rack', price: 785,
               id: 233
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1616599-00-A_0_2000.jpg', titr: 'Model Y All-Weather Interior Liners', price: 458,
               id: 234
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1713539-00-A_0_2000.jpg', titr: 'Model Y All-Weather Rear Cargo Liner Set', price: 896,
               id: 235
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1618834-00-A_0_2000.jpg', titr: 'Model Y All-Weather Front Trunk Liner', price: 478,
               id: 236
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1619365-00-A_0_2000.jpg', titr: 'Model Y Rugged Textile Rear Trunk Mat', price: 698,
               id: 237
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/INTERIOR/2013118-00-A-01.jpg', titr: 'Model Y Air Mattress', price: 475,
               id: 238
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1988714-00-A-02-01.jpg', titr: 'Model Y J1772 Adapter Door Dock', price: 965,
               id: 239
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1562262-00-A_11_2000.jpg', titr: 'Model S/3/Y Pet Liner', price: 587,
               id: 240
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1658682-01-A_5_2000.jpg', titr: 'Model Y Illuminated Door Sills', price: 547,
               id: 241
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/1948419-00-A_1_2000.jpg', titr: 'Model 3/Y Color Paint Protection Film', price: 485,
               id: 242
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/1948407-00-A_0_2000.jpg', titr: 'Model 3/Y Clear Paint Protection Film', price: 658,
               id: 243
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1533971-00-A_0_2000.jpg', titr: 'Model Y Carbon Fiber Spoiler', price: 458,
               id: 244
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1518236-00-A_0_2000.jpg', titr: 'Model Y Roof Rack', price: 462,
               id: 245
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/WHEELS_TIRES/1044235-00-B_0_2000.jpg', titr: 'Model Y Gemini Wheel Cover', price: 698,
               id: 246
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/WHEELS_TIRES/1588816-00-A_0_2000.jpg', titr: 'Model Y Gemini Wheel Cap Kit', price: 524,
               id: 247
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/WHEELS_TIRES/1625535-00-B_8_2000.jpg', titr: 'Model Y 19" Gemini Wheels and Pirelli Winter Tire Package', price: 652,
               id: 248
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/WHEELS_TIRES/1625536-00-A_0_2000.jpg', titr: 'Model Y 20" Induction Wheel and Pirelli Winter Tire Package', price: 47,
               id: 249
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/EXTERIOR/1988719-00-A-2-01.png', titr: 'Model SX3Y Detailing Kit', price: 25,
               id: 250
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/EXTERIOR/1490250-00-A_0_2000.jpg', titr: 'Model Y Wiper Blade', price: 58,
               id: 251
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1587383-00-A_0_2000.jpg', titr: 'Model Y Key Band', price: 26,
               id: 252
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1131087-00-F_0_2000.jpg', titr: 'Key Card', price: 74,
               id: 253
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1449859-00-D_0_2000.jpg', titr: 'Model 3/Y Key Fob', price: 25,
               id: 254
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/2065977-00-A-3-01.png', titr: `Men's Built for Any Planet Tee`, price: 25,
               id: 255
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/2078147-00-A-3-01.png', titr: 'Built for Any Planet Trucker Hat', price: 12,
               id: 256
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/2065978-00-A-3-01.png', titr: 'Built for Any Planet Hoodie', price: 45,
               id: 257
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/2065977-00-A-3-01.png', titr: `Men's Built for Any Planet Tee`, price: 58,
               id: 258
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/2076543-06-A-3-01.jpg', titr: `Men's Foundation Series Tee`, price: 48,
               id: 259
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/2024511-00-A-2-01.png', titr: `Men's Cybertruck Cityscape Tee`, price: 59,
               id: 260
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/2058347-00-A-2-01.png', titr: `Men's Cybertruck Foundation Tee`, price: 78,
               id: 261
           },  
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/2065978-00-A-3-01.png', titr: 'Built for Any Planet Hoodie', price: 85,
               id: 262
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/2024991-00-A-2-01.png', titr: 'Cybertruck Inside Tesla Sweatshirt', price: 45,
               id: 263
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/2022201-00-A-01.png', titr: 'Cybertruck Elevate Crewneck Sweatshirt', price: 25,
               id: 264
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/7654420-00-A_0_2000.jpg', titr: 'Cybertruck Graffiti Hoodie', price: 78,
               id: 265
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/OUTERWEAR/JACKETS/1740514-00-A_0_2000.jpg', titr: `Men's Quilted Shirt Jacket `, price: 525,
               id: 266
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/2078147-00-A-3-01.png', titr: 'Built for Any Planet Trucker Hat', price: 87,
               id: 267
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1969993-00-A-01.jpg', titr: 'Cybertruck Icon Trucker Hat', price: 45,
               id: 268
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/2022087-00-A-01.png', titr: 'Cybertruck Owl Hat', price: 78,
               id: 269
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/SOCKS/1741613-00-A_1_2000.jpg', titr: 'Cybertruck Graffiti Sock Set', price: 96,
               id: 270
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/SOCKS/1741615-00-A_1_2000.jpg', titr: 'Cybertruck Icon Sock Set', price: 12,
               id: 271
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/1741441-00-A_0_2000.jpg', titr: `Women's Turbine Short Sleeve Tee`, price: 25,
               id: 272
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/2065978-00-A-3-01.png', titr: 'Built for Any Planet Hoodie', price: 452,
               id: 273
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/ACTIVEWEAR/TRAINING/1740270-00-A_0_2000.jpg', titr: `Women's Raven Joggers`, price: 255,
               id: 274
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/8765130-00-A_0_2000.jpg', titr: `Women's Small Wordmark Short Sleeve V-Neck Tee`, price: 145,
               id: 275
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/1741441-00-A_0_2000.jpg', titr: `Women's Turbine Short Sleeve Tee`, price: 985,
               id: 276
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/8765100-00-A_0_2000.jpg', titr: `Women's T Logo Long Sleeve Scoop Neck Tee`, price: 528,
               id: 277
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/2065978-00-A-3-01.png', titr: 'Built for Any Planet Hoodie', price: 52,
               id: 278
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/2024991-00-A-2-01.png', titr: 'Cybertruck Inside Tesla Sweatshirt', price: 78,
               id: 279
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/2022201-00-A-01.png', titr: 'Cybertruck Elevate Crewneck Sweatshirt', price: 452,
               id: 280
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/1740221-00-A_0_2000.jpg', titr: `Women's Chill Half Zip Hoodie`, price: 52,
               id: 281
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/OUTERWEAR/JACKETS/1740535-00-A_0_2000.jpg', titr: `Women's Puffer Jacket`, price: 258,
               id: 282
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/OUTERWEAR/JACKETS/5645680-00-A_0_2000.jpg', titr: `Women's Corp Jacket`, price: 45,
               id: 283
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/ACTIVEWEAR/TRAINING/1740270-00-A_0_2000.jpg', titr: `Women's Raven Joggers`, price: 78,
               id: 284
           }, 
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/2078147-00-A-3-01.png', titr: 'Built for Any Planet Trucker Hat', price: 52,
               id: 285
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/1969993-00-A-01.jpg', titr: 'Cybertruck Icon Trucker Hat', price: 962,
               id: 286
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/HEADWEAR/HATS/2022087-00-A-01.png', titr: 'Cybertruck Owl Hat', price: 785,
               id: 287
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOPS/CT_Kids_Reflective_Tee_-v2.jpg', titr: 'Kids Cybertruck Reflective Tee', price: 254,
               id: 288
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/TOPS/1742694-00-A_1_2000.jpg', titr: 'Kids Cybertruck Long Sleeve Tee', price: 452,
               id: 289
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/TOPS/8529342-00-A_0_2000.jpg', titr: 'Kids Cybertruck Tee', price: 785,
               id: 290
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOPS/CT_Kids_Reflective_Tee_-v2.jpg', titr: 'Kids Cybertruck Reflective Tee', price: 35,
               id: 291
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/7652453-00-A_0_2000.jpg', titr: 'Kids 3D T Logo Tee', price: 452,
               id: 292
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/TOPS/8764766-00-A_0_2000.jpg', titr: 'Kids 3D Large Wordmark Tee', price: 63,
               id: 293
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/TOPS/8529342-00-A_0_2000.jpg', titr: 'Kids Cybertruck Tee', price: 78,
               id: 294
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/ONESIES/2031682-00-A-01.jpg', titr: 'Endless Energy Onesie', price: 48,
               id: 295
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/ONESIES/2031682-00-A-01.jpg', titr: 'Made on Earth by Humans Onesie', price: 85,
               id: 296
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/ONESIES/8529387-00-A_0_2000.jpg', titr: 'Scribble T Logo Onesie', price: 45,
               id: 297
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/JACKETS/1643504-00-A_0_2000.jpg', titr: 'Kids Corp Jacket', price: 56,
               id: 298
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/HATS/1740410-00-A_0_2000.jpg', titr: 'Kids T Logo Cuffed Beanie', price: 852,
               id: 299
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/HATS/1693867-02-A_0_2000.jpg', titr: 'Kids Relaxed T Logo Hat', price: 78,
               id: 300
           },
           {
               image: 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/KIDS/HATS/1693862-00-A_0_2000.jpg', titr: 'Kids Relaxed Wordmark Hat', price: 52,
               id: 301
           },
     ]


     const addProduct = (id : number) => {
       setUserCart(prevProducts => {
        const mainProductInCart = userCart.find(product => product.id === id)
        if(mainProductInCart){
            return prevProducts.map(product => {
                if (product.id === id){
                    return {...product}
                }else {
                    return product
                }
            })
        }else {
            const mainProductInShop = carAccesoryArry.find(product => product.id === id)  as CardCarAccesooryContext
            return [...prevProducts , {...mainProductInShop}]
        }
        return []
       })
     }
  
     const removeProduct = (id : number) => setUserCart(prevProduct => prevProduct.filter(product => product.id !== id))
     return(
        <CartContext.Provider value={{
            addProduct,
            removeProduct,
            carAccesoryArry,
            userCart
        }}>
            {children}
        </CartContext.Provider>
     )
}

export default CartContextProvider
