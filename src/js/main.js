// send contact form
// $("#contact-form").submit(function(e) {
//   e.preventDefault();
//   let th = $(this);
//   const name = $('input[name="name"]').val();
//   const email = $('input[name="email"]').val();
//   const message = $('textarea[name="message"]').val();
//   const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   let isNameValid = true;
//   let isEmailValid = true;
//   let isMessageValid = true;
//   // validate name
//   if (name.length < 3) {
//     $('.form__field-input--name').addClass('form__field-input--error');
//     $('.form__field-input--name').next().addClass('form__field-error--visible');
//     isNameValid = false;
//   } else {
//     $('.form__field-input--name').removeClass('form__field-input--error');
//     $('.form__field-input--name').next().removeClass('form__field-error--visible');
//     isNameValid = true;
//   }
//   // validate email
//   if (!emailPattern.test(email)) {
//     $('.form__field-input--email').addClass('form__field-input--error');
//     $('.form__field-input--email').next().addClass('form__field-error--visible');
//     isEmailValid = false;
//   } else {
//     $('.form__field-input--email').removeClass('form__field-input--error');
//     $('.form__field-input--email').next().removeClass('form__field-error--visible');
//     isEmailValid = true;
//   }
//   // validate message
//   if (message.length < 10) {
//     $('.form__field-input--message').addClass('form__field-input--error');
//     $('.form__field-input--message').next().addClass('form__field-error--visible');
//     isMessageValid = false;
//   } else {
//     $('.form__field-input--message').removeClass('form__field-input--error');
//     $('.form__field-input--message').next().removeClass('form__field-error--visible');
//       isMessageValid = true;
//   }
//   // send form 
//   if (isNameValid && isEmailValid && isMessageValid) {
//     $.ajax({
//       type: "POST",
//       url: "mail.php",
//       data: th.serialize(),
//     }).done(function() {
//       $('.modal').addClass('modal--visible');
//       setTimeout(() => {
//         th.trigger("reset");
//       }, 1000);
//       setTimeout(() => {
//         $('.modal').removeClass('modal--visible');
//       }, 3000);
//     });
//     return false;
//   }
// });

$('.modal__btn').click(function() {
  $('.modal').removeClass('modal--visible');
});

