TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "hfovMin": 60,
  "vfov": 180,
  "label": "R0010049",
  "class": "Panorama",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_9E3C54BE_969F_4B63_41CC_8486A6DFCEC6_t.jpg",
  "hfovMax": 120,
  "partial": false,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_9E3C54BE_969F_4B63_41CC_8486A6DFCEC6_r_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_9E3C54BE_969F_4B63_41CC_8486A6DFCEC6_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_9E3C54BE_969F_4B63_41CC_8486A6DFCEC6_u_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_9E3C54BE_969F_4B63_41CC_8486A6DFCEC6_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "items": [
       {
        "hfov": 14.279491921411747,
        "yaw": 159.14285714285714,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -49.31575963718821,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_9E3C54BE_969F_4B63_41CC_8486A6DFCEC6_0_HS_0_0.png",
           "height": 161,
           "class": "ImageResourceLevel",
           "width": 327
          }
         ]
        },
        "roll": 0
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_9EEC427A_969F_4FE3_41D3_3B4488C981E3, this.camera_9A0B1596_96B8_B523_41C0_289CA8B3504F); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_9C4FED64_9698_B5E7_41CB_FC417D395296",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "roll": 0,
        "pitch": -49.31575963718821,
        "yaw": 159.14285714285714,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_9E3C54BE_969F_4B63_41CC_8486A6DFCEC6_0_HS_0_0_0_map.gif",
           "height": 80,
           "class": "ImageResourceLevel",
           "width": 163
          }
         ]
        },
        "hfov": 14.279491921411747
       }
      ],
      "rollOverDisplay": false
     },
     {
      "items": [
       {
        "hfov": 14.431641188852732,
        "yaw": -110.20408163265306,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -16.095238095238095,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_9E3C54BE_969F_4B63_41CC_8486A6DFCEC6_0_HS_2_0.png",
           "height": 96,
           "class": "ImageResourceLevel",
           "width": 224
          }
         ]
        },
        "roll": 0
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_9A3BC195_96A8_CD21_41C2_E0CE3E7DCD4A, {'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverIconLineWidth':5,'iconWidth':20,'backgroundOpacity':0.3,'iconColor':'#000000','pressedBackgroundOpacity':0.3,'rollOverBorderColor':'#000000','pressedBorderColor':'#000000','rollOverBorderSize':0,'paddingLeft':5,'pressedIconWidth':20,'rollOverIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'rollOverIconHeight':20,'iconLineWidth':5,'pressedBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','borderColor':'#000000','rollOverIconColor':'#666666','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}, this.ImageResource_9A4A02CB_96AB_4F21_41D1_B49294E1A322, null, null, null, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_9D65A543_96AB_5521_41D7_123BB3A37D43",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "roll": 0,
        "pitch": -16.095238095238095,
        "yaw": -110.20408163265306,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_9E3C54BE_969F_4B63_41CC_8486A6DFCEC6_0_HS_2_0_0_map.gif",
           "height": 48,
           "class": "ImageResourceLevel",
           "width": 112
          }
         ]
        },
        "hfov": 14.431641188852732
       }
      ],
      "rollOverDisplay": false
     },
     {
      "hideDuration": 500,
      "showEasing": "cubic_in",
      "hfov": 14.431641188852732,
      "rotationX": 0,
      "rotationZ": 0,
      "yaw": -110.20408163265306,
      "rotationY": 0,
      "id": "popup_9A3BC195_96A8_CD21_41C2_E0CE3E7DCD4A",
      "popupMaxWidth": "95%",
      "class": "PopupPanoramaOverlay",
      "pitch": -16.095238095238095,
      "popupMaxHeight": "95%",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_9A3BC195_96A8_CD21_41C2_E0CE3E7DCD4A_0_4.jpg",
         "height": 256,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_9A3BC195_96A8_CD21_41C2_E0CE3E7DCD4A_0_3.jpg",
         "height": 512,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ]
      },
      "showDuration": 500,
      "hideEasing": "cubic_out"
     },
     {
      "items": [
       {
        "hfov": 19.24416814481093,
        "yaw": -136.29931972789115,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -15.523809523809524,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_9E3C54BE_969F_4B63_41CC_8486A6DFCEC6_0_HS_1_0.png",
           "height": 182,
           "class": "ImageResourceLevel",
           "width": 298
          }
         ]
        },
        "roll": 0
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_9EF0DF3E_969F_B563_41DC_B65BD53F377B, this.camera_9A02B5A5_96B8_B561_41C4_1A657DA19EA2); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_9AAFFD54_96A8_D527_41E2_74400A2FF85A",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "roll": 0,
        "pitch": -15.523809523809524,
        "yaw": -136.29931972789115,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_9E3C54BE_969F_4B63_41CC_8486A6DFCEC6_0_HS_1_0_0_map.gif",
           "height": 91,
           "class": "ImageResourceLevel",
           "width": 149
          }
         ]
        },
        "hfov": 19.24416814481093
       }
      ],
      "rollOverDisplay": false
     }
    ],
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_9E3C54BE_969F_4B63_41CC_8486A6DFCEC6_l_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_9E3C54BE_969F_4B63_41CC_8486A6DFCEC6_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_9E3C54BE_969F_4B63_41CC_8486A6DFCEC6_d_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_9E3C54BE_969F_4B63_41CC_8486A6DFCEC6_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_9E3C54BE_969F_4B63_41CC_8486A6DFCEC6_b_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_9E3C54BE_969F_4B63_41CC_8486A6DFCEC6_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_9E3C54BE_969F_4B63_41CC_8486A6DFCEC6_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_9E3C54BE_969F_4B63_41CC_8486A6DFCEC6_f_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_9E3C54BE_969F_4B63_41CC_8486A6DFCEC6_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    }
   }
  ],
  "id": "panorama_9E3C54BE_969F_4B63_41CC_8486A6DFCEC6"
 },
 {
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "touchControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 8.95
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 8.95
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 8.95
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_9E3C54BE_969F_4B63_41CC_8486A6DFCEC6_camera"
 },
 {
  "hfov": 360,
  "hfovMin": 60,
  "vfov": 180,
  "label": "R0010050",
  "class": "Panorama",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_9EEC427A_969F_4FE3_41D3_3B4488C981E3_t.jpg",
  "hfovMax": 120,
  "partial": false,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_9EEC427A_969F_4FE3_41D3_3B4488C981E3_r_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_9EEC427A_969F_4FE3_41D3_3B4488C981E3_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_9EEC427A_969F_4FE3_41D3_3B4488C981E3_u_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_9EEC427A_969F_4FE3_41D3_3B4488C981E3_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "items": [
       {
        "hfov": 10.65237892066618,
        "yaw": -108.38095238095238,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 21.238095238095237,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_9EEC427A_969F_4FE3_41D3_3B4488C981E3_0_HS_1_0.png",
           "height": 170,
           "class": "ImageResourceLevel",
           "width": 170
          }
         ]
        },
        "roll": 0
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_9E3C54BE_969F_4B63_41CC_8486A6DFCEC6, this.camera_9A1835B4_96B8_B567_41E1_DD7A03C345CA); this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_9D582B7F_96A8_FDE1_41DC_4291DD5CB97C",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "roll": 0,
        "pitch": 21.238095238095237,
        "yaw": -108.38095238095238,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_9EEC427A_969F_4FE3_41D3_3B4488C981E3_0_HS_1_0_0_map.gif",
           "height": 85,
           "class": "ImageResourceLevel",
           "width": 85
          }
         ]
        },
        "hfov": 10.65237892066618
       }
      ],
      "rollOverDisplay": false
     },
     {
      "items": [
       {
        "hfov": 11.31468988260396,
        "yaw": 126.28571428571429,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -8.095238095238095,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_9EEC427A_969F_4FE3_41D3_3B4488C981E3_0_HS_0_0.png",
           "height": 170,
           "class": "ImageResourceLevel",
           "width": 170
          }
         ]
        },
        "roll": 0
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_9AEFAE6C_96A9_B7E7_41D5_9752EC5984EE",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "roll": 0,
        "pitch": -8.095238095238095,
        "yaw": 126.28571428571429,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_9EEC427A_969F_4FE3_41D3_3B4488C981E3_0_HS_0_0_0_map.gif",
           "height": 85,
           "class": "ImageResourceLevel",
           "width": 85
          }
         ]
        },
        "hfov": 11.31468988260396
       }
      ],
      "rollOverDisplay": false
     }
    ],
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_9EEC427A_969F_4FE3_41D3_3B4488C981E3_l_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_9EEC427A_969F_4FE3_41D3_3B4488C981E3_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_9EEC427A_969F_4FE3_41D3_3B4488C981E3_d_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_9EEC427A_969F_4FE3_41D3_3B4488C981E3_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_9EEC427A_969F_4FE3_41D3_3B4488C981E3_b_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_9EEC427A_969F_4FE3_41D3_3B4488C981E3_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_9EEC427A_969F_4FE3_41D3_3B4488C981E3_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_9EEC427A_969F_4FE3_41D3_3B4488C981E3_f_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_9EEC427A_969F_4FE3_41D3_3B4488C981E3_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    }
   }
  ],
  "id": "panorama_9EEC427A_969F_4FE3_41D3_3B4488C981E3"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 8.95
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 8.95
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 8.95
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_9EEC427A_969F_4FE3_41D3_3B4488C981E3_camera"
 },
 {
  "hfov": 360,
  "hfovMin": 60,
  "vfov": 180,
  "label": "R0010052",
  "class": "Panorama",
  "pitch": 0,
  "thumbnailUrl": "media/panorama_9EF0DF3E_969F_B563_41DC_B65BD53F377B_t.jpg",
  "hfovMax": 120,
  "partial": false,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_9EF0DF3E_969F_B563_41DC_B65BD53F377B_r_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_9EF0DF3E_969F_B563_41DC_B65BD53F377B_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_9EF0DF3E_969F_B563_41DC_B65BD53F377B_u_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_9EF0DF3E_969F_B563_41DC_B65BD53F377B_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "items": [
       {
        "hfov": 11.060968553721903,
        "yaw": -17.333333333333332,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 14.571428571428571,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_9EF0DF3E_969F_B563_41DC_B65BD53F377B_0_HS_0_0.png",
           "height": 170,
           "class": "ImageResourceLevel",
           "width": 170
          }
         ]
        },
        "roll": 0
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_9E3C54BE_969F_4B63_41CC_8486A6DFCEC6, this.camera_9A12B5C3_96B8_B521_41D5_D5F554F395DB); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000"
       }
      ],
      "id": "overlay_9AE1AE93_96AB_7721_41BF_D0D14F2898B1",
      "useHandCursor": true,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "roll": 0,
        "pitch": 14.571428571428571,
        "yaw": -17.333333333333332,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_9EF0DF3E_969F_B563_41DC_B65BD53F377B_0_HS_0_0_0_map.gif",
           "height": 85,
           "class": "ImageResourceLevel",
           "width": 85
          }
         ]
        },
        "hfov": 11.060968553721903
       }
      ],
      "rollOverDisplay": false
     }
    ],
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_9EF0DF3E_969F_B563_41DC_B65BD53F377B_l_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_9EF0DF3E_969F_B563_41DC_B65BD53F377B_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_9EF0DF3E_969F_B563_41DC_B65BD53F377B_d_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_9EF0DF3E_969F_B563_41DC_B65BD53F377B_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_9EF0DF3E_969F_B563_41DC_B65BD53F377B_b_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_9EF0DF3E_969F_B563_41DC_B65BD53F377B_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_9EF0DF3E_969F_B563_41DC_B65BD53F377B_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_9EF0DF3E_969F_B563_41DC_B65BD53F377B_f_hq.jpeg",
       "height": 1704,
       "class": "ImageResourceLevel",
       "width": 1704
      },
      {
       "url": "media/panorama_9EF0DF3E_969F_B563_41DC_B65BD53F377B_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    }
   }
  ],
  "id": "panorama_9EF0DF3E_969F_B563_41DC_B65BD53F377B"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 8.95
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 8.95
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 8.95
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_9EF0DF3E_969F_B563_41DC_B65BD53F377B_camera"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "media": "this.panorama_9E3C54BE_969F_4B63_41CC_8486A6DFCEC6",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_9E3C54BE_969F_4B63_41CC_8486A6DFCEC6_camera"
   },
   {
    "media": "this.panorama_9EEC427A_969F_4FE3_41D3_3B4488C981E3",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_9EEC427A_969F_4FE3_41D3_3B4488C981E3_camera"
   },
   {
    "media": "this.panorama_9EF0DF3E_969F_B563_41DC_B65BD53F377B",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 0)",
    "camera": "this.panorama_9EF0DF3E_969F_B563_41DC_B65BD53F377B_camera"
   }
  ],
  "id": "mainPlayList"
 },
 "this.popup_9A3BC195_96A8_CD21_41C2_E0CE3E7DCD4A",
 {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_9A3BC195_96A8_CD21_41C2_E0CE3E7DCD4A_0_0.jpg",
    "height": 2688,
    "class": "ImageResourceLevel",
    "width": 5376
   },
   {
    "url": "media/popup_9A3BC195_96A8_CD21_41C2_E0CE3E7DCD4A_0_1.jpg",
    "height": 2048,
    "class": "ImageResourceLevel",
    "width": 4096
   },
   {
    "url": "media/popup_9A3BC195_96A8_CD21_41C2_E0CE3E7DCD4A_0_2.jpg",
    "height": 1024,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_9A3BC195_96A8_CD21_41C2_E0CE3E7DCD4A_0_3.jpg",
    "height": 512,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_9A3BC195_96A8_CD21_41C2_E0CE3E7DCD4A_0_4.jpg",
    "height": 256,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ],
  "id": "ImageResource_9A4A02CB_96AB_4F21_41D1_B49294E1A322"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 71.61904761904762,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 8.95
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 8.95
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 8.95
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_9A0B1596_96B8_B523_41C0_289CA8B3504F"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 162.66666666666666,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 8.95
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 8.95
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 8.95
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_9A02B5A5_96B8_B561_41C4_1A657DA19EA2"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -20.85714285714286,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 8.95
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 8.95
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 8.95
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_9A1835B4_96B8_B567_41E1_DD7A03C345CA"
 },
 {
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 43.700680272108855,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 8.95
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 8.95
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 8.95
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_9A12B5C3_96B8_B521_41D5_D5F554F395DB"
 }
], "children": [
 {
  "toolTipTextShadowColor": "#000000",
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "toolTipTextShadowOpacity": 0,
  "width": "100%",
  "paddingLeft": 0,
  "minHeight": 50,
  "height": "100%",
  "minWidth": 100,
  "progressBarBackgroundColorDirection": "vertical",
  "progressOpacity": 1,
  "paddingRight": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressHeight": 10,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadHeight": 15,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeight": 10,
  "playbackBarProgressOpacity": 1,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBarBorderRadius": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBorderSize": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "class": "ViewerArea",
  "playbackBarProgressBorderColor": "#000000",
  "toolTipFontWeight": "normal",
  "playbackBarProgressBorderRadius": 0,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontStyle": "normal",
  "toolTipShadowVerticalLength": 0,
  "borderRadius": 0,
  "playbackBarBottom": 5,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "id": "MainViewer",
  "progressBorderRadius": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarLeft": 0,
  "toolTipOpacity": 1,
  "playbackBarHeadShadow": true,
  "progressBorderSize": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipBorderColor": "#767676",
  "toolTipBorderRadius": 3,
  "progressLeft": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipBorderSize": 1,
  "playbackBarProgressBorderSize": 0,
  "toolTipFontFamily": "Arial",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBottom": 0,
  "toolTipFontColor": "#606060",
  "playbackBarHeadOpacity": 1,
  "toolTipFontSize": 12,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipPaddingLeft": 6,
  "playbackBarHeadBorderRadius": 0,
  "toolTipPaddingRight": 6,
  "playbackBarBorderSize": 0,
  "toolTipPaddingTop": 4,
  "shadow": false,
  "playbackBarRight": 0,
  "playbackBarHeadBorderSize": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarOpacity": 1,
  "paddingBottom": 0,
  "borderSize": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "toolTipShadowOpacity": 1,
  "progressRight": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "progressBarOpacity": 1,
  "toolTipShadowSpread": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBorderColor": "#000000",
  "transitionMode": "blending"
 },
 {
  "borderRadius": 0,
  "backgroundOpacity": 0.55,
  "id": "veilPopupPanorama",
  "paddingLeft": 0,
  "minHeight": 0,
  "minWidth": 0,
  "paddingRight": 0,
  "backgroundColorRatios": [
   0
  ],
  "backgroundColorDirection": "vertical",
  "visible": false,
  "left": 0,
  "right": 0,
  "shadow": false,
  "class": "UIComponent",
  "paddingBottom": 0,
  "borderSize": 0,
  "top": 0,
  "bottom": 0,
  "paddingTop": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 350
  },
  "backgroundColor": [
   "#000000"
  ]
 },
 {
  "borderRadius": 0,
  "backgroundOpacity": 1,
  "id": "zoomImagePopupPanorama",
  "paddingLeft": 0,
  "minHeight": 0,
  "minWidth": 0,
  "paddingRight": 0,
  "backgroundColorRatios": [],
  "backgroundColorDirection": "vertical",
  "visible": false,
  "left": 0,
  "right": 0,
  "shadow": false,
  "class": "ZoomImage",
  "paddingBottom": 0,
  "borderSize": 0,
  "top": 0,
  "bottom": 0,
  "paddingTop": 0,
  "scaleMode": "custom",
  "backgroundColor": []
 },
 {
  "iconBeforeLabel": true,
  "fontStyle": "normal",
  "borderRadius": 0,
  "backgroundOpacity": 0.3,
  "id": "closeButtonPopupPanorama",
  "paddingLeft": 5,
  "minHeight": 0,
  "minWidth": 0,
  "verticalAlign": "middle",
  "iconColor": "#000000",
  "paddingRight": 5,
  "backgroundColorRatios": [
   0,
   0.09803921568627451,
   1
  ],
  "mode": "push",
  "textDecoration": "none",
  "pressedIconColor": "#888888",
  "rollOverIconColor": "#666666",
  "backgroundColorDirection": "vertical",
  "borderColor": "#000000",
  "fontWeight": "normal",
  "gap": 5,
  "visible": false,
  "iconHeight": 20,
  "right": 10,
  "horizontalAlign": "center",
  "layout": "horizontal",
  "iconWidth": 20,
  "shadow": false,
  "shadowBlurRadius": 6,
  "cursor": "hand",
  "class": "CloseButton",
  "paddingBottom": 5,
  "borderSize": 0,
  "fontSize": 12,
  "top": 10,
  "fontFamily": "Arial",
  "fontColor": "#FFFFFF",
  "paddingTop": 5,
  "shadowColor": "#000000",
  "shadowSpread": 1,
  "iconLineWidth": 5,
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 350
  },
  "label": "",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 }
], 
 "borderRadius": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundPreloadEnabled": true,
 "paddingLeft": 0,
 "minHeight": 20,
 "height": "100%",
 "minWidth": 20,
 "verticalAlign": "top",
 "paddingRight": 0,
 "contentOpaque": false,
 "gap": 10,
 "horizontalAlign": "left",
 "layout": "absolute",
 "shadow": false,
 "class": "Player",
 "overflow": "visible",
 "paddingBottom": 0,
 "borderSize": 0,
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "mouseWheelEnabled": true,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "scripts": {
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var i = 0, count = audios.length; i<count; i++){       audios[i].play();   } },
  "existsKey": function(key){    return key in window; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var rollOutFunction = function(){       var rollOverFunction = function(){           clearTimeout(timeoutID);           dispose();       };       var timeoutFunction = function(){           setVisibility(false);           dispose();       };       var dispose = function(){           parentComponent.unbind('rollOver', rollOverFunction, this);       };       parentComponent.unbind('rollOut', rollOutFunction, this);       parentComponent.bind('rollOver', rollOverFunction, this);       var timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);   };   var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   parentComponent.bind('rollOut', rollOutFunction, this);   setVisibility(true); },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && typeof player.resumeCamera !== 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   playList.bind('change', changeFunction, this);   this.playGlobalAudio(audio, endCallback); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){    var self = this;   var showEndFunction = function() {       var loadedFunction = function(){           if(!self.isCardboardVideMode())               popupPanoramaOverlay.set('visible', false);       };       popupPanoramaOverlay.unbind('showEnd', showEndFunction, self);       popupPanoramaOverlay.set('showDuration', 1);       popupPanoramaOverlay.set('hideDuration', 1);       self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction);   };   var hideFunction = function() {       var restoreShowDurationFunction = function(){           popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self);           popupPanoramaOverlay.set('visible', false);           popupPanoramaOverlay.set('showDuration', showDuration);           popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup);           popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup);       };       self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio);       var currentWidth = zoomImage.get('imageWidth');       var currentHeight = zoomImage.get('imageHeight');       popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true);       popupPanoramaOverlay.set('showDuration', 1);       popupPanoramaOverlay.set('hideDuration', hideDuration);       popupPanoramaOverlay.set('popupMaxWidth', currentWidth);       popupPanoramaOverlay.set('popupMaxHeight', currentHeight);       if(popupPanoramaOverlay.get('visible'))           restoreShowDurationFunction();       else           popupPanoramaOverlay.set('visible', true);   };   if(!imageHD){       imageHD = popupPanoramaOverlay.get('image');   }   if(!toggleImageHD && toggleImage){       toggleImageHD = toggleImage;   }   var zoomImage = this.zoomImagePopupPanorama;   var showDuration = popupPanoramaOverlay.get('showDuration');   var hideDuration = popupPanoramaOverlay.get('hideDuration');   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth');   var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight');   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "isCardboardVideMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getKey": function(key){    return window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "syncPlaylists": function(playLists){    var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var i = 0, count = audios.length; i<count; i++){       audios[i].pause();   } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       if(!self.isCardboardVideMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       resumeFunction(caller);   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "registerKey": function(key, value){    window[key] = value; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "unregisterKey": function(key){    delete window[key]; },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = [audio];   }   else if(audios.indexOf(audio) == -1){       audios.push(audio);   }   audio.bind('end', endFunction, this);   audio.play(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && typeof player.pauseCamera !== 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       var index = audios.indexOf(audio);       if(index != -1){           audios.splice(index, 1);       }   }   audio.stop(); }
 }
})