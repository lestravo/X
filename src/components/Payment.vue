<template>
    <div>
        <!-- Header -->
        <div class="site-header" style="background-color: #0079ff;padding-top: 5px;padding-bottom: 5px;">
            <!-- Navbar -->
            <div class="container header-page">
                <div class="navbar justify-content-between" id="mainnav">
                    <a class="navbar-brand non-underline" @click="$router.go(-1)" style="color: #fff; cursor: pointer;">
                        <div class="logo logo-dark fas fa-arrow-left" style="margin-right: 8px;"></div> Payment
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
                        <div class="row background-chart-card-address">
                        <div class="col-12 text-left text-alamat-pengiriman">
                            Alamat Pengiriman
                            <div class="line-bottom"></div>
                        </div>
                        
                        <div class="row background-chart-card-payment">
                            <div class="col-12 chart-background-vendor-color">
                                <div class="text-left chart-vendor-title">
                                    <i class="fa fa-user" aria-hidden="true"></i>&nbsp;<b>Nama Penerima</b>
                                </div>  
                            </div>
                            <div class="row background-chart-card-bottom-payment">
                                <div class="col-10 address-container">
                                    <div class="text-left text-address-payment">Apertemen Neo Soho Residence, Lantai 18 Unit 8 Jl. Letjen S. Parman Kav. 28, Tanjung Duren Selatan</div>
                                    <div class="text-left text-kec-prov">DKI Jakarta, Jakarta Barat, Grogol 11470</div>
                                    <div class="text-left text-no-telp-payment">08xxxxxxx</div>
                                </div>
                                <div class="col-2"></div>
                                <div class="col-12">
                                    <div id="edit_address" class="text-edit-address">
                                        <i class="fa fa-edit" aria-hidden="true"></i>&nbsp;Ubah Alamat
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="row background-chart-card-detail-product">
                        <div class=" col-12 text-left text-alamat-pengiriman">
                            Detail Belanja
                            <div class="line-bottom"></div>
                        </div>
                        <!-- <div class="line-bottom"></div> -->
                        <div class="row background-chart-card-payment">
                            <div class="col-12 chart-background-vendor-color">
                                <div class="text-left chart-vendor-title">
                                    <i class="fa fa-store" aria-hidden="true"></i>&nbsp;Vendor
                                </div>  
                            </div>
                            <div class="row background-chart-card-bottom-payment">
                                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 chart-image-product text-center"> <img src="https://s3-ap-southeast-1.amazonaws.com/asani-imagestorage/rental_product/a7-front-blue.png"> </div>
                                <div class="col-9 col-xs-9 col-sm-4 col-lg-4 col-xl-4 chart-product-title-div text-left"><span class="text-justify"> Laptop Adaw jhkds kjhgkj kgkjsadkj khgkjg</span><br>
                                    <div class="chart-btndiv">
                                        <div class="sum-product"> 2 Barang </div>
                                    </div>
                                </div>
                                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 chart-price-payment"> Rp 24.000.000 </div>
                                <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 chart-button-delete">
                                </div>
                            </div>

                            <div class="row background-chart-card-bottom-payment">
                                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 chart-image-product text-center"> <img src="https://s3-ap-southeast-1.amazonaws.com/asani-imagestorage/rental_product/a7-front-blue.png"> </div>
                                <div class="col-9 col-xs-9 col-sm-4 col-lg-4 col-xl-4 chart-product-title-div text-left"><span class="text-justify"> Laptop Adaw jhkds kjhgkj kgkjsadkj khgkjg</span><br>
                                    <div class="sum-product"> 1 Barang </div>
                                </div>
                                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 chart-price-payment"> Rp 12.000.000 </div>
                                <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 chart-button-delete"> 
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-12">
                        <div class="chart-total-purchase text-left">
                            <div class="chart-total-purchase-container">
                                <div class="chart-title-purchase"> Pembayaran <hr></div>
                                <div>
                                    <div class="chart-total-harga"> Total Bayar</div>
                                    <div class="chart-nominal-total"> Rp. 36.000.000 </div>
                                </div>
                                <hr class="hr-harga"> 
                                <button class="btn btn-beli"> Bayar</button>
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
                            <li><a href="https://www.facebook.com/asani.co.id" @click="trackTag('Footer-facebook')" target="_blank"><i class="fab fa-facebook-square"></i></a></li>
                            <li><a href="https://www.instagram.com/asani.co.id/" @click="trackTag('Footer-instagram')" target="_blank"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="https://pse.kominfo.go.id/sistem/1771" @click="trackTag('Footer-kominfo')"  target="_blank"><img src="~@/assets/images/icon/kominfo.png" srcset="~@/assets/images/icon/kominfo.png" class="img-kominfo" alt="kominfo"></a></li>
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
  import swal from 'sweetalert'
  import Multiselect from 'vue-multiselect'
  import 'vue-multiselect/dist/vue-multiselect.min.css';
  export default {
    name: 'landing-page',
    components: { Multiselect },
    data () {
      return {
	    value: 'Select One',
	    options: ['Select option', 'options', 'selected', 'mulitple', 'label', 'searchable', 'clearOnSelect', 'hideSelected', 'maxHeight', 'allowEmpty', 'showLabels', 'onChange', 'touched'],
        tampilProduct: 0,
        images: null,
        test: [],
        pilihanSkema: {
            tenor: [],
            productMemory: 'Pilih Memori'
        },
        warna: [],
        gambarDefault : [],
        storage: [],
        duration: [],
        named: 'request-rent',
        pilihanWarna: {
            colorName: 'Pilih Warna'
        },
        pilihanStorage: {
            feeSecurity: 0,
            feeRent: 0,
            buybackPrice: 0,
            storageName: '',
            productMemory: "Silahkan Pilih terlebih dahulu",
            conditionDevices: "Silahkan Pilih terlebih dahulu"
        },
        pilihanDuration: {
            feeSecurity: 0,
            feeRent: 0,
            buybackPrice: 0,
            value: null,
            name: "Silahkan Pilih terlebih dahulu",
            tenorMonths: 'Pilih Memori Terlebih Dulu'
        },
        product: [],
        pageNo: 0,
        slideNo: 0,
      }
    },
    computed: {
    },
    methods: {
         trackPage(e,f) {
        this.trackTag(f)
        this.$router.push(e)
      },
      trackTag(e){
        this.$ga.event(window.location.pathname, 'click_button', e, 1)
      },
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
      requestRent(){
        this.$ga.event(window.location.pathname, 'click_button', 'ISI FORMULIR', 1)
        localStorage.clear()

        localStorage.setItem('feeRent', this.pilihanDuration.feeRent)
        localStorage.setItem('colorId', this.pilihanWarna.colorId)
        localStorage.setItem('colorName', this.pilihanWarna.colorName)
        localStorage.setItem('feeSecurity', this.pilihanDuration.feeSecurity)
        localStorage.setItem('productBrand', this.product.productBrand)
        localStorage.setItem('productName', this.product.productName)
        localStorage.setItem('productCamera', this.product.productCamera)
        localStorage.setItem('productBattery', this.product.productBattery)
        localStorage.setItem('productScreen', this.product.productScreen)
        localStorage.setItem('conditionDevices', 'Baru')
        localStorage.setItem('storageId', this.pilihanDuration.storageId)
        localStorage.setItem('storageName', this.pilihanSkema.productMemory)
        localStorage.setItem('duration', this.pilihanDuration.tenorMonths)
        localStorage.setItem('buybackPrice', this.pilihanDuration.buybackPrice)
        localStorage.setItem('productPrice', this.pilihanDuration.productPrice)
        localStorage.setItem('lenderPrice', this.pilihanDuration.lenderPrice)
        localStorage.setItem('productId', this.product.productId)
        this.toPage('/request-rent/' + this.$route.params.productSlug)
      },
      showAlert(){
        if (this.pilihanDuration.storageId == null || this.pilihanWarna.colorId == null || this.pilihanDuration.tenorMonths == null) {
             swal("Harap pilih varian warna, memori dan durasi terlebih dahulu","","warning", {
                  buttons: {
                    agree: "OK",
                  },
                })
                .then((value) => {
                });
        } else {
            this.requestRent()
        }
      },
      toPage (e) {
        this.$router.push(e)
      }
    },
    created () {
    this.scrollToTop()
    localStorage.clear()
     this.$http.post(process.env.API_PROD_DESC, {
            productSlug: this.$route.params.productSlug
          })
        .then(response => {
            this.tampilProduct = 1
            var idx = 0
            this.images =  response.data.content.img

            // this.duration[0] = { value: 6, name: "6 bulan" }
            this.duration[0] = { value: 12, name: "12 bulan"}
            this.gambarDefault = response.data.content.img
            this.warna = response.data.content.color
            this.storage = response.data.content.storage
            this.product = response.data.content
        })
        .catch(function (error) {
          console.log(error)
        })
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
.background-chart-card-payment{
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
    margin: 10px;
}
.background-chart-card-address{
    border-radius: 4px;
    background: transparent;
    width: 100%;
    margin:auto;
    border: none;
    /*max-height: 350px*/
    text-transform: none;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    /*-webkit-box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);*/
    margin-bottom: 10px;
}
.background-chart-card-detail-product{
    border-radius: 4px;
    background: transparent;
    width: 100%;
    margin:auto;
    /*border: 1px;*/
    /*max-height: 350px*/
    text-transform: none;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    /*-webkit-box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);*/
    margin-bottom: 10px;
}
.background-chart-card-bottom-payment{
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
.line-bottom{
    height: 2px;
    background-color: #EBEBEB;
    margin-bottom: 10px;
    margin-right: -20px;
}
.text-alamat-pengiriman{
    min-height: 35px;
    padding-top: 5px;
    font-size: 20px;
    font-weight: bold;
    margin-left: -15px;
}
.sum-product{
    font-size: 14px;
}
.address-container{
    padding-left: 35px;
    margin: 10px 0px;
}
.text-address-payment{
    font-size: 14px;
    font-weight: bold;
}
.text-kec-prov{
    font-size: 14px;
}
.text-no-telp-payment{
    font-size: 14px;
}
.text-edit-address{
    font-size: 14px;
    float: right;
}
#edit_address{
    cursor: pointer;
    color: #2797FB;
    padding:0px 10px 10px 10px;
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
    .chart-price-payment{
        float: left;
        padding-top: 5px;
        margin-left: 65px;
        padding-bottom: 5px;
        text-align: left;
    }
    .chart-btndiv{
        width: 61%;
    }
}
</style>