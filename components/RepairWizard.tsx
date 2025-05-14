"use client";

import React, { useState } from "react";
import Quote from "./quote";

interface Issue {
  name: string;
  image: string;
}

interface Model {
  name: string;
  image: string;
}

interface DeviceOption {
  label: string;
  image: string;
  models: Model[];
  issues: Issue[];
}

// Your full deviceOptions array here (shortened for clarity)
const deviceOptions = [
  {
    label: "iPhone",
    image:
      "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/devices/iPhone.png",
    models: [
      {
        name: "iPhone 16 Pro Max",
        image:
          "https://boostmyrepair.instantquoteform.com/repairmodelimages/05-11-2024-1730803290iphone-16-pro-max.png",
      },
      {
        name: "iPhone 16 Pro",
        image:
          "https://boostmyrepair.instantquoteform.com/repairmodelimages/05-11-2024-1730803269iphone-16-pro.png",
      },
      {
        name: "iPhone 16 Plus",
        image:
          "https://boostmyrepair.instantquoteform.com/repairmodelimages/05-11-2024-1730803202iphone-16-plus.png",
      },
      {
        name: "iPhone 16",
        image:
          "https://boostmyrepair.instantquoteform.com/repairmodelimages/05-11-2024-1730802434iphone-16.png",
      },
      {
        name: "iPhone 15 Pro Max",
        image:
          "https://t3portal.boostmyrepair.com/repairmodelimages/10-10-2023-1696924217iphone-15-pro-max.png",
      },
      {
        name: "iPhone 15 Pro",
        image:
          "https://t3portal.boostmyrepair.com/repairmodelimages/10-10-2023-1696924297iphone-15-pro.png",
      },
      {
        name: "iPhone 15 Plus",
        image:
          "https://t3portal.boostmyrepair.com/repairmodelimages/10-10-2023-1696924266iphone-15-plus.png",
      },
      {
        name: "iPhone 15",
        image:
          "https://t3portal.boostmyrepair.com/repairmodelimages/10-10-2023-1696924242iphone-15.png",
      },
      {
        name: "iPhone 14 Pro Max",
        image:
          "https://techpro.instantquoteform.com/repairmodelimages/31-10-2022-16672084844-pro-max.png",
      },
      {
        name: "iPhone 14 Pro",
        image:
          "https://techpro.instantquoteform.com/repairmodelimages/31-10-2022-16672084733-14-pro.png",
      },
      {
        name: "iPhone 14 Plus",
        image:
          "https://techpro.instantquoteform.com/repairmodelimages/31-10-2022-16672084612-14-plus.png",
      },
      {
        name: "iPhone 14",
        image:
          "https://techpro.instantquoteform.com/repairmodelimages/31-10-2022-16672084451-14.png",
      },
      {
        name: "iPhone 13 Pro Max",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653138503iphone-13-pro-max.png",
      },
      {
        name: "iPhone 13 Pro",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653138523iphone-13-pro.png",
      },
      {
        name: "iPhone 13",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653138559iphone-13.png",
      },
      {
        name: "iPhone 13 Mini",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653138541iphone-13-mini.png",
      },
      {
        name: "iPhone 12 Pro Max",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653138578iphone-12-pro-max.png",
      },
      {
        name: "iPhone 12 Pro",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653138597iphone-12-pro.png",
      },
      {
        name: "iPhone 12",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653138628iphone-12.png",
      },
      {
        name: "iPhone 12 Mini",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653138614iphone-12-mini.png",
      },
      {
        name: "iPhone 11 Pro Max",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653138646iphone-11-pro-max.png",
      },
      {
        name: "iPhone 11 Pro",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653140165iphone-11-pro.png",
      },
      {
        name: "iPhone 11",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653140183iphone-11.png",
      },
      {
        name: "iPhone XS Max",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653140213xs-max.png",
      },
      {
        name: "iPhone XS",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653140227xs.png",
      },
      {
        name: "iPhone XR",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653140238xr.png",
      },
      {
        name: "iPhone X",
        image:
          "https://portal.profiix.com/repairmodelimages/21-05-2022-1653140249x.png",
      },
      {
        name: "iPhone SE (2020)",
        image:
          "https://portal.profiix.com/repairmodelimages/23-05-2022-1653303942SE-2020.png",
      },
      {
        name: "iPhone 8 Plus",
        image:
          "https://portal.profiix.com/repairmodelimages/23-05-2022-1653303968iphone-8-plus.png",
      },
      {
        name: "iPhone 8",
        image:
          "https://anaheim.boostmyrepair.com/repairmodelimages/iphone-8.png",
      },
      {
        name: "iPhone 7 Plus",
        image:
          "https://portal.profiix.com/repairmodelimages/23-05-2022-16533040147--plus.png",
      },
      {
        name: "iPhone 7",
        image:
          "https://portal.profiix.com/repairmodelimages/23-05-2022-16533040307.png",
      },
      {
        name: "iPhone 6s Plus",
        image:
          "https://portal.profiix.com/repairmodelimages/23-05-2022-16533040506-s-plus.png",
      },
      {
        name: "iPhone 6s",
        image:
          "https://portal.profiix.com/repairmodelimages/23-05-2022-16533040656-s.png",
      },
      {
        name: "iPhone 6 Plus",
        image:
          "https://portal.profiix.com/repairmodelimages/23-05-2022-16533113366-PLUS.png",
      },
      {
        name: "iPhone 6",
        image:
          "https://portal.profiix.com/repairmodelimages/23-05-2022-16533113206.png",
      },
      {
        name: "iPhone 5s Plus",
        image:
          "https://portal.profiix.com/repairmodelimages/23-05-2022-16533112955S.png",
      },
    ],
    issues: [
      {
        name: "Battery Replacement",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/short%20battery-100.jpg",
      },
      {
        name: "Broken Screen",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/broken%20screen-100.jpg",
      },
      {
        name: "Diagnostic",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/Diagnostic-100.jpg",
      },
      {
        name: "Water Damage",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/water%20damage-100.jpg",
      },
      {
        name: "Front Camera",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/front%20camera-100.jpg",
      },
      {
        name: "Charging Port",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/charging%20port-100.jpg",
      },
      {
        name: "Back Glass",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/Broken%20glass-100.jpg",
      },
      {
        name: "Carrier Unlock",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/Carrier%20Unlock-100.jpg",
      },
      {
        name: "Not Turning On",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/Not%20turning%20On-100.jpg",
      },
      {
        name: "Back Camera",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/Back%20Camera-100.jpg",
      },
    ],
  },
  {
    label: "Android Phone",
    image:
      "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/devices/Smart-Phone.png",
    models: [
      {
        name: "Samsung",
        image:
          "https://portal.profiix.com/repairbrandimages/23-05-2022-1653308164samsung.png",
      },
      {
        name: "Google",
        image:
          "https://portal.profiix.com/repairbrandimages/23-05-2022-1653308197google-1.png",
      },
      {
        name: "OnePlus",
        image:
          "https://portal.profiix.com/repairbrandimages/23-05-2022-1653308181oneplus-1.png",
      },
      {
        name: "LG",
        image:
          "https://portal.profiix.com/repairbrandimages/23-05-2022-1653308188lg-1.png",
      },
      {
        name: "Motorola",
        image:
          "https://portal.profiix.com/repairbrandimages/23-05-2022-1653308208motorola-1.png",
      },
    ],
    issues: [
      {
        name: "Battery Replacement",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/short%20battery-100.jpg",
      },
      {
        name: "Broken Screen",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/broken%20screen-100.jpg",
      },
      {
        name: "Diagnostic",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/Diagnostic-100.jpg",
      },
      {
        name: "Water Damage",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/water%20damage-100.jpg",
      },
      {
        name: "Front Camera",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/front%20camera-100.jpg",
      },
      {
        name: "Charging Port",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/charging%20port-100.jpg",
      },
      {
        name: "Back Glass",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/Broken%20glass-100.jpg",
      },
      {
        name: "Carrier Unlock",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/Carrier%20Unlock-100.jpg",
      },
      {
        name: "Not Turning On",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/Not%20turning%20On-100.jpg",
      },
      {
        name: "Back Camera",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Smart%20phone/1x/Back%20Camera-100.jpg",
      },
    ],
  },
  {
    label: "Tablet",
    image:
      "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/devices/Tablet.png",
    models: [
      {
        name: "Samsung Tablet",
        image:
          "https://portal.profiix.com/repairbrandimages/23-05-2022-1653308164samsung.png",
      },
      {
        name: "iPad",
        image:
          "https://portal.profiix.com/repairbrandimages/23-05-2022-1653308197google-1.png",
      },
      {
        name: "Surface Tablet",
        image:
          "https://portal.profiix.com/repairbrandimages/23-05-2022-1653308181oneplus-1.png",
      },
    ],
    issues: [
      {
        name: "Water Damage",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Tablet/1x/water%20damage-100.jpg",
      },
      {
        name: "Batter Replacement",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Tablet/1x/short%20battery%20life-100.jpg",
      },
      {
        name: "Not Charging",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Tablet/1x/not%20charging-100.jpg",
      },
      {
        name: "Broken Screen",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Tablet/1x/broken%20screen-100.jpg",
      },
      {
        name: "Back Camera",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Tablet/1x/back%20camera-100.jpg",
      },
      {
        name: "Front Camera",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Tablet/1x/front%20camera-100.jpg",
      },
      {
        name: "Home Button",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Tablet/1x/home%20button-100.jpg",
      },
      {
        name: "Updates/Restore",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Tablet/1x/update%20And%20restore-100.jpg",
      },
      {
        name: "Speaker",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Tablet/1x/speaker-100.jpg",
      },
      {
        name: "Bad Lcd",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Tablet/1x/bad%20(lcd)-100.jpg",
      },
      {
        name: "Diagnostic",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Tablet/1x/Diagnostic-100.jpg",
      },
      {
        name: "Not Turning On",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Tablet/1x/not%20turning%20on-100.jpg",
      },
    ],
  },
  {
    label: "Computer",
    image:
      "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/devices/Computer.png",
    models: [
      {
        name: "PC Desktop",
        image:
          "https://portal.profiix.com/repairbrandimages/25-05-2022-1653481016PC-desktop.png",
      },
      {
        name: "Chromebook",
        image:
          "https://portal.profiix.com/repairbrandimages/25-05-2022-1653480984chrome-book.png",
      },
      {
        name: "Macbook",
        image:
          "https://portal.profiix.com/repairbrandimages/25-05-2022-1653480994mac-book.png",
      },
      {
        name: "Laptop",
        image:
          "https://portal.profiix.com/repairbrandimages/25-05-2022-1653481026pc-laptop.png",
      },
      {
        name: "iMac",
        image:
          "https://portal.profiix.com/repairbrandimages/25-05-2022-1653481003imac.png",
      },
      {
        name: "Surface",
        image:
          "https://portal.profiix.com/repairbrandimages/30-05-2022-1653907215250x250-copy.png",
      },
    ],
    issues: [
      {
        name: "Virus",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Computer/1x/virs%20spyware-100.jpg",
      },
      {
        name: "Not Booting",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Computer/1x/wont%20boot%20hard%20drive-100.jpg",
      },
      {
        name: "Water Damage",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Computer/1x/water%20laptop-100.jpg",
      },
      {
        name: "Data Recovery",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Computer/1x/memory%20upgrade-100.jpg",
      },
      {
        name: "Hard Drive",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Computer/1x/disc%20drive-100.jpg",
      },
      {
        name: "Broken Screen",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Computer/1x/broken%20screen-100.jpg",
      },
      {
        name: "Battery",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Computer/1x/battery%20laptop-100.jpg",
      },
      {
        name: "Not Turning On",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Computer/1x/power%20button-100.jpg",
      },
      {
        name: "Over Heat",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Computer/1x/over%20heat-100.jpg",
      },
      {
        name: "Password Reset",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Computer/1x/passsward%20reset-100.jpg",
      },
      {
        name: "Diagnostic",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Computer/1x/Diagnostic-100.jpg",
      },
    ],
  },
  {
    label: "Gaming Console",
    image:
      "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/devices/Gaming-Console.png",
    models: [
      {
        name: "Xbox",
        image:
          "https://portal.profiix.com/repairbrandimages/26-05-2022-1653563200xbox.png",
      },
      {
        name: "PlayStation",
        image:
          "https://portal.profiix.com/repairbrandimages/26-05-2022-1653563205playstation.png",
      },
      {
        name: "Nintendo",
        image:
          "https://portal.profiix.com/repairbrandimages/26-05-2022-1653563210intendo.png",
      },
    ],
    issues: [
      {
        name: "Hard Drive",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Gaming%20Console/1x/WONT%20BOOT%20HARD%20DRIVE-100.jpg",
      },
      {
        name: "Not Turning On",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Gaming%20Console/1x/over%20heat-100.jpg",
      },
      {
        name: "Video Input",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Gaming%20Console/1x/video%20input-100.jpg",
      },
      {
        name: "Over Heat",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Gaming%20Console/1x/charging%20port-100.jpg",
      },
      {
        name: "Diagnostic",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Gaming%20Console/1x/software%20update-100.jpg",
      },
    ],
  },
  {
    label: "iWatch",
    image:
      "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/devices/iWatch.png",
    models: [
      {
        name: "Apple Watch Series 10 Aluminium",
        image:
          "https://boostmyrepair.instantquoteform.com/repairmodelimages/05-11-2024-1730804217Apple-Watch-Series-10-Aluminum.png",
      },
      {
        name: "Apple Watch Series 10",
        image:
          "https://boostmyrepair.instantquoteform.com/repairmodelimages/05-11-2024-1730804195Apple-Watch-Series-10.png",
      },
      {
        name: "Apple Watch Series 9 Aluminium",
        image:
          "https://boostmyrepair.instantquoteform.com/repairmodelimages/05-11-2024-1730803484Apple-Watch-Series-9-Aluminum.png",
      },
      {
        name: "Apple Watch Series 19",
        image:
          "https://boostmyrepair.instantquoteform.com/repairmodelimages/05-11-2024-1730803449Apple-Watch-Series-9.png",
      },
      {
        name: "Apple Watch SE 2nd Gen",
        image:
          "https://t3portal.boostmyrepair.com/repairmodelimages/10-10-2023-1696924484Apple-Watch-SE-2nd-Gen.png",
      },
      {
        name: "Apple Watch Ultra",
        image:
          "https://t3portal.boostmyrepair.com/repairmodelimages/10-10-2023-1696924511Apple-Watch-Ultra.png",
      },
      {
        name: "Apple Watch Series 8",
        image:
          "https://t3portal.boostmyrepair.com/repairmodelimages/10-10-2023-1696924497Apple-Watch-Series-8.png",
      },
      {
        name: "Series 8",
        image:
          "https://techpro.instantquoteform.com/repairmodelimages/31-10-2022-1667208575second.png",
      },
      {
        name: "Series 7",
        image:
          "https://techpro.instantquoteform.com/repairmodelimages/31-10-2022-1667208594first.png",
      },
      {
        name: "Apple Watch",
        image:
          "https://portal.profiix.com/repairmodelimages/26-05-2022-1653568911apple-watch.png",
      },
      {
        name: "Series SE",
        image:
          "https://portal.profiix.com/repairmodelimages/26-05-2022-1653568888series-SE.png",
      },
      {
        name: "Series 5 44mm",
        image:
          "https://portal.profiix.com/repairmodelimages/26-05-2022-1653568849series-5-44mm.png",
      },
      {
        name: "Series 5 40mm",
        image:
          "https://portal.profiix.com/repairmodelimages/26-05-2022-1653568827series-5-40mm.png",
      },
      {
        name: "Series 4 44mm",
        image:
          "https://portal.profiix.com/repairmodelimages/26-05-2022-1653568780series-4-44mm.png",
      },
      {
        name: "Series 4 40mm",
        image:
          "https://portal.profiix.com/repairmodelimages/26-05-2022-1653568756series-4-40mm.png",
      },
      {
        name: "Series 3 42mm LTE",
        image:
          "https://portal.profiix.com/repairmodelimages/26-05-2022-1653568693series-3-42mm-LTE.png",
      },
      {
        name: "Series 3 38mm LTE",
        image:
          "https://portal.profiix.com/repairmodelimages/26-05-2022-1653568663series-3-38mm-LTE.png",
      },
      {
        name: "Series 42mm GPS",
        image:
          "https://portal.profiix.com/repairmodelimages/31-05-2022-1654012748series-3-38mm-LTE.png",
      },
      {
        name: "Series 38mm GPS",
        image:
          "https://portal.profiix.com/repairmodelimages/31-05-2022-1654012716series-3-38mm-LTE.png",
      },
      {
        name: "Series 2 42mm",
        image:
          "https://portal.profiix.com/repairmodelimages/26-05-2022-1653568354series-2-42mm-LTE.png",
      },
      {
        name: "Series 2 38mm",
        image:
          "https://portal.profiix.com/repairmodelimages/31-05-2022-1654012553series-2-42mm-LTE.png",
      },
      {
        name: "Series 1 42mm",
        image:
          "https://portal.profiix.com/repairmodelimages/26-05-2022-1653568215series-1-42mm.png",
      },
      {
        name: "Series 1 38mm",
        image:
          "https://portal.profiix.com/repairmodelimages/31-05-2022-1654012432series-1-42mm.png",
      },
    ],
    issues: [
      {
        name: "Battery",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/iWatch/1x/battery-100.jpg",
      },
      {
        name: "Not Turning On",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/iWatch/1x/doesn't%20turn%20on-100.jpg",
      },
      {
        name: "Screen",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/iWatch/1x/screen-100.jpg",
      },
      {
        name: "Water Damage",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/iWatch/1x/water%20damage-100.jpg",
      },
      {
        name: "Diagnostic",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/iWatch/1x/Diagnostic-100.jpg",
      },
    ],
  },
  {
    label: "Unlock",
    image:
      "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/devices/Unlock.png",
    models: [
      {
        name: "Carrier / SIM Unlock",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Unlock/1x/Carrier%20-%20SIM%20Unlock%20copy-100.jpg",
      },
      {
        name: "Google Account Unlock",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Unlock/1x/Google%20Account%20Unlock%20copy-100.jpg",
      },
      {
        name: "iCloud Account Unlock",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Unlock/1x/iCloud%20Account%20Unlock%20copy-100.jpg",
      },
      {
        name: "Passcode / Pattern Unlock",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/icons/Unlock/1x/Passcode%20-%20Pattern%20Unlock%20copy-100.jpg",
      },
    ],
    issues: [
      {
        name: "Unlock Issues",
        image:
          "https://widget.xtremeiphonerepair.com/images/WidgetNewIcons/Widget%20New%20Icons/devices/Unlock.png",
      },
    ],
  },
];

