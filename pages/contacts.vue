<template>
  <div class="container">
    <section class="contacts">
      <h1>Контакты</h1>
      <div class="contacts_block">
        <div class="contacts_left">
          <div class="contacts_links">
            <a href="tel:+7 (7172) 95 48 49" class="linkText">+7 (7172) 95 48 49</a> <br>
            <a href="mailto:info@csi.kz" class="linkText">info@csi.kz</a>
          </div>
          <p>Республика Казахстан, Z05P5Y1 <br> г. Астана, ул. Алматы, д. 7, этаж 6 <br> БЦ "Seven"</p>
          <div class="contacts_maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1488.5286284833976!2d71.45905565650277!3d51.13803392153562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424586a087e345b5%3A0x2c47e05491b8af54!2sBlack%20%26%20White!5e0!3m2!1sru!2skz!4v1646993436978!5m2!1sru!2skz" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
        <div class="contacts_right">
          <h2>Отправить сообщение:</h2>
          <div class="contacts_form">
            <form action='' >
              <input type="email" name="email" id="" placeholder="E-mail">
              <input type="text" name="name" id="" placeholder="Ваше имя">
              <textarea name="text" id="" cols="30" rows="10" placeholder="Сообщение"></textarea>
              <button @click='openVideo'>Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </section>


    <!-- Modal video -->
    <div data-video-modal v-show="modalStatus" class="modal_background modal_white">
      <!-- <div data-video-close class="modal_close" @click="closeVideo"></div> -->
      <div class="modal_body">
        <p>Мы получили Ваше сообщение.</p>
        <p>В скором времени Вы получите ответ на него.</p>
        <h2>Спасибо!</h2>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      modalStatus: false,
    }
  },
  components: {
      
  },
  methods: {
    openVideo() {
      this.modalStatus = true;
      setTimeout(() => {
        this.modalStatus = false;
      }, 3000)
    },
    // closeVideo() {
    //   this.modalStatus = false;
    // }
  },
}
</script>
