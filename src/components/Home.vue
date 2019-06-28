<template>
    <div>
        <!-- Header -->
        <div id="home-header" class="home-site-header is-sticky">

            <!-- Navbar -->
            <div class="navbar navbar-expand-lg is-transparent" id="mainnav">
                <nav class="container" id="navv">
                    <a class="navbar-brand " @click="toPage('/')" href="">
                        <img id="logoAsani" class="logo logo-dark" alt="logo" src="~@/assets/images/asani_blue.png" srcset="~@/assets/images/asani_blue.png">
                        <!-- <img class="logo logo-light" alt="logo" src="~@/assets/images/logo-full-white.png" srcset="images/logo-full-white2x.png 2x"> -->
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" @click="navClick()">
                        <span class="navbar-toggler-icon">
                        <span class="ti ti-align-justify " id="nav-tog"></span>
                        </span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarToggle">
                        <ul class="navbar-nav">
                            <li><a class="nav-link menu-link non-underline nav-text-bantuan text-white" href="https://pulsa.asani.co.id" @click="trackPage('', 'Header-pulsa')"><i class="fas fa-mobile-alt" aria-hidden="true" style="margin-right: 5px;"></i>Pulsa</a></li>
                            <li><a class="nav-link menu-link non-underline nav-text-bantuan text-white" href="" @click="trackPage('/bantuan', 'Header-bantuan')"><i class="fa fa-question-circle" aria-hidden="true" style="margin-right: 5px;"></i>Bantuan</a></li>
                            <li v-if="!alreadyLogin"><a id="btn-masuk-login" class="nav-link menu-link non-underline nav-text-bantuan text-white" data-toggle="modal" data-target="#modal-masuk" @click="cekModal()" data-backdrop="static" data-keyboard="false"><i class="fas fa-sign-in-alt login" aria-hidden="true" style="margin-right: 5px;"></i>Masuk / Daftar</a></li>
                            <li v-if="alreadyLogin"><a id="btn-masuk-login" class="nav-link menu-link non-underline nav-text-bantuan text-white" @click="handleLogout"><i class="fas fa-sign-out-alt" aria-hidden="true" style="margin-right: 5px;"></i>Keluar</a></li>
                            <!-- <li><a class="nav-link menu-link non-underline nav-text-bantuan text-white" data-toggle="modal" data-target="#modal-masuk"><i class="fas fa-shopping-cart" aria-hidden="true" style="margin-right: 5px;"></i>Keranjang (0)</a></li> -->
                        </ul>
                    </div>
                </nav>
            </div>
            <!-- End Navbar -->

        </div>

        <div class="">
            <!-- Banner/Slider -->
        </div>
        <div class="banner banner-salvia">
            <div class="container">
                <div class="banner-content">
                    <div class="row align-items-center justify-content-center justify-content-lg-between text-center">
                        <div class="col-lg-12 col-xl-12 res-m-bttm-lg text-center text-lg-center header-text-laptop">
                            <div class="header-txt">
                                <img class="logo" alt="logo" src="~@/assets/images/asani_white.png" srcset="~@/assets/images/asani_white.png" style="max-height: 50px;">
                                <h2 class="s_modern">Sewa Elektronik Untuk Kantor Atau Beli Laptop Bekas Untuk Sendiri? Asani Aja!</h2>
                                <ul v-if="buyAvailable" class="btns" style="padding-right: 0px; padding-left: 0px;">
                                    <li><a id="" @click="toAllSmartphone()" class="btn btn-see-all-product non-underline" style="margin-right: 10px;width: 120px">Sewa</a>
                                        <a id="" @click="toBuyProduct()" class="btn btn-see-all-product non-underline" style="width: 120px; margin-left: 10px;">Beli</a>
                                    </li>
                                </ul>
                                <ul v-else class="btns" style="padding-right: 24px;">
                                    <li><a id="" @click="toAllSmartphone()" class="btn btn-see-all-product non-underline">Sewa</a>
                                    </li>
                                </ul>
                                <div class="gaps size-2x"></div>
                            </div>
                        </div>
                    </div>
                    <!-- .row  -->
                </div>
                <!-- .banner-content  -->
            </div>
            <!-- .container  -->
        </div>
        <!-- Start Section -->
        <div class="section section-pad section-bg-alt" id="about" style="padding-top: 50px; padding-bottom: 0px; background:#fff">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12 order-lg-first">
                        <div class="text-block">
                            <h2>Terbaru di Asani</h2>
                        </div>
                        <div class="gaps size-1x"></div>
                        <carousel :margin=5 :nav="false" :autoplay="true" :autoplayTimeout="5000" :autoplayHoverPause="true" :loop="true" :center="true" :responsive="{1200:{items:3},992:{items:1.1,loop:true,center:true},0:{items:1.1,loop:true,center:true}}">
                            <img :src="banners[0].image_url" class="banner_image">
                            <img :src="banners[1].image_url" class="banner_image">
                            <img :src="banners[2].image_url" class="banner_image">
                        </carousel>
                    </div>
                </div>
            </div>

        </div>
        <!-- End Section -->
        <div class="section section-pad-sm section-bg-alt nopb" style="background:#fff">
            <div class="container banner-image">
                <div class="row justify-content-center text-center">
                    <div class="col-lg-12 col-md-12">
                        <div class="section-head-s8-enjoy">
                            <span class="text-enjoy">Nikmati berbagai kemudahan beli dan sewa di Asani</span>
                            <p class="text-rent-the-new">Beli dan sewa berbagai pilihan produk dengan harga menarik dan pelayanan terbaik hanya di Asani</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row container justify-content-center" style="padding-top: 30px; padding-bottom: 0px;">
                <div class="col-lg-3 col-md-6 item-spacing-four">
                    <div middle-banner="" class="item_top">
                        <div middle-banner="" class="item-img-text ">
                            <img middle-banner="" src="~@/assets/images/icon/ad_1.png" class="lazyImage img-respon icon_nikmati" data-loaded="true" alt="icon">
                            <span class="flex-hp my-auto text-nikmati"> Beragam Pilihan Produk </span>
                        </div>
                        <div class="speciali text-justify"> <span> Tersedia berbagai pilihan kategori dan produk elektronik kantor dengan harga fixed yang bersaing. </span></div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 item-spacing-four">
                    <div middle-banner="" class="item_top">
                        <div middle-banner="" class="item-img-text ">
                            <img middle-banner="" src="~@/assets/images/icon/ad_2.png" class="lazyImage img-respon icon_nikmati" data-loaded="true" alt="icon">
                            <span class="flex-hp my-auto text-nikmati"> Dapatkan Kondisi Terbaik </span>
                        </div>
                        <div class="speciali text-justify"> <span> Buang keraguan dengan mendatangi kantor Asani dan periksa sendiri kondisi laptop yang Anda impikan. </span></div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 item-spacing-four">
                    <div middle-banner="" class="item_top">
                        <div middle-banner="" class="item-img-text ">
                            <img middle-banner="" src="~@/assets/images/icon/ad_3.png" class="lazyImage img-respon icon_nikmati" data-loaded="true" alt="icon">
                            <span class="flex-hp my-auto text-nikmati"> Proses Mudah dan Aman </span>
                        </div>
                        <div class="speciali text-justify"> <span>  Asani yang telah terdaftar di KOMINFO selalu berusaha memberikan proses beli dan sewa yang mudah dan aman. </span></div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 item-spacing-four">
                    <div middle-banner="" class="item_top">
                        <div middle-banner="" class="item-img-text ">
                            <img middle-banner="" src="~@/assets/images/icon/ad_4.png" class="lazyImage img-respon icon_nikmati" data-loaded="true" alt="icon">
                            <span class="flex-hp my-auto text-nikmati"> Disediakan Cadangan</span>
                        </div>
                        <div class="speciali text-justify"> <span>  Layanan bantuan Asani mulai dari instalasi software sampai perbaikan dan penggantian perangkat. </span></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Section -->

        <!-- Start Section -->
        <div class="section section-pad section-bg-alt" id="pilih_smartphone" style="padding-top: 30px; padding-bottom: 20px; background:#fff">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12 order-lg-first">
                        <div class="row">
                            <div class="col-lg-9 order-lg-first">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="text-block">
                                            <h3>Pilih Kategori dan Produk Sesuai Kebutuhanmu</h3>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="text-block">
                                            <p>Tersedia PC, Laptop, Monitor, Printer, dan berbagai perangkat elektronik kantor lainnya.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 order-lg-first">
                                <!-- <ul class="btns">
                                <li><a href="#" class="btn btn-outline btn-light" style="color: #0009;">See All Products</a></li>
                            </ul> -->
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 order-lg-first">
                        <div class="text-block" style="padding-top: 15px">
                            <h3>Kategori Sewa</h3>
                        </div>
                        <div class="row">
                            <div v-for="product in products" class="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 mobile">
                                <div class="row">
                                    <div class="col-lg-12 text-center">
                                        <img :src="product.urlProductImg" alt="icon">
                                    </div>
                                    <div class="col-lg-12 nama-produk">
                                        <p>{{ product.productTitle }}</p>
                                    </div>
                                    <div class="col-lg-12 nama-produk">
                                        <p>{{ product.productProcessor }} / {{ product.productRam }} / {{ product.productHdd }}</p>
                                    </div>
                                    <div class="col-lg-12 mulai-dari">
                                        <p>Biaya Sewa</p>
                                    </div>
                                    <div class="col-lg-12 harga">
                                        <p style="color: #e9007f;">Rp. {{ formatPrice(product.feeRent) }}</p>
                                    </div>
                                    <div class="col-lg-12">
                                        <button class="btn btn-detail" @click="toProductPage(product.productSlug, product.productId, 2)"> Lihat Detail
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="pilih_beli" style="padding: 0px; margin: 0px"></div>
        </div>
        <!-- End Section -->

        <!-- Start Section -->
        <div class="section section-pad section-bg-alt" v-if="buyAvailable" style="padding-bottom: 20px; padding-top: 0px; background:#fff">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12 order-lg-first">
                        <div class="text-block" style="padding: 15px 0px">
                            <h3>Kategori Beli</h3>
                        </div>
                        <div class="col-lg-12 order-lg-first">
                            <div class="row">
                                <div class="desktop-carousel-home">
                                    <Carousel style="max-width:100%; margin: 0px 40px;" :per-page=4 :autoplay=true :centerMode=true :paginationEnabled=false :navigationEnabled=true navigationNextLabel="<img src='/static/Rental-NEW/assets/images/right-arrow2.png'></div>" navigationPrevLabel="<img src='/static/Rental-NEW/assets/images/left-arrow2.png'></div>" :loop=true :autoplayTimeout=5000>
                                        <Slide v-for="(product, index) in buyProducts" :key="index" style="flex: 0 0 25%; max-width: 25%;">
                                            <div class="col-lg-12 text-center">
                                                <img :src="product.urlProductImg" alt="icon">
                                            </div>
                                            <div class="col-lg-12 nama-produk">
                                                <p>{{ product.productTitle }}</p>
                                            </div>
                                            <div class="col-lg-12 nama-produk">
                                                <p>{{ product.productProcessor }} / {{ product.productRam }} / {{ product.productHdd }}</p>
                                            </div>
                                            <div class="col-lg-12 mulai-dari">
                                                <p>Harga</p>
                                            </div>
                                            <div class="col-lg-12 harga">
                                                <p style="color: #e9007f; max-width: 100%">Rp. {{ formatPrice(product.productPrice) }}</p>
                                            </div>
                                            <div class="col-lg-12">
                                                <button class="btn btn-detail" @click="toBuyProductPage(product.productSlug, product.productId, 2)"> Lihat Detail
                                                </button>
                                            </div>
                                        </Slide>
                                    </Carousel>
                                </div>
                                <div class="two-carousel-home">
                                    <Carousel style="max-width:100%; margin: 0px 40px;" :per-page=2 :autoplay=true :centerMode=true :paginationEnabled=false :navigationEnabled=true navigationNextLabel="<img src='/static/Rental-NEW/assets/images/right-arrow2.png'></div>" navigationPrevLabel="<img src='/static/Rental-NEW/assets/images/left-arrow2.png'></div>" :loop=true :autoplayTimeout=5000>
                                        <Slide v-for="(product, index) in buyProducts" :key="index" style="flex: 0 0 50%; max-width: 50%;">
                                            <div class="col-lg-12 text-center">
                                                <img :src="product.urlProductImg" alt="icon">
                                            </div>
                                            <div class="col-lg-12 nama-produk">
                                                <p>{{ product.productTitle }}</p>
                                            </div>
                                            <div class="col-lg-12 nama-produk">
                                                <p>{{ product.productProcessor }} / {{ product.productRam }} / {{ product.productHdd }}</p>
                                            </div>
                                            <div class="col-lg-12 mulai-dari">
                                                <p>Harga</p>
                                            </div>
                                            <div class="col-lg-12 harga">
                                                <p style="color: #e9007f; max-width: 100%">Rp. {{ formatPrice(product.productPrice) }}</p>
                                            </div>
                                            <div class="col-lg-12">
                                                <button class="btn btn-detail" @click="toBuyProductPage(product.productSlug, product.productId, 2)"> Lihat Detail
                                                </button>
                                            </div>
                                        </Slide>
                                    </Carousel>
                                </div>
                                <div class="mobile-carousel-home">
                                    <carousel :margin=5 :nav="false" :autoplay="true" :autoplayTimeout="5000" :autoplayHoverPause="true" :items="2">
                                        <div v-for="(product, index) in buyProducts" :key="index">
                                            <div class="body-beli" style="max-width: 200px">
                                                <div class="col-lg-12 text-center">
                                                    <img :src="product.urlProductImg" alt="icon" style="max-width: 200px">
                                                </div>
                                                <div class="col-lg-12 nama-produk">
                                                    <p>{{ product.productTitle }}</p>
                                                </div>
                                                <div class="col-lg-12 nama-produk">
                                                    <p>{{ product.productProcessor }} / {{ product.productRam }} / {{ product.productHdd }}</p>
                                                </div>
                                                <div class="col-lg-12 mulai-dari">
                                                    <p>Harga</p>
                                                </div>
                                                <div class="col-lg-12 harga">
                                                    <p style="color: #e9007f; max-width: 100%">Rp. {{ formatPrice(product.productPrice) }}</p>
                                                </div>
                                                <div class="col-lg-12">
                                                    <button class="btn btn-detail" @click="toBuyProductPage(product.productSlug, product.productId, 2)" style="max-width: 200px"> Lihat Detail
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </carousel>
                                    <!-- <Carousel class="content-beli" :per-page=2 :autoplay=true :centerMode=false :paginationEnabled=false :navigationEnabled=false navigationNextLabel="<img src='/static/Rental-NEW/assets/images/right-arrow2.png'></div>" navigationPrevLabel="<img src='/static/Rental-NEW/assets/images/left-arrow2.png'></div>" :loop=true :autoplayTimeout=5000>
                                        <Slide v-for="(product, index) in buyProducts" :key="index" style="flex: 0 0 50%; max-width: 50%; padding:0px; margin: 0px;">
                                            <div v-if="oddBuyProducts && index === buyProductsLength" class="body-beli">
                                                <div class="col-lg-12 text-center">
                                                </div>
                                                <div class="col-lg-12 nama-produk">
                                                    <p></p>
                                                </div>
                                                <div class="col-lg-12 nama-produk">
                                                    <p></p>
                                                </div>
                                                <div class="col-lg-12 mulai-dari">
                                                    <p></p>
                                                </div>
                                                <div class="col-lg-12 harga">
                                                    <p style="max-width: 100%"></p>
                                                </div>
                                                <div class="col-lg-12">
                                                    <button class="btn btn-detail btn-beli-lihat-detail" disabled style="background-color: white; box-shadow: none;"></button>
                                                </div>
                                            </div>
                                            <div v-else class="body-beli">
                                                <div class="col-lg-12 text-center">
                                                    <img :src="product.urlProductImg" alt="icon">
                                                </div>
                                                <div class="col-lg-12 nama-produk">
                                                    <p>{{ product.productTitle }}</p>
                                                </div>
                                                <div class="col-lg-12 nama-produk">
                                                    <p>{{ product.productProcessor }} / {{ product.productRam }} / {{ product.productHdd }}</p>
                                                </div>
                                                <div class="col-lg-12 mulai-dari">
                                                    <p>Harga</p>
                                                </div>
                                                <div class="col-lg-12 harga">
                                                    <p style="color: #e9007f; max-width: 100%">Rp. {{ formatPrice(product.productPrice) }}</p>
                                                </div>
                                                <div class="col-lg-12">
                                                    <button class="btn btn-detail btn-beli-lihat-detail" @click="toBuyProductPage(product.productSlug, product.productId, 2)"> Lihat Detail
                                                    </button>
                                                </div>
                                            </div>
                                        </Slide>
                                    </Carousel> -->
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Section -->

        <!-- Start Section -->
        <div class="section section-pad-sm section-bg-alt" id="about" style="background:#fff;">
            <div class="container">
                <section middle-banner="" class="item_how_to row box">
                    <div middle-banner="" class="banner_container mobile-bottom">
                        <h2 class="title-mau">Cara belinya gampang banget!</h2>
                        <div middle-banner="" class="bannerr ban-left">
                            <div middle-banner="" class="item justify-content-center">
                                <div middle-banner="" class="item-img">
                                    <img middle-banner="" src="~@/assets/images/icon/beli_1_pilih_barang.png" class="lazyImage img-respon-bottom" data-loaded="true" alt="icon">
                                </div>
                                <div class="speciali"> <span> Pilih Barang </span></div>
                            </div>
                            <div middle-banner="" class="item">
                                <div middle-banner="" class="item-img ">
                                    <img middle-banner="" src="~@/assets/images/icon/beli_2_isi_detail.png" class="lazyImage img-respon-bottom" data-loaded="true">
                                </div>
                                <div class="speciali"> <span> Isi Detail Pembelian </span></div>
                            </div>
                            <div middle-banner="" class="item">
                                <div middle-banner="" class="item-img ">
                                    <img middle-banner="" src="~@/assets/images/icon/beli_3_transaksi_kondisi.png" class="lazyImage img-respon-bottom" data-loaded="true">
                                </div>
                                <div class="speciali"> <span> Kunjungi dan Periksa </span></div>
                            </div>
                            <div middle-banner="" class="item" style="padding-right: 10px;">
                                <div middle-banner="" class="item-img ">
                                    <img middle-banner="" src="~@/assets/images/icon/beli_4_nikmati_barang.png" class="lazyImage img-respon-bottom" data-loaded="true">
                                </div>
                                <div class="speciali"> <span> Nikmati Barang </span></div>
                            </div>
                        </div>
                    </div>
                    <div middle-banner="" class="banner_container mobile-bottom">
                        <h2 class="title-mau cara-left">Cara sewanya gampang banget!</h2>
                        <div middle-banner="" class="bannerr ban-right">
                            <div middle-banner="" class="item justify-content-center">
                                <div middle-banner="" class="item-img">
                                    <img middle-banner="" src="~@/assets/images/icon/sewa_1_ajukan_sewa.png" class="lazyImage img-respon-bottom" data-loaded="true" alt="icon">
                                </div>
                                <div class="speciali"> <span> Ajukan Sewa </span></div>
                            </div>
                            <div middle-banner="" class="item">
                                <div middle-banner="" class="item-img ">
                                    <img middle-banner="" src="~@/assets/images/icon/sewa_2_bayar_sewa.png" class="lazyImage img-respon-bottom" data-loaded="true">
                                </div>
                                <div class="speciali"> <span> Bayar Biaya Bulanan </span></div>
                            </div>
                            <div middle-banner="" class="item">
                                <div middle-banner="" class="item-img ">
                                    <img middle-banner="" src="~@/assets/images/icon/sewa_3_nikmati_sewa.png" class="lazyImage img-respon-bottom" data-loaded="true">
                                </div>
                                <div class="speciali"> <span> Nikmati Barang </span></div>
                            </div>
                            <div middle-banner="" class="item" style="padding-right: 10px;">
                                <div middle-banner="" class="item-img ">
                                    <img middle-banner="" src="~@/assets/images/icon/sewa_4_kembalikan_barang.png" class="lazyImage img-respon-bottom" data-loaded="true">
                                </div>
                                <div class="speciali"> <span> Kembalikan Barang </span></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <!-- Start Section -->
        <div class="section overlay-shape section-bg-salvia" style="
  background: #fff">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h1 class="text-merk">Merk Tersedia</h1>
                        <div class="container">
                            <div class="row text-center">
                                <div class="image-merk">
                                    <img src="~@/assets/images/icon/b_apple.png" class="lazyImage img-respon" data-loaded="true" alt="icon">
                                </div>
                                <div class="image-merk">
                                    <img middle-banner="" src="~@/assets/images/icon/b_asus.png" class="lazyImage img-respon" data-loaded="true" alt="icon">
                                </div>
                                <div class="image-merk">
                                    <img middle-banner="" src="~@/assets/images/icon/b_datalogic.png" class="lazyImage img-respon" data-loaded="true" alt="icon">
                                </div>
                                <div class="image-merk">
                                    <img middle-banner="" src="~@/assets/images/icon/b_dell.png" class="lazyImage img-respon" data-loaded="true" alt="icon">
                                </div>
                                <div class="image-merk">
                                    <img middle-banner="" src="~@/assets/images/icon/b_epson.png" class="lazyImage img-respon" data-loaded="true" alt="icon">
                                </div>
                                <div class="image-merk">
                                    <img middle-banner="" src="~@/assets/images/icon/b_hp.png" class="lazyImage img-respon" data-loaded="true" alt="icon">
                                </div>
                                <div class="image-merk">
                                    <img middle-banner="" src="~@/assets/images/icon/b_infocus.png" class="lazyImage img-respon" data-loaded="true" alt="icon">
                                </div>
                                <div class="image-merk">
                                    <img middle-banner="" src="~@/assets/images/icon/b_lenovo.png" class="lazyImage img-respon" data-loaded="true" alt="icon">
                                </div>
                                <div class="image-merk">
                                    <img middle-banner="" src="~@/assets/images/icon/b_lg.png" class="lazyImage img-respon" data-loaded="true" alt="icon">
                                </div>
                                <div class="image-merk">
                                    <img middle-banner="" src="~@/assets/images/icon/b_microvision.png" class="lazyImage img-respon" data-loaded="true" alt="icon">
                                </div>
                                <div class="image-merk">
                                    <img middle-banner="" src="~@/assets/images/icon/b_nec.png" class="lazyImage img-respon" data-loaded="true" alt="icon">
                                </div>
                                <div class="image-merk">
                                    <img middle-banner="" src="~@/assets/images/icon/b_panasonic.png" class="lazyImage img-respon" data-loaded="true" alt="icon">
                                </div>
                                <div class="image-merk">
                                    <img middle-banner="" src="~@/assets/images/icon/b_samsung.png" class="lazyImage img-respon" data-loaded="true" alt="icon">
                                </div>
                                <div class="image-merk">
                                    <img middle-banner="" src="~@/assets/images/icon/b_smartlogic.png" class="lazyImage img-respon" data-loaded="true" alt="icon">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- End Section -->

        <div class="section section-bg-salvia overlay-shape footer-section footer-salvia section-pad-sm" style="background-color: #ECF2FF;">
            <div class="container">
                <div class="row text-center text-sm-left">
                    <div class="col-lg-7">
                        <div class="widget-item">
                            <div class="widget-about">
                                <h5 class="widget-title">Tentang Asani</h5>
                                <p>
                                    PT Teknologi Skoring Nusantara (selanjutnya disebut Asani) adalah perusahaan yang menyediakan persewaan peralatan elektronik untuk kantor dan penjualan laptop bekas berkualitas dengan berbagai pilihan spesifikasi. Asani menyediakan berbagai pilihan laptop bekas yang telah melalui proses pemeriksaan kualitas demi kepuasan pelanggan, bahkan kami menyarankan agar pelanggan dapat bertemu terlebih dulu untuk memilih dan memeriksa langsung kondisi laptopnya.
                                    <br>
                                    <br> Asani menyadari banyak orang kreatif yang mempunyai ide bisnis namun keterbatasan investasi untuk memulai startup, sehingga Asani melahirkan fasilitas sewa dengan persyaratan mudah dan harga kompetitif agar ide startup dapat diwujudkan dengan biaya sewa peralatan kantor yang lebih murah dibanding membelinya. Beragam kebutuhan elektronik kantor seperti PC, Laptop Macbook, Monitor, Printer, dan Proyektor, dari merek Lenovo, Dell, HP hingga Apple tersedia dengan berbagai spesifikasi dan durasi yang dapat disesuaikan.
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- .col -->
                    <div class="col-lg-2 col-md-4 col-sm-5">
                        <div class="widget-item">
                            <h5 class="widget-title">Daftar Isi</h5>
                            <ul class="widget-list">
                                <li><a class="text-link" href="" @click="trackPage('', 'Footer-pulsa')" href="https://pulsa.asani.co.id"> Pulsa </a></li>
                                <li><a class="text-link" @click="trackPage('/bantuan', 'Footer-bantuan')" href=""> Bantuan </a></li>
                                <li><span class="text-link" @click="toAllSmartphone()"> Produk Tersedia </span></li>
                            </ul>
                        </div>
                    </div>
                    <!-- .col -->
                    <div class="col-lg-3 col-md-4 col-sm-3">
                        <div class="widget-item">
                            <h5 class="widget-title">Jejaring Sosial</h5>
                            <ul class="social-link-exp">
                                <li><a href="https://www.facebook.com/asani.co.id" @click="trackTag('Footer-facebook')" target="_blank"><i class="fab fa-facebook-square"></i></a></li>
                                <li><a href="https://www.instagram.com/asani.co.id/" @click="trackTag('Footer-instagram')" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                <li>
                                    <a href="https://pse.kominfo.go.id/sistem/1771" @click="trackTag('Footer-kominfo')" target="_blank"><img src="~@/assets/images/icon/kominfo.png" srcset="~@/assets/images/icon/kominfo.png" class="img-kominfo" alt="kominfo"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- .col -->
                </div>
                <!-- .row -->
                <div class="gaps size-1x d-none d-lg-block"></div>
                <div class="footer-bottom">
                    <ul class="footer-list text-center">
                        <li>&copy; 2019. PT Teknologi Skoring Nusantara</li>
                    </ul>
                </div>
            </div>
            <!-- .container -->
        </div>
        <!-- Modal @s LOGIN -->
        <div class="modal fade" id="modal-masuk">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <a href="#" class="modal-close btn-close-modal" data-dismiss="modal" aria-label="Close"><i class="fa fa-times"></i></a>
                    <div class="modal-body p-md-4 p-lg-5">
                        <center>
                            <h3 class="title title-md">Masuk / Daftar</h3></center>
                        <br>
                        <div class="row">
                            <div class="col-lg-12">
                                <!-- SEND OTP -->
                                <p style="margin-bottom: 5px; font-size: 0.9em;">Masukkan nomor ponsel kamu untuk mendapatkan OTP via SMS.</p>
                                <v-form v-if="!inputOtp" ref="formPhone" v-model="validPhone" lazy-validation>
                                    <v-flex>
                                        <v-text-field v-model="phone" type="number" placeholder="08XXXXXXXXXX" label="Masukkan Nomor Ponsel" :rules="phoneRules" required outline clearable></v-text-field>
                                    </v-flex>
                                    <a class="btn btn-masuk-login" @click="doSendOtp">Submit</a>

                                </v-form>
                                <!-- DO LOGIN -->
                                <v-form v-else ref="formOtp" v-model="validOtp" lazy-validation>
                                    <v-flex>
                                        <v-text-field v-model="otp" type="number" placeholder="XXXX" label="Masukkan OTP" :rules="otpRules" required outline clearable></v-text-field>
                                    </v-flex>
                                    <a class="btn btn-masuk-login" @click="doLogin">Submit</a>
                                    <div v-if="!resendSatuKali">
                                        <countdown :time="3 * 60 * 1000" @countdownend="countHabis" ref="countdown">
                                            <a v-if="!resend" class="btn btn-masuk-login mt-1 disabled" slot-scope="props">Re-send OTP in {{ props.minutes }}:{{ props.seconds }}</a>
                                            <a v-else class="btn btn-masuk-login mt-1" @click="doResendSendOtp">Re-send OTP</a>
                                        </countdown>
                                    </div>
                                </v-form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- .modal @e LOGIN -->
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel';
import {
    Carousel,
    Slide
} from 'vue-carousel';
export default {
    name: 'landing-page',
    components: {
        carousel,
        Carousel,
        Slide
    },
    data() {
        return {
            buyAvailable: false,
            oddBuyProducts: false,
            mobileBuyProducts: [],
            buyProducts: [],
            buyProductsLength: 0,
            tampilBanner: 0,
            tampilProduct: 0,
            products: [],
            banners: [],
            banner: null,
            dat: [],
            testimoni: [1],
            pageNo: 0,
            i: 0,
            mod: 0,
            test: [],
            jml: 0,
            tes: '',
            // LOGIN PROPERTIES
            alreadyLogin: false,
            inputOtp: false,
            resend: false,
            resendSatuKali: false,
            phone: '',
            otp: '',
            validPhone: true,
            validOtp: true,
            btnSendOtpClicked: false,
            btnLoginClicked: false,
            phoneRules: [
                v => !this.btnSendOtpClicked || !!v || 'Mohon diisi dengan benar',
                v => !this.btnSendOtpClicked || (v.length >= 8) || 'Minimal 8 karakter',
                v => !this.btnSendOtpClicked || (v.length <= 13) || 'Maksimal 13 karakter',
                v => !this.btnSendOtpClicked || (v.toString().substring(0, 2) == '08') || 'Diawali dengan 08',
            ],
            otpRules: [
                v => !this.btnLoginClicked || !!v || 'Mohon diisi dengan benar',
                v => !this.btnLoginClicked || (v.length >= 4) || 'Mohon diisi dengan benar',
                v => !this.btnLoginClicked || (v.length <= 4) || 'Mohon diisi dengan benar',
            ],

        }
    },

    computed: {},
    methods: {
        countHabis() {
            this.resend = true
        },
        doResendSendOtp() {
            this.resendSatuKali = true
            this.$ga.event('/homepage_rental', 'click_button', 'Re-send OTP', 1)
            this.$http.post(process.env.API_SEND_OTP_LAPTOP, {
                    phoneNumber: this.phone,
                })
                .then(response => {
                    if (response.data.status == 200) {
                        this.inputOtp = true
                    }
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        trackPage(e, f) {
            this.trackTag(f)
            this.$router.push(e)
        },
        trackTag(e) {
            this.$ga.event('/homepage_rental', 'click_button', e, 1)
        },
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        closeLoginModal() {
            $('#modal-masuk').modal('hide')
        },
        openLoginModal() {
            $("#modal-masuk").modal('show')
        },
        doSendOtp() {
            this.btnSendOtpClicked = true
            this.$ga.event('/homepage_rental', 'click_button', 'Submit Phone Number', 1)
            if (this.$refs.formPhone.validate()) {

                this.$http.post(process.env.API_SEND_OTP_LAPTOP, {
                        phoneNumber: this.phone,
                    })
                    .then(response => {
                        if (response.data.status == 200) {
                            this.inputOtp = true
                        }
                    })
                    .catch(function(error) {
                        console.log(error)
                    })
            }
        },
        doLogin() {
            this.btnLoginClicked = true
            this.$ga.event('/homepage_rental', 'click_button', 'Submit Otp Number', 1)
            if (this.$refs.formOtp.validate()) {
                let telp = this.phone.substring(1)

                this.$http.post(process.env.API_LOGIN, {
                        noHp: telp,
                        otp: this.otp,
                    })
                    .then(response => {
                        if (response.data.status == 200) {
                            localStorage.setItem('token', response.data.content.token)
                            localStorage.setItem('phoneNumber', this.phone)
                            this.closeLoginModal()
                            location.reload(true);
                        }

                    })
                    .catch(function(error) {
                        console.log(error)
                    })
            }

        },
        handleLogout() {
            this.$ga.event(window.location.pathname, 'click_button', 'Header-Keluar', 1)
            localStorage.removeItem('token')
            localStorage.removeItem('phoneNumber')
            location.reload(true)
        },
        resetLoginProp() {
            this.inputOtp = false
            this.otp = ''
            this.validPhone = true
            this.validOtp = true
            this.btnSendOtpClicked = false
            this.btnLoginClicked = false
        },
        isLogged() {
            this.alreadyLogin = localStorage.getItem('token') != null
            return this.alreadyLogin
        },
        pageChanged(e) {
            this.pageNo = e
        },
        formatPrice(value) {
            let val = (value)
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        toProductPage(e, f, g) {
            this.$ga.event('/homepage_rental', 'click_button', 'Sewa Detail', 1)
            this.$router.push('/product/' + e)
            localStorage.setItem('productId', f)
            localStorage.setItem('category', g)
        },
        toBuyProductPage(e, f, g) {
            this.$ga.event('/homepage_rental', 'click_button', 'Beli Lihat Detail', 1)
            this.$router.push('/product/' + e)
            localStorage.setItem('toBuyProduct', true)
            localStorage.setItem('productId', f)
            localStorage.setItem('category', g)
        },
        toPage(e) {
            this.$router.push(e)
        },
        toAllSmartphone() {
            this.$ga.event('/homepage_rental', 'click_button', 'Sewa', 1)
            $('html, body').animate({
                scrollTop: $("#pilih_smartphone").offset().top
            }, 2000);
        },
        toBuyProduct() {
            this.$ga.event('/homepage_rental', 'click_button', 'Beli', 1)
            $('html, body').animate({
                scrollTop: $("#pilih_beli").offset().top
            }, 2000);
        },
        navClick() {
            this.i = this.i + 1;
            this.mod = this.i % 2;
            if (this.mod == 1) {
                $("#home-header").addClass("has-fixed");
                $(".nav-text-bantuan").addClass("text-color-asani").removeClass("text-white");
                document.getElementById("logoAsani").style.display = "block";
                document.getElementById("nav-tog").style.color = "#2797FB";
            } else {
                if ($(window).scrollTop() < 1) {
                    $("#home-header").removeClass("has-fixed");
                    $(".nav-text-bantuan").removeClass("text-color-asani").addClass("text-white");
                    document.getElementById("logoAsani").style.display = "none";
                    document.getElementById("nav-tog").style.color = "#FFF";
                }
            }
        },
        click_btn_masuk() {
            document.body.style.padding = "0px";
        },

        cekModal() {
            this.$ga.event('/homepage_rental', 'click_button', 'Header-Masuk/Daftar', 1)
            $('#modal-masuk').on('shown.bs.modal', function() {
                document.body.style.padding = "0px"
                document.body.style.margin = "0px 0px"
            });
            if (!this.cekBrowser()) {
                document.body.style.margin = "0px -17px"
            }
        },
        cekBrowser() {
            var check = false;
            (function(a) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        },

    },
    created() {
        this.buyAvailable = false
        this.$ga.page({
            page: '/homepage_rental',
            title: 'Rental Home page',
            location: window.location.href
        })
        this.closeLoginModal()
        if (!this.isLogged()) {
            localStorage.clear()
        }
        this.scrollToTop()
        this.$http.post(process.env.API_ALL_PRODUCT_BELI, {
                page: 0
            })
            .then(response => {
                if (response.data.content.length > 0) {
                    this.buyAvailable = true
                    this.buyProducts = response.data.content
                    this.mobileBuyProducts = this.buyProducts
                    if (response.data.content.length %2 != 0){
                        this.buyProductsLength = this.buyProducts.length
                        this.oddBuyProducts = true
                        var dummy = response.data.content[0]
                        this.mobileBuyProducts.push(dummy)
                    }
                }
            })
            .catch(function(error) {
                console.log(error)
            })
        this.$http.post(process.env.API_ALL_PRODUCT, {
                page: 0
            })
            .then(response => {
                this.tampilProduct = 1
                this.products = response.data.content
            })
            .catch(function(error) {
                console.log(error)
            })
        this.$http.get(process.env.API_BANNER)
            .then(response => {
                this.banners = response.data.content
                this.jml = this.banners.length
                // for (this.idxBanner in this.banners) {
                //     var str = this.banners[this.idxBanner].image_url
                //     this.image_url = str.substring(6, str.length)
                //     this.test[this.idxBanner]='<img src="https:'+this.image_url+'" style="border-radius: 9.8px; max-height: 215px;">'
                // }
                this.tampilBanner = 1
                for (var i = 0; i < this.banners.length; i++) {
                    var str = this.banners[i].image_url
                    this.tes = str.substring(6, str.length)
                    this.image_url = str.substring(6, str.length)
                    this.test[i] = '<img src="https:' + this.image_url + '" style="border-radius: 9.8px; max-height: 215px;">'
                }
                // this.banners.push(response.data.content[0])
                // this.banners.push(response.data.content[1])
            })
            .catch(function(error) {
                console.log(error)
            })
    }
}

// $(window).resize(function(){
//   var right= $("#height-testi3").height();
//        console.log('yes')
//        $("#height-testi1").height(right);
//        $("#height-testi2").height(right);
//        // $("#height-testi3").height(right);
//        console.log(right)
// });

$(document).ready(function() {
    var i = 0;
    var mod = 0;
    var counter = 0;
    var id = "#height-testi";
    var right = $("#height-testi").count;

    $("#height-testi").each(function() {
        if (this.id == id) {
            counter += 1;
        }
    });

    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        responsiveClass: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        margin: 5,
        dots: true
    });

    $(function() {
        $(window).on("scroll", function() {
            if ($(window).scrollTop() > 1) {
                $("#home-header").addClass("has-fixed");
                $(".nav-text-bantuan").addClass("text-color-asani").removeClass("text-white");
                document.getElementById("logoAsani").style.display = "block";
                document.getElementById("nav-tog").style.color = "#2797FB";

            } else {
                //remove the background property so it comes transparent again (defined in your css)
                if (mod == 0) {
                    $("#home-header").removeClass("has-fixed");
                    $(".nav-text-bantuan").removeClass("text-color-asani").addClass("text-white");
                    document.getElementById("logoAsani").style.display = "none";
                    document.getElementById("nav-tog").style.color = "#FFF";
                }
            }
        });

        $(window).resize(function(){
            var all = getElementsByClassName('.owl-item');
            for (var i = 0; i < all.length; i++) {
                    all[i].style.color = 'red';
            }
            console.log('ini');
    });

    });
});
</script>

<style type="text/css">

.top_testi {
    min-width: 300px;
}


/*Start LOGIN POPUP*/

.btn-masuk-login {
    width: 100%;
    height: 40px;
    border-radius: 2px;
    padding: 10px;
}

.btn-masuk-login:hover {
    width: 100%;
    height: 40px;
    border-radius: 2px;
    padding: 10px;
    color: #fff;
}

.v-text-field--outline.v-input--has-state>.v-input__control>.v-input__slot,
.v-text-field--outline.v-input--is-focused>.v-input__control>.v-input__slot {
    border: 1px solid #efeff4;
    transition: border .3s cubic-bezier(.25, .8, .5, 1);
}

.v-text-field--outline.v-input--has-state>.v-input__control>.v-input__slot,
.v-text-field--outline.v-input--is-focused.v-input--is-dirty>.v-input__control>.v-input__slot {
    border: 1px solid red;
    transition: border .3s cubic-bezier(.25, .8, .5, 1);
}

.v-text-field--outline>.v-input__control>.v-input__slot,
.v-text-field--outline.v-input--has-state.error--text>.v-input__control>.v-input__slot {
    border: 1px solid red;
    transition: border .3s cubic-bezier(.25, .8, .5, 1);
}

.v-text-field--outline>.v-input__control>.v-input__slot,
.v-text-field--outline.v-input--is-label-active.v-input--is-focused.primary--text>.v-input__control>.v-input__slot {
    border: 1px solid #efeff4;
    transition: border .3s cubic-bezier(.25, .8, .5, 1);
}

.theme--light.v-text-field--outline>.v-input__control>.v-input__slot {
    border: 1px solid #efeff4;
}

.theme--light.v-text-field--outline:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot:hover {
    border: 1px solid #efeff4;
}

.theme--light.v-label {
    color: rgba(0, 0, 0, 0.5);
}

.theme--light.v-sheet {
    background-color: #fff;
    border-color: #fff;
    color: rgba(0, 0, 0, 0.87);
}

.v-text-field>.v-input__control>.v-input__slot:before {
    border-style: solid;
    border-width: thin 0 0 0;
    border-color: red;
}


/*End LOGIN POPUP*/

.image-merk {
    float: left;
    width: 14%;
    padding: 4px;
}

.icon_nikmati {
    height: 68px;
}

.text-nikmati {
    padding-left: 10px;
}

@media screen and (max-width: 768px) {
    .image-merk {
        float: left;
        width: 25%;
        padding: 4px;
    }
}

.mobile-carousel-home {}

.desktop-carousel-home {
    width: 100%;
}

.two-carousel-home {
    width: 100%;
}

.body-beli {
    padding: 0px;
    padding-right: 30px;
    margin: 30px;
}
.btn-beli-lihat-detail {

}

@media (max-width: 490px) {
    /*mobile*/
    .body-beli {
        padding: 0px;
        padding-right: 10px;
        margin: 0px;
    }
    .desktop-carousel-home {
        opacity: 0;
        display: none;
        visibility: hidden;
    }
    .two-carousel-home {
        opacity: 0;
        display: none;
        visibility: hidden;
    }
    .content-beli {
        max-width: 38%;
    }
    .body-beli {
        padding: 0px;
        padding-right: 15px;
        margin: 0px;
    }
}

@media (max-width: 472px) {
    .content-beli {
        max-width: 37%;
    }
    .body-beli {
        padding: 0px;
        padding-right: 13px;
        margin: 0px;
    }
}

@media (max-width: 438px) {
    .content-beli {
        max-width: 33%;
    }
    .body-beli {
        padding: 0px;
        padding-right: 13px;
        margin: 0px;
    }
}

@media (max-width: 434px) {
    .content-beli {
        max-width: 32%;
    }
    .body-beli {
        padding: 0px;
        padding-right: 13px;
        margin: 0px;
    }
}

@media (max-width: 403px) {
    .content-beli {
        max-width: 21%;
    }
    .body-beli {
        padding: 0px;
        padding-right: 13px;
        margin: 0px;
    }
}

@media (max-width: 378px) {
    .content-beli {
        max-width: 29%;
    }
    .btn-beli-lihat-detail {
        min-width: 150px;
        padding: 0px 24px;
    }
    .body-beli {
        padding: 0px;
        padding-right: 13px;
        margin: 0px;
    }
}

@media (max-width: 352px) {
    .content-beli {
        max-width: 28%;
    }
    .btn-beli-lihat-detail {
        min-width: 135px;
        padding: 0px 28px;
    }
    .body-beli {
        padding: 0px;
        padding-right: 13px;
        margin: 0px;
    }
}

@media (max-width: 325px) {
    .content-beli {
        max-width: 24%;
    }
    .body-beli {
        padding: 0px;
        padding-right: 13px;
        margin: 0px;
    }
}

@media (min-width: 491px) and ( max-width: 992px) {
    /*two*/
    .mobile-carousel-home {
        opacity: 0;
        display: none;
        visibility: hidden;
    }
    .desktop-carousel-home {
        opacity: 0;
        display: none;
        visibility: hidden;
    }
}

@media (min-width: 992px) {
    /*desktop*/
    .mobile-carousel-home {
        opacity: 0;
        display: none;
        visibility: hidden;
    }
    .two-carousel-home {
        opacity: 0;
        display: none;
        visibility: hidden;
    }
}
</style>
