$(function() {

  var search_user_list = $("#user-search-result");
  var add_user_list = $("#member_search_result");
  
    function appendUser(user) {
      var html = `<div class="chat-group-user clearfix">
                    <p class="chat-group-user__name">${ user.name }</p>
                    <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }", data-user-name="${ user.name }">追加</div>
                  </div>`;
      search_user_list.append(html);
      return html;
    }
  
    function appendErrorMessageToHTML(err_msg) {
      var html = `<div class="chat-group-user clearfix">${ err_msg }</div>`;
      search_user_list.append(html);
    }
  
    function appendChatMember(name, user_id) {
      var html = `<div class='chat-group-user'>
                    <input name='group[user_ids][]' type='hidden' value=${ user_id }
                    <p class='chat-group-user__name'>${name}</p>
                    <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
                  </div>`;
      add_user_list.append(html);
    }
  
    $("#user_search_field").on("keyup", function() {
      var input = $("#user_search_field").val();
      var users_id = [];
    
      $.ajax({
        type: 'GET',
        url: '/users',
        data: { keyword: input, group_users_id: users_id },
        dataType: 'json'
      })
  
      .done(function(users) {
        $("#user-search-result").empty();
          if (users.length !== 0) {
            users.forEach(function(user){
              appendUser(user);
          
            });
          }
          else {
            appendErrorMessageToHTML("一致するユーザーが見つかりません");
          }
      })
      .fail(function() {
        alert('ユーザー検索に失敗しました');
      })
    });
  
    $(document).on("click", ".user-search-add.chat-group-user__btn--add", function() {
      var name = $(this).data('user-name');
      var user_id = $(this).data("user-id");
      $(this).parent().remove();
      appendChatMember(name, user_id);
    });
  
    $(document).on("click", ".user-search-remove.chat-group-user__btn--remove.js-remove-btn", function() {
      $(this).parent().remove();
    });
  });