<template>
    <div>
        <!-- Header -->
        <div id="site-header" style="background-color: #0079ff;">

            <!-- Navbar -->
            <div class="navbar navbar-expand-lg" id="mainnav">
                <nav id="navv-other-home" class="container">
                    <a class="navbar-brand non-underline" @click="trackPage('/', 'Header-back')" style="color: #fff; cursor: pointer;">
                        <div class="logo logo-dark fas fa-arrow-left" style="margin-right: 8px;"></div> Detail Produk
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
                            <li v-if="!alreadyLogin"><a id="btn-masuk-login" class="nav-link menu-link non-underline text-white" data-toggle="modal" data-target="#modal-masuk" @click="cekModal()" data-backdrop="static" data-keyboard="false"><i class="fas fa-sign-in-alt login" aria-hidden="true" style="margin-right: 5px;"></i>Masuk / Daftar</a></li>
                            <li v-if="alreadyLogin"><a id="btn-masuk-login" class="nav-link menu-link non-underline nav-text-bantuan text-white" @click="handleLogout"><i class="fas fa-sign-out-alt" aria-hidden="true" style="margin-right: 5px;"></i>Keluar</a></li>
                            <!-- <li><a class="nav-link menu-link non-underline nav-text-bantuan text-white" data-toggle="modal" data-target="#modal-masuk"><i class="fas fa-shopping-cart" aria-hidden="true" style="margin-right: 5px;"></i>Keranjang (0)</a></li> -->
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <!-- End Navbar -->

        <div class="section section-pad section-bg-alt" id="about" style="padding-top: 50px; padding-bottom: 0px; background: #fff;">
            <div class="container">
                <div class="row text-center">
                    <div class="col-sm-1 col-lg-1"></div>
                    <aside class="col-sm-12 col-lg-5" style="padding: 0px 50px;">
                        <article class="gallery-wrap">
                            <div class="img-big-wrap">
                                <div>
                                    <carousel v-on:pageChange="pageChanged" :navigateTo="pageNo" :per-page=1 :autoplay=true :centerMode=true :paginationEnabled=false :navigationEnabled=true navigationNextLabel="<img src='/static/Rental-NEW/assets/images/next-arrow.png'></div>" navigationPrevLabel="<img src='/static/Rental-NEW/assets/images/left-arrow.png'></div>" :loop=true :autoplayTimeout=5000>
                                        <slide v-for="(banner, index) in images" :key="index">
                                            <center><img :src=banner></center>
                                        </slide>
                                    </carousel>
                                </div>
                            </div>
                            <center class="desktop-img-wrapper">
                                <div class="img-small-wrap" style="width: 50%; margin: 0 auto;">
                                    <carousel :navigateTo="slideNo" style="max-width: 100%;" :per-page=3 :centerMode=true :paginationEnabled=false :navigationEnabled=false :loop=true>
                                        <slide v-for="(banner, index) in images" :key="index">
                                            <center>
                                                <div class="item-gallery" v-if="index===pageNo" autofocus style="border: 2px solid #2797fb; padding: 5px;"><img :src=banner @click="pageChanged(index)"></div>
                                                <div class="item-gallery" v-else style="padding: 5px;"><img :src=banner @click="pageChanged(index)"></div>
                                            </center>
                                        </slide>
                                    </carousel>
                                </div>
                            </center>
                            <center class="mobile-img-wrapper">
                                <div class="img-small-wrap" style="width: 70%; margin: 0 auto;">
                                    <carousel :navigateTo="slideNo" style="max-width: 100%;" :per-page=3 :centerMode=true :paginationEnabled=false :navigationEnabled=false :loop=true>
                                        <slide v-for="(banner, index) in images" :key="index">
                                            <center>
                                                <div class="item-gallery" v-if="index===pageNo" autofocus style="border: 2px solid #2797fb; padding: 5px;"><img :src=banner @click="pageChanged(index)"></div>
                                                <div class="item-gallery" v-else style="padding: 5px;"><img :src=banner @click="pageChanged(index)"></div>
                                            </center>
                                        </slide>
                                    </carousel>
                                </div>
                            </center>
                        </article>
                        <!-- gallery-wrap .end// -->
                    </aside>
                    <aside class="col-sm-12 col-lg-5 divider-three-tab">
                        <article class="card padding-card produk-text">
                            <h3 class="title mb-3 produk-text">{{ product.productTitle }} </h3>

                            <div v-if="!disableBuy && !disableRent" class="row detail-two-column pad" style="padding-left: 15px;margin-bottom: 20px; padding-top: 10px">
                                <!-- div  @click="selectedToRent"> -->
                                <div @click="selectedToRent" v-if="!isRent" class="col-sm-6 col-xs-6 btn-rent" style="">
                                    <p>Sewa</p>
                                </div>
                                <div @click="selectedToRent" v-if="isRent" class="col-sm-6 col-xs-6 btn-rent-selected" style=" color: #fff;">
                                    <p>Sewa</p>
                                </div>
                                <!-- </div> -->
                                <!-- <div @click="selectedToBuy"> -->
                                <div @click="selectedToBuy" v-if="isRent" class="col-sm-6 col-xs-6 btn-buy" style="font-weight: 600;">
                                    <p>Beli</p>
                                </div>
                                <div @click="selectedToBuy" v-if="!isRent" class="col-sm-6 col-xs-6 btn-buy-selected" style=" color: #fff;">
                                    <p>Beli</p>
                                </div>
                                <!-- </div> -->
                            </div>

                            <div class="row detail-two-column" v-if="isRent">
                                <div class="col-sm-6 col-xs-6">
                                    <dl class="param param-inline">
                                        <dt class="text-left">Durasi </dt>
                                        <dd>
                                            <multiselect v-model="pilihanDuration" select-label="" deselect-label="" label="tenorMonths" placeholder="Select one" :options="duration" :searchable="false" :allow-empty="false">
                                            </multiselect>
                                        </dd>
                                    </dl>
                                    <!-- item-property .// -->
                                </div>
                                <!-- col.// -->
                                <div class="col-sm-6 col-xs-6">
                                    <dl class="param param-inline">
                                        <dt class="text-left">Jumlah </dt>
                                        <dd>
                                            <div class="input-jml">
                                                <button id="btn_min_jml" class="chart-btn-minus" v-on:click="minJml" disabled=""><i class="fa fa-minus-circle" aria-hidden="true"></i></button>
                                                <input id="jumlahSewa" class="input_jumlah text-center" v-model="jumlahSewa" v-on:keypress="hanyaAngka(event)" @input="type">
                                                <button class="chart-btn-plus" v-on:click="plusJml"><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
                                            </div>
                                        </dd>
                                    </dl>
                                    <!-- item-property .// -->
                                </div>
                            </div>
                            <div class="row" v-if="!isRent">
                                <div class="col-sm-12">
                                    <dl class="param param-inline">
                                        <dt class="text-left">Jumlah </dt>
                                        <dd>
                                            <div class="input-jml">
                                                <button id="btn_min_jml" class="chart-btn-minus" v-on:click="minJml" disabled=""><i class="fa fa-minus-circle" aria-hidden="true"></i></button>
                                                <input id="jumlahSewa" class="input_jumlah text-center" v-model="jumlahSewa" v-on:keypress="hanyaAngka(event)" @input="type">
                                                <button class="chart-btn-plus" v-on:click="plusJml"><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
                                            </div>
                                        </dd>
                                    </dl>
                                    <!-- item-property .// -->
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <dl class="param param-inline">
                                        <dt class="text-left">Catatan</dt>
                                        <dd>
                                            <textarea class="input_note" name="note" v-model="note" placeholder="Sampaikan catatan kamu"></textarea>
                                        </dd>
                                    </dl>
                                    <!-- item-property .// -->
                                </div>
                            </div>
                            <div class="row detail-two-column" v-if="isRent">
                                <div class="col-sm-6">
                                    <dl class="param param-inline">
                                        <dt class="text-left">Deposit</dt>
                                    </dl>
                                    <!-- item-property .// -->
                                </div>
                                <!-- col.// -->
                                <div class="col-sm-6">
                                    <dl class="param param-inline text-right">
                                        <dt class="text-right">Rp {{ formatPrice(pilihanDuration.feeSecurity*jumlahSewa) }}</dt>
                                    </dl>
                                    <!-- item-property .// -->
                                </div>
                            </div>
                            <div class="row detail-two-column" v-if="isRent">
                                <div class="col-sm-6">
                                    <dl class="param param-inline text-left">
                                        <dt>Biaya Sewa</dt>
                                    </dl>
                                    <!-- item-property .// -->
                                </div>
                                <!-- col.// -->
                                <div class="col-sm-6 text-right">
                                    <dl class="param param-inline text-right">
                                        <dt>Rp {{ formatPrice(pilihanDuration.feeRent*jumlahSewa) }}/bulan</dt>
                                    </dl>
                                    <!-- item-property .// -->
                                </div>
                            </div>
                            <div class="row detail-two-column" v-if="!isRent">
                                <div class="col-sm-6">
                                    <dl class="param param-inline text-left">
                                        <dt>Harga</dt>
                                    </dl>
                                    <!-- item-property .// -->
                                </div>
                                <!-- col.// -->
                                <div class="col-sm-6 text-right">
                                    <dl class="param param-inline text-right">
                                        <dt>Rp {{ formatPrice(product.productPrice*jumlahSewa) }}</dt>
                                    </dl>
                                    <!-- item-property .// -->
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <button class="btn btn-isi-sewa" @click="showAlert"> Isi Formulir</button>
                                    <!-- <button class="btn btn-isi-sewa" data-toggle="modal" data-target="#modal-masuk"> Isi Formulir & Sewa!</button> -->

                                    <!-- item-property .// -->
                                </div>
                            </div>
                            <!-- col.// -->
                            <!-- row.// -->
                        </article>
                        <!-- card-body.// -->
                    </aside>
                    <div class="col-sm-1 col-lg-1"></div>
                    <!-- col.// -->
                </div>
                <!-- row.// -->
            </div>
        </div>

        <div class="section section-bg-alt" id="three-tab" style="background: #fff">
            <div class="divider-product"></div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-1"></div>
                    <div class="col-lg-12 col-sm-12">
                        <ul class="nav tab-nav tab-nav-line tab-nav-center" style="width: 100%; display: -webkit-flex;  display: flex; ">
                            <li style="width: 50%; "><a class="active" data-toggle="tab" href="#tab-4-1">Deskripsi</a></li>
                            <li style="width: 50%; "><a data-toggle="tab" href="#tab-4-2">Spesifikasi</a></li>
                            <!-- <li><a data-toggle="tab" href="#tab-4-4">Nav Four</a></li> -->
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane fade show active text-black" id="tab-4-1">
                                <div class="d-sm-block d-md-block d-xl-none d-lg-none">
                                    <!-- <span class="title-brand-mobile text-black"> {{ product.productBrand }} {{ product.productName }}</span> -->
                                </div>
                                <p class="text-justify" v-html="product.productDesc"></p>
                            </div>
                            <div class="tab-pane fade" id="tab-4-2">
                                <div class="display-spesifikasi">
                                    <div class="row">
                                        <div class="col-6">
                                            <table style="padding: auto;" class="tab-spesifikasi">
                                                <tr>
                                                    <td style="width: 25%; color: rgba(0, 0, 0, 0.33);">Processor</td>
                                                    <td class="text-black">{{ product.productProcessor }}</td>
                                                </tr>
                                                <tr>
                                                    <td style="color: rgba(0, 0, 0, 0.33);">RAM</td>
                                                    <td class="text-black">{{ product.productRam }}</td>
                                                </tr>
                                                <tr>
                                                    <td style="color: rgba(0, 0, 0, 0.33);">HDD</td>
                                                    <td class="text-black">{{ product.productHdd }}</td>
                                                </tr>
                                                <tr v-if="product.productVga">
                                                    <td style="color: rgba(0, 0, 0, 0.33);">VGA</td>
                                                    <td class="text-black">{{ product.productVga}}</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div class="col-6">
                                            <table style="padding: auto;" class="tab-spesifikasi">
                                                <tr>
                                                    <td style="color: rgba(0, 0, 0, 0.33);">Ukuran Layar</td>
                                                    <td class="text-black">{{ product.productScreen }}</td>
                                                </tr>
                                                <!-- <tr>
                                                    <td style="color: rgba(0, 0, 0, 0.33);">Kondisi</td>
                                                    <td class="text-black">{{kondisi.conditionDevices}}</td>
                                                </tr> -->
                                                <tr>
                                                    <td style=" color: rgba(0, 0, 0, 0.33);"></td>
                                                    <td style=""></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                                <div class="d-sm-block d-md-block d-xl-none d-lg-none">
                                    <span class="title-brand-mobile text-black"> </span>
                                    <table style="width: 100%" class="tab-spesifikasi">
                                        <tr>
                                            <td style="width: 25%; color: rgba(0, 0, 0, 0.33);">Processor</td>
                                            <td class="text-black">{{ product.productProcessor }}</td>
                                        </tr>
                                        <tr>
                                            <td style="color: rgba(0, 0, 0, 0.33);">RAM</td>
                                            <td class="text-black">{{ product.productRam }}</td>
                                        </tr>
                                        <tr>
                                            <td style="color: rgba(0, 0, 0, 0.33);">HDD</td>
                                            <td class="text-black">{{ product.productHdd }}</td>
                                        </tr>
                                        <tr v-if="product.productVga">
                                            <td style="color: rgba(0, 0, 0, 0.33);">VGA</td>
                                            <td class="text-black">{{ product.productVga}}</td>
                                        </tr>
                                        <tr>
                                            <td style="color: rgba(0, 0, 0, 0.33);">Ukuran Layar</td>
                                            <td class="text-black">{{ product.productScreen }}</td>
                                        </tr>
                                        <!-- <tr>
                                            <td style="color: rgba(0, 0, 0, 0.33);">Kondisi</td>
                                            <td class="text-black">{{kondisi.conditionDevices}}</td>
                                        </tr> -->
                                    </table>
                                </div>
                            </div>
                            <!-- <div class="tab-pane fade" id="tab-4-3">
                                <div class="d-sm-block d-md-block d-xl-none d-lg-none">
                                   <span class="title-brand-mobile text-black"> {{ product.productBrand }} {{ product.productName }}</span>
                                </div>
                                <table style="width: 100%">
                                    <tr>
                                        <td style="width: 40%;" class="text-black">Biaya deposit awal</td>
                                        <td style="width: 60%" class="text-black-b"><b>Rp {{ formatPrice(pilihanDuration.feeSecurity) }}</b></td>
                                    </tr>
                                    <tr>
                                        <td style="width: 40%;" class="text-black">Biaya sewa tiap bulan</td>
                                        <td style="width: 60%" class="text-black-b"><b>Rp {{ formatPrice(pilihanDuration.feeRent) }}</b></td>
                                    </tr>
                                </table>
                                <div class="line-break"></div>
                                <div style="text-align: right; line-height: 1.5;">
                                    <p style="margin-bottom: 4px" class="text-black-b"><b>Metode pembayaran</b></p>
                                    <p style="margin-bottom: 0px" class="text-black">Transfer Bank</p>
                                    <p style="margin-bottom: 0px; color: rgba(0, 0, 0, 0.5);">BCA - Bank Central Asia</p>
                                    <p style="margin-bottom: 0px; color: rgba(0, 0, 0, 0.5);">5020727278</p>
                                    <p style="margin-bottom: 0px; color: rgba(0, 0, 0, 0.5);">PT Teknologi Skoring Nusantara</p>

                                </div>
                            </div> -->
                        </div>
                    </div>
                    <div class="col-sm-6"></div>
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
                                    <a class="btn product-btn-masuk-login" @click="doSendOtp">Submit</a>

                                </v-form>
                                <!-- DO LOGIN -->
                                <v-form v-else ref="formOtp" v-model="validOtp" lazy-validation>
                                    <v-flex>
                                        <v-text-field v-model="otp" type="number" placeholder="XXXX" label="Masukkan OTP" :rules="otpRules" required outline clearable></v-text-field>
                                    </v-flex>
                                    <a class="btn product-btn-masuk-login" @click="doLogin">Submit</a>
                                    <div v-if="!resendSatuKali">
                                        <countdown :time="3 * 60 * 1000" @countdownend="countHabis" ref="countdown">
                                            <a v-if="!resend" class="btn product-btn-masuk-login mt-1 disabled" slot-scope="props">Re-send OTP in {{ props.minutes }}:{{ props.seconds }}</a>
                                            <a v-else class="btn product-btn-masuk-login mt-1" @click="doResendSendOtp">Re-send OTP</a>
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
import swal from 'sweetalert'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css';
export default {
    name: 'landing-page',
    components: {
        Multiselect
    },
    data() {
        return {
            isRent: true,
            disableBuy: false,
            disableRent: false,
            title: "",
            value: 'Select One',
            options: ['Select option', 'options', 'selected', 'mulitple', 'label', 'searchable', 'clearOnSelect', 'hideSelected', 'maxHeight', 'allowEmpty', 'showLabels', 'onChange', 'touched'],
            tampilProduct: 0,
            images: null,
            test: [],
            pilihanSkema: {
                tenor: [],
                productMemory: 'Pilih Memori'
            },
            gambarDefault: [],
            storage: [],
            duration: [],
            kondisi: [],
            jumlahSewa: 1,
            named: 'request-rent',
            note: '',
            pilihanDuration: {
                feeSecurity: 0,
                feeRent: 0,
                // buybackPrice: 0,
                value: null,
                name: "Silahkan Pilih terlebih dahulu",
                tenorMonths: 'Pilih Durasi'
            },
            product: [],
            pageNo: 0,
            slideNo: 0,
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
    computed: {
        // valueJumlahSewa(){
        //     return this.jumlahSewa;
        // }
    },
    methods: {
        selectedToRent() {
             this.$ga.event(window.location.pathname, 'click_button', 'Sewa', 1)
            this.isRent = true
        },
        selectedToBuy() {
            this.$ga.event(window.location.pathname, 'click_button', 'Beli', 1)
            this.isRent = false
        },
        countHabis() {
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
        type() {
            var jml = this.jumlahSewa.length
            this.jumlahSewa = parseInt(this.jumlahSewa)
            if (jml < 1) {
                this.jumlahSewa = 0;
            }
            if (this.jumlahSewa < 2) {
                document.getElementById("btn_min_jml").disabled = true;
            } else {
                document.getElementById("btn_min_jml").disabled = false;
            }
        },
        plusJml() {
            this.jumlahSewa = parseInt(this.jumlahSewa) + 1
            if (this.jumlahSewa < 2) {
                document.getElementById("btn_min_jml").disabled = true;
            } else {
                document.getElementById("btn_min_jml").disabled = false;
            }
        },
        minJml() {
            this.jumlahSewa = this.jumlahSewa - 1
            if (this.jumlahSewa < 2) {
                document.getElementById("btn_min_jml").disabled = true;
            } else {
                document.getElementById("btn_min_jml").disabled = false;
            }
        },
        hanyaAngka: function(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
                evt.preventDefault();;
            } else {
                var leng = 2
                if (this.jumlahSewa.length >= 1) {
                    leng = this.jumlahSewa.length + 1
                }
                return true;
            }
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
                            if (this.btnSewaClicked)
                                this.requestRent()
                            else location.reload(true)
                        } else {
                            swal("OTP yang anda masukkan salah", "", "warning", {
                                    buttons: {
                                        agree: "OK",
                                    },
                                })
                                .then((value) => {

                                });
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
        isLogged() {
            this.alreadyLogin = localStorage.getItem('token') != null
            return this.alreadyLogin
        },
        resetLoginProp() {
            this.inputOtp = false
            this.otp = ''
            this.validPhone = true
            this.validOtp = true
            this.btnSendOtpClicked = false
            this.btnLoginClicked = false
        },
        formatPrice(value) {
            let val = (value)
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        pageChanged(e) {
            var temp = e / 3
            var slideNumb = 0
            for (var i = 0; i <= this.images.length; i++) {
                if (temp >= slideNumb) {
                    slideNumb = slideNumb + 1
                }
            }
            this.slideNo = slideNumb - 1
            this.pageNo = e
        },
        requestRent() {
            this.closeLoginModal()
            this.$ga.event(window.location.pathname, 'click_button', 'Isi Formulir', 1)
            let totalPurchase = this.pilihanDuration.feeRent * this.jumlahSewa
            if (!this.isRent)
                totalPurchase = this.product.productPrice * this.jumlahSewa

            localStorage.setItem('productTitle', this.product.productTitle)
            localStorage.setItem('duration', this.pilihanDuration.tenorMonths)
            localStorage.setItem('productPrice', this.product.productPrice)
            localStorage.setItem('note', this.note)

            localStorage.setItem('feeRent', this.pilihanDuration.feeRent)
            localStorage.setItem('colorName', this.product.color[0].colorName)
            localStorage.setItem('quantity', this.jumlahSewa)
            localStorage.setItem('totalPurchase', totalPurchase)

            localStorage.setItem('feeSecurity', this.pilihanDuration.feeSecurity)
            localStorage.setItem('productBrand', this.product.productBrand)
            localStorage.setItem('productName', this.product.productName)
            localStorage.setItem('productProcessor', this.product.productProcessor)
            localStorage.setItem('productRam', this.product.productRam)
            localStorage.setItem('productScreen', this.product.productScreen)
            localStorage.setItem('conditionDevices', 'Baru')
            localStorage.setItem('productHdd', this.product.productHdd)
            if (this.product.productVga != null)
                localStorage.setItem('productVga', this.product.productVga)
            localStorage.setItem('buybackPrice', this.pilihanDuration.buybackPrice)
            localStorage.setItem('productId', this.product.productId)
            if (this.isRent)
                this.toPage('/request-rent/' + this.$route.params.productSlug)
            else
                this.toPage('/buy/' + this.$route.params.productSlug)
        },
        showAlert() {
            if ((this.isRent && this.pilihanDuration.tenorMonths == 'Pilih Durasi') || this.jumlahSewa <= 0) {
                var message = ""
                if (this.isRent) {
                    if (this.pilihanDuration.tenorMonths == 'Pilih Durasi' && this.jumlahSewa <= 0) {
                        message = "Harap pilih durasi dan jumlah sewa terlebih dahulu"
                    } else if (this.pilihanDuration.tenorMonths == 'Pilih Durasi') {
                        message = "Harap pilih durasi terlebih dahulu"
                    } else {
                        message = "Harap masukkan jumlah sewa terlebih dahulu"
                    }
                } else {
                    if (this.jumlahSewa <= 0) {
                        message = "Harap masukkan jumlah terlebih dahulu"
                    }
                }

                swal(message, "", "warning", {
                        buttons: {
                            agree: "OK",
                        },
                    })
                    .then((value) => {});
            } else {
                this.btnSewaClicked = true
                if (this.isLogged()) {
                    this.requestRent()
                } else
                    this.openLoginModal()
            }
        },
        toPage(e) {
            this.$router.push(e)
        },
        cekClass() {
            if ($("body").hasClass("modal-open")) {
                // console.log("tul")
            } else {
                // console.log("lah")
            }
        },
        cekModal() {
            this.$ga.event(window.location.pathname, 'click_button', 'Header-Masuk/Daftar', 1)
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
    destroyed() {
        this.closeLoginModal()
    },
    created() {
        this.scrollToTop()
        this.cekClass()
        this.cekModal()
        this.closeLoginModal()

        this.title = this.$route.params.productSlug
        this.isRent = true
        if (localStorage.getItem('toBuyProduct') != null)
            this.isRent = !localStorage.getItem('toBuyProduct')
        this.disableBuy = false
        this.disableRent = false

        var mtoken = localStorage.getItem('token')
        var mphoneNumber = localStorage.getItem('phoneNumber')

        if (this.isLogged()) {
            localStorage.clear()
            localStorage.setItem('token', mtoken)
            localStorage.setItem('phoneNumber', mphoneNumber)
        }

        this.$http.post(process.env.API_PROD_DESC, {
                productSlug: this.$route.params.productSlug,
                category: localStorage.getItem('category')
            })
            .then(response => {
                this.tampilProduct = 1
                var idx = 0
                this.images = response.data.content.img

                // this.duration[0] = { value: 6, name: "6 bulan" }
                this.duration[0] = {
                    value: 12,
                    name: "12 bulan"
                }
                this.gambarDefault = response.data.content.img
                this.warna = response.data.content.color
                this.kondisi = response.data.content.condition
                this.storage = response.data.content.storage
                this.product = response.data.content
                if (this.product.productPrice === null || this.product.productPrice === "" || this.product.productPrice === 0) {
                    this.disableBuy = true
                }
                if (this.product.tenor===null|| this.product.tenor.length<1 || this.product.tenor[0].feeRent === null || this.product.tenor[0].feeRent === "" || this.product.tenor[0].feeRent === 0) {
                    this.disableRent = true
                }

                this.duration = response.data.content.tenor
            })
            .catch(function(error) {
                console.log(error)
            })
    }
}
</script>

<style>
.btn-rent {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    border: 1px solid #e8e8e8;
    padding: 10px 34px;
    height: 42px;
    line-height: 21px;
    font-size: .9em;
    color: #2797FB;
    font-weight: 600;
    transition: all .4s;
    background-color: transparent;
    border-right: none;
    cursor: pointer;
}

.btn-rent-selected {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    border: 1px solid #2797FB;
    padding: 10px 34px;
    height: 42px;
    line-height: 21px;
    font-size: .9em;
    color: #2797FB;
    font-weight: 600;
    transition: all .4s;
    background-color: #2797FB;
    border-right: none;
    cursor: pointer;
}

.btn-buy {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border: 1px solid #e8e8e8;
    padding: 10px 34px;
    height: 42px;
    cursor: pointer;
    line-height: 21px;
    font-weight: 600;
    font-size: .9em;
    color: #2797FB;
    transition: all .4s;
    background-color: transparent;
    border-left: none;
}

.btn-buy-selected {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border: 1px solid #2797FB;
    padding: 10px 34px;
    height: 42px;
    line-height: 21px;
    font-weight: 600;
    font-size: .9em;
    color: #2797FB;
    transition: all .4s;
    background-color: #2797FB;
    border-left: none;
}

.desktop-img-wrapper {}

.chart-btn-minus:disabled {
    color: #3C3C3C;
}

.chart-btn-minus:focus {
    outline: none;
}

.chart-btn-plus:focus {
    outline: none;
}

.chart-btn-plus {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    border: 1px solid #dbe4f7;
    padding: 10px 15px;
    line-height: 21px;
    font-size: .9em;
    color: #2797FB;
    transition: all .4s;
    background-color: transparent;
    border-right: none;
}

.chart-btn-minus {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border: 1px solid #dbe4f7;
    padding: 10px 15px;
    line-height: 21px;
    font-size: .9em;
    color: #2797FB;
    transition: all .4s;
    background-color: transparent;
    border-left: none;
}

.input-jml {
    display: flex;
}

.input_jumlah {
    min-height: 40px;
    display: block;
    padding: 0px 0px 0 0px;
    border-radius: 5px;
    border: 1px solid #e8e8e8;
    background: #fff;
    font-size: 14px;
    width: 100%;
}

.input_note {
    min-height: 40px;
    display: block;
    padding: 0px 0px 0 8px;
    border-radius: 5px;
    border: 1px solid #e8e8e8;
    background: #fff;
    font-size: 14px;
    width: 100%;
    min-height: 150px;
}

.mobile-img-wrapper {}

.pad {}

@media (max-width: 992px) {
    .desktop-img-wrapper {
        opacity: 0;
        display: none;
        visibility: hidden;
    }
    .pad {
        padding-right: 0px;
    }
}

@media (min-width: 992px) {
    .mobile-img-wrapper {
        opacity: 0;
        display: none;
        visibility: hidden;
    }
    .pad {
        padding-right: 15px;
    }
}

.swal-title {
    color: rgba(0, 0, 0, .65);
    font-weight: 600;
    text-transform: none;
    position: relative;
    display: block;
    padding: 13px 16px;
    font-size: 20px;
    line-height: normal;
    text-align: center;
}

.swal-button {
    display: block;
    width: -webkit-fill-available;
    margin-bottom: 10px;
    width: -moz-available;
    background-color: #fff;
}

.swal-button-container {
    margin: 5px;
    display: block;
    position: relative;
}

.swal-button--agree {
    color: #fff;
    background-color: #2797fb;
}

.swal-button--canceled {
    color: #2797fb;
    background-color: #fff;
    outline-style: none;
}

table.tab-spesifikasi td {
    vertical-align: top;
    min-width: 110px;
}

.line-break {
    display: block;
    margin: 13px 0;
    overflow: hidden;
    border-color: #efeff4;
    border-style: solid;
    border-width: 0.5px;
}

.nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    list-style: none;
}

ul,
ol,
table {
    margin: 0;
    padding: 0;
}

.tab-nav-line {
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(219, 228, 247, 0.5);
    text-align: center;
}

.tab-nav-center {
    /*justify-content: center;*/
}

.tab-nav-line li a:hover,
.tab-nav-line li a.active {
    color: #16a3fe;
}

.tab-nav-line li a {
    border-bottom: none;
    position: relative;
}

.tab-nav li a {
    display: block;
    padding: 12px 12px;
    line-height: 19px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.33);
    /*border-bottom: 1px solid rgba(219,228,247,0.5);*/
    transition: all .4s;
}

a:link,
a:visited {
    text-decoration: none;
}

.tab-nav-line li a.active:after {
    opacity: 1;
}

.tab-nav-line li a:after {
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: -2px;
    content: '';
    background: #2797fb;
    opacity: 0;
    transition: all .4s;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

.btn-isi-sewa {
    height: 42px;
    width: 100%;
    text-transform: none;
    border-radius: 4px;
}

.btn-isi-sewa:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    color: #fff;
}

.non-underline {
    text-decoration: none;
}

.produk-dropdown {
    background: rgba(122, 92, 255, 0.1);
    height: 44px;
    border-radius: 0;
    border: none;
}

.produk-text {
    color: #000;
}

.site-header .navbar-brand {
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 0;
    z-index: 6;
}

.gallery-wrap .img-big-wrap img {
    height: auto;
    width: auto;
    display: inline-block;
    /*cursor: zoom-in;*/
}

.gallery-wrap .img-small-wrap .item-gallery {
    width: 60px;
    height: 60px;
    border: 1px solid #ddd;
    margin: 7px 2px;
    display: inline-block;
    overflow: hidden;
}

.gallery-wrap .img-small-wrap {
    text-align: center;
}

.gallery-wrap .img-small-wrap img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 4px;
    /*cursor: zoom-in;*/
}


/*Start LOGIN POPUP*/

.product-btn-masuk-login {
    margin: 0 auto;
    padding: 0;
    display: inline-block;
    line-height: 40px;
    text-align: center;
    width: 100%;
    height: 40px;
    border-radius: 2px;
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