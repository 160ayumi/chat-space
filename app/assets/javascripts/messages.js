$(function(){
  function buildData(data){

    var image = ""
    data.image ? image = `<img src="${data.image}">` : image = ""

    var html = `<div class="message">
    <div class="upper-message">
    <div class="upper-message__user-name">
    ${data.user}
    </div>
    <div class="upper-message__date">
    ${data.created_at}
    </div>
    </div>
    <div class="lower-message">
    <p class="lower-message__content">
    ${data.content}
    </p>
    ${image}
    </div>
    </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildData(data);
      $('.messages').append(html);
      $('#message_content').val('');
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight})
    })
    .always(() => {
      $(".form__submit").removeAttr("disabled")
    })
    
    .fail(function(){
      alert('error');
    })
  });
});