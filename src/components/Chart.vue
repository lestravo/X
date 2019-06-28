<template>
    <div>
        <!-- Header -->
        <div class="site-header" style="background-color: #0079ff;padding-top: 5px;padding-bottom: 5px;">
            <!-- Navbar -->
            <div class="container header-page">
                <div class="navbar justify-content-between" id="mainnav">
                    <a class="navbar-brand non-underline" @click="$router.go(-1)" style="color: #fff; cursor: pointer;">
                        <div class="logo logo-dark fas fa-arrow-left" style="margin-right: 8px;"></div> Keranjang
                    </a>
                    <div class="display-testi-header">
                    </div>
                </div>
                <!-- End Navbar -->
            </div>
        </div>
        <div class="section section-pad section-bg-alt" id="about" style="padding-top: 25px; padding-bottom: 0px; background: #fff;">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-12 col-lg-8 col-xl-8 col-12 ">

                        <div v-for="keranjangs in keranjang" class="row background-chart-card">
                            <div class="col-12 chart-background-vendor-color">
                                <div class="text-left chart-vendor-title">
                                    <i class="fa fa-store" aria-hidden="true"></i>&nbsp;{{keranjangs.vendorName}}
                                </div>  
                            </div>
                            <div v-for="produks in keranjangs.produk" class="row background-chart-card-bottom">
                                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center"> <img class="chart-image-product" :src="produks.gambarProduk"> </div>
                                <div class="col-9 col-xs-9 col-sm-4 col-lg-4 col-xl-4 chart-product-title-div text-left"><span class="text-justify"> {{produks.namaProduk}}</span><br>
                                    <div class="chart-btndiv">
                                        <button class="chart-btn-minus"><i class="fas fa-minus-circle" aria-hidden="true"></i></button>
                                            <input id="qty" class="input-bordered text-center" type="text" name="qty" :placeholder="produks.qtyProduk">
                                        <button class="chart-btn-plus"><i class="fas fa-plus-circle" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                                <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-6 chart-price"> Rp {{produks.hargaProduk}} </div>
                                <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 chart-button-delete"> <i class="fa fa-trash" aria-hidden="true"></i> 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-12">
                        <div class="chart-total-purchase text-left">
                            <div class="chart-total-purchase-container">
                                <div class="chart-title-purchase"> Pembayaran <hr></div>
                                <div>
                                    <div class="chart-total-harga"> Total Harga</div>
                                    <div class="chart-nominal-total"> Rp. 0 </div>
                                </div>
                                <hr class="hr-harga"> 
                                <button class="btn btn-beli"> Beli </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- row.// -->
            </div>
        </div>

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
                                <br>
                                Asani menyadari banyak orang kreatif yang mempunyai ide bisnis namun keterbatasan investasi untuk memulai startup, sehingga Asani melahirkan fasilitas sewa dengan persyaratan mudah dan harga kompetitif agar ide startup dapat diwujudkan dengan biaya sewa peralatan kantor yang lebih murah dibanding membelinya. Beragam kebutuhan elektronik kantor seperti PC, Laptop Macbook, Monitor, Printer, dan Proyektor, dari merek Lenovo, Dell, HP hingga Apple tersedia dengan berbagai spesifikasi dan durasi yang dapat disesuaikan.
                            </p>
                        </div>
                    </div>
                </div><!-- .col -->
                <div class="col-lg-2 col-md-4 col-sm-5">
                    <div class="widget-item">
                        <h5 class="widget-title">Daftar Isi</h5>
                        <ul class="widget-list">
                            <li><a class="text-link" @click="trackPage('/bantuan', 'Footer-bantuan')" href=""> Bantuan </a></li>
                            <li><a class="text-link" @click="toPage('/')" href="">Produk Tersedia</a></li>
                        </ul>
                    </div>
                </div><!-- .col -->
                <div class="col-lg-3 col-md-4 col-sm-3">
                    <div class="widget-item">
                        <h5 class="widget-title">Jejaring Sosial Asani</h5>
                        <ul class="social-link-exp">
                            <li><a href="https://www.facebook.com/asani.co.id" target="_blank"><em class="fab fa-facebook-f"></em></a></li>
                            <li><a href="https://www.instagram.com/asani.co.id/" target="_blank"><em class="fab fa-instagram"></em></a></li>
                            <li><a href="https://pse.kominfo.go.id/sistem/1771" target="_blank"><img src="~@/assets/images/icon/kominfo.png" srcset="~@/assets/images/icon/kominfo.png" alt="kominfo"></a></li>
                        </ul>
                    </div>
                </div><!-- .col -->
            </div><!-- .row -->
            <div class="gaps size-1x d-none d-lg-block"></div>
            <div class="footer-bottom">
                <ul class="footer-list text-center">        
                    <li>&copy; 2019. PT Teknologi Skoring Nusantara</li>
                </ul>
            </div>
        </div><!-- .container -->
    </div>
        <!-- Preloader End -->
    </div>
</template>

