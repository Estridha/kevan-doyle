<template>
    <div class="main-container">
        <form class="form-group" action="https://formsubmit.co/6b09b0cefdfd08ac5ba34b5da89d946c" method="POST">
          <!-- Honeypot -->
          <input type="text" name="_honey" style="display:none">
          <!-- Disable Captcha -->
          <input type="hidden" name="_captcha" value="false" >
          <input type="hidden" name="_next" value="http://localhost:8080/contact/success">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" name="Name" required>
          </div><div class="form-group">
            <label for="email">E-mail:</label>
            <input type="email" name="E-mail" required>
          </div>
            <div class="form-group">
            <label for="message">Message:</label>
            <textarea name="Message" rows="10"></textarea>
          </div>
            <BaseButton type="submit" buttonClass="primary" text="send" />
        </form>
    </div>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
  name: "ContactForm",
  components: {
    BaseButton,
  }
};
</script>

<style lang="scss" scoped>
.main-container {
  padding: 20px;
  border-radius: 4px;
  background-color: var(--block-background-color);
  @media screen and (max-width: 845px) {
      margin: 2rem 0;
  }
}
.form-group {
  margin-top: 20px;
  font-size: 20px;
  color: #9e9e9e;

  input {
    height: 2rem;
  }

  textarea {
    height: 15rem;
    margin-bottom: 1rem;
  }
}
.form-group input,
.form-group textarea {
  width: 100%;
  font-size: 18px;
  border: 1px solid rgba(128, 128, 128, 0.199);
  margin-top: 5px;
}
textarea {
  resize: vertical;
}
</style>
