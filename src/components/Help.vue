<template>
    <div>
        <!-- Header -->
        <div id="site-header" style="background-color: #0079ff;">

            <!-- Navbar -->
            <div class="navbar navbar-expand-lg" id="mainnav">
                <nav id="navv-other-home" class="container">
                    <a class="navbar-brand non-underline" @click="$router.go(-1)" style="color: #fff; cursor: pointer;">
                        <div class="logo logo-dark fas fa-arrow-left" style="margin-right: 8px;"></div> Bantuan
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" @click="navClick()">
                        <span class="navbar-toggler-icon">
                            <span class="ti ti-align-justify " id="nav-tog"></span>
                        </span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarToggle">
                        <ul class="navbar-nav">
                            <li><a class="nav-link menu-link non-underline nav-text-bantuan text-white" href="https://pulsa.asani.co.id" @click="trackPage('', 'Header-pulsa')"><i class="fas fa-mobile-alt" aria-hidden="true" style="margin-right: 5px;"></i>Pulsa</a></li>
                            <li v-if="!alreadyLogin"><a id="btn-masuk-login-help" class="nav-link menu-link non-underline nav-text-bantuan text-white" data-toggle="modal" data-target="#modal-masuk" @click="cekModal()" data-backdrop="static" data-keyboard="false"><i class="fas fa-sign-in-alt login" aria-hidden="true" style="margin-right: 5px;"></i>Masuk / Daftar</a></li>
                            <li v-if="alreadyLogin"><a id="btn-masuk-login-help" class="nav-link menu-link non-underline nav-text-bantuan text-white" @click="handleLogout"><i class="fas fa-sign-out-alt" aria-hidden="true" style="margin-right: 5px;"></i>Keluar</a></li>
                            <!-- <li><a class="nav-link menu-link non-underline nav-text-bantuan text-white" data-toggle="modal" data-target="#modal-masuk"><i class="fas fa-shopping-cart" aria-hidden="true" style="margin-right: 5px;"></i>Keranjang (0)</a></li> -->
                        </ul>
                    </div>
                </nav>
            </div>
            <!-- End Navbar -->
        </div>

        <div class="section section-pad-xs section-bg-alt page-question" id="about" style="background:#fff">
            <div class="container">
                <div class="row non-margin">
                    <div class="head-title">
                        <h3> FAQ </h3>
                        <h6> Cek pertanyaan yang sering ditanyakan di sini. </h6>
                    </div>
                    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="heading1">
                                <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="false" aria-controls="collapse1" class="collapsed">
                                    Apa itu Asani?
                                </a>
                            </h4>
                            </div>
                            <div id="collapse1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading1">
                                <div class="panel-body">
                                    <p class="text">Asani merupakan marketplace persewaan yang mempertemukan pihak vendor sewa (selanjutnya disebut penyedia) dengan pihak yang membutuhkan sewa untuk perusahaannya (selanjutnya disebut penyewa).</p>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="heading2">
                                <h4 class="panel-title">
                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                    Apakah Asani menyewakan untuk perseorangan?
                                </a>
                            </h4>
                            </div>
                            <div id="collapse2" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading2">
                                <div class="panel-body">
                                    <p class="text">Saat ini, Asani baru melayani perusahaan, perseorangan belum dapat kami layani.</p>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="heading3">
                                <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="false" aria-controls="collapse3" class="collapsed">
                                    Bagaimana cara menyewa di Asani?
                                </a>
                            </h4>
                            </div>
                            <div id="collapse3" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading3">
                                <div class="panel-body">
                                    <p class="text">Hanya dengan 3 langkah sederhana (Pilih, Ajukan, dan Bayar), kamu sudah bisa menyewa di Asani sesuai durasi pengajuan.</p>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="heading4">
                                <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse4" aria-expanded="false" aria-controls="collapse4" class="collapsed">
                                    Apa saja syarat untuk menyewa di Asani?
                                </a>
                            </h4>
                            </div>
                            <div id="collapse4" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading4">
                                <div class="panel-body">
                                    <p class="text">Setiap penyedia memiliki persyaratan berbeda yang dapat dilihat pada halaman produknya. Namun, secara umum persyaratan yang dibutuhkan berupa foto atau scan NPWP perusahaan, akte perusahaan, SIUP, dan KTP penanggung jawab.</p>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="heading5">
                                <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse5" aria-expanded="false" aria-controls="collapse5" class="collapsed">
                                    Lokasi mana saja yang dapat dijangkau Asani?
                                </a>
                            </h4>
                            </div>
                            <div id="collapse5" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading5">
                                <div class="panel-body">
                                    <p class="text">Asani dapat menjangkau perusahaan di seluruh Indonesia.</p>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="heading6">
                                <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse6" aria-expanded="false" aria-controls="collapse6" class="collapsed">
                                    Berapa lama durasi menyewa di Asani?
                                </a>
                            </h4>
                            </div>
                            <div id="collapse6" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading6">
                                <div class="panel-body">
                                    <p class="text">Penyedia bekerja sama dengan Asani untuk menyediakan sewa secara tahunan.</p>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="heading7">
                                <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse7" aria-expanded="false" aria-controls="collapse7" class="collapsed">
                                    Apakah ada jumlah minimal sewa?
                                </a>
                            </h4>
                            </div>
                            <div id="collapse7" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading7">
                                <div class="panel-body">
                                    <p class="text">Jumlah minimal sewa dapat berbeda untuk setiap penyedia. Secara rata-rata penyedia kami menetapkan jumlah minimal sewa sebanyak 5 unit per transaksi penyewaan.</p>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="heading8">
                                <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse8" aria-expanded="false" aria-controls="collapse8" class="collapsed">
                                    Apakah penyewa dapat membeli produk yang disewa?
                                </a>
                            </h4>
                            </div>
                            <div id="collapse8" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading8">
                                <div class="panel-body">
                                    <p class="text"> Saat ini Asani hanya memfasilitasi sewa-menyewa, sehingga jual-beli tidak dapat dilakukan.</p>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="heading9">
                            <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse9" aria-expanded="false" aria-controls="collapse9" class="collapsed">
                                    Apa yang dimaksud dengan Buyback?
                                </a>
                            </h4>
                        </div>
                        <div id="collapse9" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading9">
                            <div class="panel-body">
                                <p class="text">Buyback yaitu membeli smartphone yang telah selesai disewa dengan harga yang lebih murah dibanding harga pasaran, dengan hitungan harga smartphone - biaya sewa yang sudah dibayarkan. </p>
                            </div>
                        </div>
                    </div> -->
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="heading10">
                                <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse10" aria-expanded="false" aria-controls="collapse10" class="collapsed">
                                    Apakah biaya sewa yang tertera di Asani dapat dinego?
                                </a>
                            </h4>
                            </div>
                            <div id="collapse10" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading10">
                                <div class="panel-body">
                                    <p class="text">Harga yang tertera sudah fixed. Namun tenang, Asani selalu mencoba memberikan harga terbaik dan promo menarik.</p>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="heading11">
                                <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse11" aria-expanded="false" aria-controls="collapse11" class="collapsed">
                                    Apakah pengiriman produk sewa dikenakan biaya tambahan?
                                </a>
                            </h4>
                            </div>
                            <div id="collapse11" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading11">
                                <div class="panel-body">
                                    <p class="text">Berita baiknya, untuk daerah Jakarta bebas ongkos kirim, sedangkan untuk daerah luar jakarta ada ongkos kirim sesuai dengan kebijakan penyedia.</p>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="heading12">
                                <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse12" aria-expanded="false" aria-controls="collapse12" class="collapsed">
                                    Bagaimana cara melakukan pembayaran biaya sewa?
                                </a>
                            </h4>
                            </div>
                            <div id="collapse12" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading12">
                                <div class="panel-body">
                                    <p class="text">Pembayaran dilakukan setiap awal bulan selama masa sewa melalui rekening Asani.</p>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="heading13">
                                <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse13" aria-expanded="false" aria-controls="collapse13" class="collapsed">
                                    Bagaimana jika terjadi kerusakan produk dalam masa penyewaan?
                                </a>
                            </h4>
                            </div>
                            <div id="collapse13" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading13">
                                <div class="panel-body">
                                    <p class="text">Tenang saja, produk cadangan akan disediakan untuk meminimalisir terjadinya downtime. Sedangkan untuk produk yang rusak, teknisi akan memeriksanya terlebih dahulu. Apabila kerusakan disebabkan oleh kelalaian, maka biaya perbaikan maupun penggantian ditanggung oleh penyewa.</p>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="heading14">
                                <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse14" aria-expanded="false" aria-controls="collapse14" class="collapsed">
                                    Apa saja yang diberikan saat menyewa laptop?
                                </a>
                            </h4>
                            </div>
                            <div id="collapse14" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading14">
                                <div class="panel-body">
                                    <p class="text">Kelengkapan yang disediakan penyedia yaitu laptop, charger, mouse dan tas.</p>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="heading15">
                            <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse15" aria-expanded="false" aria-controls="collapse15" class="collapsed">
                                    Apakah bisa buyback smartphone saat masa sewanya belum berakhir?
                                </a>
                            </h4>
                        </div>
                        <div id="collapse15" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading15">
                            <div class="panel-body">
                                <p class="text">Untuk saat ini, kamu bisa melakukan buyback di akhir masa sewa 12 bulan. </p>
                            </div>
                        </div>
                    </div> -->
                        <!-- <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="heading16">
                            <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse16" aria-expanded="false" aria-controls="collapse16" class="collapsed">
                                    Bagaimana jika smartphone yang saya sewa hilang?
                                </a>
                            </h4>
                        </div>
                        <div id="collapse16" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading16">
                            <div class="panel-body">
                                <p class="text">Smartphone yang hilang menjadi tanggung jawab penyewa dan wajib melakukan pembayaran penggantian. Untuk itu, kami sarankan agar kamu menjaga smartphone yang sudah disewa dengan baik. </p>
                            </div>
                        </div>
                    </div> -->
                        <!-- <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="heading17">
                            <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse17" aria-expanded="false" aria-controls="collapse17" class="collapsed">
                                    Bagaimana cara menghubungi Asani?
                                </a>
                            </h4>
                        </div>
                        <div id="collapse17" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading17">
                            <div class="panel-body">
                                <p class="text">Kamu bisa menghubungi kami pada hari dan jam operasional (Senin-Minggu, Pukul 06.00 - 20.00 WIB) melalui:<br>
                                - Whatsapp: <a class ="link2" href="https://api.whatsapp.com/send?phone=6281311442228" target="_blank">081311442228</a> / <a class ="link2" href="https://api.whatsapp.com/send?phone=6282299733338" target="_blank">082299733338</a> / <a class ="link2" href="https://api.whatsapp.com/send?phone=6285214933518" target="_blank">085214933518</a><br>
                                - Email: <a class="link2" href="mailto:cs@asani.co.id" target="_blank"> cs@asani.co.id</a> </p>
                            </div>
                        </div>
                    </div> -->
                        <div class="row desktop-faq">
                            <div class="col-md-3 border-hubungi-kiri">
                                <center><img src="~@/assets/images/chat-white.png" width="150px" height="150px" class="img-responsive" alt="" style="margin-bottom: 20px; margin-top: 15px" /></center>
                            </div>
                            <div class="col-md-9 border-hubungi-kanan">
                                <p>Butuh bantuan lain? Kamu bisa menghubungi kami pada hari dan jam operasional (Senin-Minggu, Pukul 06.00 - 20.00 WIB) melalui:</p>
                                <div style="margin-top: 20px; margin-bottom: 20px;">
                                    <p style="margin-bottom: 15px"><img src="~@/assets/images/whatsapp-black.png" width="20px" height="20px" class="img-responsive" alt="" style="" align="left" style="margin-right: 10px" /> <a class="link2" href="https://api.whatsapp.com/send?phone=6281311442228" target="_blank">081311442228</a> / <a class="link2" href="https://api.whatsapp.com/send?phone=6282299733338" target="_blank">082299733338</a> / <a class="link2" href="https://api.whatsapp.com/send?phone=6285214933518" target="_blank">085214933518</a></p>
                                    <p style="margin-bottom: 15px"><img src="~@/assets/images/envelope-black.png" width="20px" height="20px" class="img-responsive" alt="" style="" align="left" style="margin-right: 10px" /> <a class="link2" href="mailto:cs@asani.co.id" target="_blank"> cs@asani.co.id</a></p>
                                    <p><img src="~@/assets/images/phone-black.png" width="20px" height="20px" class="img-responsive" alt="" style="" align="left" style="margin-right: 10px" /> <a class="link2" href="tel:6281311442228" target="_blank">081311442228</a> / <a class="link2" href="tel:6282299733338" target="_blank">082299733338</a> / <a class="link2" href="tel:6285214933518" target="_blank">085214933518</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                <li><span class="text-link" @click="trackPage('/', 'Footer-produk_tersedia')"> Produk Tersedia </span></li>
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
        <!-- Preloader End -->
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
                                    <a class="btn btn-masuk-login-help" @click="doSendOtp">Submit</a>

                                </v-form>
                                <!-- DO LOGIN -->
                                <v-form v-else ref="formOtp" v-model="validOtp" lazy-validation>
                                    <v-flex>
                                        <v-text-field v-model="otp" type="number" placeholder="XXXX" label="Masukkan OTP" :rules="otpRules" required outline clearable></v-text-field>
                                    </v-flex>
                                    <a class="btn btn-masuk-login-help" @click="doLogin">Submit</a>
                                    <div v-if="!resendSatuKali">
                                        <countdown :time="3 * 60 * 1000" @countdownend="countHabis" ref="countdown">
                                            <a v-if="!resend" class="btn btn-masuk-login-help mt-1 disabled" slot-scope="props">Re-send OTP in {{ props.minutes }}:{{ props.seconds }}</a>
                                            <a v-else class="btn btn-masuk-login-help mt-1" @click="doResendSendOtp">Re-send OTP</a>
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
export default {
    name: 'landing-page',
    components: {},
    data() {
        return {
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
        countHabis (){
            this.resend = true
        },
        doResendSendOtp() {
            this.resendSatuKali = true
            this.$ga.event(window.location.pathname, 'click_button', 'Re-send OTP', 1)
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
            this.$ga.event(window.location.pathname, 'click_button', e, 1)
        },
        closeLoginModal() {
            $('#modal-masuk').modal('hide')
        },
        openLoginModal() {
            $("#modal-masuk").modal('show')
        },
        doSendOtp() {
            this.btnSendOtpClicked = true
            this.$ga.event(window.location.pathname, 'click_button', 'Submit Phone Number', 1)
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
            this.$ga.event(window.location.pathname, 'click_button', 'Submit Otp Number', 1)
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
        cekModal() {

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
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        formatPrice(value) {
            let val = (value)
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        toPage(e) {
            this.$router.push(e)
        }
    },
    destroyed() {
        this.closeLoginModal()
    },
    created() {
        this.scrollToTop()
        this.isLogged()
        this.closeLoginModal()
    }
}
</script>

<style type="text/css">
    .site-header{
        padding-top: 5px;
        padding-bottom: 5px;
        width: 100%;
        background-color: #2797FB;
    }
    .site-header .navbar-brand{
         margin-top: 0px; 
         margin-bottom: 0px; 
        margin-left: 0;
        z-index: 6;
    }
    .non-underline{
        text-decoration: none;
    }
    .non-margin{
        margin: 0 auto;
        max-width: 825px;
    }
    .desktop-faq{
        padding: 0 12px;
        margin-top: 50px;
    }
    .border-hubungi-kiri{ 
        width: 200px; 
        background: #2797fb; 
        border-top-left-radius: 5px; 
        border-bottom-left-radius: 5px; 
        border-right: 1px solid #ddd; 
        border-left: 1px solid #ddd; 
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd; 
    }
    .border-hubungi-kanan{ 
        border-top-right-radius: 5px; 
        border-bottom-right-radius: 5px; 
        border-right: 1px solid #ddd; 
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd; 
        padding-top: 15px;
    }

    @media (max-width:767px) {
        .desktop-faq{
            margin:auto;
            padding: 0 12px;
            margin-top: 50px;
        }
        .border-hubungi-kiri{ 
            width: 100%; 
            background: #2797fb; 
            border-top-left-radius: 5px; 
            border-top-right-radius: 5px;
            border-bottom-left-radius: 0px; 
            border-right: 1px solid #ddd; 
            border-left: 1px solid #ddd; 
            border-top: 1px solid #ddd;
            /*border-bottom: 1px solid #ddd;  */
        }
        .border-hubungi-kanan{ 
            border-top-right-radius: 0px; 
            border-bottom-left-radius: 5px; 
            border-right: 1px solid #ddd; 
            border-left: 1px solid #ddd;
            border-bottom: 1px solid #ddd; 
            border-top: none;
            padding-top: 15px;
        }
        .page-question{
            /*margin:auto;*/
        }
    }
    
</style>
    <!-- ACCORDION -->
    <style type="text/css">
        a:hover,a:focus{
            text-decoration: none;
            outline: none;
        }
        #accordion .panel{
            border: none;
            box-shadow: none;
            border-radius: 0;
            margin: 0 0 15px 10px;
        }
        #accordion .panel-heading{
            padding: 0;
            border-radius: 30px;
        }
        #accordion .panel-title a{
            display: block;
            padding: 12px 20px 12px 50px;
            background: #2797FB;
            font-size: 14px;
            font-weight: 600;
            color: #fff;
            border: 1px solid transparent;
            border-radius: 30px;
            position: relative;
            transition: all 0.3s ease 0s;
        }
        #accordion .panel-title a.collapsed{
            background: #fff;
            color: #2797FB;
            border: 1px solid #ddd;
            font-size: 14px;
        }
        #accordion .panel-title a:after,
        #accordion .panel-title a.collapsed:after{
            content: "\f107";
            font-family: "Font Awesome 5 Free";
            font-weight: 900;
            width: 55px;
            height: 55px;
            line-height: 55px;
            border-radius: 50%;
            background: #2797FB;
            font-size: 25px;
            color: #fff;
            text-align: center;
            border: 1px solid transparent;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.58);
            position: absolute;
            top: -5px;
            left: -20px;
            transition: all 0.3s ease 0s;
        }
        #accordion .panel-title a.collapsed:after{
            content: "\f105";
            background: #fff;
            color: #0d345d;
            border: 1px solid #ddd;
            box-shadow: none;
        }
        #accordion .panel-body{
            padding: 20px 25px 10px 9px;
            background: transparent;
            font-size: 14px;
            color: #8c8c8c;
            line-height: 25px;
            border-top: none;
            position: relative;
            max-width: 825px;
            margin: 0 auto;
        }
        #accordion .panel-body p{
            padding-left: 25px;
            border-left: 1px dashed #8c8c8c;
        }

        .css-hgu0wg {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            -webkit-box-pack: start;
            justify-content: flex-start;
            -webkit-box-align: center;
            align-items: center;
            align-content: center;
            width: 100%;
            font-size: 0.875rem;
            padding-left: 15px;
            border-left: 10px solid rgb(94, 108, 132);
        }

        pb {
            /*font-family: "Inter UI", -apple-system, BlinkMacSystemFont, "San Francisco", Roboto, "Segoe UI", "Helvetica Neue", sans-serif;*/
            font-size: 14px;
            line-height: 16px;
            font-weight: 700;
            width: 100%;
            color: #172b4d;
            margin-bottom: 5px;
        }

        pa {
            /*font-family: "Inter UI", -apple-system, BlinkMacSystemFont, "San Francisco", Roboto, "Segoe UI", "Helvetica Neue", sans-serif;*/
            font-size: 16px;
            line-height: 18px;
            font-weight: 400;
            width: 100%;
            color: #172b4d;
            margin-bottom: 5px;
        }

        pt {
            /*font-family: "Inter UI", -apple-system, BlinkMacSystemFont, "San Francisco", Roboto, "Segoe UI", "Helvetica Neue", sans-serif;*/
            font-size: 14px;
            line-height: 16px;
            font-weight: 400;
            width: 100%;
            color: #172b4d;
            margin-bottom: 5px;
        }

        .head-title{
            width: 100%;
            margin-bottom: 20px;
        }

        .head-title h3{
            text-align: center;
            margin: 0;
            font-size: 45px;
        }

        .head-title h6{
            text-align: center;
            font-size: 14px;
        }

      
/*Start LOGIN POPUP*/

.btn-masuk-login-help {
    width: 100%;
    height: 40px;
    border-radius: 2px;
    padding: 10px;
}

.btn-masuk-login-help:hover {
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
    </style>