<script>
  export default {
    name: 'landing-page',
    components: {},
    data () {
      return {
        keranjang: [{
            "vendorId": 1,
            "vendorName": "Sola Shop",
            "produk": [{
                "idProduk": 10,
                "namaProduk": "Laptop 32\"",
                "gambarProduk": "https://s3-ap-southeast-1.amazonaws.com/asani-imagestorage/rental_product/m20-black-front.png",
                "hargaProduk": 10000000,
                "qtyProduk": 5
            },{
                "idProduk": 11,
                "namaProduk": "Laptop 50\"",
                "gambarProduk": "https://s3-ap-southeast-1.amazonaws.com/asani-imagestorage/rental_product/a7-front-blue.png",
                "hargaProduk": 30000000,
                "qtyProduk": 2
            }]
        },{
            "vendorId": 2,
            "vendorName": "Hudin Shop",
            "produk": [{
                "idProduk": 12,
                "namaProduk": "Printer 4D",
                "gambarProduk": "https://s3-ap-southeast-1.amazonaws.com/asani-imagestorage/rental_product/a9-front-black.png",
                "hargaProduk": 10000000,
                "qtyProduk": 1
            }]
        }]
      }
    },
    computed: {
    },
    methods: {
      scrollToTop() {
        window.scrollTo(0,0);
      },
      formatPrice(value) {
        let val = (value)
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      },
      pageChanged(e){
        var temp = e/3
        var slideNumb = 0
        for (var i = 0; i <= this.images.length; i++) {
            if(temp>= slideNumb){
                slideNumb = slideNumb+1
            }
        }
        this.slideNo = slideNumb-1
        this.pageNo = e
      },
      toPage (e) {
        this.$router.push(e)
      }
    },
    created () {

    }
  }

</script>

<style>
.site-header .navbar-brand{
     margin-top: 0px; 
     margin-bottom: 0px; 
    margin-left: 0;
    z-index: 6;
}
.background-chart-card{
    border-radius: 4px;
    background: transparent;
    width: 100%;
    margin:auto;
    border: 1px;
    /*max-height: 350px*/
    text-transform: none;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    -webkit-box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
    margin-bottom: 10px;
}
.background-chart-card-bottom{
    border-radius: 4px;
    background: transparent;
    width: 100%;
    margin:auto;
    border: 1px;
    /*max-height: 350px*/
    text-transform: none;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    -webkit-box-shadow: 0px 1px 0px 0px #EBEBEB;
    -moz-box-shadow: 0px 1px 0px 0px #EBEBEB;
    box-shadow: 0px 1px 0px 0px #EBEBEB;
}
.chart-total-purchase{
    /*margin:5px 5px;*/
}
.chart-total-purchase-container{
    border-radius: 4px;  
    -webkit-box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
    padding:0px 20px 20px 20px;
    margin-top: -3px;
}
.chart-vendor-title{
    margin-top: 6px;
}

.chart-background-vendor-color{   
    background-color: #ECF2FF;
    border-radius: 4px;
    max-width: auto;
    min-height:35px;
}
.chart-image-product{
}
.chart-product-title-div{
    margin-left: -22px;
    padding-top: 10px;
    float: left;
}
.chart-product-title{
    text-overflow: ellipsis; 
}
.chart-price{
    padding-right: 0px;
    padding-top: 10px;
}
.chart-button-delete{
    margin:auto;
}
.chart-button-delete:hover{
    color: #2797FB;
    cursor: pointer;
}
.chart-title-purchase{
    font-weight: bold;
    height: 35px;
}
.chart-title-purchase{
    margin-top: 3px;
    margin-bottom: 6px;
    font-size: 18px;
    padding-top: 3px;
}
.chart-btndiv{
    display: inline-flex;
    margin-top: 10px;
}

.chart-btn-plus:hover{
    color: #2797FB;
}

.chart-btn-minus:hover{
    color: #2797FB;
}

.btn-beli{
    border-radius: 4px;
    width: 100%;
    text-transform: none;
    height: 30px;
}

.btn-beli:hover{
    border-radius: 1px;
    width: 100%;
    text-transform: none;
    height: 30px;
    color: #ffffff;
    background-color: #2288e8;
}

.chart-btn-plus{
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    border: 1px solid #dbe4f7;
    width: 100%;
    padding: 10px 15px;
    line-height: 21px;
    font-size: .9em;
    color: #3C3C3C;
    transition: all .4s;
    background-color: transparent;
    border-right: none;
}

.chart-btn-minus{
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border: 1px solid #dbe4f7;
    width: 100%;
    padding: 10px 15px;
    line-height: 21px;
    font-size: .9em;
    color: #3C3C3C;
    transition: all .4s;
    background-color: transparent;
    border-left: none;
}

.input-bordered {
    border-radius: 0px;
    border: 1px solid #dbe4f7;
    width: 100%;
    padding: 10px 15px;
    line-height: 21px;
    font-size: .9em;
    /*color: #8ca2e5;*/
    transition: all .4s;
    background-color: transparent;
    border-left: none;
    border-right: none;
}
.input-bordered:focus {
    outline: none;
}
.chart-total-harga{
    float: left;
    margin-bottom: 6px;
    padding-top: 4px;
}
.chart-nominal-total{
    float: right;
    font-weight: bold;
    padding-top: 4px;
}
.hr-harga{
    margin-bottom: 15px;
}

.chart-container-button{
    width: 100%;
}
@media only screen and (max-width: 991px){
    .hr-harga{
        margin-top: 45px;
    }
    .chart-total-purchase-container{
        margin-bottom: 20px;
    }
}
@media only screen and (max-width: 575px){
    .chart-image-product{
        max-height:100px;
        float: left;
        max-width: 30%;
        margin-left: -10px;
    }
    .background-chart-card-bottom{
        display: block;
    }
    .chart-button-delete{
        float: right;
        padding-right: 27px;
        padding-top: 6px;
        width: 10%;
    }
    .chart-price{
        float: left;
        padding-top: 5px;
        margin-left: 70px;
        padding-bottom: 5px;
        text-align: center;
    }
    .chart-btndiv{
        width: 61%;
    }
}
</style>