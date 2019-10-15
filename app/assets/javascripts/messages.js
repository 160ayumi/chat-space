$(function(){
  function buildData(data){

    var image = data.image ? `<img src="${data.image}">` : image = "";

    var html = `<div class="message" data-message-id="${data.id}">
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
      $('form')[0].reset();
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight})
    })
    .always(() => {
      $(".form__submit").removeAttr("disabled")
    })
    
    .fail(function(){
      alert('error');
    })
  
  });
  var reloadMessages = function() {
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    last_message_id = $('.message:last').data("message-id");
    if (window.location.href.match(/messages/)){
    $.ajax({
      //ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
      url: "api/messages",
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'get',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: {id: last_message_id}
    })
    .done(function(messages) {
     //追加するHTMLの入れ物を作る
     //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
     messages.forEach(function (message){
      
     //メッセージが入ったHTMLを取得
     var insertHTML = buildData(message);
     //メッセージを追加
     $('.messages').append(insertHTML);
    })
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');//最新のメッセージが一番下に表示されようにスクロールする。
      })
    .fail(function() {
      console.log('error');
    });
  }
  };
  setInterval(reloadMessages, 5000);
});
