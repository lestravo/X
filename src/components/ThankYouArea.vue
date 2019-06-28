<template>
    <div>
        <!-- Header -->
        <div class="site-header" style="background-color: #0079ff;padding-top: 5px;padding-bottom: 5px;">
            <!-- Navbar -->
            <div class="container header-page">
                <div class="navbar justify-content-between" id="mainnav">
                    <a class="navbar-brand non-underline" @click="toPage('/')" style="color: #fff;">
                        <div class="logo logo-dark fas fa-arrow-left"></div> Terima Kasih
                    </a>
                    <div class="display-testi-header">
                        <a class="nav-link menu-link non-underline nav-text-bantuan text-white" href="https://pulsa.asani.co.id" @click="trackPage('', 'Header-pulsa')"><i class="fas fa-mobile-alt" aria-hidden="true" style="margin-right: 5px;"></i>Pulsa</a>
                        <a class="nav-link menu-link non-underline nav-text-bantuan text-white" href="" @click="trackPage('/bantuan', 'Header-bantuan')"><i class="fa fa-question-circle" aria-hidden="true" style="margin-right: 5px;"></i>Bantuan</a>
                    </div>
                </div>
                <!-- End Navbar -->
            </div>
        </div>

        <div class="section section-bg-alt" id="three-tab" style="background: #fff; padding-bottom: 20px;">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-1"></div>
                    <div class="col-lg-10 col-sm-12">
                        <center>
                            <img height="120px" width="120px" src="~@/assets/images/heart.png" class="img-responsive" alt="" style="margin-bottom: 16px;margin-top: 20px" />
                            <p style="font-weight: bold;font-style: normal;font-stretch: normal;line-height: 1.5;letter-spacing: normal; margin-bottom: 1px">Terima Kasih!</p>
                            <p style="margin-bottom: 2px; color: rgba(0, 0, 0, 0.5);">Terima kasih telah menceritakan data dirimu untuk kami dapat lebih mengenalmu. Tunggu kehadiran Asani di areamu!</p>
                        </center>
                    </div>
                    <div class="col-sm-1"></div>
                </div>
            </div>
        </div>

        <div class="section section-bg-alt" id="three-tab" style="background: #fff; padding-bottom: 20px;">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-1"></div>
                    <div class="col-lg-10 col-sm-12">
                        <button class="thankyou-gohome" @click="toPage('/')">Kembali Ke Beranda</button>
                    </div>
                    <div class="col-sm-1"></div>
                </div>
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
                    </div>
                    <!-- .col -->
                    <div class="col-lg-2 col-md-4 col-sm-5">
                        <div class="widget-item">
                            <h5 class="widget-title">Daftar Isi</h5>
                            <ul class="widget-list">
                                <li><a class="text-link" href="" @click="trackPage('', 'Footer-pulsa')" href="https://pulsa.asani.co.id"> Pulsa </a></li>
                                <li><a class="text-link" @click="trackPage('/bantuan', 'Footer-bantuan')" href=""> Bantuan </a></li>
                                <li><a class="text-link" @click="toPage('/')" href="">Produk Tersedia</a></li>
                            </ul>
                        </div>
                    </div><!-- .col -->
                    <div class="col-lg-3 col-md-4 col-sm-3">
                        <div class="widget-item">
                            <h5 class="widget-title">Jejaring Sosial</h5>
                            <ul class="social-link-exp">
                                <li><a href="https://www.facebook.com/asani.co.id" target="_blank"><em class="fab fa-facebook-f"></em></a></li>
                                <li><a href="https://www.instagram.com/asani.co.id/" target="_blank"><em class="fab fa-instagram"></em></a></li>
                                <li><a href="https://pse.kominfo.go.id/sistem/1771" target="_blank"><img src="~@/assets/images/icon/kominfo.png" srcset="~@/assets/images/icon/kominfo.png" alt="kominfo"></a></li>
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
      toPage (e) {
        this.$router.push(e)
      }
    },
    created () {
      if (localStorage.getItem('feeRent') == null) {
        this.toPage('/')
      } else {
        this.scrollToTop()
        localStorage.clear()
      }
    }
  }

</script>

<style>

.thankyou-gohome {
    -webkit-appearance: none;
    font-family: 'Open Sans', sans-serif;
    color: #ffffff;
    text-transform: capitalize;
    display: inline-block;
    background: #2797fb;
    width: 100%;
    padding: 10px 20px;
    border-radius: 5px;
    transition: 0.5s ease;
    -moz-transition: 0.5s ease;
    -o-transition: 0.5s ease;
    -webkit-transition: 0.5s ease;
    cursor: pointer;
    border: none;
    text-align: center;
    outline: none;
    font-size: 1em;
    margin-bottom: 5px;
}
.thankyou-line {
    display: block;
    margin: 8px 0;
    overflow: hidden;
    border-color: #efeff4;
    border-style: solid;
    border-width: 0.5px;
}

.non-underline{
    text-decoration: none;
}

.site-header .navbar-brand{
     margin-top: 0px; 
     margin-bottom: 0px; 
    margin-left: 0;
    z-index: 6;
}
</style>