const RepairWizard = () => {
  const [step, setStep] = useState(1);
  const [selectedDevice, setSelectedDevice] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedIssue, setSelectedIssue] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zip: "",
    message: "",
  });

  const handleDeviceSelect = (device: string) => {
    setSelectedDevice(device);
    setSelectedModel("");
    setSelectedIssue("");
    setStep(2);
  };

  const handleModelSelect = (model: string) => {
    setSelectedModel(model);
    setSelectedIssue("");
    setStep(3);
  };

  const handleIssueSelect = (issue: string) => {
    setSelectedIssue(issue);
    setStep(4);
  };

  const navigateToStep = (targetStep: number) => {
    if (targetStep < step) {
      setStep(targetStep);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Step Indicator */}
      <div className="flex items-center justify-between mb-12 max-w-4xl mx-auto">
        {["DEVICE", "MODEL", "ISSUE", "DETAILS", "GET QUOTE"].map(
          (label, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center cursor-pointer"
              onClick={() => navigateToStep(i + 1)}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full border-4 ${
                  step === i + 1
                    ? "border-blue-500 text-blue-500"
                    : step > i + 1
                    ? "border-green-500 text-green-500"
                    : "border-gray-300 text-gray-400"
                } font-semibold`}
              >
                {i + 1}
              </div>
              <span
                className={`mt-2 text-sm ${
                  step === i + 1
                    ? "text-blue-500"
                    : step > i + 1
                    ? "text-green-600"
                    : "text-gray-400"
                }`}
              >
                {label}
              </span>
            </div>
          )
        )}
      </div>

      {/* Step 1: Select Device */}
      {step === 1 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {deviceOptions.map((device) => (
            <button
              key={device.label}
              onClick={() => handleDeviceSelect(device.label)}
              className="flex flex-col items-center p-4 border shadow rounded hover:shadow-lg transition bg-white"
            >
              <img
                src={device.image}
                alt={device.label}
                className="h-32 object-contain mb-2"
              />
              <span className="font-semibold text-orange-500 text-center">
                {device.label}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Step 2: Select Model */}
      {step === 2 && (
        <div className="mt-10">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              Selected Device: {selectedDevice}
            </h2>
            <button
              onClick={() => setStep(1)}
              className="text-blue-600 underline"
            >
              ← Change Device
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {deviceOptions
              .find((d) => d.label === selectedDevice)
              ?.models?.map((model) => (
                <button
                  key={model.name}
                  onClick={() => handleModelSelect(model.name)}
                  className="flex flex-col items-center p-4 border shadow rounded hover:shadow-lg transition bg-white"
                >
                  <img
                    src={model.image}
                    alt={model.name}
                    className="h-32 object-contain mb-2"
                  />
                  <span className="font-semibold text-gray-700 text-center">
                    {model.name}
                  </span>
                </button>
              )) || (
              <div className="col-span-full text-center text-gray-500 text-lg">
                No models available for this device.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Step 3: Select Issue */}
      {step === 3 && (
        <div className="mt-10">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              Selected Model: {selectedModel}
            </h2>
            <button
              onClick={() => setStep(2)}
              className="text-blue-600 underline"
            >
              ← Change Model
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {deviceOptions
              .find((d) => d.label === selectedDevice)
              ?.issues?.map((issue) => (
                <button
                  key={issue.name}
                  onClick={() => handleIssueSelect(issue.name)}
                  className="flex flex-col items-center p-4 border shadow rounded hover:shadow-lg transition bg-white"
                >
                  <img
                    src={issue.image}
                    alt={issue.name}
                    className="h-20 object-contain mb-2"
                  />
                  <span className="font-medium text-gray-700 text-center">
                    {issue.name}
                  </span>
                </button>
              )) || (
              <div className="col-span-full text-center text-gray-500 text-lg">
                No issues available for this device.
              </div>
            )}
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="min-h-screen bg-[#f9f9f9] px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            {/* Quote Form Section */}
            <div className="w-full lg:flex-[3]">
              <Quote setStep={setStep} setFormData={setFormData} />
            </div>

            {/* Sidebar Section */}
            <div className="bg-white p-6 rounded-xl w-full lg:w-[300px] shadow-md mt-6 lg:mt-0">
              <h3 className="text-xl font-semibold text-orange-500 mb-4">
                Selected Repair
              </h3>
              <div className="text-gray-700 mb-6 space-y-1">
                <p>
                  <strong>Device:</strong> {selectedDevice}
                </p>
                <p>
                  <strong>Model:</strong> {selectedModel}
                </p>
                <p>
                  <strong>Issue:</strong> {selectedIssue}
                </p>
              </div>
              <h3 className="text-xl font-semibold text-orange-500 mb-4">
                Why Choose US?
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>✅ Premium Quality Parts</li>
                <li>✅ Certified Techs</li>
                <li>✅ Lowest Prices in Town</li>
              </ul>
              <p className="text-xs text-gray-500 mt-4">
                30 Day Warranty Included
              </p>
            </div>
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="min-h-screen flex items-center justify-center bg-[#f9f9f9] px-4 py-10">
          <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-xl text-center">
            <h2 className="text-3xl font-bold text-green-600 mb-4">
              🎉 Thank You!
            </h2>
            <p className="text-gray-700 mb-6">
              We have received your quote request. Our team is now reviewing
              your application and will contact you soon!
            </p>

            <div className="text-left bg-blue-50 p-4 rounded-md mb-6 text-sm">
              <p>
                <strong>Device:</strong> {selectedDevice}
              </p>
              <p>
                <strong>Model:</strong> {selectedModel}
              </p>
              <p>
                <strong>Issue:</strong> {selectedIssue}
              </p>
              <p>
                <strong>Name:</strong> {formData?.name}
              </p>
              <p>
                <strong>Email:</strong> {formData?.email}
              </p>
              <p>
                <strong>Phone:</strong> {formData?.phone}
              </p>
              <p>
                <strong>Zip:</strong> {formData?.zip}
              </p>
              {formData?.message && (
                <p>
                  <strong>Message:</strong> {formData.message}
                </p>
              )}
            </div>

            <a
              href="https://www.google.com/maps/place/Alpha+Fix+%7C+15+Minutes+Repair/@29.7001247,-95.68721,615m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8640dfd3afca5287:0xa0b970859946ea50!8m2!3d29.7001247!4d-95.68721!16s%2Fg%2F11p150q8pt!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDUxMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition shadow">
                📍 Get Location
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
export default RepairWizard;