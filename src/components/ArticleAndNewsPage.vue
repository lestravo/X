<template>
  <div>
    <div class="top_bg">
        <div class="container">
            <div class="header_top">
                <div class="top_right">
                    <ul>
                        <li><a href="" @click="toPage('/')"><img height="18px" width="69px" src="~@/assets/logo-white.png" class="img-responsive" alt="" /></a></li>
                    </ul>
                </div>
                <div class="top_left">
                   <a href="" @click="toPage('/help')"><h2><span></span>Bantuan </h2></a>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
    </div>
    <div class="special">
        <div class="container">
          <center><h4><b>Artikel & Berita</b></h4></center>
          <br>
          <br>
          <div class="col-md-12">
          <hr>
          </div>
          <div v-for="(data, index) in data" :key="index">
              <div v-if="index % 2 == 0" class="col-md-12">
                <div class="col-md-12 sc"style="padding-top: 0px; padding-bottom: 0px; padding-bottom: 20px; padding-top: 20px">
                  <div class="col-md-3">
                    <center><img src="~@/assets/images/lalala.jpg" class="img-responsive" alt="" style="" /></center>
                  </div>
                  <div class="col-md-9">
                    <center><p>{{data.content}} <a href="" @click="toPage(data.page)" style="color: red">Baca selengkapnya..</a></p></center>
                  </div>
                  <div class="clearfix"> </div>
                </div>
                <hr>
              </div>
              <div v-else class="col-md-12">
                <div class="col-md-12 sc"style="background-color: #F3F3F3; padding-top: 0px; padding-bottom: 0px; padding-bottom: 20px; padding-top: 20px">
                  <div class="col-md-3">
                    <center><img src="~@/assets/images/lalala.jpg" class="img-responsive" alt="" style="" /></center>
                  </div>
                  <div class="col-md-9">
                    <center><p>{{data.content}} <a href="" @click="toPage(data.page)" style="color: red">Baca selengkapnya..</a></p></center>
                  </div>
                  <div class="clearfix"> </div>
                </div>
                <hr>
              </div>
          </div>

        </div>
    </div>
   <div class="foot-top" style="margin-top: 50px">
    <div class="container">
        <div class="col-md-8 s-c">
          <h4>Tentang ASANI</h4>
                <li><p>
                    PT Teknologi Skoring Nusantara (selanjutnya disebut Asani) adalah perusahaan yang menyediakan persewaan peralatan elektronik untuk kantor dan penjualan laptop bekas berkualitas dengan berbagai pilihan spesifikasi. Asani menyediakan berbagai pilihan laptop bekas yang telah melalui proses pemeriksaan kualitas demi kepuasan pelanggan, bahkan kami menyarankan agar pelanggan dapat bertemu terlebih dulu untuk memilih dan memeriksa langsung kondisi laptopnya. 
                    <br>
                    <br>
                    Asani menyadari banyak orang kreatif yang mempunyai ide bisnis namun keterbatasan investasi untuk memulai startup, sehingga Asani melahirkan fasilitas sewa dengan persyaratan mudah dan harga kompetitif agar ide startup dapat diwujudkan dengan biaya sewa peralatan kantor yang lebih murah dibanding membelinya. Beragam kebutuhan elektronik kantor seperti PC, Laptop Macbook, Monitor, Printer, dan Proyektor, dari merek Lenovo, Dell, HP hingga Apple tersedia dengan berbagai spesifikasi dan durasi yang dapat disesuaikan.
                </p><br><br></li>
        </div>
        <div class="col-md-2 s-c" style="width: 130px; margin: auto;">
            <h4>SITEMAP</h4>
                <li><a href="" @click="toPage('/')">Beranda<br></a></li>
                <!-- <li><a href="#">Artikel & Berita</a></li> -->
                <!-- <li><a href="#">Syarat & Ketentuan</a></li> -->
                <!-- <li><a href="buy.html">Kebijakan Privasi</a></li> -->
                <li><a href="" @click="toPage('/help')">Bantuan</a></li>
        </div>
        <div class="col-md-1 s-c">
          <div class="social-ic">
              <div><a href="https://www.facebook.com/asani.co.id" target="_blank"><i class="facebok"> </i></a></div>
              <!-- <div><a href="https://www.linkedin.com/company/asani/"><i class="linkedin"> </i></a></div> -->
              <div><a href="https://www.instagram.com/asani.co.id/" target="_blank"><i class="be"> </i></a></div>
              <div class="clearfix"></div>    
          </div>
        </div>
        <div class="clearfix"> </div>
           <p style="padding-left: 15px">© 2019. PT Teknologi Skoring Nusantara</a></p>
    </div>
    </div></div>
</template>

<script>
  export default {
    name: 'landing-page',
    components: {},
    data () {
      return {
        data: [],
      }
    },

    computed: {
    },
    methods: {
      toPage (e) {
        this.$router.push(e)
      }
    },
    created () {
      this.data[0] = { 
        img: "",
        content: "Asani Rental adalah perusahaan penyedia jasa sewa handphone pertama di Indonesia yang memungkinkan masyarakat untuk mengakses smartphone terkini dengan lebih mudah, tanpa biaya yang mahal. Dengan menyewa ponsel pintar lewat Asani, siapa saja bisa memanfaatkan teknologi smartphone terbaru untuk menunjang keseharian mereka, mulai dari untuk kegiatan belajar, belanja online, hingga mencari penghasilan.",
        page :"/",}
        this.data[1] = { 
        img: "",
        content : "Asani juga hadir sebagai solusi bagi mereka yang belum memiliki akses ke program cicilan kartu kredit ataupun cicilan tanpa kartu kredit. Melalui Asani, pengguna bisa melakukan pengajuan penyewaan smartphone cukup dengan mengisi data diri dan melengkapi dokumen persyaratan. Menikmati fitur unggulan dari smartphone terkini cukup dengan mengisi. Dengan sistem pengamanan terbaru Secure Socket Layer (SSL) dan berada di bawah pengawasan Kementerian Komunikasi dan Informatika (Kominfo), Asani menjamin kerahasiaan data pengguna akan tersimpan dengan aman.",
        page : "/",}
        console.log(this.data)
  }
}
  
</script>

<style>
hr {
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-style: inset;
    margin: 0px;
    border-width: 1px;
}

.backhome {
    -webkit-appearance: none;
    font-family: 'Open Sans', sans-serif;
    color: #ffffff;
    text-transform: capitalize;
    display: inline-block;
    background: #2797fb;
    width: 40%;
    padding: 10px 20px;
    border-radius: 5px;
    transition: 0.5s ease;
    -moz-transition: 0.5s ease;
    -o-transition: 0.5s ease;
    -webkit-transition: 0.5s ease;
    cursor: pointer;
    border: none;
    outline: none;
    font-size: 1em;
}

@media (max-width: 992px) {
    .col-md-9 p {
        padding-top: 15px;
    }
}

.table2 {
    border-radius: 0px;
    background-color: #fff;
}
</style>
