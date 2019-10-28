/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2018/11/01/malang/index.html",
    "revision": "8145c3ec24b08e8e897a09ff134c0450"
  },
  {
    "url": "2018/11/02/batu/index.html",
    "revision": "0fe2c51e25b1053fb40d222f1141152d"
  },
  {
    "url": "404.html",
    "revision": "9bc6b56e88076cbc0999e59f58115d31"
  },
  {
    "url": "blog/index.html",
    "revision": "b1c4e013af1984e88a6bbc82dbfbc117"
  },
  {
    "url": "data-faq/1-faq/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-faq/2-faq/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-faq/3-faq/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-faq/4-faq/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-faq/5-faq/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-faq/6-faq/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-gallery/gallery-1/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-gallery/gallery-2/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-gallery/gallery-3/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-gallery/gallery-4/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-gallery/gallery-5/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-gallery/gallery-6/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-instagram/ig-1/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-instagram/ig-2/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-instagram/ig-3/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-instagram/ig-4/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-instagram/ig-5/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-instagram/ig-6/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-instagram/ig-7/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-instagram/ig-8/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-instagram/ig-9/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-paket-wisata/1-open-trip-thailand.html",
    "revision": "6be1f3e7bd80cf92f9b4ffbac0c7499c"
  },
  {
    "url": "data-paket-wisata/2-gili-ketapang.html",
    "revision": "5087a00bdb5c9f8a1d177a022371ee63"
  },
  {
    "url": "data-products/1-mobilio/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-products/2-new-avanza/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-products/3-new-xenia/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-products/4-ertiga/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-products/5-kijang-inova-reborn/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-products/6-hiace/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-products/7-isuzu-elf/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-products/8-honda-brio/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-products/9-mitsubishi-ss-truck/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-slider/slider-1/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-slider/slider-2/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-slider/slider-3/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "favicon.ico",
    "revision": "1b82aae681286bb341852d4921078690"
  },
  {
    "url": "feed.xml",
    "revision": "0fbc758234aed6067ee9cb8cabeb21ce"
  },
  {
    "url": "gallery/index.html",
    "revision": "97156ad0c75f69af7c528f6362f89ba7"
  },
  {
    "url": "google80eb15f70004671a.html",
    "revision": "2c06e59ed42caa2f9c628716dd34fc23"
  },
  {
    "url": "harga-sewa/index.html",
    "revision": "eba43a7736cd58e9269f6acf1f11076f"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "1599496a7a15aa396c5cb7865f17fb47"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "3d5d6a76a5d9cba435dac4c1217483ac"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "7049e5249ad76df868d85da5159bd47b"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "248326e15cda2c429981e2acc891dc6a"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "633c5f80cd083f7ba62c696699ae5de1"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "d7ea397a42f829ace1301cd470b44092"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "951aac26f96434af5223b109ec594274"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "8ef8c8055a7a33af6df3c806e4e4419a"
  },
  {
    "url": "img/1-mobilio.png",
    "revision": "59e3228b6a5456eef8bbafbb2a3d5350"
  },
  {
    "url": "img/2-new-avanza.png",
    "revision": "e79ad8a4135cf4adeb284dfc498abb5b"
  },
  {
    "url": "img/3-new-xenia.png",
    "revision": "fa0a9d521d8d401fe7b170f1fc86d5b0"
  },
  {
    "url": "img/4-all-new-ertiga.png",
    "revision": "f69609dec5ab0ef0c9dd81dba735c84b"
  },
  {
    "url": "img/5-kijang-innova-reborn.png",
    "revision": "fc2d098cdc55eba5c2490042b36bd793"
  },
  {
    "url": "img/6-isuzu-elf-NLR55B.png",
    "revision": "0d26badb15f9fdd8ef2f38f59ab19f91"
  },
  {
    "url": "img/7-hiace.png",
    "revision": "5469df34810d12769b8df6a18759a395"
  },
  {
    "url": "img/8-honda-brio.png",
    "revision": "7911fa92e74fb5c1d758d154c7bfa0d4"
  },
  {
    "url": "img/9-mitsubishi-ss-truck.png",
    "revision": "aef446548ca725909983b610e91ec245"
  },
  {
    "url": "img/automobile.png",
    "revision": "92f495a188e5203923854e438eb84e7c"
  },
  {
    "url": "img/background-2.webp",
    "revision": "9a87d67ed65efe4e968a5a2513b77ba9"
  },
  {
    "url": "img/background.webp",
    "revision": "eb5bea2587b5861abb91204df592791e"
  },
  {
    "url": "img/calendar.png",
    "revision": "d3534e9d2f20dc399af119e17dbe3298"
  },
  {
    "url": "img/call.png",
    "revision": "7c384c93479defbf7c21363741b36d7b"
  },
  {
    "url": "img/cash.png",
    "revision": "8d69b60c1367c85e354922cf19e6389c"
  },
  {
    "url": "img/close.svg",
    "revision": "3360c57cdbbebca82e3a792f0a57876c"
  },
  {
    "url": "img/contacts.png",
    "revision": "e4231cc9871db4643d5d34f0ab0bc18b"
  },
  {
    "url": "img/FAQ.png",
    "revision": "89a5bf344208cee5f2771c8d16900822"
  },
  {
    "url": "img/gallery-1.webp",
    "revision": "9f3681613e03f0f71229b6596d3c34dd"
  },
  {
    "url": "img/gallery-2.webp",
    "revision": "7228a0ca35cceed28471efaa0d319b81"
  },
  {
    "url": "img/gallery-3.webp",
    "revision": "45ad8613555f579e28bbe6d6324783c7"
  },
  {
    "url": "img/gallery-4.webp",
    "revision": "0831dc9801e48f4282ee03fbdc0a3185"
  },
  {
    "url": "img/gallery-5.webp",
    "revision": "4ff3c408f59e980ed2b632b79b05512e"
  },
  {
    "url": "img/gallery-6.webp",
    "revision": "d1789914bc48e12270fba01f04eaa013"
  },
  {
    "url": "img/gili-ketapang.jpg",
    "revision": "0dbf02eeeae7bd29455e5dad2bbdace4"
  },
  {
    "url": "img/house.png",
    "revision": "2908b5909999bb91b067800cbcf3cfc9"
  },
  {
    "url": "img/klikada-panjang.svg",
    "revision": "fa27eef4158316cefa33e89dbfc29f4b"
  },
  {
    "url": "img/logo-tulungagung-trans.png",
    "revision": "e6a3b0c3a258c1e99a7d2de5f62a2cce"
  },
  {
    "url": "img/map.png",
    "revision": "7f5c0c05c999f61f001581898159d744"
  },
  {
    "url": "img/menu.svg",
    "revision": "a833de9795cac2a5d2031a39af727844"
  },
  {
    "url": "img/news.png",
    "revision": "a66ee4b66bcc76b2dfe78411f81bfe52"
  },
  {
    "url": "img/open-trip-thailand.jpg",
    "revision": "7c5505d825d371932eaf53793406a767"
  },
  {
    "url": "img/phones-symbol.svg",
    "revision": "f16134d24c95484a04754e56c6b0986c"
  },
  {
    "url": "img/price-tag.png",
    "revision": "a1b83faa63117b48805ae469502df702"
  },
  {
    "url": "img/product-features.png",
    "revision": "cbcdd56e5042439cec35c2be2b0e668e"
  },
  {
    "url": "img/slider-1.jpg",
    "revision": "e655f61be9114674d08666f81ee195b9"
  },
  {
    "url": "img/slider-2.jpg",
    "revision": "269638a5c2c822608c376b032c432a8f"
  },
  {
    "url": "img/slider-3.jpg",
    "revision": "2617810cbd9339cf787080932f0b75f8"
  },
  {
    "url": "img/sms.png",
    "revision": "633fbc2ce35abe1dbbe936b613eaeec9"
  },
  {
    "url": "img/sms.svg",
    "revision": "878cb683823bc63731f8ef65323abc48"
  },
  {
    "url": "img/whatsapp.svg",
    "revision": "47c77bf133116ff76838809ae5d2c83a"
  },
  {
    "url": "index.html",
    "revision": "ca4a6babf42bdba8197bfb3acfaf4ecc"
  },
  {
    "url": "lib/font-awesome/css/font-awesome.css",
    "revision": "c495654869785bc3df60216616814ad1"
  },
  {
    "url": "lib/font-awesome/css/font-awesome.min.css",
    "revision": "269550530cc127b6aa5a35925a7de6ce"
  },
  {
    "url": "lib/font-awesome/fonts/fontawesome-webfont.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "lib/font-awesome/fonts/fontawesome-webfont.svg",
    "revision": "912ec66d7572ff821749319396470bde"
  },
  {
    "url": "lib/font-awesome/fonts/fontawesome-webfont.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "lib/font-awesome/fonts/fontawesome-webfont.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "lib/font-awesome/fonts/fontawesome-webfont.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "lib/font-awesome/fonts/FontAwesome.otf",
    "revision": "0d2717cd5d853e5c765ca032dfd41a4d"
  },
  {
    "url": "lib/ionicons/css/ionicons.css",
    "revision": "f27354b28af3cf48d28260c03305d0ce"
  },
  {
    "url": "lib/ionicons/css/ionicons.min.css",
    "revision": "0d6763b67616cb9183f3931313d42971"
  },
  {
    "url": "lib/ionicons/fonts/ionicons.eot",
    "revision": "2c2ae068be3b089e0a5b59abb1831550"
  },
  {
    "url": "lib/ionicons/fonts/ionicons.svg",
    "revision": "621bd386841f74e0053cb8e67f8a0604"
  },
  {
    "url": "lib/ionicons/fonts/ionicons.ttf",
    "revision": "24712f6c47821394fba7942fbb52c3b2"
  },
  {
    "url": "lib/ionicons/fonts/ionicons.woff",
    "revision": "05acfdb568b3df49ad31355b19495d4a"
  },
  {
    "url": "manifest.json",
    "revision": "9012aded264bc9841426e975f086bc6f"
  },
  {
    "url": "paket-wisata/index.html",
    "revision": "0d3a2c5e76241687bfcf0d24698678d8"
  },
  {
    "url": "robots.txt",
    "revision": "3eb4b8add153ba9719324335c7c02076"
  },
  {
    "url": "sitemap.xml",
    "revision": "e8d082b5b477b055eb3520dc65bc348f"
  },
  {
    "url": "sw.html",
    "revision": "9ddb3c30045037e3f8d7c4c5810a4386"
  },
  {
    "url": "workbox-config.js",
    "revision": "ebff98811829046bed5d593d31e27196"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
