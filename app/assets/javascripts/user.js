// $(function() {

//   var search_user_list = $("#user-search-result");
//   var add_user_list = $(".chat-group-users.js-add-user");
  
//     function appendUserId(users_id) {
//       $('.chat-group-user.clearfix.js-chat-member').each(function(){
//         var user_id = $(this).attr('id');
//         users_id.push(user_id);
//       });
//       return users_id;
//     }
  
//     function appendUser(user) {
//       var html = `<div class="chat-group-user clearfix">
//                     <p class="chat-group-user__name">${ user.name }</p>
//                     <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }", data-user-name="${ user.name }">追加</div>
//                   </div>`;
//       search_user_list.append(html);
//     }
  
//     function appendErrorMessageToHTML(err_msg) {
//       var html = `<div class="chat-group-user clearfix">${ err_msg }</div>`;
//       search_user_list.append(html);
//     }
  
//     function appendChatMember(user) {
//       var html = `<div class='chat-group-user clearfix js-chat-member' id="${ user.id }">
//                     <input name='group[user_ids][]' type='hidden' value="${ user.id }">
//                     <p class='chat-group-user__name'>${ user.name }</p>
//                     <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
//                   </div>`;
//       add_user_list.append(html);
//     }
  
//     $(".chat-group-form__input").on("keyup", function() {
//       var input = $(".chat-group-form__input#user-search-field").val();
//       var users_id = [];
//       appendUserId(users_id);
  
//       $.ajax({
//         type: 'GET',
//         url: '/users',
//         data: { keyword: input, group_users_id: users_id },
//         dataType: 'json'
//       })
  
//       .done(function(users) {
//         $("#user-search-result").empty();
//           if (users.length !== 0) {
//             users.forEach(function(user){
//               appendUser(user);
//             });
//           }
//           else {
//             appendErrorMessageToHTML("一致するユーザーが見つかりません");
//           }
//       })
//       .fail(function() {
//         alert('ユーザー検索に失敗しました');
//       })
//     });
  
//     $(document).on("click", ".user-search-add.chat-group-user__btn--add", function() {
//       var id = $(this).attr('data-user-id');
//       var name = $(this).attr("data-user-name");
//       var hashUser = {id: id, name: name};
//       $(this).closest('div').remove();
//       appendChatMember(hashUser);
//     });
  
//     $(document).on("click", ".user-search-remove.chat-group-user__btn--remove.js-remove-btn", function() {
//       $(this).closest('div').remove();
//     });
//   });