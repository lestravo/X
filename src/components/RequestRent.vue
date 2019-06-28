<template>
    <div>
        <div id="site-header" style="background-color: #0079ff;">

            <!-- Navbar -->
            <div class="navbar navbar-expand-lg" id="mainnav">
                <nav id="navv-other-home" class="container">
                    <a class="navbar-brand non-underline" @click="$router.go(-1)" style="color: #fff; cursor: pointer;">
                        <div class="logo logo-dark fas fa-arrow-left" style="margin-right: 8px;"></div> Isi Formulir
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
                            <li v-if="!alreadyLogin"><a id="btn-masuk-login-help" class="nav-link menu-link non-underline nav-text-bantuan text-white" data-toggle="modal" data-target="#modal-masuk" @click="cekModal()" data-backdrop="static" data-keyboard="false"><i class="fas fa-sign-in-alt login" aria-hidden="true" style="margin-right: 5px;"></i>Masuk / Daftar</a></li>
                            <li v-if="alreadyLogin"><a id="btn-masuk-login-help" class="nav-link menu-link non-underline nav-text-bantuan text-white" @click="handleLogout"><i class="fas fa-sign-out-alt" aria-hidden="true" style="margin-right: 5px;"></i>Keluar</a></li>
                            <!-- <li><a class="nav-link menu-link non-underline nav-text-bantuan text-white" data-toggle="modal" data-target="#modal-masuk"><i class="fas fa-shopping-cart" aria-hidden="true" style="margin-right: 5px;"></i>Keranjang (0)</a></li> -->
                        </ul>
                    </div>
                </nav>
            </div>
            <!-- End Navbar -->
        </div>

        <div class="mobile-form-rent" style="background: #fff;">
            <div class="detail-rent" style="background-color: #efeff4; line-height: 1.5; padding-bottom: 8px; color: #000 ">
                <p v-if="!seeDetail" @click="clickDetail(!seeDetail)" style="margin-bottom: 10px;"><b style="font-weight: 600; margin-right: 8px; font-size: 16px;">{{productTitle}} </b><i class="fas fa-angle-down" style="float: right;"></i></p>
                <p v-if="seeDetail" @click="clickDetail(!seeDetail)" style="margin-bottom: 10px;"><b style="font-weight: 600; margin-right: 8px; font-size: 16px;">{{productTitle}} </b><i class="fas fa-angle-up" style="float: right;"></i></p>
                <div v-if="seeDetail">
                    <div class="req-line-break" style="border-width: 0.5px; border-color: #d1d1d6"></div>
                    <!-- <p>{{ colorName }} - {{productHdd}} </p> -->
                    <p>Durasi: {{duration}}</p>
                    <table style="padding: auto; width: 100%" class="tab-detail-rent">
                        <tr>
                            <td>Deposit</td>
                            <td>Rp. {{feeSecurityy}}</td>
                        </tr>
                        <tr>
                            <td>Biaya Sewa/Bulan</td>
                            <td>Rp. {{feeRentt}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div class="section section-bg-alt request-css" id="three-tab" style="background: #fff">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-12">
                        <div class="desktop-form-rent">
                            <div class="detail-rent" style="background-color: #efeff4; line-height: 1.5; padding-bottom: 20px; border-radius: 5px; margin-top: 20px;">
                                <p style="margin-bottom: 10px;"><b>{{productTitle}}</b></p>
                                <p>Durasi: {{duration}}</p>
                                <p>Deposit: Rp. {{feeSecurityy }}</p>
                                <p>Biaya Sewa/Bulan: Rp. {{feeRentt }}</p>
                            </div>
                        </div>

                        <div style="padding: 20px;">
                            <v-form ref="form" v-model="valid" lazy-validation>
                                <div id="form_validation"></div>
                                <p><b>DATA BADAN USAHA</b></p>
                                <v-flex>
                                    <v-text-field v-if="!emptycompanyName" v-model="companyName" label="Nama Perusahaan" outline readonly></v-text-field>
                                    <v-text-field v-else v-model="companyName" label="Nama Perusahaan" :rules="inputRules" required outline clearable></v-text-field>
                                </v-flex>

                                <v-flex>
                                    <v-text-field v-if="emptycompanyAddress" v-model="companyAddress" label="Alamat Perusahaan" :rules="addressRules" required outline clearable></v-text-field>
                                    <v-text-field v-else v-model="companyAddress" label="Alamat Perusahaan" outline readonly></v-text-field>
                                </v-flex>

                                <v-flex>
                                    <v-text-field v-if="!emptycompanyProvince" v-model="companyProvince" label="Provinsi" outline readonly></v-text-field>
                                    <v-select v-else :items="province" name="Provinsi" label="Provinsi" v-model="provinceId" v-validate="'required'" item-text="provinceName" item-value="provinceId" :rules="[v => !!v || 'Harap dipilih']" outline required @change="getCities"></v-select>
                                </v-flex>

                                <v-flex>
                                    <v-text-field v-if="!emptycompanyCity" v-model="companyCity" label="Kota/Kabupaten" outline readonly></v-text-field>
                                    <v-select v-else :items="city" name="Kota/Kabupaten" label="Kota/Kabupaten" v-model="cityId" v-validate="'required'" item-text="kabKotName" item-value="kabKotId" :rules="[v => !!v || 'Harap dipilih']" outline required @change="getDistrict"></v-select>
                                </v-flex>

                                <v-flex>
                                    <v-text-field v-if="!emptycompanyDistrict" v-model="companyDistrict" label="Kecamatan" outline readonly></v-text-field>
                                    <v-select v-else :items="district" name="Kecamatan" label="Kecamatan" v-model="districtId" v-validate="'required'" item-text="kecamatanName" item-value="kecamatanId" :rules="[v => !!v || 'Harap dipilih']" outline required></v-select>
                                </v-flex>

                                <v-flex>
                                    <v-text-field v-if="!emptycompanyVillage" v-model="companyVillage" label="Kelurahan" outline readonly></v-text-field>
                                    <v-text-field v-else v-model="companyVillage" label="Kelurahan" :rules="inputRules" required outline clearable></v-text-field>
                                </v-flex>

                                <v-flex>
                                    <v-text-field v-if="!emptycompanyZip" v-model="companyZip" label="Kode Pos" outline readonly></v-text-field>
                                    <v-text-field v-else v-model="companyZip" type="number" label="Kode Pos" :rules="inputRules" required outline clearable></v-text-field>
                                </v-flex>

                                <v-flex>
                                    <v-text-field v-if="!emptycompanyPhone" v-model="companyPhone" label="No. Telepon Perusahaan" outline readonly></v-text-field>
                                    <v-text-field v-else v-model="companyPhone" type="number" label="No. Telepon Perusahaan" :rules="companyPhoneRules" required outline clearable></v-text-field>
                                </v-flex>

                                <v-flex>
                                    <v-text-field v-if="!emptycompanyFax" v-model="companyFax" label="No. Fax Perusahaan" outline readonly></v-text-field>
                                    <v-text-field v-else v-model="companyFax" type="number" label="No. Fax Perusahaan" :rules="whatsappRules" outline clearable></v-text-field>
                                </v-flex>

                                <p><b>DATA PENANGGUNG JAWAB</b></p>
                                <v-flex>
                                    <v-text-field v-if="!emptyemployeeName" v-model="employeeName" label="Nama" outline readonly></v-text-field>
                                    <v-text-field v-else v-model="employeeName" label="Nama" required :rules="inputRules" outline clearable></v-text-field>
                                </v-flex>

                                <v-flex>
                                    <v-text-field v-if="!emptyemployeeKTP" v-model="employeeKTP" label="No KTP" outline readonly></v-text-field>
                                    <v-text-field v-else v-model="employeeKTP" label="No KTP" type="number" required :rules="ktpRules" outline clearable></v-text-field>
                                </v-flex>

                                <v-flex>
                                    <v-text-field v-if="!emptyemployeePhone" v-model="employeePhone" label="No Ponsel" outline readonly></v-text-field>
                                    <v-text-field v-else v-model="employeePhone" type="number" label="No Ponsel" :rules="phoneRules" required outline clearable></v-text-field>
                                </v-flex>

                                <v-flex>
                                    <v-text-field v-if="!emptyemployeeEmail" v-model="employeeEmail" label="Alamat Email" outline readonly></v-text-field>
                                    <v-text-field v-else v-model="employeeEmail" :rules="emailRules" label="Alamat Email" outline required clearable></v-text-field>
                                </v-flex>

                                <v-flex>
                                    <v-text-field v-if="!emptyemployeeTitle" v-model="employeeTitle" label="Jabatan" outline readonly></v-text-field>
                                    <v-text-field v-else v-model="employeeTitle" label="Jabatan" required :rules="inputRules" outline clearable></v-text-field>
                                </v-flex>

                                <v-flex>
                                    <v-text-field v-if="!emptyemployeeDivision" v-model="employeeDivision" label="Divisi" outline readonly></v-text-field>
                                    <v-text-field v-else v-model="employeeDivision" label="Divisi" :rules="notRequiredRules" outline clearable></v-text-field>
                                </v-flex>

                                <p><b>UNGGAH DOKUMEN</b></p>
                                <div v-if="uploadStatus===0">
                                    <v-flex>
                                        <center><img :src="NPWPUrl" v-if="NPWPUrl" style="margin-bottom: 15px; max-height: 300px;" /></center>
                                        <v-text-field readonly required :rules="inputRules" outline label="Foto Scan NPWP / SKT Perusahaan" @click='pickNPWPFile' v-model='NPWPName' prepend-inner-icon='attach_file'></v-text-field>
                                        <input type="file" style="display: none" ref="NPWP" accept="image/*" @change="onNPWPPicked" outline>
                                    </v-flex>
                                    <v-flex>
                                        <center><img :src="KTPUrl" v-if="KTPUrl" style="margin-bottom: 15px; max-height: 300px;" /></center>
                                        <v-text-field readonly required :rules="inputRules" outline label="Foto Scan KTP Penanggung Jawab" @click='pickKTPFile' v-model='KTPName' prepend-inner-icon='attach_file'></v-text-field>
                                        <input type="file" style="display: none" ref="KTP" accept="image/*" @change="onKTPPicked" outline>
                                    </v-flex>
                                </div>
                                <v-flex>
                                    <center><img :src="PurchaseUrl" v-if="PurchaseView" style="margin-bottom: 15px; max-height: 300px;" /></center>
                                    <v-text-field readonly :rules="notRequiredRules" outline label="Dokumen Purchase order" @click='pickPurchaseFile' v-model='PurchaseName' prepend-inner-icon='attach_file'></v-text-field>
                                    <input type="file" style="display: none" ref="Purchase" @change="onPurchasePicked" outline>
                                </v-flex>

                                <v-checkbox required :rules="agree" v-model="checkbox" :label="`Dengan ini, saya menyetujui Syarat & Ketentuan penyewaan melalui Asani, dan saya bersedia memberikan informasi di atas untuk dihubungi oleh pihak Asani.`"></v-checkbox>
                            </v-form>
                            <button v-if="!loading" :readonly="!valid" class="processbutton" @click="validateRent" style="margin-top: 10px;">SEWA SEKARANG</button>
                            <button v-else :readonly="!valid" class="processbutton" disabled style="margin-top: 10px;"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></button>
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
                                    <a class="btn btn-masuk-login-req" @click="doSendOtp">Submit</a>

                                </v-form>
                                <!-- DO LOGIN -->
                                <v-form v-else ref="formOtp" v-model="validOtp" lazy-validation>
                                    <v-flex>
                                        <v-text-field v-model="otp" type="number" placeholder="XXXX" label="Masukkan OTP" :rules="otpRules" required outline clearable></v-text-field>
                                    </v-flex>
                                    <a class="btn btn-masuk-login-req" @click="doLogin">Submit</a>
                                    <div v-if="!resendSatuKali">
                                        <countdown :time="3 * 60 * 1000" @countdownend="countHabis" ref="countdown">
                                            <a v-if="!resend" class="btn btn-masuk-login-req mt-1 disabled" slot-scope="props">Re-send OTP in {{ props.minutes }}:{{ props.seconds }}</a>
                                            <a v-else class="btn btn-masuk-login-req mt-1" @click="doResendSendOtp">Re-send OTP</a>
                                        </countdown> 
                                    </div>                             
                                </v-form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- .modal @e LOGIN -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'landing-page',
    components: {},
    data() {
        return {
            loading: false,
            validLoc: true,
            checkbox: false,
            valid: true,
            btnRentClicked: false,
            uploadStatus: 0,

            province: [],
            provinceId: 0,
            city: [],
            cityId: 0,
            district: [],
            districtId: 0,
            e_Mail: '',

            emptycompanyName: true,
            emptycompanyAddress: true,
            emptycompanyProvince: true,
            emptycompanyCity: true,
            emptycompanyDistrict: true,
            emptycompanyVillage: true,
            emptycompanyZip: true,
            emptycompanyPhone: true,
            emptycompanyFax: true,
            emptyemployeeName: true,
            emptyemployeeKTP: true,
            emptyemployeePhone: true,
            emptyemployeeEmail: true,
            emptyemployeeTitle: true,
            emptyemployeeDivision: true,
            emptyNPWPBase64: true,
            emptyNPWPName: true,
            emptyKTPBase64: true,
            emptyKTPName: true,
            emptyPurchaseBase64: true,
            emptyPurchaseName: true,

            productName: '',
            duration: '',
            colorName: '',
            productHdd: '',
            feeSecurity: '',
            feeRent: '',
            feeSecurityy: '',
            feeRentt: '',
            quantity: '',

            NPWPName: '',
            NPWPUrl: '',
            NPWPFile: '',
            NPWPBase64: '',

            KTPName: '',
            KTPUrl: '',
            KTPFile: '',
            KTPBase64: '',

            PurchaseName: '',
            PurchaseUrl: '',
            PurchaseFile: '',
            PurchaseBase64: '',
            PurchaseView: false,

            seeDetail: false,

            companyName: "",
            companyAddress: "",
            companyProvince: "",
            companyCity: "",
            companyDistrict: "",
            companyVillage: "",
            companyZip: "",
            companyPhone: "",
            companyFax: "",

            employeeName: "",
            employeeKTP: "",
            employeePhone: "",
            employeeEmail: '',
            employeeTitle: "",
            employeeDivision: "",

            phoneRules: [
                v => !this.btnRentClicked || !!v || 'Mohon diisi dengan benar',
                v => !this.btnRentClicked || (v.length >= 8) || 'Minimal 8 karakter',
                v => !this.btnRentClicked || (v.length <= 13) || 'Maksimal 13 karakter',
                v => !this.btnRentClicked || (v.toString().substring(0, 2) == '08') || 'Diawali dengan 08',
            ],
            notRequiredRules: [
                v => !this.btnRentClicked || (v.length <= 100) || 'Mohon diisi dengan benar'
            ],

            inputRules: [
                v => !this.btnRentClicked || !!v || 'Mohon diisi dengan benar',
                v => !this.btnRentClicked || (v.length >= 3) || 'Mohon diisi dengan benar',
                v => !this.btnRentClicked || (v.length <= 100) || 'Mohon diisi dengan benar'
            ],
            emailRules: [v => !this.btnRentClicked || !!v || 'Mohon diisi dengan benar', ],
            ktpRules: [
                v => !this.btnRentClicked || !!v || 'Mohon diisi dengan benar',
                v => !this.btnRentClicked || (v.length == 16) || 'Mohon diisi dengan benar',
            ],
            phoneRules: [
                v => !this.btnRentClicked || !!v || 'Mohon diisi dengan benar',
                v => !this.btnRentClicked || (v.length >= 8) || 'Minimal 8 karakter',
                v => !this.btnRentClicked || (v.length <= 13) || 'Maksimal 13 karakter',
                v => !this.btnRentClicked || (v.toString().substring(0, 2) == '08') || 'Diawali dengan 08',
            ],
            companyPhoneRules: [
                v => !this.btnRentClicked || !!v || 'Mohon diisi dengan benar',
                v => !this.btnRentClicked || (v.length >= 8) || 'Minimal 8 karakter',
                v => !this.btnRentClicked || (v.length <= 13) || 'Maksimal 13 karakter',
                v => !this.btnRentClicked || (v.toString().substring(0, 1) == '0') || 'Diawali dengan 0',
            ],
            addressRules: [
                v => !this.btnRentClicked || !!v || 'Mohon diisi dengan benar',
                v => !this.btnRentClicked || (v.length >= 10) || 'Mohon diisi dengan benar',
                v => !this.btnRentClicked || (v.length <= 100) || 'Mohon diisi dengan benar'
            ],
            whatsappRules: [
                v => !this.btnRentClicked || (v.length == 0 || v.length >= 8) || 'Minimal 8 karakter',
                v => !this.btnRentClicked || (v.length == 0 || v.length <= 13) || 'Maksimal 13 karakter',
                v => !this.btnRentClicked || (v.length == 0 || v.toString().substring(0, 1) == '0') || 'Diawali dengan 0',
            ],
            agree: [
                v => !this.btnRentClicked || (v == true) || 'Anda perlu menyetujui syarat & ketentuan terlebih dahulu'
            ],

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
    watch: {
        employeeEmail: function(mail) {
            this.emailRules = [v => !this.btnRentClicked || !!v || 'Mohon diisi dengan benar', v => !this.btnRentClicked || (v.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) || 'Format Email salah']
        }
    },
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
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        clickDetail(value) {
            this.seeDetail = value
        },
        formatPrice(value) {
            let val = (value)
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        validateRent() {
            this.btnRentClicked = true
            if (this.$refs.form.validate()) {
                this.submitRentForm()
            } else this.toTopForm()
        },
        toTopForm() {
            $('html, body').animate({
                scrollTop: $("#form_validation").offset().top
            }, 2000);
        },
        getCities() {
            this.$http.post(process.env.API_GET_CITY, {
                    provinceId: this.provinceId,
                })
                .then(response => {
                    if (response.data.status == 200) {
                        this.city = response.data.content
                    }
                })
                .catch(function(error) {
                    console.log(error)
                })

        },
        getDistrict() {
            this.$http.post(process.env.API_GET_DISTRICT, {
                    kabKotId: this.cityId,
                })
                .then(response => {
                    if (response.data.status == 200) {
                        this.district = response.data.content
                    }
                })
                .catch(function(error) {
                    console.log(error)
                })

        },
        getProvinceName(e) {
            var i;
            for (i = 0; i < this.province.length; i++) {
                if (this.province[i].provinceId === e) {
                    return this.province[i].provinceName
                }
            }
            return ''
        },
        getCityName(e) {
            var i;
            for (i = 0; i < this.city.length; i++) {
                if (this.city[i].kabKotId === e) {
                    return this.city[i].kabKotName
                }
            }
            return ''
        },
        getDistrictName(e) {
            var i;
            for (i = 0; i < this.district.length; i++) {
                if (this.district[i].kecamatanId === e) {
                    return this.district[i].kecamatanName
                }
            }
            return ''
        },
        submitRentForm() {
            this.loading = true
            this.$ga.event(window.location.pathname, 'click_button', 'SEWA SEKARANG', 1)
            var provName = this.getProvinceName(this.provinceId)
            var citName = this.getCityName(this.cityId)
            var disName = this.getDistrictName(this.districtId)
            this.$http.post(process.env.API_SAVE_FORM_LAPTOP, {
                    productId: localStorage.getItem('productId'),
                    quantity: localStorage.getItem('quantity'),
                    totalPurchase: localStorage.getItem('totalPurchase'),
                    tenorMonths: localStorage.getItem('duration'),
                    feeRent: localStorage.getItem('feeRent'),
                    feeSecurity: localStorage.getItem('feeSecurity'),
                    note: localStorage.getItem('note'),
                    companyName: this.companyName,
                    companyAddress: this.companyAddress,
                    companyProvince: provName,
                    companyCity: citName,
                    companyDistrict: disName,
                    companyVillage: this.companyVillage,
                    companyZip: this.companyZip,
                    companyPhoneNumber: this.companyPhone,
                    companyFaxNumber: this.companyFax,
                    employeeName: this.employeeName,
                    employeeKTP: this.employeeKTP,
                    employeePhone: this.employeePhone,
                    employeeEmail: this.employeeEmail,
                    employeeTitle: this.employeeTitle,
                    employeeDivision: this.employeeDivision,
                    NPWPBase64: this.NPWPBase64,
                    NPWPFileName: this.NPWPName,
                    KTPBase64: this.KTPBase64,
                    KTPFileName: this.KTPName,
                    PurchaseBase64: this.PurchaseBase64,
                    PurchaseFileName: this.PurchaseName,

                })
                .then(response => {
                    this.loading = true
                    if (response.status == 200){
                        this.toPage('/thank-you-submitted')
                    }
                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        toPage(e) {
            this.$router.push(e)
        },
        pickNPWPFile() {
            this.$refs.NPWP.click()
        },
        onNPWPPicked(e) {
            const files = e.target.files
            if (files[0] !== undefined) {
                this.NPWPName = files[0].name
                if (this.NPWPName.lastIndexOf('.') <= 0) {
                    return
                }
                const fr = new FileReader()
                fr.readAsDataURL(files[0])
                fr.addEventListener('load', () => {
                    this.NPWPUrl = fr.result
                    this.NPWPFile = files[0] // this is an image file that can be sent to server...
                    this.NPWPBase64 = fr.result.split("base64,")[1]
                    if (this.NPWPFile.size >= 2000000 || (!this.NPWPName.toLowerCase().includes(".png") && !this.NPWPName.toLowerCase().includes(".jpeg") && !this.NPWPName.toLowerCase().includes(".jpg"))) {
                        var message = "Ukuran foto tidak boleh lebih dari 2MB"
                        if (!this.NPWPName.toLowerCase().includes(".png") && !this.NPWPName.toLowerCase().includes(".jpeg") && !this.NPWPName.toLowerCase().includes(".jpg")) {
                            message = "Tipe file harus .jpeg atau .jpg atau .png"
                        }
                        swal(message, "", "warning", {
                                buttons: {
                                    agree: "OK",
                                },
                            })
                            .then((value) => {
                                this.NPWPName = ''
                                this.NPWPFile = ''
                                this.NPWPUrl = ''
                                this.pickNPWPFile()
                            });
                    }
                })
            } else {
                this.NPWPName = ''
                this.NPWPFile = ''
                this.NPWPUrl = ''
            }
        },
        pickKTPFile() {
            this.$refs.KTP.click()
        },
        onKTPPicked(e) {
            const files = e.target.files
            if (files[0] !== undefined) {
                this.KTPName = files[0].name
                if (this.KTPName.lastIndexOf('.') <= 0) {
                    return
                }
                const fr = new FileReader()
                fr.readAsDataURL(files[0])
                fr.addEventListener('load', () => {
                    this.KTPUrl = fr.result
                    this.KTPFile = files[0] // this is an image file that can be sent to server...
                    this.KTPBase64 = fr.result.split("base64,")[1]
                    if (this.KTPFile.size >= 2000000 || (!this.KTPName.toLowerCase().includes(".png") && !this.KTPName.toLowerCase().includes(".jpeg") && !this.KTPName.toLowerCase().includes(".jpg"))) {
                        var message = "Ukuran foto tidak boleh lebih dari 2MB"
                        if (!this.KTPName.toLowerCase().includes(".png") && !this.KTPName.toLowerCase().includes(".jpeg") && !this.KTPName.toLowerCase().includes(".jpg")) {
                            message = "Tipe file harus .jpeg atau .jpg atau .png"
                        }
                        swal(message, "", "warning", {
                                buttons: {
                                    agree: "OK",
                                },
                            })
                            .then((value) => {
                                this.KTPName = ''
                                this.KTPFile = ''
                                this.KTPUrl = ''
                                this.pickKTPFile()
                            });
                    }
                })
            } else {
                this.KTPName = ''
                this.KTPFile = ''
                this.KTPUrl = ''
            }

        },
        pickPurchaseFile() {
            this.$refs.Purchase.click()
        },
        onPurchasePicked(e) {
            const files = e.target.files
            if (files[0] !== undefined) {
                this.PurchaseName = files[0].name
                if (this.PurchaseName.lastIndexOf('.') <= 0) {
                    return
                }
                const fr = new FileReader()
                fr.readAsDataURL(files[0])
                fr.addEventListener('load', () => {
                    this.PurchaseUrl = fr.result
                    this.PurchaseFile = files[0] // this is an image file that can be sent to server...
                    this.PurchaseBase64 = fr.result.split("base64,")[1]
                    if (this.PurchaseName.toLowerCase().includes(".png") || this.PurchaseName.toLowerCase().includes(".jpeg") || this.PurchaseName.toLowerCase().includes(".jpg")) {
                        this.PurchaseView = true
                    } else this.PurchaseView = false
                    if (this.PurchaseFile.size >= 2000000) {
                        this.PurchaseName = ''
                        this.PurchaseFile = ''
                        this.PurchaseUrl = ''
                        swal("Ukuran foto tidak boleh lebih dari 2MB", "", "warning", {
                                buttons: {
                                    agree: "OK",
                                },
                            })
                            .then((value) => {
                                this.pickPurchaseFile()
                            });
                    }
                })
            } else {
                this.PurchaseName = ''
                this.PurchaseFile = ''
                this.PurchaseUrl = ''
            }
        },
    },
    destroyed() {
        this.closeLoginModal()
    },
    created() {
        this.closeLoginModal()
        if (localStorage.getItem('phoneNumber') == null || localStorage.getItem('token') == null || localStorage.getItem('duration') == null) {
            this.toPage('/product/' + this.$route.params.productSlug)
        } else {
            this.scrollToTop()
            this.isLogged()

            this.emptyemployeePhone = false
            this.employeePhone = localStorage.getItem('phoneNumber')

            this.$http.get(process.env.API_GET_PROVINCE)
                .then(response => {
                    if (response.data.status == 200) {
                        this.province = response.data.content
                    }
                })
                .catch(function(error) {
                    console.log(error)
                })


            this.$http.post(process.env.API_USER_INFO, {
                    phoneNumber: localStorage.getItem('phoneNumber'),
                })
                .then(response => {
                    if (response.data.status == 200) {
                        this.uploadStatus = response.data.content[0].uploadStatus

                        if (response.data.content[0].companyName != null) {
                            this.emptycompanyName = false
                            this.companyName = response.data.content[0].companyName
                        }

                        if (response.data.content[0].companyAddress != null) {
                            this.emptycompanyAddress = false
                            this.companyAddress = response.data.content[0].companyAddress
                        }

                        if (response.data.content[0].companyProvince != null) {
                            this.emptycompanyProvince = false
                            this.companyProvince = response.data.content[0].companyProvince
                        }

                        if (response.data.content[0].companyCity != null) {
                            this.emptycompanyCity = false
                            this.companyCity = response.data.content[0].companyCity
                        }

                        if (response.data.content[0].companyDistrict != null) {
                            this.emptycompanyDistrict = false
                            this.companyDistrict = response.data.content[0].companyDistrict
                        }

                        if (response.data.content[0].companyVillage != null) {
                            this.emptycompanyVillage = false
                            this.companyVillage = response.data.content[0].companyVillage
                        }

                        if (response.data.content[0].companyZip != null) {
                            this.emptycompanyZip = false
                            this.companyZip = response.data.content[0].companyZip
                        }

                        if (response.data.content[0].companyPhoneNumber != null) {
                            this.emptycompanyPhone = false
                            this.companyPhone = response.data.content[0].companyPhoneNumber
                        }

                        if (response.data.content[0].companyFaxNumber != null) {
                            this.emptycompanyFax = false
                            this.companyFax = response.data.content[0].companyFaxNumber
                        }

                        if (response.data.content[0].userName != null) {
                            this.emptyemployeeName = false
                            this.employeeName = response.data.content[0].userName
                        }

                        if (response.data.content[0].employeeKtp != null) {
                            this.emptyemployeeKTP = false
                            this.employeeKTP = response.data.content[0].employeeKtp
                        }

                        if (response.data.content[0].employeeNumber != null) {
                            this.emptyemployeePhone = false
                            this.employeePhone = response.data.content[0].employeeNumber
                        }

                        if (response.data.content[0].employeeEmail != null) {
                            this.emptyemployeeEmail = false
                            this.employeeEmail = response.data.content[0].employeeEmail
                        }

                        if (response.data.content[0].employeeTitle != null) {
                            this.emptyemployeeTitle = false
                            this.employeeTitle = response.data.content[0].employeeTitle
                        }

                        if (response.data.content[0].employeeDivision != null) {
                            this.emptyemployeeDivision = false
                            this.employeeDivision = response.data.content[0].employeeDivision
                        }
                    }

                })
                .catch(function(error) {
                    console.log(error)
                })

            this.duration = localStorage.getItem('duration')
            this.productName = localStorage.getItem('productBrand')
            this.productTitle = localStorage.getItem('productTitle')            
            this.colorName = localStorage.getItem('colorName')
            this.feeSecurityy = this.formatPrice(localStorage.getItem('feeSecurity') * localStorage.getItem('quantity'))
            this.feeSecurity = this.formatPrice(localStorage.getItem('feeSecurity'))
            this.feeRentt = this.formatPrice(localStorage.getItem('feeRent') * localStorage.getItem('quantity'))
            this.feeRent = this.formatPrice(localStorage.getItem('feeRent'))
            this.quantity = localStorage.getItem('quantity')
            this.productHdd = localStorage.getItem('productProcessor') + "/" + localStorage.getItem('productHdd') + "/" + localStorage.getItem('productRam')
        }
    }
}
</script>

<style>
table.tab-detail-rent td {
    vertical-align: top;
}

.desktop-form-rent {}

@media (max-width: 992px) {
    .desktop-form-rent {
        opacity: 0;
        display: none;
        visibility: hidden;
    }
}

.mobile-form-rent {}

@media (min-width: 992px) {
    .mobile-form-rent {
        opacity: 0;
        display: none;
        visibility: hidden;
    }
}

.error--text {
    color: #ff5252!important;
    caret-color: #ff5252!important;
}

.child-flex>*,
.flex {
    flex: 1 1 auto;
    max-width: 100%;
    margin-bottom: 5px;
}

.v-menu__content {
    position: sticky;
    display: inline-block;
    border-radius: 2px;
    max-width: 80%;
    overflow-y: auto;
    overflow-x: hidden;
    contain: content;
    will-change: transform;
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
}

.v-input__slot {
    color: inherit;
    display: flex;
    margin-bottom: 5px;
    position: relative;
    width: 100%;
}

.processbutton {
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


/*start text field*/

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


/*end text field*/

.accent--text {
    color: #2797fb!important;
    caret-color: #2797fb!important;
}

.req-line-break {
    display: block;
    margin: 5px 0;
    overflow: hidden;
    border-color: #efeff4;
    border-style: solid;
    border-width: 0.5px;
}

.request-css {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
}

.detail-rent {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
}

.detail-rent p {
    margin-bottom: 2px;
    font-size: 14px;
    line-height: 18px;
}

.input-checkbox,
.input-radio {
    position: absolute;
    height: 1px;
    width: 1px;
    opacity: 0
}

.input-checkbox~label:not(.error),
.input-radio~label:not(.error) {
    position: relative;
    padding-left: 28px;
    line-height: 20px;
    font-size: 14px;
    cursor: pointer;
    margin-bottom: 0
}

.input-checkbox~label:not(.error):before,
.input-checkbox~label:not(.error):after,
.input-radio~label:not(.error):before,
.input-radio~label:not(.error):after {
    position: absolute;
    left: 0;
    top: 0;
    height: 20px;
    width: 20px;
    line-height: 20px;
    text-align: center;
    content: '';
    background-color: transparent;
    border-radius: 3px
}

.input-checkbox~label:not(.error):before,
.input-radio~label:not(.error):before {
    border: 2px solid #dbe4f7
}

.input-checkbox~label:not(.error):after,
.input-radio~label:not(.error):after {
    font-family: "Font Awesome 5 Free";
    content: '\f00c';
    font-weight: 700;
    font-size: 10px;
    background-color: #16a3fe;
    color: #fff;
    opacity: 0;
    transition: all .4s
}

.input-checkbox:checked~label:not(.error):after,
.input-radio:checked~label:not(.error):after {
    opacity: 1
}

.input-checkbox~.error,
.input-radio~.error {
    left: -4px;
    top: -26px;
    bottom: auto;
    right: auto
}

.input-radio~label:not(.error):before,
.input-radio~label:not(.error):after {
    border-radius: 50%
}


/*END FOOTER*/

.non-underline {
    text-decoration: none;
}

.site-header .navbar-brand {
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 0;
    z-index: 6;
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

.swal-button--confirm {
    color: #fff;
    background-color: #2797fb;
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
    margin-bottom: 0;
}

.swal-text {
    font-size: 16px;
    position: relative;
    float: none;
    line-height: normal;
    vertical-align: top;
    text-align: left;
    display: inline-block;
    margin: 0;
    padding: 0 10px;
    font-weight: 400;
    color: rgba(0, 0, 0, .64);
    max-width: calc(100% - 20px);
    overflow-wrap: break-word;
    box-sizing: border-box;
    text-align: center;
}

.swal-button--cancel {
    color: #2797fb;
    background-color: #fff;
    outline-style: none;
}

.swal-button--sendOtp {
    width: 100%;
    color: #fff;
    background-color: #2797fb;
    outline-style: none;
}

.swal-button--resendOtp {
    width: 100%;
    color: #2797fb;
    background-color: #fff;
    outline-style: none;
}

.inputotp {
    width: 100%;
    -webkit-appearance: none;
    background-color: #fff;
    font-size: 14px;
    display: block;
    box-sizing: border-box;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, .14);
    padding: 10px 13px;
    border-radius: 2px;
    transition: border-color .2s;
}


/*Start LOGIN POPUP*/

.btn-masuk-login-req {
    width: 100%;
    height: 40px;
    border-radius: 2px;
    padding: 10px;
}

.btn-masuk-login-req:hover {
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

.lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 14px;
}

.lds-ellipsis div {
    position: absolute;
    top: 5px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
}

.lds-ellipsis div:nth-child(1) {
    left: 6px;
    animation: lds-ellipsis1 0.6s infinite;
}

.lds-ellipsis div:nth-child(2) {
    left: 6px;
    animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(3) {
    left: 26px;
    animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(4) {
    left: 45px;
    animation: lds-ellipsis3 0.6s infinite;
}

@keyframes lds-ellipsis1 {
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes lds-ellipsis3 {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
}

@keyframes lds-ellipsis2 {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(19px, 0);
    }
}
</style>